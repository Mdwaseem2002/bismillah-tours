"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Users, Phone, Plane } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">

      {/* ═══════════════════════════════════════════ */}
      {/* BACKGROUND IMAGE + OVERLAYS                */}
      {/* ═══════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <img
          src="/kaaba-hero.png"
          alt="Kaaba at sunset with pilgrims in Makkah"
          className="w-full h-full object-cover object-center"
        />
        {/* Heavy dark overlay so text is perfectly readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,20,15,0.75)] via-[rgba(10,20,15,0.60)] to-[rgba(10,20,15,0.85)]" />
        {/* Subtle warm tint for a sacred golden-hour feel */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(27,67,50,0.50)] via-transparent to-[rgba(201,168,76,0.08)]" />
      </div>

      {/* Subtle Pattern Texture on top of image */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-[0.02] pointer-events-none mix-blend-screen z-[1]" />

      {/* ═══════════════════════════════════════════ */}
      {/* MAIN CONTENT — Centered vertically         */}
      {/* ═══════════════════════════════════════════ */}
      <div className="relative z-10 flex-grow flex items-center px-6 sm:px-10 lg:px-[8%] pt-[120px] pb-8">
        <div className="w-full max-w-[780px]">

          {/* Arabic Bismillah */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="font-display italic text-[16px] sm:text-[18px] text-[var(--color-gold)] mb-8 drop-shadow-lg"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </motion.div>

          {/* Headline */}
          <div className="font-display text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.0] tracking-[-0.02em] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" as any }}
              className="text-white font-light block drop-shadow-xl"
            >
              Where Every Step Is
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 3.0, duration: 0.8, ease: "easeOut" as any }}
              className="text-white font-light block drop-shadow-xl"
            >
              an Act of
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 3.2, duration: 0.8, ease: "easeOut" as any }}
              className="text-[var(--color-gold)] italic font-normal block drop-shadow-xl"
            >
              Worship.
            </motion.span>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="font-body text-[15px] sm:text-[16px] text-white/70 leading-[1.7] mb-10 max-w-[520px] drop-shadow-md"
          >
            Bengaluru's most trusted Hajj & Umrah specialists —
            crafting sacred journeys with care, comfort, and divine
            purpose since 2009.
          </motion.p>




        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* BOTTOM FLOATING CONSOLE BAR                 */}
      {/* ═══════════════════════════════════════════ */}
      <div className="relative z-20 w-full px-6 sm:px-10 md:px-[5%] lg:px-[8%] pb-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 4.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mx-auto bg-white/[0.10] backdrop-blur-[24px] saturate-[1.3] rounded-[28px] lg:rounded-full border border-white/[0.15] pl-8 pr-6 lg:pl-10 lg:pr-6 py-5 lg:py-3 shadow-[0_24px_60px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-6 overflow-hidden relative isolate"
        >
          {/* Subtle gold flare on top edge */}
          <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent" />

          {/* Left: Arabic + Description */}
          <div className="flex flex-col lg:pl-2 max-w-[420px] text-center lg:text-left shrink-0">
            <span className="font-display italic text-[var(--color-gold)] text-[14px] mb-1 opacity-90">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </span>
            <p className="font-body text-white/75 text-[12px] leading-[1.6]">
              Experience the true spiritual journey of a lifetime. Expert religious
              guidance, premium close-to-Haram luxury, and completely
              seamless devotion.
            </p>
          </div>

          {/* Center: Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 bg-black/20 border border-white/10 px-4 py-2 rounded-full font-body text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-gold)]" /> Govt. Licensed
            </div>
            <div className="flex items-center gap-1.5 bg-black/20 border border-white/10 px-4 py-2 rounded-full font-body text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Star className="w-3.5 h-3.5 fill-[var(--color-gold)] text-[var(--color-gold)]" /> 4.9 Rating
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-black/20 border border-white/10 px-4 py-2 rounded-full font-body text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Users className="w-3.5 h-3.5 text-[var(--color-gold)]" /> 5000+ Pilgrims
            </div>
          </div>

          {/* Right: CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto lg:pr-2">
            <a
              href="#packages"
              className="flex flex-1 lg:flex-none items-center justify-center gap-2 bg-[var(--color-gold)] text-[var(--color-green-dark)] font-body font-bold text-[12px] tracking-[0.5px] px-7 py-3 lg:py-0 lg:h-[46px] rounded-full hover:bg-white hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)] transition-all duration-300"
            >
              Explore Packages <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="flex flex-1 lg:flex-none items-center justify-center bg-white/5 border border-white/25 text-white hover:border-white font-body font-bold text-[12px] tracking-[0.5px] px-7 py-3 lg:py-0 lg:h-[46px] rounded-full hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
            >
              Free Consultation
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
