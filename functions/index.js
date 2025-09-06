const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure email transporter (you can use Gmail, SendGrid, or any other email service)
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or 'sendgrid', 'outlook', etc.
  auth: {
    user: functions.config().email.user, // Your email address
    pass: functions.config().email.pass  // Your email password or app password
  }
});

exports.sendContactEmail = functions.https.onCall(async (data, context) => {
  try {
    const { firstName, lastName, email, company, subject, message, timestamp } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
    }

    // Email content
    const mailOptions = {
      from: functions.config().email.user,
      to: 'amarnath@amtop.in', // Your email where you want to receive contact form submissions
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
    
    return {
      success: true,
      messageId: result.messageId
    };

  } catch (error) {
    console.error('Error sending contact form email:', error);
    throw new functions.https.HttpsError('internal', 'Failed to send email');
  }
});
