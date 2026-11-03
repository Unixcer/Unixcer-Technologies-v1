import { NextResponse } from 'next/server';
import { quoteFormSchema } from '@/lib/validation';
import { isRateLimited } from '@/lib/rateLimit';
import { sendLeadNotificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    // 1. IP Rate Limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rate limit exceeded. Please wait a moment before submitting another quote request.',
        },
        { status: 429 }
      );
    }

    // 2. Body Parsing & Zod Validation
    const rawBody = await request.json();
    const result = quoteFormSchema.safeParse(rawBody);

    if (!result.success) {
      const errorMessages = result.error.issues.map((issue) => issue.message).join(' ');
      return NextResponse.json({ success: false, error: errorMessages }, { status: 400 });
    }

    const { fullName, email, phone, serviceType, budgetRange, timeline, message, honeypot } =
      result.data;

    // 3. Honeypot check (reject bot submissions silently)
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true, message: 'Processed' }, { status: 200 });
    }

    // 4. Dispatch Email via Resend
    await sendLeadNotificationEmail({
      type: 'quote',
      fullName,
      email,
      phone,
      serviceType,
      budgetRange,
      timeline,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your project specification has been logged. An architect will review and reach out within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote API endpoint error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal processing error. Please contact us via WhatsApp.' },
      { status: 500 }
    );
  }
}
