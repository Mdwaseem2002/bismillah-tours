"use client";

import { motion } from "framer-motion";

export function BlogSection() {
  const blogs = [
    {
      category: "UMRAH GUIDE",
      title: "First-Time Umrah: A Complete Step-by-Step Guide",
      excerpt: "Everything you need to know before your first journey to Makkah — from visa to Tawaf.",
      date: "OCT 12, 2024",
    },
    {
      category: "SPIRITUAL PREP",
      title: "40 Duas Every Pilgrim Should Know Before Umrah",
      excerpt: "Strengthen your spiritual connection with these essential supplications for every ritual.",
      date: "NOV 05, 2024",
    },
    {
      category: "PACKING TIPS",
      title: "The Ultimate Ihram Packing Checklist for 2025",
      excerpt: "What to pack, what to leave behind, and what Bismillah Tours provides — all in one list.",
      date: "DEC 18, 2024",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as any as any } }
  };

  return (
    <section id="blog" className="py-[100px] px-6 md:px-[5%] relative overflow-hidden bg-[var(--color-cream)]">
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
          <motion.span variants={headerVariants} className="font-body text-[var(--color-gold)] font-bold tracking-[3px] text-[11px] uppercase mb-4 block drop-shadow-sm">
            Pilgrim Resources
          </motion.span>
          <motion.h2 variants={headerVariants} className="font-display text-[44px] text-[var(--color-charcoal)] font-semibold mb-4 leading-tight">
            Guides for Your Sacred Journey
          </motion.h2>
          <motion.p variants={headerVariants} className="font-body text-[var(--color-charcoal)]/60 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Practical wisdom, spiritual preparation, and travel tips
            from our scholars and experienced team.
          </motion.p>
        </motion.div>

        {/* 3 BLOG CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" as any as any }}
              className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(27,67,50,0.07)] overflow-hidden flex flex-col group hover:-translate-y-[6px] transition-all duration-400 hover:shadow-[0_12px_36px_rgba(27,67,50,0.12)] cursor-default"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="w-full h-[200px] bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] flex items-center justify-center relative overflow-hidden isolate">
                
                {/* Category Badge */}
                <div className="absolute top-[20px] left-[20px] bg-[var(--color-gold)] text-[var(--color-charcoal)] font-bold tracking-[2px] text-[10px] uppercase px-4 py-1.5 rounded-full z-10 shadow-sm font-body">
                  {blog.category}
                </div>

                <motion.svg 
                  width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                  className="opacity-15 transform transition-transform duration-[1s] group-hover:scale-110"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  <path d="M14.5 6.5l1 2 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z" />
                </motion.svg>
              </div>

              {/* CONTENT */}
              <div className="p-[28px] flex flex-col flex-grow">
                
                <span className="font-body text-[12px] text-[var(--color-charcoal)]/40 font-medium tracking-[1.5px] uppercase mb-[16px]">
                  {blog.date}
                </span>

                <h3 className="font-display text-[22px] text-[#1B4332] font-semibold mb-[12px] leading-snug line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="font-body text-[var(--color-charcoal)]/65 text-[14px] leading-[1.6] mb-[32px] flex-grow line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="mt-auto">
                  <a href="#" className="font-body font-semibold text-[13px] text-[var(--color-gold)] group-hover:text-[#B2923C] group-hover:underline transition-colors decoration-[1.5px] underline-offset-[6px] inline-flex items-center group/link">
                    Read Guide 
                    <span className="inline-block transition-transform duration-300 transform group-hover/link:translate-x-[4px] ml-[4px]">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
