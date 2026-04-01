"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-[24px] right-[24px] z-[999] flex items-center justify-end">
      
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute right-[70px] bg-white text-[var(--color-charcoal)] font-body text-[12px] font-bold tracking-[0.5px] px-[16px] py-[8px] rounded-full shadow-[0_4px_16px_rgba(27,67,50,0.1)] whitespace-nowrap hidden sm:block pointer-events-none"
          >
            Chat with us
            {/* Tooltip Triangle */}
            <div className="absolute top-1/2 -right-[4px] -mt-[4px] border-l-[4px] border-l-white border-y-[4px] border-y-transparent w-0 h-0" />
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/919900143805"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center group outline-none"
      >
        {/* Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 1.6],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut" as any as any,
          }}
          className="absolute inset-0 bg-[rgba(37,211,102,0.25)] rounded-full pointer-events-none"
        />

        {/* Main Button */}
        <div className="relative w-[56px] h-[56px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.40)] group-hover:shadow-[0_8px_32px_rgba(37,211,102,0.50)] transition-all duration-300 transform group-hover:scale-[1.1]">
          {/* WhatsApp SVG Icon */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
