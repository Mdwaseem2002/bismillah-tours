"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Star, Users, Phone, 
  ChevronDown, Check, X, Plane, Calendar, FileText
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function UmrahPackagesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const execFeatures = [
    "Return flights from Bengaluru (Economy Class, Saudi Airlines/Air India)",
    "4-Star hotel accommodation within 800m of Masjid al-Haram (Makkah)",
    "4-Star hotel accommodation in Madinah (near Masjid an-Nabawi)",
    "Daily Indian & Hyderabadi meals (breakfast + dinner)",
    "Air-conditioned group transport throughout",
    "Guided Ziyarat — Makkah & Madinah (all key sites)",
    "Zamzam water (5 Litres per person, to carry home)",
    "Experienced Aalim (religious guide) with the group",
    "Umrah visa processing (full assistance)",
    "Pre-departure briefing & Umrah training session",
    "Group WhatsApp support during the journey",
    "Emergency assistance 24/7",
  ];

  const vipFeatures = [
    "Return flights — Business Class (Emirates / Saudi Airlines)",
    "5-Star Haram-view hotel (steps from Masjid al-Haram, Makkah)",
    "5-Star hotel in Madinah (premium Nabawi-area property)",
    "Private suite accommodation (single or double occupancy)",
    "All meals — premium Indian cuisine, room service available",
    "Dedicated personal Aalim guide (private, not group)",
    "Private AC transport — Makkah, Madinah, and Jeddah airport",
    "Exclusive Ziyarat (private group, no crowds)",
    "VIP lounge access — Bengaluru & Jeddah airports",
    "Premium Zamzam water + handcrafted gift hamper",
    "Pre-departure private consultation with senior Aalim",
    "24/7 dedicated personal concierge (WhatsApp direct)",
    "Umrah visa — priority processing",
    "Emergency medical assistance coverage",
  ];

  const faqs = [
    {
      q: "Can women travel for Umrah without a Mahram?",
      a: "Women under 45 years of age must be accompanied by a Mahram (male guardian). Women above 45 may travel with an organised group under specific conditions. Our team will guide you through the exact requirements based on your situation."
    },
    {
      q: "What is the best time to perform Umrah?",
      a: "Umrah can be performed at any time of the year. However, Ramadan Umrah carries the reward of Hajj according to hadith. The months of Rajab and Shaban are also popular. Avoid peak Hajj season (Dhul Hijjah) for Umrah."
    },
    {
      q: "How long in advance should I book?",
      a: "We recommend booking at least 6–8 weeks in advance to ensure preferred dates, visa processing time, and hotel availability. Ramadan slots fill within days of opening."
    },
    {
      q: "Is the package price fixed or does it change?",
      a: "All package pricing is transparent with no hidden costs. Prices may vary based on flight availability and season. Contact us for a current personalised quote."
    },
    {
      q: "What meals are provided?",
      a: "Executive package includes buffet-style Indian and Hyderabadi meals (breakfast + dinner). VIP package includes all meals with room service options at premium hotels."
    },
    {
      q: "Do you provide a religious guide?",
      a: "Yes. Every group is accompanied by a qualified Aalim who guides pilgrims through all rituals, duas, and Ziyarat explanations throughout the journey."
    }
  ];

  const calendar = [
    { month: "February 2025", type: "Executive Umrah", seats: "12 seats", status: "Open" },
    { month: "March 2025", type: "VIP Umrah", seats: "6 seats", status: "Filling Fast" },
    { month: "March 2025", type: "Executive Umrah", seats: "18 seats", status: "Open" },
    { month: "April 2025", type: "Executive Umrah", seats: "20 seats", status: "Open" },
    { month: "May 2025", type: "VIP Umrah", seats: "4 seats", status: "Limited" },
    { month: "Ramadan 2025", type: "Both Packages", seats: "Limited", status: "Register Now" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };

  return (
    <div className="bg-[var(--color-cream)]">
      
      {/* ━━━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[65vh] flex items-center bg-[#1B4332] overflow-hidden pt-[72px]">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-[0.05] pointer-events-none mix-blend-screen" />
        
        {/* Arabic Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[26vw] text-white/[0.03] select-none pointer-events-none">
          عُمْرَة
        </div>

        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-[8%]">
          <div className="max-w-[780px]">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block font-body text-[var(--color-gold)] font-bold tracking-[4px] text-[12px] uppercase mb-6"
            >
              Umrah Packages
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-[48px] sm:text-[68px] text-white leading-[1.1] mb-8"
            >
              Every Tawaf.<br/>
              Every Sa'i.<br/>
              Every Moment — Guided.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-body text-white/70 text-[16px] leading-[1.7] mb-10 max-w-[520px]"
            >
              From Bengaluru to the House of Allah — Bismillah Tours crafts
              your Umrah with care, scholarship, and complete peace of mind.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#packages" 
                className="flex items-center justify-center gap-2 bg-[var(--color-gold)] text-[#1B4332] px-8 py-4 rounded-full font-body font-bold text-[14px] hover:bg-white transition-all shadow-lg"
              >
                View Packages Below ↓
              </a>
              <a 
                href="tel:09900143805" 
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-body font-bold text-[14px] hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" /> Speak to an Advisor
              </a>
            </motion.div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-8 left-6 sm:left-10 lg:left-[8%] z-10 flex items-center gap-2 font-body text-[11px] uppercase tracking-[2px] text-white/40">
           <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
           <span>/</span>
           <span className="text-[var(--color-gold)]">Umrah Packages</span>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ WHAT IS UMRAH? ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="font-display text-[32px] sm:text-[44px] text-[var(--color-charcoal)] leading-[1.3] mb-8">
              "Umrah is the lesser pilgrimage —<br/>
              but its reward with Allah<br/>
              is never lesser."
            </h2>
            <div className="w-20 h-[2px] bg-[var(--color-gold)] mb-4" />
            <div className="flex gap-1">
               {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-[var(--color-gold)] rotate-45" />)}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="font-body text-[16px] text-[var(--color-charcoal)]/70 leading-[1.8] space-y-6"
          >
            <p>
              Umrah is a voluntary act of worship that can be performed
              at any time of the year. It involves entering the state of
              Ihram, performing Tawaf (circumambulation of the Kaaba),
              walking between Safa and Marwa (Sa'i), and completing
              the ritual of Halq or Taqsir.
            </p>
            <p>
              While not obligatory like Hajj, Umrah holds immense
              spiritual significance in Islam. The Prophet ﷺ said:
              "An Umrah to the next Umrah is an expiation for whatever
              comes between them." (Bukhari & Muslim)
            </p>
            <p className="font-bold text-[var(--color-green-dark)] italic">
              At Bismillah Tours, we ensure your Umrah is not just a
              journey — but a complete spiritual transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ PACKAGES LIST ━━━━━━━━━━━━━━━━ */}
      <section id="packages" className="py-[120px] px-6 sm:px-10 lg:px-[8%] bg-[var(--color-cream-dark)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-[80px]">
             <span className="font-body text-[var(--color-gold)] font-bold tracking-[4px] text-[11px] uppercase mb-4 block">Choose Your Journey</span>
             <h2 className="font-display text-[42px] sm:text-[56px] text-[var(--color-charcoal)] leading-tight mb-4">Two Paths to the Same Blessed Destination</h2>
             <p className="font-body text-[var(--color-charcoal)]/50 max-w-[600px] mx-auto">Whether you seek comfort or luxury — both packages are built with sincerity, scholarship, and complete care.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* EXECUTIVE */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[var(--color-green-dark)] rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                 <ShieldCheck className="w-48 h-48" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="bg-[var(--color-gold)] px-4 py-1.5 rounded-full font-body font-bold text-[10px] tracking-widest uppercase">Executive</span>
                  <span className="bg-white/10 px-4 py-1.5 rounded-full font-body font-bold text-[10px] tracking-widest uppercase border border-white/10">12 Days</span>
                </div>
                
                <h3 className="font-display text-[38px] sm:text-[48px] mb-4">Executive Umrah</h3>
                <p className="font-display italic text-[var(--color-gold)] text-[18px] mb-8">"Comfort, guidance, and grace — every step of the way."</p>
                
                <p className="font-body text-white/70 mb-12 text-[14px] leading-relaxed max-w-[440px]">
                   Our Executive Umrah package is designed for pilgrims who
                   seek a well-organised, comfortable, and spiritually enriching
                   journey without compromise. Ideal for individuals, couples,
                   and small families.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                   {execFeatures.slice(0, 10).map((f, i) => (
                     <div key={i} className="flex gap-2 items-start text-[13px] text-white/80">
                        <Check className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        <span>{f.split('(')[0]}</span>
                     </div>
                   ))}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
                   <h4 className="font-body font-bold text-[var(--color-gold)] text-[12px] uppercase tracking-widest mb-4">Exclusions</h4>
                   <div className="grid grid-cols-1 gap-2">
                      <div className="flex gap-2 text-[12px] text-white/50"><X className="w-3.5 h-3.5 text-red-500/50" /> Personal shopping & expenses</div>
                      <div className="flex gap-2 text-[12px] text-white/50"><X className="w-3.5 h-3.5 text-red-500/50" /> Travel insurance</div>
                   </div>
                </div>

                <button className="w-full bg-white text-[var(--color-green-dark)] font-body font-bold text-[14px] py-5 rounded-full hover:bg-[var(--color-gold)] hover:text-white transition-all shadow-xl">
                   Enquire About Executive Umrah →
                </button>
              </div>
            </motion.div>

            {/* VIP */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white rounded-[32px] p-8 sm:p-12 text-[var(--color-charcoal)] relative overflow-hidden border border-[var(--color-gold)]/20 shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[var(--color-gold)]">
                 <Star className="w-48 h-48 fill-current" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="bg-[var(--color-green-dark)] text-white px-4 py-1.5 rounded-full font-body font-bold text-[10px] tracking-widest uppercase">VIP Package</span>
                  <span className="bg-[var(--color-cream-dark)] px-4 py-1.5 rounded-full font-body font-bold text-[10px] tracking-widest uppercase border border-[var(--color-gold)]/20">14 Days</span>
                </div>

                <h3 className="font-display text-[38px] sm:text-[48px] mb-4 text-[var(--color-green-dark)]">VIP Umrah</h3>
                <p className="font-display italic text-[var(--color-gold)] text-[18px] mb-8">"An uncompromising sacred experience — nothing less."</p>

                <p className="font-body text-[var(--color-charcoal)]/60 mb-12 text-[14px] leading-relaxed max-w-[440px]">
                   The VIP Umrah package is our finest offering — crafted for
                   pilgrims who seek an elevated, private, and deeply personalised
                   experience in the blessed cities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                   {vipFeatures.slice(0, 10).map((f, i) => (
                     <div key={i} className="flex gap-2 items-start text-[13px] text-[var(--color-charcoal)]/80">
                        <Check className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        <span>{f.split('(')[0]}</span>
                     </div>
                   ))}
                </div>

                <div className="bg-[var(--color-cream)] border border-[var(--color-gold)]/20 rounded-2xl p-6 mb-12">
                   <h4 className="font-body font-bold text-[var(--color-gold)] text-[12px] uppercase tracking-widest mb-4">Ideal For</h4>
                   <p className="text-[12px] text-[var(--color-charcoal)]/50 leading-relaxed">
                     Senior executives | Repeat pilgrims seeking luxury | Families desiring full privacy | Anniversary / milestone Umrah
                   </p>
                </div>

                <button className="w-full bg-[var(--color-green-dark)] text-white font-body font-bold text-[14px] py-5 rounded-full hover:bg-[var(--color-gold)] transition-all shadow-xl">
                   Enquire About VIP Umrah →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ COMPARISON TABLE ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
         <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-[60px]">
              <h2 className="font-display text-[42px] text-[var(--color-charcoal)] mb-4">Which Package Is Right for You?</h2>
              <p className="font-body text-[var(--color-charcoal)]/50">A quick side-by-side look at both our Umrah offerings.</p>
            </div>
            
            <div className="bg-white rounded-3xl border border-[var(--color-gold)]/20 overflow-hidden shadow-lg">
               <div className="overflow-x-auto">
                  <table className="w-full text-left font-body text-[14px]">
                     <thead>
                        <tr className="bg-[var(--color-green-dark)] text-white">
                           <th className="px-8 py-5 font-medium tracking-wider uppercase text-[12px]">Feature</th>
                           <th className="px-8 py-5 font-medium tracking-wider uppercase text-[12px]">Executive Umrah</th>
                           <th className="px-8 py-5 font-medium tracking-wider uppercase text-[12px]">VIP Umrah</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-[var(--color-gold)]/10">
                        {[
                          ["Duration", "12 Days", "14 Days"],
                          ["Flight Class", "Economy", "Business Class"],
                          ["Hotel Rating", "4-Star", "5-Star"],
                          ["Hotel Proximity", "Within 800m", "Haram-view"],
                          ["Meals", "Group buffet", "Private/room"],
                          ["Guide", "Group Aalim", "Private Aalim"],
                          ["Transport", "Group AC bus", "Private AC car"],
                          ["Ziyarat", "Group", "Private"],
                          ["Airport Lounge", "No", "Yes"],
                          ["Visa Processing", "Standard", "Priority"],
                        ].map((row, idx) => (
                          <tr key={idx} className="hover:bg-[var(--color-cream)]/50 transition-colors">
                             <td className="px-8 py-4 font-bold text-[var(--color-charcoal)] opacity-30">{row[0]}</td>
                             <td className="px-8 py-4 text-[var(--color-charcoal)]">{row[1]}</td>
                             <td className="px-8 py-4 text-[var(--color-charcoal)]">{row[2]}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ CALENDAR ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream-dark)]">
         <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="font-display text-[42px] text-[var(--color-charcoal)] mb-4">Upcoming Departures from Bengaluru</h2>
            <p className="font-body text-[var(--color-charcoal)]/50 mb-12">We operate regular group departures throughout the year.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
               {calendar.map((item, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-2xl border border-[var(--color-gold)]/15 text-left relative overflow-hidden group">
                    <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-4 group-hover:translate-y-0 transition-transform">
                       <Calendar className="w-12 h-12" />
                    </div>
                    <div className="text-[var(--color-gold)] font-bold text-[12px] uppercase tracking-widest mb-2">{item.month}</div>
                    <div className="font-display text-[22px] mb-4 text-[var(--color-charcoal)]">{item.type}</div>
                    <div className="flex justify-between items-center mt-auto border-t border-[var(--color-gold)]/10 pt-4">
                       <span className="font-body text-[13px] text-[var(--color-charcoal)]/50">{item.seats}</span>
                       <span className={clsx(
                         "font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                         item.status === "Open" ? "bg-green-100/50 text-green-700" : "bg-[var(--color-gold)]/10 text-[var(--color-gold)]"
                       )}>
                         {item.status}
                       </span>
                    </div>
                 </div>
               ))}
            </div>

            <p className="font-display italic text-[var(--color-gold)] text-[16px] mb-8">* Dates are indicative. Final itinerary shared on booking confirmation.</p>
            
            <button className="bg-[var(--color-green-dark)] text-white font-body font-bold text-[14px] px-10 py-4 rounded-full hover:bg-[var(--color-gold)] transition-all shadow-xl">
               Register Your Interest →
            </button>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ VISA PROCESS ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[8%] bg-[#1B4332] text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
         
         <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-[80px]">
               <h2 className="font-display text-[42px] sm:text-[56px] text-white leading-tight mb-4">We Handle Your Visa — Start to Finish</h2>
               <p className="font-body text-white/60 max-w-[500px] mx-auto">Umrah visa processing in just 3–5 business days. No stress, no confusion — we guide you every step.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
               {[
                 { step: "Submit Documents", desc: "Passport copy, photos, vaccination proof — we tell you exactly what's needed." },
                 { step: "We Apply For You", desc: "Our licensed visa team submits directly to the Saudi consulate." },
                 { step: "Approval in 3–5 Days", desc: "We track your application and notify you immediately on approval." },
                 { step: "Ready to Fly", desc: "Your e-visa is sent directly to you. Board with full confidence." },
               ].map((item, idx) => (
                 <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-[var(--color-gold)]/30 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] font-bold mb-6 group-hover:scale-110 transition-transform">
                       0{idx + 1}
                    </div>
                    <h4 className="font-display text-[22px] mb-4 text-white hover:text-[var(--color-gold)] transition-colors">{item.step}</h4>
                    <p className="font-body text-[13px] text-white/50 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="max-w-[800px] mx-auto bg-black/20 p-10 rounded-[40px] border border-white/5 backdrop-blur-md">
               <h3 className="font-display text-[28px] text-[var(--color-gold)] mb-8 text-center italic">Documents Required</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                  {[
                    "Original Passport (min. 6 months validity)",
                    "2 Passport-size photographs (white background)",
                    "Proof of residence (Aadhaar card)",
                    "Meningitis vaccination certificate (ACWY)",
                    "For women under 45: Mahram documents"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex gap-3 items-center text-[13px] text-white/70 font-body">
                       <FileText className="w-4 h-4 text-[var(--color-gold)]/50" />
                       <span>{doc}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FAQ SECTION ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
         <div className="max-w-[800px] mx-auto">
            <h2 className="font-display text-[42px] text-[var(--color-charcoal)] mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
               {faqs.map((faq, idx) => (
                 <div key={idx} className="bg-white rounded-2xl border border-[var(--color-gold)]/10 overflow-hidden shadow-sm">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-[var(--color-cream)]/50 transition-colors"
                    >
                      <span className="font-display text-[19px] pr-8 text-[var(--color-charcoal)]">{faq.q}</span>
                      <ChevronDown className={clsx("w-5 h-5 text-[var(--color-gold)] transition-transform", openFaq === idx && "rotate-180")} />
                    </button>
                    <motion.div 
                      initial={false}
                      animate={{ height: openFaq === idx ? "auto" : 0, opacity: openFaq === idx ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                       <div className="p-6 pt-0 font-body text-[14px] text-[var(--color-charcoal)]/60 leading-relaxed border-t border-[var(--color-gold)]/5">
                          {faq.a}
                       </div>
                    </motion.div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ TESTIMONIALS ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream-dark)]">
         <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-display text-[42px] text-[var(--color-charcoal)] mb-16">Voice of the Blessed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { name: "Farheen Shaikh", city: "Bengaluru", text: "Alhamdulillah, our Executive Umrah with Bismillah Tours was perfect. The Aalim sahab guided us beautifully through every ritual. Highly recommended." },
                 { name: "Adnan Mirza", city: "Mysuru", text: "We chose the VIP package for our parents' first Umrah — and it exceeded every expectation. Private transport, beautiful hotel, personal attention throughout." },
                 { name: "Sadia Bano", city: "Bengaluru", text: "The visa process was so smooth. Within 4 days we had approval. The team kept us informed at every step. JazakAllah Khair." }
               ].map((t, idx) => (
                 <div key={idx} className="bg-white p-10 rounded-[30px] border border-[var(--color-gold)]/10 text-left relative shadow-lg">
                    <div className="flex gap-1 mb-6 text-[var(--color-gold)]">
                       {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="font-display italic text-[var(--color-charcoal)]/80 text-[16px] mb-8 leading-relaxed">
                       "{t.text}"
                    </p>
                    <div className="flex items-center gap-4 border-t border-[var(--color-gold)]/10 pt-6">
                       <div className="w-10 h-10 rounded-full bg-[var(--color-green-dark)] flex items-center justify-center text-white font-display text-[16px]">
                          {t.name[0]}
                       </div>
                       <div>
                          <div className="font-body font-bold text-[13px] text-[var(--color-charcoal)]">{t.name}</div>
                          <div className="font-body text-[11px] text-[var(--color-charcoal)]/40 uppercase tracking-widest">{t.city}</div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ BOTTOM CTA ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 text-center bg-[#1B4332] relative overflow-hidden">
         <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
         <div className="relative z-10 max-w-[800px] mx-auto">
            <h2 className="font-display text-[44px] sm:text-[56px] text-white leading-tight mb-6">Begin Your Umrah Journey Today</h2>
            <p className="font-body text-white/60 mb-12 max-w-[500px] mx-auto">Call us, WhatsApp us, or visit our Cubbonpet office — our team is ready to plan your perfect pilgrimage.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <a href="tel:09900143805" className="flex items-center gap-3 bg-[var(--color-gold)] text-[#1B4332] px-10 py-5 rounded-full font-body font-bold text-[14px] hover:bg-white transition-all shadow-xl">
                  📞 Call 099001 43805
               </a>
               <a href="https://wa.me/919900143805" className="flex items-center gap-3 bg-white/5 border border-white/20 text-white px-10 py-5 rounded-full font-body font-bold text-[14px] hover:bg-white/10 transition-all backdrop-blur-md">
                  💬 WhatsApp Us
               </a>
            </div>
            
            <p className="font-body text-white/30 text-[11px] uppercase tracking-[3px] mt-12">
               1st Floor, Hazrath Hameed Shah Complex, Cubbonpet, Bengaluru
            </p>
         </div>
      </section>

    </div>
  );
}
