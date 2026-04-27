"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function GradientMesh() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 60, damping: 18, mass: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 3);
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Static base mesh — always visible, even before mouse move and on mobile */}
      <div
        className="absolute -top-[20%] left-[10%] h-[60vmax] w-[60vmax] rounded-full opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #7C5CFF 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-[40%] right-[-10%] h-[50vmax] w-[50vmax] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #22D3EE 0%, transparent 60%)",
        }}
      />

      {/* Cursor-tracking accent (desktop only) */}
      <motion.div
        className="absolute hidden md:block h-[600px] w-[600px] rounded-full opacity-30 blur-[80px] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: sx,
          y: sy,
          background: "radial-gradient(circle, #7C5CFF 0%, #22D3EE 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
