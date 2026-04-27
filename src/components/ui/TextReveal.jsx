"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function WordsReveal({ text, className, delay = 0, stagger = 0.06 }) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 18 } },
            }}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function CharsReveal({ text, className, delay = 0, stagger = 0.025 }) {
  const chars = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {chars.map((c, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0, rotateX: -45 },
              visible: { y: 0, opacity: 1, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
            }}
            className="inline-block"
            style={{ transformOrigin: "bottom" }}
          >
            {c === " " ? " " : c}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function FadeInUp({ children, className, delay = 0, y = 24, once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
