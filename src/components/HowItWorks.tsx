"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      title: "Choose Your Package",
      desc: "Select from our curated Umrah or Hajj packages. Our team provides dedicated consultation to match your spiritual and comfort needs.",
    },
    {
      title: "Book & Submit Docs",
      desc: "Secure your spot with a streamlined booking process. We manage all your visa processing, flight ticketing, and hotel reservations.",
    },
    {
      title: "Pre-Journey Briefing",
      desc: "Attend our comprehensive scholar-led briefing sessions in Bengaluru to spiritually prepare for the sacred rituals ahead.",
    },
    {
      title: "Begin Your Sacred Journey",
      desc: "Depart with peace of mind. Our dedicated ground team and accompanying Aalims ensure you focus entirely on your worship.",
    },
  ];

  return (
    <section className="py-[100px] bg-white relative overflow-hidden px-[5%]">
      <div className="max-w-[1200px] mx-auto relative z-10 w-full">
        
        {/* HEADER */}
        <motion.div
           initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-80px" }}
           transition={{ duration: 0.6, ease: "easeOut" as any as any }}
           className="text-center mb-[100px]"
        >
          <span className="font-body text-[var(--color-gold)] font-bold tracking-[3px] text-[11px] uppercase mb-4 block">
            The Process
          </span>
          <h2 className="font-display text-[44px] text-[#1B4332] font-semibold leading-tight">
            Your Journey in 4 Steps
          </h2>
        </motion.div>

        {/* ZIGZAG TIMELINE */}
        <div className="relative max-w-[860px] mx-auto">
          
          {/* Vertical Dotted Gold Line */}
          <div className="absolute left-[36px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%224%22%20height%3D%224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23C9A84C%22%2F%3E%3C%2Fsvg%3E')] bg-repeat-y opacity-30 origin-top overflow-hidden">
             <motion.div
               initial={{ scaleY: 0 }}
               whileInView={{ scaleY: 1 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 2, ease: "easeInOut" as any as any }}
               className="w-full h-full bg-[var(--color-gold)] origin-top absolute top-0 mix-blend-color"
             />
          </div>

          <div className="space-y-[80px] md:space-y-0 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1; // 0-indexed: 1, 3 are right side
              
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center w-full justify-between">
                  
                  {/* Left Block (Empty for even, Content for odd) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-1' : 'order-2'} ${isEven ? 'pr-[80px] text-right' : 'pl-[80px] text-left'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: "easeOut" as any as any }}
                      >
                         <h3 className="font-display text-[24px] text-[#1B4332] mb-[12px] font-semibold">{step.title}</h3>
                         <p className="font-body text-[#1A1A1A]/60 text-[14px] leading-[1.6] max-w-[320px] ml-auto">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className={`absolute md:relative left-[10px] md:left-auto md:w-auto h-full flex justify-center items-center z-20 ${isEven ? 'order-2' : 'order-1'}`}>
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-[56px] h-[56px] rounded-full bg-[var(--color-gold)] border-4 border-white flex items-center justify-center font-display text-[20px] text-white font-bold shadow-lg"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </motion.div>
                  </div>

                  {/* Right Block (Content for even, Empty for odd) */}
                  <div className={`pl-[90px] md:pl-0 w-full md:w-1/2 ${isEven ? 'order-3' : 'order-3'} ${!isEven ? 'md:pr-[80px] md:text-right' : 'md:pl-[80px] text-left'}`}>
                     {(!isEven || true) && (
                       <div className="md:hidden">
                          {/* Mobile Layout Content */}
                          <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut" as any as any }}
                          >
                             {/* Decorative Number */}
                             <div className="font-display text-[60px] leading-none text-[#1B4332]/[0.05] font-bold absolute -top-8 -left-2 user-select-none pointer-events-none">
                               {String(idx + 1).padStart(2, '0')}
                             </div>
                             
                             <h3 className="font-display text-[22px] text-[#1B4332] mb-[8px] font-semibold mt-1 relative z-10">{step.title}</h3>
                             <p className="font-body text-[#1A1A1A]/70 text-[14px] leading-[1.6] max-w-[320px] relative z-10">{step.desc}</p>
                          </motion.div>
                       </div>
                     )}

                     {!isEven && (
                       <div className="hidden md:block">
                          {/* Desktop Layout Content (Odd Items -> Right side) */}
                          <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, ease: "easeOut" as any as any }}
                            className="relative"
                          >
                             {/* Decorative Number */}
                             <div className="font-display text-[80px] leading-none text-[#1B4332]/[0.05] font-bold absolute -top-6 -left-8 user-select-none pointer-events-none tracking-tighter">
                               {String(idx + 1).padStart(2, '0')}
                             </div>
                             
                             <h3 className="font-display text-[24px] text-[#1B4332] mb-[12px] font-semibold relative z-10">{step.title}</h3>
                             <p className="font-body text-[#1A1A1A]/60 text-[14px] leading-[1.6] max-w-[320px] relative z-10">{step.desc}</p>
                          </motion.div>
                       </div>
                     )}
                     
                     {/* Desktop Layout Content for Even items (Left side) was already handled in Left Block, but we need the decorative number there too */}
                     {isEven && (
                       <div className="hidden md:block absolute right-1/2 right-1/2 top-0 mt-2 mr-[110px] pointer-events-none">
                         <div className="font-display text-[80px] leading-none text-[#1B4332]/[0.05] font-bold user-select-none tracking-tighter">
                            {String(idx + 1).padStart(2, '0')}
                         </div>
                       </div>
                     )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
