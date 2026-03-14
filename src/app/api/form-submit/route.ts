import { NextRequest, NextResponse } from 'next/server';

// In-memory rate limiting store
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// Clean up stale entries periodically (every 100 requests)
let requestCounter = 0;
function cleanupRateLimitMap() {
  requestCounter++;
  if (requestCounter % 100 === 0) {
    const now = Date.now();
    for (const [key, entry] of rateLimitMap.entries()) {
      if (now > entry.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }
}

export async function POST(request: NextRequest) {
  cleanupRateLimitMap();

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    // Check honeypot
    if (body.website) {
      // Silently accept but don't process (looks like spam)
      return NextResponse.json({
        success: true,
        message: "Thank you! We'll be in touch within 1 business day.",
      });
    }

    // Validate required fields
    const contactName = (body.contactName as string)?.trim();
    const email = (body.email as string)?.trim();

    if (!contactName) {
      return NextResponse.json(
        { success: false, message: 'Contact Name is required.' },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    // Log submission (will connect to Payload DB later)
    console.log('--- New Form Submission ---');
    console.log('Organization:', body.organizationName || 'N/A');
    console.log('Contact:', contactName);
    console.log('Phone:', body.phone || 'N/A');
    console.log('Email:', email);
    console.log('Address:', body.deliveryAddress || 'N/A');
    console.log('Type:', body.organizationType || 'N/A');
    console.log('Loaves:', body.loavesPerOrder || 'N/A');
    console.log('Frequency:', body.deliveryFrequency || 'N/A');
    console.log('Notes:', body.notes || 'N/A');
    console.log('IP:', ip);
    console.log('Timestamp:', new Date().toISOString());
    console.log('--------------------------');

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch within 1 business day.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request. Please try again.' },
      { status: 400 }
    );
  }
}
