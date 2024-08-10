"use client";

import React, { FormEvent } from "react";
import { useState } from "react";

export default function Home() {
  const [wakeTime, setWakeTime] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wakeTime }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Recommended sleep times: ${data.sleepTimes.join(", ")}`);
    } else {
      console.error("Error: ", response.statusText);
    }
  };

  const handleSetReminder = async () => {
    const response = await fetch("/api/reminder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sleepTime: "22:00",
        email: "example@example.com",
      }),
    });

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
    } else {
      const errorData = await response.json();
      console.error("Error: ", errorData.error);
    }
  };

  return (
    <div>
      <h1>Calculate Optimal Sleep Time</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your wake time:
          <input
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
          />
        </label>
        <label>
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <button onClick={handleSetReminder}>Set Sleep Reminder</button>
    </div>
  );
}
