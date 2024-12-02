'use client';

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState<string>('6suyeon@gmail.com');
  const [sleepTime, setSleepTime] = useState<string>('22:00');

  const handleSendTestEmail = async () => {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sleepTime: '22:00',
        email: '6suyeon@gmail.com',
      }), // JSON.stringify로 직렬화
    });

    if (response.ok) {
      const data = await response.json();
      alert(`Success: ${data.message}`);
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.error}`);
    }
  };

  return (
    <div>
      <h1>Test Email Sender</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendTestEmail();
        }}
      >
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Sleep Time:
          <input
            type="time"
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Send Test Email</button>
      </form>
    </div>
  );
}
