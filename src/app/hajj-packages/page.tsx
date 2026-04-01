"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Star, Users, Phone, 
  MapPin, Check, X, Plane, Calendar, FileText,
  Clock, Heart, Info
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function HajjPackagesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const itinerary = [
    { days: "Day 1–2", title: "Departure from Bengaluru", desc: "Arrive Jeddah → Reception and transfer to Makkah" },
    { days: "Day 3–7", title: "Stay in Makkah", desc: "Tawaf, Umrah rituals, and Guided Ziyarat of key historical sites" },
    { days: "Day 8–12", title: "Travel to Madinah", desc: "Ziyarat, spiritual residence at Masjid an-Nabawi" },
    { days: "Day 13", title: "Return to Makkah", desc: "Final preparation for the Hajj rituals" },
    { days: "Day 14", title: "8 Dhul Hijjah — Mina", desc: "The Day of Tarwiyah. Entering the tent city of Mina" },
    { days: "Day 15", title: "9 Dhul Hijjah — ARAFAT", desc: "The Pinnacle of Hajj. Evening spent at Muzdalifah under the stars" },
    { days: "Day 16", title: "10 Dhul Hijjah — Eid al-Adha", desc: "Rami Jamarat, Halq/Taqsir, Tawaf al-Ifadah, and Sa'i" },
    { days: "Day 17–18", title: "11–12 Dhul Hijjah — Mina", desc: "Ayyam al-Tashreeq, continued Rami at the Jamarat" },
    { days: "Day 19", title: "Tawaf al-Wida", desc: "Farewell Tawaf at the Holy Kaaba" },
    { days: "Day 20–21", title: "Rest & Departure", desc: "Depart Makkah → Jeddah → Return to Bengaluru" },
  ];

  const hajjInclusions = [
    { cat: "Travel", items: ["Return flights from Bengaluru (Saudi Airlines)", "Jeddah airport reception and transfer to Makkah", "All inter-city AC coach transport", "Dedicated group driver throughout"] },
    { cat: "Accommodation", items: ["Makkah: Premium hotel within 500m of Haram", "Madinah: Premium hotel within 400m of Nabawi", "Mina: AC Tent (official quota allocation)", "Muzdalifah: Overnight stay with arrangements"] },
    { cat: "Meals", items: ["All meals — Indian & Hyderabadi cuisine", "Zamzam water supply during stay", "Hajj essentials kit (Ihram, guide booklet, etc.)", "Udhiyah (Qurbani) arrangement on Eid"] },
    { cat: "Guidance", items: ["Resident qualified Aalim with the group throughout", "Pre-departure Hajj training in Bengaluru", "Step-by-step ritual guidance at every site", "Ziyarat of all key historical sites"] },
  ];

  return (
    <div className="bg-[var(--color-cream)]">
      
      {/* ━━━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[75vh] flex items-center bg-[#0f2b1e] overflow-hidden pt-[72px]">
        {/* Pattern Overlay */}
        <div className="absolute inset-x-0 inset-y-0 bg-islamic-pattern opacity-[0.03] pointer-events-none mix-blend-screen" />
        
        {/* Kaaba Silhouette (Decorative) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
           <svg width="800" height="800" viewBox="0 0 100 100" fill="white">
              <path d="M20 80 L80 80 L80 30 L50 10 L20 30 Z" />
           </svg>
        </div>

        {/* Arabic Decorative Text */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 font-display text-[26vw] text-[var(--color-gold)] opacity-[0.04] select-none pointer-events-none">
          حَجّ
        </div>

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-[8%]">
          <div className="max-w-[850px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-body text-[var(--color-gold)] font-bold tracking-[4px] text-[12px] uppercase">Hajj 2025</span>
              <div className="flex items-center gap-2 bg-red-600/90 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase animate-pulse shadow-lg">
                 <div className="w-1.5 h-1.5 bg-white rounded-full" /> Limited Seats Remaining
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-[52px] sm:text-[72px] lg:text-[84px] text-white leading-[0.95] mb-8"
            >
              Labbayk<br/>Allāhumma<br/>Labbayk.
            </motion.h1>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 0.8, x: 0 }}
               transition={{ delay: 0.4 }}
               className="font-display italic text-[24px] sm:text-[32px] text-[var(--color-gold)] mb-10"
            >
              لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-body text-white/70 text-[17px] leading-[1.7] mb-12 max-w-[580px]"
            >
              The most sacred journey a Muslim will ever undertake.
              Let Bismillah Tours carry the logistics — while you carry
              only devotion in your heart.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#register" 
                className="flex items-center justify-center gap-2 bg-[var(--color-gold)] text-[#1B4332] px-10 py-5 rounded-full font-body font-bold text-[14px] hover:bg-white transition-all shadow-[0_10px_40px_rgba(201,168,76,0.3)]"
              >
                Register Your Interest →
              </a>
              <a 
                href="tel:09900143805" 
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-10 py-5 rounded-full font-body font-bold text-[14px] hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" /> Call for Hajj Enquiry
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ HAJJ SIGNIFICANCE ━━━━━━━━━━━━━━━━ */}
      <section className="py-[140px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-display text-[32px] sm:text-[44px] text-[var(--color-charcoal)] leading-[1.3] mb-8">
              "And proclaim to the people<br/>
              the Hajj — they will come<br/>
              to you on foot and on every<br/>
              lean camel..."
            </h2>
            <div className="font-body text-[var(--color-gold)] font-bold text-[12px] uppercase tracking-widest mb-8">
               — Surah Al-Hajj, 22:27
            </div>
            <div className="w-24 h-[2px] bg-[var(--color-gold)]/40" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[16px] text-[var(--color-charcoal)]/80 leading-[1.8] space-y-6"
          >
            <p>
              Hajj is the Fifth Pillar of Islam — an obligation upon
              every Muslim who is physically and financially able to
              perform it at least once in their lifetime.
            </p>
            <p>
              Performed in the month of Dhul Hijjah, Hajj brings
              together millions of Muslims from every corner of the
              earth in an act of unified worship, submission, and
              remembrance of the Day of Judgment.
            </p>
            <p>
              The rituals of Hajj — from Tawaf and Sa'i to the standing
              at Arafat, the symbolic stoning at Jamarat, and the
              sacrifice of Eid al-Adha — carry profound spiritual
              meaning and follow the Sunnah of Prophet Ibrahim (AS)
              and the beloved Prophet Muhammad ﷺ.
            </p>
            <p className="font-display italic text-[var(--color-gold)] text-[18px]">
              At Bismillah Tours, we understand the gravity of this
              journey. Our Hajj package is designed to remove every
              logistical burden so you can stand at Arafat with a
              completely free and devoted heart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ HAJJ 2025 PACKAGE ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[8%] bg-[var(--color-cream-dark)]">
         <div className="max-w-[1400px] mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[var(--color-green-dark)] rounded-[48px] overflow-hidden shadow-2xl relative"
            >
               <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
               
               <div className="relative z-10 p-10 sm:p-16 lg:p-20">
                  <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                     {/* LEFT — Info */}
                     <div className="flex-1">
                        <div className="flex items-center gap-3 mb-10">
                          <span className="bg-[var(--color-gold)] text-white px-5 py-2 rounded-full font-body font-bold text-[10px] tracking-widest uppercase shadow-lg">Hajj 2025</span>
                          <span className="bg-red-600/90 text-white px-5 py-2 rounded-full font-body font-bold text-[10px] tracking-widest uppercase border border-red-500/40">Limited Seats</span>
                        </div>
                        
                        <h3 className="font-display text-[44px] sm:text-[64px] text-white leading-tight mb-6">The Complete<br/>Hajj Package</h3>
                        <p className="font-display italic text-white/50 text-[18px] mb-12 leading-relaxed">
                           "A scholar-led, fully guided Hajj from Bengaluru — every ritual, every moment, taken care of."
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mb-16">
                           {hajjInclusions.map((cat, idx) => (
                             <div key={idx}>
                                <h4 className="font-body font-bold text-[var(--color-gold)] text-[11px] uppercase tracking-[3px] mb-6 flex items-center gap-2">
                                   <div className="w-1.5 h-1.5 bg-[var(--color-gold)] rotate-45" /> {cat.cat}
                                </h4>
                                <ul className="space-y-3">
                                   {cat.items.map((item, i) => (
                                     <li key={i} className="flex gap-2 text-[13px] text-white/60 font-body leading-tight">
                                        <Check className="w-4 h-4 text-[var(--color-gold)]/40 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                     </li>
                                   ))}
                                </ul>
                             </div>
                           ))}
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
                           <div className="flex items-center gap-4">
                              <MapPin className="w-8 h-8 text-[var(--color-gold)]" />
                              <div className="text-left font-body">
                                 <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Route</div>
                                 <div className="text-white text-[12px] leading-relaxed max-w-[300px]">
                                    Bengaluru → Jeddah → Makkah → Madinah → Mina → Arafat → Muzdalifah → Bengaluru
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-4 md:border-l border-white/10 md:pl-8">
                              <Clock className="w-8 h-8 text-[var(--color-gold)]" />
                              <div className="text-left font-body">
                                 <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Duration</div>
                                 <div className="text-white text-[18px]">21 Days</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ HAJJ ITINERARY ━━━━━━━━━━━━━━━━ */}
      <section className="py-[140px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
         <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-[80px]">
               <span className="font-body text-[var(--color-gold)] font-bold tracking-[4px] text-[11px] uppercase mb-4 block">Day by Day</span>
               <h2 className="font-display text-[42px] sm:text-[56px] text-[var(--color-charcoal)] leading-tight">The 21-Day Journey</h2>
            </div>
            
            <div className="relative">
               {/* Vertical Line */}
               <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--color-gold)]/20 -translate-x-1/2" />
               
               <div className="space-y-12">
                  {itinerary.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={clsx(
                        "relative flex flex-col sm:flex-row items-center gap-8 lg:gap-16",
                        idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                      )}
                    >
                       {/* Dot */}
                       <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-gold)] rounded-full border-4 border-[var(--color-cream)] z-10 shadow-lg" />
                       
                       <div className="w-full sm:w-1/2 pl-8 sm:pl-0 text-left sm:text-right">
                          <div className={clsx(
                            "flex flex-col",
                            idx % 2 === 0 ? "sm:items-start" : "sm:items-end"
                          )}>
                             <span className="font-body font-bold text-[var(--color-gold)] text-[12px] uppercase tracking-[3px] mb-2">{item.days}</span>
                             <h4 className="font-display text-[22px] mb-2 text-[var(--color-charcoal)]">{item.title}</h4>
                             <p className="font-body text-[14px] text-[var(--color-charcoal)]/50 leading-relaxed max-w-[360px]">{item.desc}</p>
                          </div>
                       </div>
                       <div className="hidden sm:block w-1/2" />
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ ELIGIBILITY & REQUIREMENTS ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream-dark)]">
         <div className="max-w-[1200px] mx-auto">
            <h2 className="font-display text-[42px] text-center text-[var(--color-charcoal)] mb-16">Are You Ready for Hajj?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Physical Ability", icon: Heart, desc: "Hajj involves extensive walking — up to 15–20km on some days. Pilgrims should be in reasonable health." },
                 { title: "Financial Ability", icon: Star, desc: "Hajj is obligatory only upon those who can afford it without incurring debt or harming dependants." },
                 { title: "Mahram Support", icon: Users, desc: "Women must be accompanied by a Mahram. Detailed Saudi Ministry's specific requirements apply." },
                 { title: "Saudi Hajj Quota", icon: Info, desc: "India receives a fixed annual quota. Seats are extremely limited. Early registration is essential." },
               ].map((item, idx) => (
                 <div key={idx} className="bg-white p-8 rounded-3xl border border-[var(--color-gold)]/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                    <item.icon className="w-10 h-10 text-[var(--color-gold)] mb-6" />
                    <h4 className="font-display text-[20px] mb-4 text-[var(--color-charcoal)]">{item.title}</h4>
                    <p className="font-body text-[13px] text-[var(--color-charcoal)]/50 leading-[1.7]">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ HAJJ REGISTRATION ━━━━━━━━━━━━━━━━ */}
      <section id="register" className="py-[120px] px-6 sm:px-10 lg:px-[8%] bg-[#1B4332] text-white">
         <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-display text-[42px] sm:text-[56px] text-white mb-6">Hajj Registration Process</h2>
            <p className="font-body text-white/60 mb-16 max-w-[500px] mx-auto">From initial interest to standing at Arafat — we guide you through the official ministry channels.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-left">
               {[
                 { step: "Register Interest", desc: "Fill our simple enquiry form or call us. We add you to our priority Hajj list for 2025." },
                 { step: "Doc Submission", desc: "Submit your passport, photos, vaccination proof, and Mahram docs. We handle the rest." },
                 { step: "Visa & Permit", desc: "We apply for your Hajj visa through Saudi channels. Nusuk registration is handled by us." },
                 { step: "Orientation", desc: "Attend Hajj training in Bengaluru. Learn rituals, etiquette, and what to expect." },
               ].map((item, idx) => (
                 <div key={idx} className="bg-black/20 p-8 rounded-3xl border border-white/5">
                    <div className="w-10 h-10 rounded-full border border-[var(--color-gold)]/40 flex items-center justify-center text-[var(--color-gold)] font-bold mb-6">
                       {idx + 1}
                    </div>
                    <h4 className="font-display text-[20px] mb-4 text-white hover:text-[var(--color-gold)] transition-colors">{item.step}</h4>
                    <p className="font-body text-[13px] text-white/50 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="flex flex-col items-center gap-6">
               <button className="bg-[var(--color-gold)] text-[#1B4332] font-body font-bold text-[14px] px-12 py-5 rounded-full hover:bg-white transition-all shadow-2xl">
                  Register for Hajj 2025 →
               </button>
               <p className="font-body text-white/35 italic text-[12px] max-w-[400px]">
                 * Seats are extremely limited. 2024 registrations are already closed. Register early to secure your place for Hajj 2025.
               </p>
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ TESTIMONIALS ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
         <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-display text-[42px] text-[var(--color-charcoal)] mb-16">The Hajji Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
               {[
                 { name: "Abdul Hameed", city: "Bengaluru", text: "Standing at Arafat, knowing that every arrangement was handled — I could cry with gratitude for Bismillah Tours. They made Hajj a worry-free ibadah." },
                 { name: "Mariyam Siddiqui", city: "Mangaluru", text: "Our elderly parents performed Hajj with this group. The team took care of them like family. We are forever grateful." }
               ].map((t, idx) => (
                 <div key={idx} className="bg-white p-12 rounded-[40px] border border-[var(--color-gold)]/10 text-left relative shadow-xl hover:shadow-2xl transition-all">
                    <p className="font-display italic text-[var(--color-charcoal)]/80 text-[18px] mb-8 leading-relaxed">
                       "{t.text}"
                    </p>
                    <div className="flex items-center gap-4 border-t border-[var(--color-gold)]/10 pt-6">
                       <div className="w-12 h-12 rounded-full bg-[var(--color-green-dark)] flex items-center justify-center text-white font-display text-[18px]">
                          {t.name[0]}
                       </div>
                       <div>
                          <div className="font-body font-bold text-[14px] text-[var(--color-charcoal)]">{t.name}</div>
                          <div className="font-body text-[11px] text-[var(--color-charcoal)]/40 uppercase tracking-widest">{t.city}</div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ BOTTOM CTA ━━━━━━━━━━━━━━━━ */}
      <section className="py-[140px] px-6 text-center bg-[#1B4332] relative overflow-hidden">
         <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
         <div className="relative z-10 max-w-[800px] mx-auto">
            <h2 className="font-display text-[44px] sm:text-[56px] text-white leading-tight mb-8">Don't Miss Hajj 2025</h2>
            <p className="font-body text-white/60 mb-12 max-w-[540px] mx-auto">Seats fill months in advance. Register today and let us guide you to the greatest journey of your life.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <button className="flex items-center gap-3 bg-[var(--color-gold)] text-[#1B4332] px-12 py-5 rounded-full font-body font-bold text-[14px] hover:bg-white transition-all shadow-xl">
                  Register Now →
               </button>
               <a href="https://wa.me/919900143805" className="flex items-center gap-3 bg-white/5 border border-white/20 text-white px-10 py-5 rounded-full font-body font-bold text-[14px] hover:bg-white/10 transition-all backdrop-blur-md">
                  💬 WhatsApp for Hajj Enquiry
               </a>
            </div>
         </div>
      </section>

    </div>
  );
}
