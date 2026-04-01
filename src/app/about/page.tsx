"use client";

import { motion } from "framer-motion";
import { 
  Heart, ShieldCheck, Search, Users, 
  MapPin, Clock, Phone, Mail, Award,
  Users2, UserCheck, Star
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function AboutPage() {
  const values = [
    {
      title: "Sincerity Over Sales",
      icon: Heart,
      desc: "We are Muslims serving Muslims. Every recommendation we make is driven by what is best for your pilgrimage — not by commission or upselling."
    },
    {
      title: "Scholarship at Every Step",
      icon: Award,
      desc: "Every group is accompanied by a qualified Aalim who guides pilgrims through rituals with authentic knowledge of Sunnah, fiqh, and duas."
    },
    {
      title: "Complete Transparency",
      icon: Search,
      desc: "No hidden costs. No last-minute surprises. Every inclusion is documented and delivered exactly as promised."
    },
    {
      title: "Community Trust",
      icon: UserCheck,
      desc: "Built in Cubbonpet. Trusted across Karnataka. Our reputation is built on 15 years of word-of-mouth from thousands of satisfied pilgrims."
    }
  ];

  const stats = [
    { label: "Pilgrims Served", value: "5,000+" },
    { label: "In Service", value: "15+ Years" },
    { label: "Pilgrim Rating", value: "4.9★" },
    { label: "Visa Success Rate", value: "100%" }
  ];

  const team = [
    { 
      name: "Mohammed Rashid", 
      role: "Founder & Director", 
      desc: "15+ years of Hajj & Umrah travel expertise. Personally oversees every group departure and hotel selection.",
      initials: "MR"
    },
    { 
      name: "Sheikh Imran", 
      role: "Senior Aalim & Spiritual Guide", 
      desc: "Qualified Islamic scholar. Accompanies VIP groups and conducts all pre-departure training in Bengaluru.",
      initials: "SI"
    },
    { 
      name: "Ayesha Fathima", 
      role: "Operations Manager", 
      desc: "Handles all bookings, visa coordination, and client communication with dedication and care.",
      initials: "AF"
    },
    { 
      name: "Khalid Hussain", 
      role: "Visa & Documentation Specialist", 
      desc: "Expert in Saudi visa processing with a 100% approval track record since joining the team.",
      initials: "KH"
    }
  ];

  return (
    <div className="bg-[var(--color-cream)]">
      
      {/* ━━━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━━━ */}
      <section className="relative pt-[200px] pb-[100px] bg-[var(--color-cream-dark)] overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-x-0 inset-y-0 bg-dot-grid opacity-[0.2] pointer-events-none" />
        
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-[8%] text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-[56px] sm:text-[78px] text-[var(--color-charcoal)] leading-[1.0] mb-8"
            >
              Serving the Ummah<br/>Since 2009
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-body text-[var(--color-charcoal)]/60 text-[18px] leading-[1.7] max-w-[620px] mx-auto mb-12"
            >
              We are not just a travel agency. We are companions on your most sacred journey.
            </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ OUR STORY ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <span className="font-body text-[var(--color-gold)] font-bold tracking-[4px] text-[11px] uppercase mb-4 block">Our Story</span>
               <h2 className="font-display text-[42px] sm:text-[56px] text-[var(--color-charcoal)] leading-tight mb-8">Born from a Love for the Sacred Cities</h2>
               <div className="w-24 h-[2px] bg-[var(--color-gold)]/40 mb-10" />
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="font-body text-[16px] text-[var(--color-charcoal)]/60 leading-[1.8] space-y-6"
            >
               <p>
                 Bismillah Tours & Travels was founded in 2009 in the heart of Bengaluru's Cubbonpet neighbourhood — a community with a deep and enduring connection to the sacred journey of Hajj and Umrah.
               </p>
               <p>
                 What began as a small, trusted local service for Bengaluru's Muslim community has grown into one of Karnataka's most respected Hajj and Umrah travel specialists — with over 5,000 pilgrims served across 15+ years of dedicated service.
               </p>
               <p className="font-display italic text-[var(--color-gold)] text-[18px]">
                 Our founder built Bismillah Tours on a simple belief: that every pilgrim, regardless of their budget, deserves a journey that is organised with sincerity, guided with scholarship, and remembered with gratitude.
               </p>
               <p>
                 Today, that same belief drives every package we design, every visa we process, and every pilgrim we accompany to the House of Allah.
               </p>
            </motion.div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ STATS ━━━━━━━━━━━━━━━━ */}
      <section className="py-[100px] px-6 sm:px-10 lg:px-[8%] bg-[var(--color-green-dark)] overflow-hidden relative text-white">
         <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
         <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                 <div className="font-display text-[48px] sm:text-[64px] text-[var(--color-gold)] mb-2">{stat.value}</div>
                 <div className="font-body text-[12px] uppercase tracking-[3px] text-white/50">{stat.label}</div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ VALUES ━━━━━━━━━━━━━━━━ */}
      <section className="py-[140px] px-6 sm:px-10 lg:px-[8%] bg-[var(--color-cream)]">
         <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-[80px]">
               <span className="font-body text-[var(--color-gold)] font-bold tracking-[4px] text-[11px] uppercase mb-4 block">Our Values</span>
               <h2 className="font-display text-[42px] text-[var(--color-charcoal)]">What Sets Us Apart</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {values.map((v, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl border border-[var(--color-gold)]/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] mb-8 group-hover:bg-[var(--color-gold)] group-hover:text-white transition-all">
                       <v.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-display text-[22px] mb-4 text-[var(--color-charcoal)]">{v.title}</h4>
                    <p className="font-body text-[13px] text-[var(--color-charcoal)]/50 leading-[1.7]">{v.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ TEAM ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[8%] bg-[var(--color-cream-dark)]">
         <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-display text-[42px] text-[var(--color-charcoal)] mb-16">The People Behind Your Journey</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {team.map((m, idx) => (
                 <div key={idx} className="flex flex-col items-center bg-white p-8 rounded-3xl border border-[var(--color-gold)]/15 group hover:shadow-xl transition-all">
                    <div className="w-20 h-20 rounded-full bg-[var(--color-green-dark)] flex items-center justify-center text-white font-display text-[28px] mb-8 shadow-lg ring-8 ring-[var(--color-gold)]/5 group-hover:scale-110 transition-transform">
                       {m.initials}
                    </div>
                    <h3 className="font-display text-[20px] text-[var(--color-charcoal)] mb-2">{m.name}</h3>
                    <div className="font-body font-bold text-[10px] uppercase tracking-widest text-[var(--color-gold)] mb-6">{m.role}</div>
                    <p className="font-body text-[12px] text-[var(--color-charcoal)]/50 leading-relaxed">{m.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ OFFICE SECTION ━━━━━━━━━━━━━━━━ */}
      <section className="py-[140px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div>
               <h2 className="font-display text-[42px] sm:text-[56px] text-[var(--color-charcoal)] leading-tight mb-10">Visit Us in Bengaluru</h2>
               
               <div className="space-y-8">
                  <div className="flex gap-4">
                     <MapPin className="w-6 h-6 text-[var(--color-gold)] shrink-0" />
                     <div className="font-body text-[14px] text-[var(--color-charcoal)]/70">
                        1st Floor, Hazrath Hameed Shah Complex,<br/>
                        23/B, Cubbonpet Main Road, Halsurpete,<br/>
                        Bengaluru, Karnataka — 560002
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Clock className="w-6 h-6 text-[var(--color-gold)] shrink-0" />
                     <div className="font-body text-[14px] text-[var(--color-charcoal)]/70">
                        <span className="font-bold">Sat – Thu:</span> 9:00 AM – 7:00 PM<br/>
                        <span className="font-bold">Fri:</span> 2:30 PM – 7:00 PM (Closed for Jumu'ah)
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Phone className="w-6 h-6 text-[var(--color-gold)] shrink-0" />
                     <a href="tel:09900143805" className="font-body text-[14px] text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors">
                        099001 43805
                     </a>
                  </div>
               </div>
            </div>

            {/* Placeholder Map */}
            <div className="relative aspect-square sm:aspect-video lg:aspect-square bg-[var(--color-cream-dark)] rounded-[48px] overflow-hidden border-8 border-white border-white/50 shadow-2xl group">
               <div className="absolute inset-0 bg-islamic-pattern opacity-[0.05] pointer-events-none" />
               <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center pointer-events-none transition-transform group-hover:scale-110">
                  <div className="w-16 h-16 bg-[var(--color-gold)] text-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                     <MapPin className="w-8 h-8" />
                  </div>
                  <div className="font-display text-[24px] text-[var(--color-charcoal)] mb-4">Location Embed Placeholder</div>
                  <div className="font-body text-[13px] text-[var(--color-charcoal)]/40 max-w-[280px]">
                     Cubbonpet Main Road, Halsurpete, Bengaluru
                  </div>
               </div>
               
               {/* Decorative Gradient Overlays */}
               <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
               <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ BOTTOM CTA ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 text-center bg-[#1B4332] relative overflow-hidden">
         <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
         <div className="relative z-10 max-w-[800px] mx-auto">
            <h2 className="font-display text-[44px] sm:text-[56px] text-white leading-tight mb-8">Ready to Begin Your Sacred Chapter?</h2>
            <p className="font-body text-white/60 mb-12 max-w-[500px] mx-auto">Our 15 years of experience are at your service. Contact us to plan your perfect Umrah or Hajj journey.</p>
            
            <div className="flex justify-center">
               <Link href="/contact" className="flex items-center gap-3 bg-[var(--color-gold)] text-[#1B4332] px-12 py-5 rounded-full font-body font-bold text-[14px] hover:bg-white transition-all shadow-xl">
                  Get in Touch Now
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
