"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ayesha Begum",
      city: "Bengaluru",
      quote: "Bismillah Tours handled everything with such care and sincerity. Our family felt completely focused on worship without a single worry about logistics.",
      initials: "AB"
    },
    {
      name: "Mohammed Irfan",
      city: "Mysuru",
      quote: "The scholar accompanying us was incredibly knowledgeable. It transformed our Umrah from just a journey into a deeply profound spiritual experience.",
      initials: "MI"
    },
    {
      name: "Ibrahim Sheikh",
      city: "Hubli",
      quote: "Every detail from the premium flights to the Haram-view hotel was exceptional. True luxury rooted deeply in Islamic hospitality.",
      initials: "IS"
    },
    {
      name: "Rukhsar Fatima",
      city: "Mangaluru",
      quote: "I traveled alone with my mother, and their team treated us like their own family. The comfort and security they provided were priceless.",
      initials: "RF"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4s interval feels more premium than 3s

    return () => clearInterval(timer);
  }, [isHovered, testimonials.length]);

  return (
    <section className="py-[100px] bg-[#1B4332] relative overflow-hidden px-[5%]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-[0.02] mix-blend-screen pointer-events-none" />

      <div className="max-w-[800px] mx-auto relative z-10 w-full flex flex-col items-center">
        
        {/* HEADER */}
        <motion.div
           initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-80px" }}
           transition={{ duration: 0.6, ease: "easeOut" as any as any }}
           className="text-center mb-[80px]"
        >
          <span className="font-body text-[var(--color-gold)] font-bold tracking-[3px] text-[11px] uppercase mb-4 block drop-shadow-sm">
            What Our Pilgrims Say
          </span>
          <h2 className="font-display text-[44px] sm:text-[48px] text-white font-medium leading-tight drop-shadow-md">
            Words From the Sacred
          </h2>
        </motion.div>

        {/* CAROUSEL */}
        <div 
          className="relative w-full max-w-[660px] min-h-[380px] sm:min-h-[340px] flex items-center justify-center cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 * direction, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -100 * direction, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full bg-[rgba(245,240,232,0.05)] border border-[rgba(201,168,76,0.15)] rounded-[24px] p-[48px] backdrop-blur-[12px] flex flex-col items-center text-center shadow-[0_8px_40px_rgba(27,67,50,0.10)]"
            >
              <div className="font-display text-[80px] leading-none text-[#C9A84C] opacity-30 select-none absolute top-4 left-6 pointer-events-none">
                ❝
              </div>

              <div className="flex gap-1 mb-6 text-[#C9A84C] text-[14px]">
                 ★★★★★
              </div>

              <p className="font-display italic text-[22px] sm:text-[24px] text-white leading-relaxed mb-8 px-4 flex-grow z-10">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-[42px] h-[42px] bg-[#C9A84C] rounded-full flex items-center justify-center font-display text-[16px] font-semibold text-[#1B4332] shadow-sm">
                  {testimonials[currentIndex].initials}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-body text-[14px] text-white font-semibold">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="font-body text-[12px] text-white/50 tracking-[0.5px]">
                    {testimonials[currentIndex].city}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center items-center gap-[12px] mt-[48px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className="group py-2 px-1 focus:outline-none"
            >
              <span 
                className={`block w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'bg-[#C9A84C] w-[24px]' // active pill width
                    : 'bg-white/25 hover:bg-white/50'
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
