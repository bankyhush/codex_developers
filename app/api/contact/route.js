// app/api/contact/route.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, company, budget, timeline, message } =
      await req.json();

    // Hardcoded Gmail credentials
    const GMAIL_USER = "jamesfury60@gmail.com";
    const GMAIL_PASS = "ogsq svyk fkbr aaun";

    // Multiple recipient emails
    const GMAIL_TO = [
      "officialbankyhush@gmail.com",
      "codexdevelopers7@gmail.com", //
    ];

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    // Email template
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Project Inquiry</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-bottom: 15px;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not specified"}</p>
        </div>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-bottom: 15px;">Project Details</h3>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
        </div>

        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #0369a1; margin-bottom: 15px;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 12px;">
            This message was sent from your website contact form.
          </p>
        </div>
      </div>
    `;

    const emailText = `
New Project Inquiry

Contact Information:
Name: ${name}
Email: ${email}
Company: ${company || "Not specified"}

Project Details:
Budget: ${budget || "Not specified"}
Timeline: ${timeline || "Not specified"}

Message:
${message}

This message was sent from your website contact form.
    `.trim();

    // Send email to multiple recipients
    await transporter.sendMail({
      from: `"CodexDevs Contact Form" <${GMAIL_USER}>`,
      replyTo: email,
      to: GMAIL_TO.join(", "), // ✅ Multiple recipients
      subject: `New Project Inquiry from ${name}${
        company ? ` - ${company}` : ""
      }`,
      html: emailHtml,
      text: emailText,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully to all recipients",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
