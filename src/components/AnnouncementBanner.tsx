'use client';

import { useState, useEffect } from 'react';

function getNextDeadline(): Date {
  const now = new Date();
  const deadline = new Date();

  // Set to today at 12:00 PM EST (17:00 UTC)
  deadline.setUTCHours(17, 0, 0, 0);

  // If we've already passed today's deadline, move to next weekday
  if (now >= deadline) {
    deadline.setDate(deadline.getDate() + 1);
  }

  // Skip weekends (Saturday=6, Sunday=0)
  const day = deadline.getDay();
  if (day === 6) deadline.setDate(deadline.getDate() + 2);
  if (day === 0) deadline.setDate(deadline.getDate() + 1);

  return deadline;
}

function formatTimeLeft(ms: number): string {
  if (ms <= 0) return 'Deadline passed!';

  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);

  const parts: string[] = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  parts.push(`${seconds}s`);

  return parts.join(' ');
}

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(true); // Start hidden to prevent flash
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Check sessionStorage after mount
    const wasDismissed = sessionStorage.getItem('announcement-dismissed');
    setDismissed(wasDismissed === 'true');
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const update = () => {
      const deadline = getNextDeadline();
      const ms = deadline.getTime() - Date.now();
      setTimeLeft(formatTimeLeft(ms));
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('announcement-dismissed', 'true');
  };

  if (dismissed) return null;

  return (
    <div className="relative bg-black/80 border-b border-[#ED1C24]/30 px-4 py-3 text-center">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-[#ED1C24] sm:text-base">
          New Order Deadline
        </p>
        <p className="mt-1 text-xs text-[#E5E5E5] sm:text-sm">
          Place your order by{' '}
          <span className="font-semibold text-white">12:00 PM EST</span> for
          next-day delivery.{' '}
          <span className="inline-block font-mono text-[#ED1C24]">
            {timeLeft}
          </span>
        </p>
      </div>

      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/50 transition-colors hover:text-white"
        aria-label="Dismiss announcement"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
