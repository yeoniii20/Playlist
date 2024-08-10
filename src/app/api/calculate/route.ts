import { NextRequest, NextResponse } from "next/server";

// POST 메서드 처리
export async function POST(req: NextRequest) {
  try {
    const { wakeTime } = await req.json();

    // 기상 시간을 기반으로 취침 시간을 계산하는 로직
    const wakeDate = new Date(`1970-01-01T${wakeTime}:00`);
    const sleepTimes: string[] = [];

    for (let i = 1; i <= 6; i++) {
      const sleepTime = new Date(wakeDate.getTime() - i * 90 * 60 * 1000);
      sleepTimes.push(
        sleepTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }

    return NextResponse.json({ sleepTimes });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
