"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import Container from "../Container";
import Spotlight from "../ui/Spotlight";
import DotPattern from "../ui/DotPattern";
import BorderBeam from "../ui/BorderBeam";
import { CharsReveal, WordsReveal } from "../ui/TextReveal";
import { site, currently } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <Spotlight className="z-0" />
      <DotPattern className="z-0 opacity-60" />

      <Container className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Eyebrow pill with avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-surface/60 backdrop-blur-sm pl-1 pr-4 py-1 mb-8 overflow-hidden"
        >
          <span className="relative">
            <Image
              src={site.avatar}
              alt={site.name}
              width={28}
              height={28}
              className="rounded-full ring-2 ring-accent/40"
              priority
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-bg" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg/90">
            {site.pillStatus}
          </span>
          <BorderBeam size={80} duration={6} />
        </motion.div>

        {/* Headline */}
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-semibold tracking-[-0.04em] leading-[0.95]">
          <span className="block text-gradient">
            <CharsReveal text="Masood Akhtar" />
          </span>
          <span className="block text-gradient-accent">
            <CharsReveal text="Vaheed." delay={0.6} />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-lg md:text-xl lg:text-2xl text-muted leading-relaxed">
          <WordsReveal text={site.tagline} delay={1.2} />
        </p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 font-medium text-sm overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View work</span>
            <FaArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="group relative inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 backdrop-blur-sm px-6 py-3 font-medium text-sm hover:border-accent hover:text-accent transition-colors"
          >
            <span>Get in touch</span>
            <BorderBeam size={120} duration={8} />
          </a>
        </motion.div>

        {/* Currently row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
        >
          {currently.map((c) => (
            <div key={c.label} className="border-l border-border pl-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
                {c.label}
              </p>
              <p className="mt-1.5 text-sm text-fg/85">{c.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-20 hidden md:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle"
        >
          <FaArrowDown className="size-3 animate-bounce" />
          <span>Scroll to explore</span>
        </motion.div>
      </Container>
    </section>
  );
}
