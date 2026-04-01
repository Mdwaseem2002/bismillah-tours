"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax parallax effect for background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[480px] flex flex-col items-center justify-center p-[8%] lg:p-12 bg-[#1B4332] overflow-hidden isolate"
    >
      
      {/* Background Image Parallax layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-[30%] -bottom-[30%] pointer-events-none z-[-2]"
      >
        <img
          src="https://images.unsplash.com/photo-1591871923297-cbb7c5692055?q=80&w=2000&auto=format&fit=crop"
          alt="Masjid al-Haram call to prayer"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      {/* Heavy green overlay */}
      <div 
        className="absolute inset-0 z-[-1]" 
        style={{ background: "linear-gradient(rgba(10,28,18,0.78), rgba(10,28,18,0.85))" }}
      />

      <motion.div
         initial={{ opacity: 0, scale: 0.95, y: 40 }}
         whileInView={{ opacity: 1, scale: 1, y: 0 }}
         viewport={{ once: true, margin: "-80px" }}
         transition={{ duration: 0.8, ease: "easeOut" as any as any }}
         className="flex flex-col items-center max-w-3xl mx-auto text-center z-10"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-[var(--color-gold)] font-bold tracking-[3px] text-[11px] uppercase mb-[24px] block drop-shadow-md"
        >
          Begin Your Journey
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-display text-[48px] sm:text-[64px] text-white font-medium mb-[24px] leading-tight drop-shadow-lg"
        >
          Ready to Answer the Call?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-body text-white/72 text-[16px] sm:text-[18px] max-w-[520px] leading-[1.6] mb-[48px] drop-shadow-md"
        >
          Let Bismillah Tours handle every detail — so you can
          focus entirely on your worship.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[24px] mb-[48px] w-full sm:w-auto"
        >
          <a href="#contact" className="w-full sm:w-auto bg-white text-[#1B4332] hover:bg-[var(--color-gold)] hover:text-white font-body font-semibold text-[15px] tracking-[0.5px] px-[32px] py-[18px] rounded-full transition-all shadow-[0_8px_30px_rgba(27,67,50,0.2)] hover:shadow-[0_12px_40px_rgba(27,67,50,0.3)] hover:-translate-y-[2px]">
            Contact Us Today →
          </a>
          
          <a
            href="https://wa.me/919900143805"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#1fae54] font-body font-semibold text-[15px] tracking-[0.5px] px-[32px] py-[18px] rounded-full transition-all shadow-[0_8px_30px_rgba(37,211,102,0.2)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.3)] hover:-translate-y-[2px] flex items-center justify-center gap-[12px]"
          >
            <MessageCircle className="w-[20px] h-[20px] stroke-[2px]" /> Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/60 font-body text-[13px] uppercase tracking-[1px] font-medium flex-wrap flex justify-center items-center gap-x-[16px] gap-y-[8px]"
        >
          <span>📍 Cubbonpet, Bengaluru</span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span>📞 099001 43805</span>
        </motion.div>
      </motion.div>

    </section>
  );
}
