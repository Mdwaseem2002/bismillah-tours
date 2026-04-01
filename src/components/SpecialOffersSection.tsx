"use client";

import { motion } from "framer-motion";
import { Moon, Home, Users } from "lucide-react";

export function SpecialOffersSection() {
  const offers = [
    {
      badge: "RAMADAN SPECIAL",
      icon: <Moon className="w-8 h-8 text-[var(--color-gold)] stroke-[1.5px]" />,
      title: "Ramadan Umrah Deals",
      desc: "Experience the unmatched blessings of Ramadan in Makkah. Special group departures, spiritual programs every evening.",
      cta: "Get Ramadan Quote →",
    },
    {
      badge: "FAMILY OFFER",
      icon: <Home className="w-8 h-8 text-[var(--color-gold)] stroke-[1.5px]" />,
      title: "Family Umrah Discount",
      desc: "Travelling with family? Enjoy special group rates and dedicated family-friendly accommodation near Haram.",
      cta: "Enquire for Family →",
    },
    {
      badge: "GROUP BOOKING",
      icon: <Users className="w-8 h-8 text-[var(--color-gold)] stroke-[1.5px]" />,
      title: "Group Pilgrimage Deal",
      desc: "Organising a group from your masjid or community? We offer custom packages, dedicated guides, and priority visa.",
      cta: "Plan Your Group →",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as any as any } }
  };

  return (
    <section id="offers" className="py-[100px] px-[5%] relative overflow-hidden bg-gradient-to-br from-[#1B4332] to-[#2D6A4F]">
      
      {/* Diagonal SVG lines overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M-10%2010L30%20-30M0%2040L40%200M30%2070L70%2030%22%20stroke%3D%22%23C9A84C%22%20stroke-width%3D%221%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E')] bg-[length:40px_40px]" />

      <div className="max-w-[1200px] mx-auto relative z-10 w-full">
        
        {/* HEADER */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-80px" }}
           variants={{
             visible: { transition: { staggerChildren: 0.15 } }
           }}
           className="text-center mb-[80px]"
        >
          <motion.span variants={headerVariants} className="text-[var(--color-gold)] font-bold tracking-[3px] text-[11px] uppercase mb-4 block font-body">
            Limited Time
          </motion.span>
          <motion.h2 variants={headerVariants} className="font-display text-[44px] text-white font-medium mb-4 leading-tight drop-shadow-md">
            Special Offers for the Blessed Season
          </motion.h2>
        </motion.div>

        {/* 3 OFFER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" as any as any }}
              className="bg-[rgba(255,255,255,0.06)] backdrop-blur-[16px] border border-[rgba(201,168,76,0.20)] rounded-[24px] p-[36px_28px] flex flex-col group hover:bg-[rgba(255,255,255,0.10)] hover:border-[rgba(201,168,76,0.50)] transition-all duration-400 hover:-translate-y-[6px] shadow-[0_8px_40px_rgba(27,67,50,0.10)] hover:shadow-[0_16px_48px_rgba(27,67,50,0.25)] relative overflow-hidden cursor-default"
            >
              {/* Card top badge */}
              <div className="inline-block bg-[var(--color-gold)] text-[var(--color-charcoal)] text-[10px] uppercase font-bold tracking-[2px] px-3 py-[6px] rounded-full self-start mb-10 shadow-sm font-body">
                {offer.badge}
              </div>

              {/* Icon */}
              <div className="mb-[24px] flex items-center justify-center h-[56px] w-[56px] bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {offer.icon}
              </div>

              <h3 className="font-display text-[26px] text-white font-medium mb-[12px] leading-tight">
                {offer.title}
              </h3>
              
              <p className="text-white/[0.68] font-body text-[14px] leading-[1.6] mb-[40px] flex-grow">
                {offer.desc}
              </p>

              <button className="mt-auto self-start border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white font-semibold text-[13px] tracking-[0.5px] px-[24px] py-[12px] rounded-full transition-all duration-300 flex items-center justify-center font-body hover:-translate-y-[2px] shadow-sm hover:shadow-[0_4px_16px_rgba(201,168,76,0.35)] w-full">
                {offer.cta}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
