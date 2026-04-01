"use client";

import { motion } from "framer-motion";

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Special Offers", href: "/offers" },
    { name: "Contact", href: "/contact" },
    { name: "Hajj Packages", href: "/hajj-packages" },
  ];

  const packagesLinks = [
    { name: "Executive Umrah", href: "/umrah-packages" },
    { name: "VIP Umrah", href: "/umrah-packages" },
    { name: "Hajj 2025", href: "/hajj-packages" },
    { name: "Special Offers", href: "/offers" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any as any } }
  };

  return (
    <footer className="bg-[#0f2b1e] pt-[70px] pb-[32px] px-[5%] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-[0.02] mix-blend-screen pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10 w-full flex flex-col items-center">
        
        {/* TOP: Bismillah */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="font-display italic text-[24px] text-[var(--color-gold)] mb-[64px] text-center"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </motion.div>

        {/* 4-COLUMN GRID */}
        <motion.div 
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[48px] mb-[64px]"
        >
          {/* Col 1 */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="flex items-center gap-[10px] mb-[20px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                <path d="M14.5 6.5l1 2 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z" />
              </svg>
              <div className="flex flex-col flex-grow">
                <span className="font-display text-[16px] text-white font-semibold leading-none mb-[2px]">
                  Bismillah Tours
                </span>
                <span className="font-body text-[8px] uppercase tracking-[2px] text-[var(--color-gold)] font-bold leading-none">
                  Umrah & Hajj
                </span>
              </div>
            </div>
            
            <p className="font-body text-[14px] text-white/60 leading-[1.6] mb-[24px] max-w-[260px]">
              Serving pilgrims from Bengaluru with sincerity since 2009.
            </p>

            <div className="flex items-center gap-[16px]">
               {/* Facebook */}
               <a href="#" className="text-[var(--color-gold)] hover:text-white hover:bg-[var(--color-gold)] rounded-full p-[6px] border border-[var(--color-gold)]/50 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
               {/* Instagram */}
               <a href="#" className="text-[var(--color-gold)] hover:text-white hover:bg-[var(--color-gold)] rounded-full p-[6px] border border-[var(--color-gold)]/50 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
               {/* Youtube */}
               <a href="#" className="text-[var(--color-gold)] hover:text-white hover:bg-[var(--color-gold)] rounded-full p-[6px] border border-[var(--color-gold)]/50 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
               </a>
            </div>
          </motion.div>

          {/* Col 2 */}
          <motion.div variants={itemVariants} className="flex flex-col">
             <h4 className="font-display text-[18px] text-white font-semibold mb-[20px]">
               Quick Links
             </h4>
             <ul className="flex flex-col gap-[12px]">
               {quickLinks.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="font-body text-[13px] text-white/60 hover:text-[var(--color-gold)] transition-colors inline-block hover:translate-x-[4px] duration-300">
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </motion.div>

          {/* Col 3 */}
          <motion.div variants={itemVariants} className="flex flex-col">
             <h4 className="font-display text-[18px] text-white font-semibold mb-[20px]">
               Packages
             </h4>
             <ul className="flex flex-col gap-[12px]">
               {packagesLinks.map((link, i) => (
                 <li key={i}>
                   <a href={link.href} className="font-body text-[13px] text-white/60 hover:text-[var(--color-gold)] transition-colors inline-block hover:translate-x-[4px] duration-300">
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
          </motion.div>

          {/* Col 4 */}
          <motion.div variants={itemVariants} className="flex flex-col">
             <h4 className="font-display text-[18px] text-white font-semibold mb-[20px]">
               Contact
             </h4>
             <ul className="flex flex-col gap-[16px]">
               <li className="font-body text-[13px] text-white/60 leading-[1.6]">
                  📍 Cubbonpet, Bengaluru,<br/>Karnataka 560002
               </li>
               <li>
                  <a href="tel:09900143805" className="font-body text-[13px] text-white/60 hover:text-[var(--color-gold)] transition-colors">
                     📞 099001 43805
                  </a>
               </li>
               <li>
                  <a href="https://wa.me/919900143805" className="font-body text-[13px] text-white/60 hover:text-[var(--color-gold)] transition-colors">
                     💬 WhatsApp Chat
                  </a>
               </li>
             </ul>
          </motion.div>

        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.5 }}
           className="w-full border-t border-white/[0.08] pt-[32px] flex flex-col sm:flex-row items-center justify-between gap-[16px]"
        >
          <span className="font-body text-[12px] text-white/40text-center sm:text-left text-white/40">
            © 2025 Bismillah Tours & Travels. All rights reserved.
          </span>
          <span className="font-body text-[12px] text-white/40text-center sm:text-right text-white/40">
            Made with 🤍 for every pilgrim
          </span>
        </motion.div>

      </div>
    </footer>
  );
}
