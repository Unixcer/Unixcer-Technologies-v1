import { siteConfig } from '@/config/siteConfig';

interface LeadEmailPayload {
  type: 'quote' | 'contact';
  fullName: string;
  email: string;
  phone?: string;
  serviceType?: string;
  budgetRange?: string;
  timeline?: string;
  message: string;
}

export async function sendLeadNotificationEmail(payload: LeadEmailPayload): Promise<{ success: boolean; simulated?: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || siteConfig.contact.email;

  const subject =
    payload.type === 'quote'
      ? `[NEW QUOTE REQUEST] ${payload.fullName} - ${payload.serviceType || 'General Project'}`
      : `[NEW CONTACT INQUIRY] From ${payload.fullName}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080b11; color: #f8fafc; padding: 24px; margin: 0; }
          .card { background-color: #0e1420; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 28px; max-width: 600px; margin: 0 auto; }
          .header { border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 20px; }
          .badge { display: inline-block; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-family: monospace; font-weight: bold; text-transform: uppercase; background: rgba(59,130,246,0.15); color: #60a5fa; border: 1px solid rgba(59,130,246,0.3); }
          .title { font-size: 20px; font-weight: 800; color: #ffffff; margin-top: 8px; margin-bottom: 4px; }
          .field { margin-bottom: 14px; font-size: 14px; }
          .label { font-size: 11px; text-transform: uppercase; font-family: monospace; color: #94a3b8; font-weight: bold; margin-bottom: 2px; }
          .value { color: #f8fafc; font-size: 14px; }
          .message-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 14px; margin-top: 8px; white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #e2e8f0; }
          .footer { margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 14px; font-size: 11px; color: #64748b; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <span class="badge">${payload.type === 'quote' ? 'Project Specification' : 'General Inquiry'}</span>
            <div class="title">${siteConfig.name} Lead Notification</div>
          </div>
          
          <div class="field">
            <div class="label">Prospective Client:</div>
            <div class="value"><strong>${payload.fullName}</strong></div>
          </div>

          <div class="field">
            <div class="label">Email Address:</div>
            <div class="value"><a href="mailto:${payload.email}" style="color: #3b82f6;">${payload.email}</a></div>
          </div>

          ${
            payload.phone
              ? `<div class="field">
                  <div class="label">Phone / WhatsApp:</div>
                  <div class="value"><a href="https://wa.me/${payload.phone.replace(/[^0-9]/g, '')}" style="color: #10b981;">${payload.phone}</a></div>
                </div>`
              : ''
          }

          ${
            payload.serviceType
              ? `<div class="field">
                  <div class="label">Service Required:</div>
                  <div class="value">${payload.serviceType}</div>
                </div>`
              : ''
          }

          ${
            payload.budgetRange
              ? `<div class="field">
                  <div class="label">Estimated Budget:</div>
                  <div class="value">${payload.budgetRange}</div>
                </div>`
              : ''
          }

          ${
            payload.timeline
              ? `<div class="field">
                  <div class="label">Expected Launch Timeline:</div>
                  <div class="value">${payload.timeline}</div>
                </div>`
              : ''
          }

          <div class="field">
            <div class="label">Client Message / Scope:</div>
            <div class="message-box">${payload.message}</div>
          </div>

          <div class="footer">
            Dispatched automatically from ${siteConfig.baseUrl}. Fast reply to client: <a href="mailto:${payload.email}" style="color: #60a5fa;">${payload.email}</a>.
          </div>
        </div>
      </body>
    </html>
  `;

  // Fallback if no API key is provided
  if (!apiKey) {
    console.log(`[RESEND SIMULATION] Would dispatch email to ${receiverEmail}:`, {
      subject,
      payload,
    });
    return { success: true, simulated: true };
  }

  // Real dispatch via Resend REST API
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Unixcer Inquiries <inquiries@${siteConfig.baseUrl.replace(/^https?:\/\//, '')}>`,
        to: receiverEmail,
        reply_to: payload.email,
        subject,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API dispatch error:', errorText);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error('Email dispatch error:', error);
    return { success: false };
  }
}

