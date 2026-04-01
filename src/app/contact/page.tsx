"use client";

import { motion } from "framer-motion";
import { 
  MapPin, Clock, Phone, Mail, 
  Send, MessageCircle, ChevronRight, 
  HelpCircle, Sparkles, Check
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  const quickActions = [
    { title: "Call Us", desc: "Fastest for urgent queries", icon: Phone, action: "tel:09900143805" },
    { title: "WhatsApp", desc: "Send documents & quick replies", icon: MessageCircle, action: "https://wa.me/919900143805" },
    { title: "Email Us", desc: "For detailed enquiries (24h)", icon: Mail, action: "mailto:info@bimillahtours.com" }
  ];

  const whatsappShortcuts = [
    { label: "Enquire about Executive Umrah", text: "I want to enquire about Executive Umrah" },
    { label: "Enquire about Hajj 2025", text: "I want to enquire about Hajj 2025" },
    { label: "Get a Family Package Quote", text: "I want a Family Package quote" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("success"), 2000);
  };

  return (
    <div className="bg-[var(--color-cream)]">
      
      {/* ━━━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━━━ */}
      <section className="relative pt-[180px] pb-[80px] bg-[var(--color-cream-dark)] overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-x-0 inset-y-0 bg-dot-grid opacity-[0.1] pointer-events-none" />
        
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-[8%] text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-[56px] sm:text-[72px] text-[var(--color-charcoal)] leading-[1.0] mb-8"
            >
              We're Here to Help<br/>You Begin
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-body text-[var(--color-charcoal)]/60 text-[18px] leading-[1.7] max-w-[620px] mx-auto mb-12"
            >
              Whether you have a question, need a quote, or are ready to book — our team is ready for you.
            </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ CONTACT CONTENT ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* LEFT — Info */}
            <div>
               <div className="space-y-12 mb-20">
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] shrink-0 shadow-sm">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div className="font-body">
                        <div className="text-[12px] uppercase tracking-widest text-[var(--color-gold)] font-bold mb-2">Address</div>
                        <div className="text-[16px] text-[var(--color-charcoal)]/70 font-semibold leading-relaxed">
                           1st Floor, Hazrath Hameed Shah Complex,<br/>
                           23/B, Cubbonpet Main Road, Halsurpete,<br/>
                           Bengaluru, Karnataka — 560002
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] shrink-0 shadow-sm">
                        <Clock className="w-6 h-6" />
                     </div>
                     <div className="font-body">
                        <div className="text-[12px] uppercase tracking-widest text-[var(--color-gold)] font-bold mb-2">Office Hours</div>
                        <div className="text-[16px] text-[var(--color-charcoal)]/70 font-semibold leading-relaxed">
                           <span className="text-[var(--color-charcoal)]">Sat – Thu:</span> 9:00 AM – 7:00 PM<br/>
                           <span className="text-[var(--color-charcoal)]">Fri:</span> 2:30 PM – 7:00 PM (Closed Jumu'ah)
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] shrink-0 shadow-sm">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div className="font-body">
                        <div className="text-[12px] uppercase tracking-widest text-[var(--color-gold)] font-bold mb-2">Direct Contact</div>
                        <div className="text-[18px] text-[var(--color-charcoal)] font-bold mb-1">099001 43805</div>
                        <div className="text-[14px] text-[var(--color-charcoal)]/50">Calling is the fastest way to get in touch.</div>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {quickActions.map((action, i) => (
                    <a 
                      key={i}
                      href={action.action}
                      className="bg-white p-6 rounded-3xl border border-[var(--color-gold)]/10 text-center hover:shadow-xl transition-all hover:-translate-y-1 group"
                    >
                      <action.icon className="w-8 h-8 text-[var(--color-gold)] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-display text-[16px] mb-2">{action.title}</h4>
                      <p className="font-body text-[10px] text-[var(--color-charcoal)]/50 leading-relaxed uppercase tracking-widest font-bold">{action.desc}</p>
                    </a>
                  ))}
               </div>
            </div>

            {/* RIGHT — Form */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[var(--color-green-dark)] p-8 sm:p-12 rounded-[48px] shadow-2xl relative overflow-hidden text-white"
            >
               <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
               <div className="relative z-10">
                  <h2 className="font-display text-[32px] sm:text-[44px] mb-4">Send Us a Message</h2>
                  <p className="font-body text-white/50 text-[14px] mb-12">We typically respond within 2–4 hours during office hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="font-body text-[11px] uppercase tracking-widest text-[var(--color-gold)] font-bold">Full Name *</label>
                           <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-gold)]/50 transition-colors text-[14px]" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                           <label className="font-body text-[11px] uppercase tracking-widest text-[var(--color-gold)] font-bold">Phone Number *</label>
                           <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-gold)]/50 transition-colors text-[14px]" placeholder="+91 99001 43805" />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="font-body text-[11px] uppercase tracking-widest text-[var(--color-gold)] font-bold">Email Address</label>
                           <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-gold)]/50 transition-colors text-[14px]" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                           <label className="font-body text-[11px] uppercase tracking-widest text-[var(--color-gold)] font-bold">Package Interest</label>
                           <select className="w-full bg-[#1b4332] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-gold)]/50 transition-colors text-[14px] appearance-none cursor-pointer">
                              <option>General Enquiry</option>
                              <option>Executive Umrah</option>
                              <option>VIP Umrah</option>
                              <option>Hajj 2025</option>
                              <option>Ramadan Umrah</option>
                              <option>Family Package</option>
                              <option>Group Booking</option>
                           </select>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="font-body text-[11px] uppercase tracking-widest text-[var(--color-gold)] font-bold">Preferred Month</label>
                           <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-gold)]/50 transition-colors text-[14px]" placeholder="e.g. October 2025" />
                        </div>
                        <div className="space-y-2">
                           <label className="font-body text-[11px] uppercase tracking-widest text-[var(--color-gold)] font-bold">No. of Pilgrims</label>
                           <input type="number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-gold)]/50 transition-colors text-[14px]" placeholder="2" />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="font-body text-[11px] uppercase tracking-widest text-[var(--color-gold)] font-bold">Message / Requirements</label>
                        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--color-gold)]/50 transition-colors text-[14px] resize-none" placeholder="Is there anything specific you would like to know?"></textarea>
                     </div>

                     <button 
                       type="submit" 
                       disabled={formStatus !== "idle"}
                       className={clsx(
                         "w-full flex items-center justify-center gap-3 py-5 rounded-full font-body font-bold text-[14px] transition-all relative overflow-hidden",
                         formStatus === "idle" ? "bg-[var(--color-gold)] text-[#1B4332] hover:bg-white hover:scale-[1.02]" : "bg-white/10 text-white cursor-default"
                       )}
                     >
                        {formStatus === "sending" ? (
                          <div className="w-6 h-6 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin" />
                        ) : formStatus === "success" ? (
                          <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Enquiry Sent Successfully</div>
                        ) : (
                          <>Send Enquiry <Send className="w-4 h-4" /></>
                        )}
                     </button>
                  </form>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ WHATSAPP QUICK ACTIONS ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[8%] bg-[var(--color-cream-dark)]">
         <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="font-display text-[42px] text-[var(--color-charcoal)] mb-6">WhatsApp Quick Actions</h2>
            <p className="font-body text-[var(--color-charcoal)]/50 mb-12">One-tap messaging for specific package enquiries.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
               {whatsappShortcuts.map((item, idx) => (
                 <a 
                   key={idx}
                   href={`https://wa.me/919900143805?text=${encodeURIComponent(item.text)}`}
                   target="_blank"
                   className="bg-white border border-[var(--color-gold)]/20 px-8 py-5 rounded-full font-body font-bold text-[13px] text-[var(--color-charcoal)] hover:bg-[var(--color-green-dark)] hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 flex items-center gap-3"
                 >
                    <MessageCircle className="w-5 h-5 text-[var(--color-gold)]" />
                    {item.label}
                 </a>
               ))}
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FAQ MINI ━━━━━━━━━━━━━━━━ */}
      <section className="py-[120px] px-6 sm:px-10 lg:px-[12%] bg-[var(--color-cream)]">
         <div className="max-w-[800px] mx-auto">
            <h2 className="font-display text-[42px] text-center text-[var(--color-charcoal)] mb-16">Quick Answers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { q: "How do I book a package?", a: "Call us, WhatsApp us, or fill the form above. We'll call you back within 2 hours or the next business day." },
                 { q: "Can I visit your office?", a: "Yes — walk-ins are welcome during office hours. We're located in Hazrath Hameed Shah Complex, central Bengaluru." },
                 { q: "Do you offer home visits?", a: "Yes, for elderly or differently-abled pilgrims in Bengaluru, we can arrange a home consultation. Call to schedule." },
                 { q: "What docs are needed?", a: "Minimum required is a Passport with 6 months validity. We'll provide a full checklist specific to your visa type." },
               ].map((faq, idx) => (
                 <div key={idx} className="space-y-4">
                    <h4 className="font-display text-[20px] text-[var(--color-charcoal)] flex items-center gap-3">
                       <HelpCircle className="w-5 h-5 text-[var(--color-gold)]" />
                       {faq.q}
                    </h4>
                    <p className="font-body text-[14px] text-[var(--color-charcoal)]/50 leading-relaxed pl-8">
                       {faq.a}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ BOTTOM CTA ━━━━━━━━━━━━━━━━ */}
      <section className="py-20 px-6 text-center bg-[#1B4332] relative overflow-hidden">
         <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none" />
         <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[var(--color-gold)] transition-colors font-body text-[12px] uppercase tracking-widest font-bold">
               Return to Homepage <ChevronRight className="w-4 h-4" />
            </Link>
         </div>
      </section>

    </div>
  );
}
