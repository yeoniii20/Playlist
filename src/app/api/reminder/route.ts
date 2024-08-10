import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import schedule from "node-schedule";

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
    const { sleepTime, email } = await req.json();

    // 시간과 분을 분리
    const [hour, minute] = sleepTime.split(":");

    // 스케줄 작업 설정
    const job = schedule.scheduleJob(
      { hour: parseInt(hour, 10), minute: parseInt(minute, 10) },
      async () => {
        try {
          // 이메일 전송
          await transporter.sendMail({
            from: "6suyeon@gmail.com",
            to: email,
            subject: "Time to Sleep!",
            text: `It's time to go to bed! Your selected sleep time is ${sleepTime}.`,
          });
          console.log("Email sent successfully");
        } catch (error) {
          console.error("Error sending email:", error);
        }
      }
    );

    // 성공 응답 전송
    return NextResponse.json({
      message: "Sleep reminder set and email will be sent",
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
