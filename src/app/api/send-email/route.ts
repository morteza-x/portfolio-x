import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      // my gmail address
      user: process.env.GMAIL_USER,
      // my app password
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // send email
    await transporter.sendMail({
      from: email,
      // receiving email
      to: process.env.GMAIL_USER,
      subject: `New Portfolio message from ${name}`,
      text: `${email} - ${message}`,
    });

    return NextResponse.json(
      {
        message: "Email send successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error Sending email: ", error);
    return NextResponse.json(
      {
        message: "Failed to send email",
      },
      { status: 500 }
    );
  }
}
