"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaCheck, FaCopy } from "react-icons/fa6";
import { IconArrowUpRight } from "@tabler/icons-react";
import confetti from "canvas-confetti";
import Container from "../Container";
import MagneticLink from "../ui/MagneticLink";
import BorderBeam from "../ui/BorderBeam";
import { FadeInUp } from "../ui/TextReveal";
import { iconMap } from "@/lib/icons";
import { site, socials } from "@/data/site";

const socialIconMap = {
  GitHub: "FaGithub",
  LinkedIn: "FaLinkedin",
  Medium: "FaMediumM",
  Instagram: "FaInstagram",
  X: "FaXTwitter",
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#7C5CFF", "#22D3EE", "#EDEDEE"],
        scalar: 0.8,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated gradient backdrop */}
      <div aria-hidden className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px] animate-pulse-glow"
             style={{ background: "radial-gradient(circle, #7C5CFF 0%, #22D3EE 50%, transparent 80%)" }} />
      </div>

      <Container className="relative z-10 text-center">
        <FadeInUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            § 06 — Contact
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h2 className="mt-4 text-4xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-4xl mx-auto">
            Got something <span className="text-gradient-accent">interesting</span> in motion?
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl mx-auto">
            I&apos;m open to senior / staff roles, technically meaty contracts, and short
            collaborations on systems that need to actually work.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="mt-12 flex justify-center">
            <button
              onClick={copyEmail}
              className="group relative inline-flex items-center gap-3 rounded-full border border-border-strong bg-surface/60 backdrop-blur-md px-6 py-4 hover:border-accent transition-colors overflow-hidden"
            >
              <BorderBeam size={300} duration={6} />
              <span className="font-mono text-base md:text-lg text-fg group-hover:text-accent transition-colors">
                {site.email}
              </span>
              <span className="relative size-4 text-muted group-hover:text-accent">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 90 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute inset-0"
                    >
                      <FaCheck className="size-4 text-accent" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute inset-0"
                    >
                      <FaCopy className="size-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </button>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
            {site.location} · {site.replyWithin}
          </p>
        </FadeInUp>

        {/* Social magnetic links */}
        <FadeInUp delay={0.5}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {socials.map((s) => {
              const Icon = iconMap[socialIconMap[s.label]];
              return (
                <MagneticLink
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-border bg-surface/40 backdrop-blur-sm px-5 py-3 hover:border-accent/50 hover:bg-surface transition-colors"
                >
                  {Icon && <Icon className="size-4 text-muted group-hover:text-accent transition-colors" />}
                  <span className="font-mono text-sm text-fg/80 group-hover:text-fg transition-colors">
                    {s.label}
                  </span>
                  <IconArrowUpRight className="size-3 text-subtle group-hover:text-accent transition-colors" />
                </MagneticLink>
              );
            })}
          </div>
        </FadeInUp>
      </Container>
    </section>
  );
}
