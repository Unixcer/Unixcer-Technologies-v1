import { NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validation';
import { isRateLimited } from '@/lib/rateLimit';

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    if (isRateLimited(clientIp)) {
      return NextResponse.json({ success: false, error: 'Too many requests.' }, { status: 429 });
    }

    const rawBody = await request.json();
    const result = newsletterSchema.safeParse(rawBody);

    if (!result.success) {
      return NextResponse.json({ success: false, error: 'Invalid email address.' }, { status: 400 });
    }

    console.log('[NEWSLETTER SUBSCRIPTION]:', result.data.email);

    return NextResponse.json(
      { success: true, message: 'Subscribed to technical quarterly dispatches.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Processing error.' }, { status: 500 });
  }
}

