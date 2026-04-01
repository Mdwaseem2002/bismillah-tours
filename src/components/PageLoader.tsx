"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already loaded in this session
    const hasLoaded = sessionStorage.getItem("bismillah_intro_loaded");
    
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Set timeout to hide loader
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("bismillah_intro_loaded", "true");
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const title = "Bismillah Tours";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
          className="fixed inset-0 z-[99999] bg-[#1B4332] flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" as any as any }}
            className="font-display italic text-[var(--color-gold)] text-3xl md:text-4xl mb-6 opacity-90 text-center drop-shadow-lg"
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display text-white text-3xl md:text-5xl tracking-wide flex space-x-1"
          >
            {title.split("").map((char, index) => (
               <motion.span key={index} variants={item}>
                 {char === " " ? "\u00A0" : char}
               </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
