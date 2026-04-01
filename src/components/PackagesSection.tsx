"use client";

import { motion } from "framer-motion";

export function PackagesSection() {
  const execFeatures = [
    "Direct flights (Economy Class)",
    "4-Star hotel within 800m of Haram",
    "Daily Indian/Hyderabadi meals",
    "AC group transport",
    "Guided Ziyarat — Makkah & Madinah",
    "Zamzam water (5 Litres)",
    "Experienced religious guide (Aalim)",
  ];

  const vipFeatures = [
    "Business Class flights",
    "5-Star Haram-view hotel (steps from Masjid)",
    "Private suite accommodation",
    "Dedicated personal guide (Aalim)",
    "Exclusive Ziyarat with private transport",
    "VIP lounge access at airport",
    "Premium Zamzam + gift hamper",
    "24/7 dedicated concierge",
  ];

  const hajjFeatures = [
    "Full Hajj visa processing",
    "Premium hotels — Makkah & Madinah",
    "Mina tent accommodation (AC)",
    "All rituals guided by resident Aalim",
    "Arafat & Muzdalifah transport",
    "Indian meals throughout",
    "Zamzam + Hajj essentials kit",
    "Pre-departure Hajj training sessions",
  ];

  const sectionReveal = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <section id="packages" className="py-[120px] px-6 md:px-[5%] relative overflow-hidden bg-[var(--color-cream)]">
      {/* Decorative dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* ════════════════════════════ HEADER ════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="text-center mb-[100px]"
        >
          <motion.span variants={sectionReveal} className="font-body text-[var(--color-gold)] font-bold tracking-[4px] text-[11px] uppercase mb-[16px] block">
            Sacred Journeys
          </motion.span>
          <motion.h2 variants={sectionReveal} className="font-display text-[44px] sm:text-[56px] text-[var(--color-charcoal)] font-medium mb-[20px] leading-[1.05]">
            Curated for the Devoted Pilgrim
          </motion.h2>
          <motion.div variants={sectionReveal} className="w-[60px] h-[2px] bg-[var(--color-gold)] mx-auto mb-[20px]" />
          <motion.p variants={sectionReveal} className="font-body text-[var(--color-charcoal)]/55 max-w-[520px] mx-auto text-[15px] leading-[1.7]">
            Choose your journey — every package crafted with sincerity,
            comfort, and complete spiritual care.
          </motion.p>
        </motion.div>

        {/* ════════════════════════════ UMRAH PACKAGES ════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px] mb-[100px]">
          
          {/* CARD 1 — Executive Umrah */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" as any }}
            className="bg-[var(--color-green-dark)] p-10 sm:p-12 rounded-[28px] shadow-[0_16px_60px_rgba(27,67,50,0.15)] relative overflow-hidden group flex flex-col hover:shadow-[0_24px_80px_rgba(27,67,50,0.25)] transition-all duration-500"
          >
            {/* Decorative star pattern */}
            <svg className="absolute -bottom-10 -right-10 w-[220px] h-[220px] opacity-[0.04] text-white" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 C60 40, 100 50, 100 50 C60 60, 50 100, 50 100 C40 60, 0 50, 0 50 C40 40, 50 0, 50 0 Z" />
            </svg>

            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center text-[10px] bg-[var(--color-gold)] text-white uppercase tracking-[2px] font-bold px-5 py-2 rounded-full font-body shadow-sm">
                EXECUTIVE
              </span>
              <span className="inline-flex items-center text-[9px] bg-white/10 text-white/70 uppercase tracking-[1.5px] font-bold px-4 py-2 rounded-full font-body border border-white/10">
                12 Days
              </span>
            </div>

            <h3 className="font-display text-[38px] sm:text-[44px] text-white leading-[1.05] mb-3 font-medium">
              Executive Umrah
            </h3>
            <p className="font-display italic text-white/55 text-[15px] mb-10 max-w-[380px]">
              &ldquo;Comfort, guidance, and grace — every step of the way.&rdquo;
            </p>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" as any }}
              className="w-full h-[1px] bg-gradient-to-r from-[var(--color-gold)]/60 via-[var(--color-gold)]/20 to-transparent mb-10 origin-left" 
            />
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[14px] mb-12 flex-grow">
              {execFeatures.map((feat, i) => (
                <li key={i} className="flex gap-3 items-start text-white">
                  <span className="text-[var(--color-gold)] text-[12px] leading-[1.6] shrink-0 mt-[2px]">✦</span>
                  <span className="text-[13px] leading-[1.6] font-body opacity-85">{feat}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white text-[var(--color-green-dark)] hover:bg-[var(--color-gold)] hover:text-white font-body font-bold text-[13px] tracking-[0.5px] py-[16px] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl mt-auto hover:-translate-y-[2px]">
              Enquire About This Package →
            </button>
          </motion.div>

          {/* CARD 2 — VIP Umrah */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" as any }}
            className="bg-white p-10 sm:p-12 rounded-[28px] shadow-[0_8px_40px_rgba(27,67,50,0.08)] relative overflow-hidden group flex flex-col hover:shadow-[0_24px_60px_rgba(27,67,50,0.15)] transition-all duration-500 border border-[var(--color-gold)]/15"
          >
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-gradient-to-bl from-[var(--color-gold)]/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center text-[10px] bg-[var(--color-green-dark)] text-white uppercase tracking-[2px] font-bold px-5 py-2 rounded-full font-body border border-[var(--color-gold)]/30 shadow-sm">
                VIP
              </span>
              <span className="inline-flex items-center text-[9px] bg-[var(--color-cream-dark)] text-[var(--color-charcoal)]/60 uppercase tracking-[1.5px] font-bold px-4 py-2 rounded-full font-body">
                14 Days
              </span>
            </div>

            <h3 className="font-display text-[38px] sm:text-[44px] text-[var(--color-green-dark)] leading-[1.05] mb-3 font-medium">
              VIP Umrah
            </h3>
            <p className="font-display italic text-[var(--color-charcoal)]/50 text-[15px] mb-10 max-w-[380px]">
              &ldquo;An uncompromising sacred experience — nothing less.&rdquo;
            </p>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" as any }}
              className="w-full h-[1px] bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold)]/30 to-transparent mb-10 origin-left" 
            />

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[14px] mb-12 flex-grow">
              {vipFeatures.map((feat, i) => (
                <li key={i} className="flex gap-3 items-start text-[var(--color-charcoal)]">
                  <span className="text-[var(--color-gold)] text-[12px] leading-[1.6] shrink-0 mt-[2px]">✦</span>
                  <span className="text-[13px] leading-[1.6] font-body opacity-80">{feat}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-[var(--color-green-dark)] text-white hover:bg-[var(--color-gold)] font-body font-bold text-[13px] tracking-[0.5px] py-[16px] rounded-full transition-all mt-auto shadow-lg hover:shadow-xl hover:-translate-y-[2px]">
              Enquire About This Package →
            </button>
          </motion.div>
        </div>

        {/* ════════════════════════════ HAJJ DIVIDER ════════════════════════════ */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full py-6 mb-[100px] relative flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="flex items-center w-full max-w-[700px] mx-auto gap-[20px]">
            <motion.div 
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: "easeOut" as any } } }} 
              className="h-[1px] bg-[var(--color-gold)]/30 flex-grow origin-right" 
            />
            <motion.svg 
              variants={{ hidden: { rotate: 0, opacity: 0 }, visible: { rotate: 45, opacity: 1, transition: { duration: 1, delay: 0.5 } } }}
              width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[var(--color-gold)] shrink-0"
            >
              <path d="M12 2L14.6 9.4L22 12L14.6 14.6L12 22L9.4 14.6L2 12L9.4 9.4L12 2Z" fill="currentColor"/>
            </motion.svg>
            <motion.div 
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: "easeOut" as any } } }} 
              className="h-[1px] bg-[var(--color-gold)]/30 flex-grow origin-left" 
            />
          </div>
          <motion.span 
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } } }}
            className="font-display italic text-[var(--color-charcoal)]/40 text-[16px] mt-8"
          >
            — and for those called to the Fifth Pillar —
          </motion.span>
        </motion.div>

        {/* ════════════════════════════ HAJJ PACKAGE — PREMIUM SPLIT ════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" as any }}
          className="relative w-full rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(27,67,50,0.18)] group hover:shadow-[0_32px_100px_rgba(27,67,50,0.28)] transition-shadow duration-700"
        >
          <div className="flex flex-col lg:flex-row min-h-[640px]">

            {/* LEFT — Content (Dark Green) */}
            <div className="w-full lg:w-[50%] bg-[var(--color-green-dark)] p-10 sm:p-14 lg:p-16 flex flex-col justify-center relative z-10">
              
              {/* Subtle pattern */}
              <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none mix-blend-screen" />

              <div className="relative z-10">
                {/* Badges */}
                <div className="flex items-center gap-3 mb-10">
                  <span className="inline-flex items-center text-[10px] bg-[var(--color-gold)] text-white uppercase tracking-[2px] font-bold px-5 py-2 rounded-full shadow-md font-body">
                    HAJJ 2025
                  </span>
                  <span className="inline-flex items-center text-[9px] bg-red-700/90 text-white uppercase tracking-[1.5px] font-bold px-4 py-2 rounded-full border border-red-500/40 font-body animate-pulse">
                    LIMITED SEATS
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-[48px] sm:text-[56px] text-white leading-[1.0] mb-5 font-medium tracking-[-0.01em]">
                  The Sacred Hajj
                </h3>

                {/* Subtitle */}
                <p className="font-display italic text-white/60 text-[16px] mb-5 leading-relaxed max-w-[400px]">
                  Answer the call of Ibrahim (AS) — join our scholar-led 
                  Hajj group from Bengaluru.
                </p>

                {/* Duration */}
                <div className="text-[var(--color-gold)] font-body text-[10px] uppercase font-bold tracking-[3px] mb-10 leading-relaxed">
                  21 Days • Makkah + Madinah + Mina + Arafat
                </div>

                {/* Gold Line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1, ease: "easeOut" as any }}
                  className="w-full h-[1px] bg-gradient-to-r from-[var(--color-gold)]/50 to-transparent mb-10 origin-left" 
                />

                {/* Features Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[14px] mb-14">
                  {hajjFeatures.map((feat, i) => (
                    <li key={i} className="flex gap-3 items-start text-white/85">
                      <span className="text-[var(--color-gold)] text-[12px] leading-[1.6] shrink-0 mt-[1px]">✦</span>
                      <span className="font-body text-[12px] leading-[1.6] opacity-90">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="bg-white text-[var(--color-green-dark)] hover:bg-[var(--color-gold)] hover:text-white font-body font-bold text-[13px] tracking-[0.5px] px-10 py-[16px] rounded-full transition-all shadow-xl hover:-translate-y-[2px] hover:shadow-2xl">
                  Register for Hajj 2025 →
                </button>
                <p className="font-body text-white/35 italic text-[11px] mt-4 ml-1">
                  * Seats are extremely limited. Early booking recommended.
                </p>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="w-full lg:w-[50%] relative min-h-[400px] lg:min-h-auto overflow-hidden bg-black">
              {/* Left edge fade for seamless blend */}
              <div className="absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r from-[var(--color-green-dark)] to-transparent z-10 pointer-events-none hidden lg:block" />
              
              <img
                src="/hajj-hero.png"
                alt="Sacred Hajj Pilgrimage at Kaaba"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[3s] group-hover:scale-[1.04]"
              />
              
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
              
              {/* Floating Badge on Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full px-6 py-3 flex items-center gap-3 font-body text-[11px] uppercase tracking-[2px] font-bold shadow-xl"
              >
                <div className="relative flex h-[8px] w-[8px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-[var(--color-gold)]"></span>
                </div>
                Now Accepting
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* ════════════════════════════ BOTTOM CTA ════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a href="#contact" className="font-body text-[11px] uppercase font-bold tracking-[4px] text-[var(--color-charcoal)]/40 hover:text-[var(--color-gold)] px-8 py-4 rounded-full hover:bg-[var(--color-gold)]/5 transition-all border border-transparent hover:border-[var(--color-gold)]/20">
            View All Packages →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
