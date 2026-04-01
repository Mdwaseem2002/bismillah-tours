"use client";

import { motion } from "framer-motion";

export function MarqueeBar() {
  const texts = [
    "Executive Umrah",
    "VIP Umrah",
    "Hajj 2025 Registrations Open",
    "Fast Visa in 3–5 Days",
    "5000+ Pilgrims Served",
    "Bengaluru's #1 Hajj Specialists"
  ];

  return (
    <div className="w-full bg-[#133224] h-[48px] overflow-hidden flex items-center relative z-20 shadow-[0_4px_30px_rgba(27,67,50,0.1)]">
      <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] w-max select-none cursor-default">
        {/* Repeat exactly 3 times as requested */}
        {[0, 1, 2].map((group) => (
          <div key={group} className="flex items-center">
            {texts.map((text, idx) => (
              <span key={idx} className="flex items-center tracking-[1px] font-body text-[13px] text-white/75 px-[24px]">
                {/* Gold Star Instead of Diamond */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold)" className="mr-[24px] shrink-0">
                  <path d="M12 2L14.6 9.4L22 12L14.6 14.6L12 22L9.4 14.6L2 12L9.4 9.4L12 2Z"/>
                </svg>
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
