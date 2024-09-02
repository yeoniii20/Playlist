import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer 설정
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST 메서드를 처리하는 함수
export async function POST(req: NextRequest) {
  try {
    console.log("Request received");

    const jsonData = await req.json();
    console.log("Parsed JSON data:", jsonData);

    const { sleepTime, email } = jsonData;

    if (!sleepTime || !email) {
      throw new Error("Missing sleepTime or email");
    }

    console.log("sleepTime:", sleepTime, "email:", email);

    // 즉시 이메일 전송
    await transporter.sendMail({
      from: "6suyeon@gmail.com",
      to: email,
      subject: "Test Email - Time to Sleep!",
      text: `This is a test email. Your selected sleep time was ${sleepTime}.`,
    });

    console.log("Test email sent successfully");

    // 성공 응답 전송
    return NextResponse.json({
      message: "Test email sent successfully",
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
