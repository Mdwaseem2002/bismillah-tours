"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Star, Zap, Compass, PackageOpen, Headphones } from "lucide-react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  const springValue = useSpring(from, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, springValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={nodeRef} />;
}

export function WhyUsSection() {
  const features = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-[var(--color-gold)] stroke-[1.5px]" />,
      title: "Government Certified",
      desc: "Fully licensed and ATOL protected — your investment is always safe.",
    },
    {
      icon: <Star className="w-7 h-7 text-[var(--color-gold)] stroke-[1.5px]" />,
      title: "4.9★ Pilgrim Rating",
      desc: "Thousands of families have trusted us with their most sacred journey.",
    },
    {
      icon: <Zap className="w-7 h-7 text-[var(--color-gold)] stroke-[1.5px]" />,
      title: "Visa in 3–5 Days",
      desc: "We navigate the entire visa process — you focus only on preparation.",
    },
    {
      icon: <Compass className="w-7 h-7 text-[var(--color-gold)] stroke-[1.5px]" />,
      title: "Scholar-Led Groups",
      desc: "Every group is accompanied by a qualified Aalim for authentic guidance.",
    },
    {
      icon: <PackageOpen className="w-7 h-7 text-[var(--color-gold)] stroke-[1.5px]" />,
      title: "Zero Hidden Costs",
      desc: "Flights, hotels, meals, transport — everything included, nothing surprises.",
    },
    {
      icon: <Headphones className="w-7 h-7 text-[var(--color-gold)] stroke-[1.5px]" />,
      title: "24/7 Bilingual Support",
      desc: "Urdu, English, and Hindi support — round the clock, wherever you are.",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as any as any } }
  };

  return (
    <section id="about" className="py-[100px] bg-[#1B4332] relative overflow-hidden px-[5%]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-[0.03] pointer-events-none mix-blend-screen" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* HEADER */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-80px" }}
           variants={{
            visible: { transition: { staggerChildren: 0.15 } }
           }}
           className="text-center max-w-2xl mb-[80px]"
        >
          <motion.span variants={headerVariants} className="text-[var(--color-gold)] font-bold tracking-[3px] text-[11px] uppercase mb-6 block font-body drop-shadow-sm">
            The Bismillah Promise
          </motion.span>
          <motion.h2 variants={headerVariants} className="font-display text-[42px] sm:text-[54px] text-white font-medium mb-4 leading-tight drop-shadow-md">
            15+ Years of Serving the Sacred
          </motion.h2>
          <motion.p variants={headerVariants} className="text-white/60 font-body text-[16px] leading-[1.6]">
            A legacy built on trust, sincerity, and an unwavering commitment to every pilgrim's spiritual journey.
          </motion.p>
        </motion.div>

        {/* 6 FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[64px] gap-x-12 lg:gap-x-16 mb-[100px] w-full text-center">
          {features.map((feat, idx) => (
            <motion.div
               key={idx}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-80px" }}
               transition={{ duration: 0.6, delay: 0.1 * idx, ease: "easeOut" as any as any }}
               className="flex flex-col items-center group cursor-default p-[24px] rounded-[24px] border border-transparent hover:border-[var(--color-gold)]/20 hover:bg-[#1f4e3a]/40 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Thin gold top border scaleX entry */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (idx * 0.1) }}
                className="w-[56px] h-[2px] bg-[var(--color-gold)]/80 mb-[32px] group-hover:bg-[var(--color-gold-light)] group-hover:scale-x-110 transition-transform duration-300" 
              />
              
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {feat.icon}
              </div>
              
              <h3 className="font-display text-[21px] text-white font-medium mb-3">
                {feat.title}
              </h3>
              
              <p className="text-white/58 text-[14px] leading-[1.6] px-4 font-body">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* STATS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[rgba(201,168,76,0.08)] border-y border-[rgba(201,168,76,0.15)] py-[40px] px-8 relative overflow-hidden backdrop-blur-sm flex flex-col items-center"
        >
          <div className="flex flex-col md:flex-row items-center w-full justify-evenly relative z-10 font-display">
            
            <div className="flex flex-col items-center justify-center py-6 md:py-0 text-center gap-2 group w-full md:w-1/3">
              <span className="text-[56px] text-[var(--color-gold)] font-medium leading-none mb-1 group-hover:scale-[1.05] transition-transform">
                <Counter from={0} to={5000} duration={2} />+
              </span>
              <span className="font-body text-white tracking-[2px] uppercase text-[12px] opacity-[0.85] font-semibold">
                Pilgrims Served
              </span>
            </div>
            
            <div className="hidden md:block w-px h-[60px] bg-white/[0.08]" />

            <div className="flex flex-col items-center justify-center py-6 md:py-0 text-center gap-2 group w-full md:w-1/3 border-t md:border-t-0 border-white/5">
              <span className="text-[56px] text-[var(--color-gold)] font-medium leading-none mb-1 group-hover:scale-[1.05] transition-transform">
                <Counter from={0} to={15} duration={1.5} />+
              </span>
              <span className="font-body text-white tracking-[2px] uppercase text-[12px] opacity-[0.85] font-semibold">
                Years of Service
              </span>
            </div>
            
            <div className="hidden md:block w-px h-[60px] bg-white/[0.08]" />

            <div className="flex flex-col items-center justify-center py-6 md:py-0 text-center gap-2 group w-full md:w-1/3 border-t md:border-t-0 border-white/5">
              <span className="text-[56px] text-[var(--color-gold)] font-medium leading-none mb-1 group-hover:scale-[1.05] transition-transform">
                4.9★
              </span>
              <span className="font-body text-white tracking-[2px] uppercase text-[12px] opacity-[0.85] font-semibold">
                Average Rating
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
