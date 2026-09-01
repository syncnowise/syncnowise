import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export type ContactFormPayload = {
  name: string;
  email: string;
  company: string;
  building: string;
  problem: string;
  budget: string;
  timeline: string;
  details: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderRow(label: string, value: string): string {
  if (!value.trim()) return "";
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;vertical-align:top;width:180px;">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#6b7280;">${escapeHtml(label)}</span>
      </td>
      <td style="padding:14px 0;border-bottom:1px solid #e5e7eb;vertical-align:top;">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1f2937;line-height:1.5;white-space:pre-wrap;">${escapeHtml(value)}</span>
      </td>
    </tr>`;
}

function buildEmailHtml(data: ContactFormPayload): string {
  const rows = [
    renderRow("Name", data.name),
    renderRow("Work Email", data.email),
    renderRow("Company", data.company || "—"),
    renderRow("Looking to build", data.building),
    renderRow("Problem to solve", data.problem || "—"),
    renderRow("Estimated budget", data.budget || "Not specified"),
    renderRow("Timeline", data.timeline || "Not specified"),
    renderRow("Additional details", data.details || "—"),
  ].join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="background-color:#0f172a;font-size:0;line-height:0;">
                <div style="height:3px;background-image:linear-gradient(90deg,#1E3A8A,#7C3AED);"></div>
              </td>
            </tr>
            <tr>
              <td style="background-color:#ffffff;padding:24px 32px;border-bottom:1px solid #e5e7eb;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:800;color:#1E3A8A;letter-spacing:-0.02em;">syncnowise</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#2563eb;">New Submission</p>
                <h1 style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:800;color:#0f172a;">Someone wants to start a project</h1>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:#f8f9fb;border-top:1px solid #e5e7eb;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7280;">
                  Submitted from the "Start a Project" form at syncnowise.com — reply directly to this email to respond to ${escapeHtml(data.name)}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: ContactFormPayload) => data)
  .handler(async ({ data }) => {
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL || user;

    if (!user || !pass) {
      console.error("Contact form: SMTP_USER / SMTP_PASS are not configured.");
      throw new Error("Email is not configured on the server yet.");
    }

    if (!data.name?.trim() || !/^\S+@\S+\.\S+$/.test(data.email || "") || !data.building?.trim()) {
      throw new Error("Missing required fields.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Syncnowise Website" <${user}>`,
      to,
      replyTo: data.email,
      subject: `New project inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: buildEmailHtml(data),
    });

    return { ok: true };
  });
