"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import clsx from "clsx";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  const navLinks = [
    { name: "Umrah Packages", href: "#packages" },
    { name: "Hajj Packages", href: "#packages" },
    { name: "Offers", href: "#offers" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 120,
          damping: 20,
          delay: 2.4 
        }}
        className={clsx(
          "fixed top-0 left-0 z-[1000] flex items-center justify-between",
          "w-full h-[72px] px-6 lg:px-[5%]",
          "transition-all duration-400 ease-in-out",
          isScrolled 
            ? "bg-[var(--color-cream)]/95 backdrop-blur-[24px] saturate-[1.8] border-b border-[var(--color-gold)]/15 shadow-[0_4px_30px_rgba(0,0,0,0.08)]" 
            : "bg-transparent border-b border-transparent"
        )}
      >
        {/* LEFT: Logo Block */}
        <Link href="/" className="flex items-center gap-[10px] group">
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--color-gold)" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="shrink-0 transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            <path d="M14.5 6.5l1 2 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z" />
          </svg>
          <div className="flex flex-col justify-center align-middle">
            <span className={clsx(
              "font-display text-[20px] font-medium leading-none mb-[2px] transition-colors",
              isScrolled ? "text-[var(--color-charcoal)]" : "text-white"
            )}>
              Bismillah Tours
            </span>
            <span className="font-body text-[9px] uppercase tracking-[3px] text-[var(--color-gold)] leading-none font-bold">
              Umrah & Hajj
            </span>
          </div>
        </Link>

        {/* CENTER: Navigation Links */}
        <div className="hidden lg:flex items-center gap-[40px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "group relative font-body font-medium text-[13px] tracking-[0.5px] transition-colors py-2 block",
                isScrolled ? "text-[var(--color-charcoal)]/70 hover:text-[var(--color-charcoal)]" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
              {/* Gold Underline (ScaleX) */}
              <span className="absolute bottom-[4px] left-0 w-full h-[1px] bg-[var(--color-gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </div>

        {/* RIGHT: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-[20px]">
          <Link
            href="#contact"
            className="hidden md:flex items-center justify-center bg-[var(--color-gold)] text-[var(--color-charcoal)] hover:bg-[var(--color-green-dark)] hover:text-white hover:-translate-y-[1px] px-[28px] py-[12px] rounded-full font-body text-[13px] font-semibold transition-all duration-300 shadow-[0_4px_16px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_24px_rgba(27,67,50,0.25)]"
          >
            + Book Now
          </Link>
          
          <button
            className="lg:hidden flex flex-col justify-center items-center w-[24px] h-[24px] gap-[5px] group"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={clsx("w-[24px] h-[1.5px] block transition-transform group-hover:scale-x-110 origin-right rounded-full", isScrolled ? "bg-[var(--color-charcoal)]" : "bg-white")} />
            <span className={clsx("w-[24px] h-[1.5px] block transition-transform group-hover:scale-x-110 origin-right rounded-full", isScrolled ? "bg-[var(--color-charcoal)]" : "bg-white")} />
            <span className={clsx("w-[24px] h-[1.5px] block transition-transform group-hover:scale-x-110 origin-right rounded-full", isScrolled ? "bg-[var(--color-charcoal)]" : "bg-white")} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="fixed inset-0 z-[10000] bg-[var(--color-green-dark)] flex flex-col p-[32px] lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display text-[22px] text-[var(--color-gold)]">
                 بِسْمِ اللَّهِ
              </span>
              <motion.button
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X className="w-8 h-8 stroke-[1px]" />
              </motion.button>
            </div>

            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-[40px] text-white hover:text-[var(--color-gold)] transition-colors block leading-none"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col gap-6"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex justify-center items-center py-[20px] bg-[var(--color-gold)] text-[var(--color-charcoal)] font-body font-bold text-[15px] rounded-full shadow-lg"
                >
                  Book Your Journey
                </Link>
                
                <div className="text-white/60 font-body text-[11px] uppercase tracking-[2px] text-center">
                  Bengaluru • Government Licensed
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
