import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';
import { isRateLimited } from '@/lib/rateLimit';
import { sendLeadNotificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please wait a moment before sending another message.',
        },
        { status: 429 }
      );
    }

    const rawBody = await request.json();
    const result = contactFormSchema.safeParse(rawBody);

    if (!result.success) {
      const errorMessages = result.error.issues.map((issue) => issue.message).join(' ');
      return NextResponse.json({ success: false, error: errorMessages }, { status: 400 });
    }

    const { fullName, email, phone, message, honeypot } = result.data;

    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true, message: 'Processed' }, { status: 200 });
    }

    await sendLeadNotificationEmail({
      type: 'contact',
      fullName,
      email,
      phone,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. Our team will respond within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API endpoint error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal processing error. Please contact us via WhatsApp.' },
      { status: 500 }
    );
  }
}
