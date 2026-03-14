'use client';

import { useState, useEffect } from 'react';

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(true); // Start hidden to prevent flash

  useEffect(() => {
    // Check sessionStorage after mount
    const wasDismissed = sessionStorage.getItem('announcement-dismissed');
    setDismissed(wasDismissed === 'true');
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('announcement-dismissed', 'true');
  };

  if (dismissed) return null;

  return (
    <div className="relative bg-black/80 border-b border-[#DF3131]/30 px-4 py-8 text-center">
      <div className="mx-auto max-w-4xl font-mono">
        <p className="text-3xl font-bold uppercase tracking-widest text-[#DF3131] sm:text-4xl">
          New Order Deadline
        </p>
        <p className="mt-3 text-2xl text-[#DF3131] sm:text-3xl">
          Beginning 3/7/26 order cutoff will be 12PM for next day deliveries.
        </p>
        <p className="mt-4 text-base text-[#DF3131]/80 sm:text-lg">
          Thanks for understanding and your continued support.
        </p>
        <p className="mt-2 text-base text-[#DF3131]/80 sm:text-lg">
          Get ready for our new ordering page! Lots of exciting features are on the way!
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
