"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[var(--color-cream-dark)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full"
          >
            <span className="text-[var(--color-green-mid)] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--color-charcoal)] font-semibold mb-6">
              Plan Your Sacred Journey
            </h2>
            <p className="text-[var(--color-charcoal)]/70 text-lg mb-10 xl:pr-12">
              Our travel specialists are ready to guide you. Reach out for customized packages, visa inquiries, or any guidance needed for your pilgrimage.
            </p>

            {/* Contact Detail Cards */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-black/5 flex flex-col gap-8 mb-10 w-full xl:w-[90%] flex-grow-0">
              {/* Address */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-[var(--color-cream-dark)] rounded-2xl flex items-center justify-center text-[var(--color-green-dark)] group-hover:bg-[var(--color-gold)] transition-colors shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-semibold text-[var(--color-charcoal)] mb-2">Visit Our Office</h4>
                  <p className="text-[var(--color-charcoal)]/70 text-[15px] leading-relaxed">
                    1st Floor, Hazrath Hameed Shah Complex,<br />
                    23/B, Cubbonpet Main Rd, Halsurpete,<br />
                    Bengaluru, Karnataka – 560002
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-black/5" />

              {/* Phone */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 sm:items-center w-full">
                <div className="flex items-center gap-6 group flex-1">
                  <div className="w-14 h-14 bg-[var(--color-cream-dark)] rounded-2xl flex items-center justify-center text-[var(--color-green-dark)] group-hover:bg-[var(--color-gold)] transition-colors shrink-0">
                    <Phone className="w-6 h-6 outline-none border-none" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-[var(--color-charcoal)] mb-1">Call Us Free</h4>
                    <a href="tel:09900143805" className="text-[var(--color-green-dark)] font-medium hover:text-[var(--color-gold)] transition-colors text-lg">
                      099001 43805
                    </a>
                  </div>
                </div>
                
                {/* Visual Divider on desktop */}
                <div className="hidden sm:block h-12 w-px bg-black/5" />

                <div className="flex items-center gap-6 group flex-1">
                  <div className="w-14 h-14 bg-[var(--color-cream-dark)] rounded-2xl flex items-center justify-center text-[var(--color-green-dark)] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-[var(--color-charcoal)] mb-1">WhatsApp</h4>
                    <a href="https://wa.me/919900143805" target="_blank" rel="noopener noreferrer" className="text-[var(--color-green-dark)] font-medium hover:text-[var(--color-gold)] transition-colors text-lg">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="w-full h-48 xl:w-[90%] bg-neutral-200 rounded-3xl overflow-hidden shadow-inner shrink-0 hidden md:block border border-black/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.025345695679!2d77.58190771142566!3d12.970222014840507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16715f070105%3A0xcbbb036125032ec8!2sHazrath%20Hameed%20Shah%20Complex!5e0!3m2!1sen!2sin!4v1703080000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bismillah Tours Location"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
         <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[var(--color-gold)]/10 flex flex-col h-full"
         >
           <h3 className="font-display text-3xl font-semibold text-[var(--color-charcoal)] mb-8">
             Send an Inquiry
           </h3>
           <form className="flex-1 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="flex flex-col gap-2">
                 <label htmlFor="name" className="text-sm font-medium text-[var(--color-charcoal)]/80">Full Name *</label>
                 <input
                   type="text"
                   id="name"
                   placeholder="Enter your name"
                   className="w-full bg-[var(--color-cream)] px-5 py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-[var(--color-gold)] text-[var(--color-charcoal)] placeholder-[var(--color-charcoal)]/30 transition-all font-medium"
                   required
                 />
               </div>
               <div className="flex flex-col gap-2">
                 <label htmlFor="phone" className="text-sm font-medium text-[var(--color-charcoal)]/80">Phone Number *</label>
                 <input
                   type="tel"
                   id="phone"
                   placeholder="+91"
                   className="w-full bg-[var(--color-cream)] px-5 py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-[var(--color-gold)] text-[var(--color-charcoal)] placeholder-[var(--color-charcoal)]/30 transition-all font-medium"
                   required
                 />
               </div>
             </div>

             <div className="flex flex-col gap-2">
               <label htmlFor="package" className="text-sm font-medium text-[var(--color-charcoal)]/80">Interested In</label>
               <select
                 id="package"
                 className="w-full bg-[var(--color-cream)] px-5 py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-[var(--color-gold)] text-[var(--color-charcoal)] transition-all font-medium appearance-none cursor-pointer"
               >
                 <option value="">Select a package</option>
                 <option value="economy-umrah">Economy Umrah</option>
                 <option value="premium-umrah">Premium Umrah</option>
                 <option value="vip-umrah">VIP Umrah</option>
                 <option value="hajj-2025">Hajj 2025</option>
                 <option value="custom">Custom Package Request</option>
               </select>
             </div>

             <div className="flex flex-col gap-2">
               <label htmlFor="date" className="text-sm font-medium text-[var(--color-charcoal)]/80">Preferred Travel Month</label>
               <input
                 type="month"
                 id="date"
                 className="w-full bg-[var(--color-cream)] px-5 py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-[var(--color-gold)] text-[var(--color-charcoal)] transition-all font-medium"
               />
             </div>

             <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="message" className="text-sm font-medium text-[var(--color-charcoal)]/80">Additional Message</label>
               <textarea
                 id="message"
                 rows={4}
                 placeholder="How can we assist you?"
                 className="w-full bg-[var(--color-cream)] px-5 py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-[var(--color-gold)] text-[var(--color-charcoal)] placeholder-[var(--color-charcoal)]/30 transition-all font-medium resize-none flex-grow min-h-[120px]"
               ></textarea>
             </div>

             <button
               type="submit"
               className="w-full bg-[var(--color-green-dark)] hover:bg-[var(--color-green-mid)] text-white py-4 px-8 rounded-xl font-bold tracking-wide transition-all shadow-lg hover:shadow-xl mt-auto flex items-center justify-center gap-2 group"
             >
               Submit Inquiry
               <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
           </form>
         </motion.div>

        </div>
      </div>
    </section>
  );
}
