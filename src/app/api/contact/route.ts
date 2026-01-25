import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend only when the route is called (not during build)
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body = await request.json();
    const { name, email, organization, intent, message } = body;

    // Validate required fields
    if (!name || !email || !message || !intent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Map intent to readable text
    const intentMap: Record<string, string> = {
      partner: 'Partner with us (Funds & Firms)',
      build: 'Build with us (Founders)',
      involved: 'Get involved (Students)',
    };

    const intentText = intentMap[intent] || intent;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'WVG Contact Form <contact@waterloovg.com>', // Using your custom domain
      to: ['waterloovg@gmail.com'], // Your email
      replyTo: email,
      subject: `New Contact Form: ${intentText}`,
      html: `
        <div style="font-family: monospace; color: #000; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #12B378; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="margin-bottom: 15px;">
            <strong>Name:</strong> ${name}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
          </div>
          
          ${organization ? `
          <div style="margin-bottom: 15px;">
            <strong>Organization:</strong> ${organization}
          </div>
          ` : ''}
          
          <div style="margin-bottom: 15px;">
            <strong>Intent:</strong> ${intentText}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>Message:</strong>
            <div style="margin-top: 10px; padding: 15px; background: #f5f5f5; border-left: 3px solid #12B378;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${organization ? `Organization: ${organization}` : ''}
Intent: ${intentText}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
