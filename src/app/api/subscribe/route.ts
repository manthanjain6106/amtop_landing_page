import { NextRequest, NextResponse } from 'next/server';
import { storeEmailSubscription } from '@/utils/database';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, section, source } = body;

    // Validate input
    if (!email || !section) {
      return NextResponse.json(
        { error: 'Email and section are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get client information
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Store the email subscription
    const success = await storeEmailSubscription(
      email,
      section,
      source || 'website',
      ipAddress,
      userAgent
    );

    if (success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email subscription successful',
          section,
          timestamp: new Date().toISOString()
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to store email subscription' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in subscribe API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');
    
    if (!section) {
      return NextResponse.json(
        { error: 'Section parameter is required' },
        { status: 400 }
      );
    }

    // This endpoint could be used to get subscription stats
    // For now, just return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Subscription endpoint active',
        section 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in subscribe GET API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
