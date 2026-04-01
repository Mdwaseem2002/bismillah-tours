"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [hoverState, setHoverState] = useState<"default" | "link" | "image">("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring
  const springX = useSpring(mouseX, { mass: 0.1, stiffness: 300, damping: 20 });
  const springY = useSpring(mouseY, { mass: 0.1, stiffness: 300, damping: 20 });

  useEffect(() => {
    // Check if device supports hover (not a touch device)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsTouchDevice(false);
    }

    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isLink = target.closest('a') !== null || target.closest('button') !== null || target.closest('[role="button"]') !== null;
      const isImage = target.tagName.toLowerCase() === 'img' || target.closest('img') !== null;

      if (isLink) {
        setHoverState("link");
      } else if (isImage) {
        setHoverState("image");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-[var(--color-gold)] rounded-full pointer-events-none z-[10000] -ml-[3px] -mt-[3px]"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          opacity: hoverState === "image" ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-[32px] h-[32px] rounded-full pointer-events-none z-[9999] -ml-[16px] -mt-[16px]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: hoverState === "link" ? 2 : hoverState === "image" ? 3.5 : 1,
          border: hoverState === "link" ? "1.5px solid rgba(201,168,76,1)" : hoverState === "image" ? "0px solid transparent" : "1.5px solid rgba(201,168,76,0.5)",
          backgroundColor: hoverState === "image" ? "rgba(201,168,76,0.15)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
