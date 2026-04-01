"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, Moon, Users, Heart, Star, Sparkles, 
  MapPin, Check, Phone, ArrowUpRight, Gift
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function OffersPage() {
  const offers = [
    {
      badge: "RAMADAN 2025",
      icon: Moon,
      title: "Ramadan Umrah Special",
      tagline: "Experience the most blessed nights in the most blessed city on earth.",
      desc: "Join our specially arranged Ramadan Umrah group from Bengaluru. Spend the holy nights in Makkah — praying Tarawih at Masjid al-Haram, breaking fast with thousands of Muslims worldwide, and seeking Laylat al-Qadr in the last 10 nights.",
      inclusions: [
        "Executive or VIP package options",
        "Special Ramadan itinerary",
        "Iftar and Suhoor arranged at hotel",
        "Tarawih at Masjid al-Haram nightly",
        "Last 10 nights I'tikaf guidance available"
      ],
      meta: { departure: "Late March / Early April 2025", status: "FILLING FAST" },
      cta: "Enquire for Ramadan Umrah →",
      bg: "bg-[var(--color-green-dark)]",
      textColor: "text-white",
      iconColor: "text-[var(--color-gold)]"
    },
    {
      badge: "FAMILY SPECIAL",
      icon: Heart,
      title: "Family Umrah Package",
      tagline: "Bring your family to the House of Allah — together in worship, together in memory.",
      desc: "Performing Umrah as a family is one of the greatest gifts you can give your children. At Bismillah Tours, we make family Umrah seamless with family-friendly rooms, child-safe itineraries, and dedicated group support.",
      inclusions: [
        "Family room / connecting rooms arranged",
        "Child-friendly meal options",
        "Stroller and wheelchair assistance available",
        "Dedicated family Aalim guide",
        "Special group rates for families of 4+"
      ],
      meta: { departure: "Flexible Dates", status: "OPEN" },
      cta: "Get Family Package Quote →",
      bg: "bg-white",
      textColor: "text-[var(--color-charcoal)]",
      iconColor: "text-[var(--color-gold)]"
    },
    {
      badge: "GROUP DEAL",
      icon: Users,
      title: "Group Pilgrimage Package",
      tagline: "Take your entire community on the sacred journey — we handle everything.",
      desc: "Are you an imam, community leader, or simply organising a group from your masjid or neighbourhood? Bismillah Tours specialises in group pilgrimages with custom itineraries, priority visa processing, and dedicated group managers.",
      inclusions: [
        "Custom group departure dates",
        "Dedicated coordinator from Bismillah Tours",
        "Priority visa processing for entire group",
        "Group discount rates (10+ pilgrims)",
        "Branded group identity (badges, booklets)"
      ],
      meta: { size: "Minimum 10 pilgrims", status: "PLANNING OPEN" },
      cta: "Plan Group Pilgrimage →",
      bg: "bg-[var(--color-cream-dark)]",
      textColor: "text-[var(--color-charcoal)]",
      iconColor: "text-[var(--color-green-dark)]"
    }
  ];

  return (
    <div className="bg-[var(--color-cream)]">
      
      {/* ━━━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━━━ */}
      <section className="relative pt-[180px] pb-[100px] bg-[var(--color-cream)] overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-x-0 inset-y-0 bg-dot-grid opacity-[0.2] pointer-events-none" />
        
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-[8%] text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="inline-block px-5 py-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 mb-8"
            >
               <span className="font-body text-[var(--color-gold)] font-bold tracking-[4px] text-[11px] uppercase">Special Offers</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-[52px] sm:text-[72px] text-[var(--color-charcoal)] leading-[1.0] mb-8"
            >
              Blessed Journeys<br/>at Blessed Prices
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-body text-[var(--color-charcoal)]/60 text-[18px] leading-[1.7] max-w-[620px] mx-auto mb-12"
            >
              Seasonal offers, family deals, and group packages — all with the same Bismillah Tours promise of quality and care.
            </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ OFFER CARDS ━━━━━━━━━━━━━━━━ */}
      <section className="pb-[120px] px-6 sm:px-10 lg:px-[8%] bg-[var(--color-cream)]">
         <div className="max-w-[1400px] mx-auto space-y-24">
            {offers.map((offer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={clsx(
                  "rounded-[48px] overflow-hidden flex flex-col lg:flex-row relative shadow-[0_32px_80px_rgba(27,67,50,0.08)]",
                  offer.bg,
                  offer.textColor
                )}
              >
                 <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
                 
                 {/* Left: Content */}
                 <div className="flex-1 p-10 sm:p-16 lg:p-20 relative z-10">
                    <div className="flex items-center gap-3 mb-10">
                       <offer.icon className={clsx("w-8 h-8", offer.iconColor)} />
                       <span className={clsx(
                         "font-body font-bold text-[10px] tracking-[3px] uppercase px-4 py-2 rounded-full border",
                         offer.bg === "bg-[var(--color-green-dark)]" ? "border-white/20 text-white" : "border-[var(--color-gold)]/30 text-[var(--color-gold)]"
                       )}>
                         {offer.badge}
                       </span>
                    </div>

                    <h2 className="font-display text-[42px] sm:text-[56px] leading-[1.05] mb-6">{offer.title}</h2>
                    <p className="font-display italic text-[var(--color-gold)] text-[18px] sm:text-[22px] mb-8 leading-snug">"{offer.tagline}"</p>
                    <p className={clsx(
                       "font-body text-[16px] leading-[1.8] mb-12 max-w-[600px]",
                       offer.bg === "bg-[var(--color-green-dark)]" ? "text-white/60" : "text-[var(--color-charcoal)]/60"
                    )}>
                       {offer.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-14">
                       {offer.inclusions.map((item, i) => (
                         <div key={i} className="flex gap-2 items-start text-[14px]">
                            <Check className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                            <span className="opacity-80 font-body">{item}</span>
                         </div>
                       ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-current/10 pt-10">
                       <button className={clsx(
                         "px-10 py-5 rounded-full font-body font-bold text-[14px] transition-all shadow-xl hover:-translate-y-1",
                         offer.bg === "bg-[var(--color-green-dark)]" ? "bg-[var(--color-gold)] text-[#1B4332] hover:bg-white" : "bg-[var(--color-green-dark)] text-white hover:bg-[var(--color-gold)]"
                       )}>
                          {offer.cta}
                       </button>

                       <div className="text-left font-body">
                          <div className="text-current opacity-40 text-[10px] uppercase tracking-widest mb-1">{Object.keys(offer.meta)[0]}</div>
                          <div className="text-current font-bold text-[13px]">{Object.values(offer.meta)[0]}</div>
                       </div>
                       
                       <div className="text-left font-body border-l border-current/10 pl-8">
                          <div className="text-current opacity-40 text-[10px] uppercase tracking-widest mb-1">Status</div>
                          <div className="text-[var(--color-gold)] font-bold text-[13px]">{offer.meta.status}</div>
                       </div>
                    </div>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ REFERRAL OFFER ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[8%] bg-[var(--color-cream-dark)]">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-[1000px] mx-auto bg-gradient-to-br from-[var(--color-gold)]/5 via-white to-[var(--color-gold)]/5 p-12 sm:p-20 rounded-[48px] border border-[var(--color-gold)]/20 shadow-xl relative overflow-hidden text-center"
         >
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Gift className="w-64 h-64 text-[var(--color-gold)]" />
            </div>
            
            <div className="relative z-10">
               <div className="w-16 h-16 bg-[var(--color-gold)]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Gift className="w-8 h-8 text-[var(--color-gold)]" />
               </div>
               
               <h2 className="font-display text-[42px] text-[var(--color-charcoal)] mb-6">Refer a Pilgrim — Earn a Reward</h2>
               <p className="font-body text-[var(--color-charcoal)]/60 text-[18px] leading-[1.8] max-w-[640px] mx-auto mb-10">
                  Know someone planning Umrah or Hajj? Refer them to Bismillah Tours and receive a special thank-you reward. 
                  Because sharing the path to Allah is its own blessing.
               </p>

               <a 
                 href="https://wa.me/919900143805" 
                 target="_blank"
                 className="inline-flex items-center gap-3 bg-[var(--color-green-dark)] text-white px-10 py-5 rounded-full font-body font-bold text-[14px] hover:bg-[var(--color-gold)] hover:scale-105 transition-all shadow-xl"
               >
                  WhatsApp Us Your Referral <ArrowUpRight className="w-4 h-4" />
               </a>
            </div>
         </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ BOTTOM CTA ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 text-center bg-[#1B4332] relative overflow-hidden">
         <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
         <div className="relative z-10 max-w-[800px] mx-auto">
            <h2 className="font-display text-[44px] sm:text-[56px] text-white leading-tight mb-8">Secure Your Sacred Opportunity</h2>
            <p className="font-body text-white/60 mb-12 max-w-[500px] mx-auto">Whether it's the holy nights of Ramadan or a group journey with friends, we are here to guide your steps.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Link href="/contact" className="flex items-center gap-3 bg-[var(--color-gold)] text-[#1B4332] px-12 py-5 rounded-full font-body font-bold text-[14px] hover:bg-white transition-all shadow-xl">
                  Contact Us Today
               </Link>
               <a href="tel:09900143805" className="flex items-center gap-3 bg-white/5 border border-white/20 text-white px-10 py-5 rounded-full font-body font-bold text-[14px] hover:bg-white/10 transition-all backdrop-blur-md">
                  📞 Call for Info
               </a>
            </div>
         </div>
      </section>

    </div>
  );
}
