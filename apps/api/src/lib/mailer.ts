import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM = process.env.EMAIL_FROM ?? 'FAAIF Group <noreply@faaif.group>';
const IR_EMAIL = process.env.EMAIL_IR ?? 'ir@faaif.group';

interface InquiryData {
  id: string;
  name: string;
  email: string;
  company?: string | null;
  reason: string;
  message: string;
}

export async function sendInquiryEmails(data: InquiryData): Promise<void> {
  const reasonLabel = data.reason.charAt(0) + data.reason.slice(1).toLowerCase();

  await Promise.all([
    // Notification to FAAIF IR team
    transporter.sendMail({
      from: FROM,
      to: IR_EMAIL,
      subject: `New Inquiry [${reasonLabel}] from ${data.name}`,
      text: [
        `New inquiry received (ID: ${data.id})`,
        '',
        `Name:    ${data.name}`,
        `Email:   ${data.email}`,
        `Company: ${data.company ?? '—'}`,
        `Reason:  ${reasonLabel}`,
        '',
        'Message:',
        data.message,
      ].join('\n'),
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;">
          <h2 style="color:#0F172A;">New Inquiry — ${reasonLabel}</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#64748B;width:100px;">Name</td><td style="padding:8px 0;color:#0F172A;font-weight:500;">${data.name}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B;">Email</td><td style="padding:8px 0;color:#0F172A;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#64748B;">Company</td><td style="padding:8px 0;color:#0F172A;">${data.company ?? '—'}</td></tr>
            <tr><td style="padding:8px 0;color:#64748B;">Reason</td><td style="padding:8px 0;"><span style="background:#F59E0B;color:#0F172A;padding:2px 8px;border-radius:4px;font-size:12px;font-weight:600;">${reasonLabel}</span></td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#F8FAFC;border-radius:8px;color:#475569;line-height:1.6;">${data.message.replace(/\n/g, '<br/>')}</div>
          <p style="margin-top:24px;font-size:12px;color:#94A3B8;">ID: ${data.id}</p>
        </div>
      `,
    }),

    // Confirmation to submitter
    transporter.sendMail({
      from: FROM,
      to: data.email,
      subject: 'Your inquiry has been received — FAAIF Group',
      text: [
        `Dear ${data.name},`,
        '',
        'Thank you for reaching out to FAAIF Group.',
        '',
        'We have received your inquiry and a member of our team will be in touch within two business days.',
        '',
        'FAAIF Group',
        'One Financial Center · Boston, MA',
      ].join('\n'),
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:32px;">
            <span style="font-weight:700;font-size:20px;color:#0F172A;">FAAIF</span>
            <span style="font-weight:400;font-size:20px;color:#64748B;">Group</span>
            <span style="display:inline-block;width:2px;height:16px;background:#F59E0B;margin-left:4px;"></span>
          </div>
          <h2 style="color:#0F172A;margin-bottom:16px;">Thank you, ${data.name}.</h2>
          <p style="color:#475569;line-height:1.6;">We have received your inquiry and a member of our team will be in touch within two business days.</p>
          <p style="margin-top:32px;font-size:13px;color:#94A3B8;">FAAIF Group · One Financial Center · Boston, MA</p>
        </div>
      `,
    }),
  ]);
}
