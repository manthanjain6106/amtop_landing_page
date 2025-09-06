import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, subject, message, timestamp } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'amarnath@amtop.in',
        pass: process.env.EMAIL_PASS // This should be an app password
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'amarnath@amtop.in',
      to: ['amarnath@amtop.in', 'anant@amtop.in', 'jainmanthan6106@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Submitted at:</strong> ${new Date(timestamp).toLocaleString()}</p>
        <hr>
        <p><em>This email was sent from your website contact form.</em></p>
      `
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    
    console.log('Contact form email sent successfully:', result);
    
    return NextResponse.json({
      success: true,
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Error sending contact form email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
