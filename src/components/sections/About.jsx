"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "../Container";
import NumberTicker from "../ui/NumberTicker";
import BorderBeam from "../ui/BorderBeam";
import { FadeInUp } from "../ui/TextReveal";
import { site, about, stats, stack } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <Container>
        <FadeInUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            § 01 — About
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-fg max-w-3xl">
            Engineer who ships.{" "}
            <span className="text-muted">
              Currently shipping RAG analytics that turn e-commerce data into answers.
            </span>
          </h2>
        </FadeInUp>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Portrait card */}
          <FadeInUp className="lg:col-span-5 lg:sticky lg:top-24">
            <PortraitCard />
          </FadeInUp>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-5 text-fg/80 leading-relaxed text-base md:text-lg">
            {about.map((p, i) => (
              <FadeInUp key={i} delay={0.1 * i}>
                <p>{p}</p>
              </FadeInUp>
            ))}
          </div>
        </div>

        {/* Stack panel — full width */}
        <FadeInUp delay={0.1}>
          <div className="mt-16 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent mb-4">
                Reach for
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.reachFor.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-accent/30 bg-accent-soft px-2.5 py-1 font-mono text-[12px] text-fg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle mb-4">
                Comfortable in
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.comfortable.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[12px] text-fg/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg/80 backdrop-blur-sm p-6 md:p-8">
              <p className="text-3xl md:text-5xl font-semibold tracking-tight text-fg">
                <NumberTicker value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PortraitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative"
    >
      {/* Decorative glow ring */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, #7C5CFF, #22D3EE, #7C5CFF)",
        }}
      />

      <div className="relative rounded-2xl border border-border-strong bg-surface/80 backdrop-blur-md p-3 overflow-hidden">
        <BorderBeam size={300} duration={10} />

        {/* Portrait */}
        <div className="relative aspect-square rounded-xl overflow-hidden bg-bg">
          <Image
            src={site.portrait}
            alt={site.name}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            priority
          />
          {/* Subtle gradient wash */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
            style={{
              background: "linear-gradient(135deg, rgba(124,92,255,0.4) 0%, rgba(34,211,238,0.2) 100%)",
            }}
          />
        </div>

        {/* Caption row */}
        <div className="mt-3 flex items-center justify-between px-2 py-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
              Based in
            </p>
            <p className="font-mono text-sm text-fg/90 mt-0.5">
              {site.location.split(",")[0]}, IN
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle text-right">
              Time
            </p>
            <p className="font-mono text-sm text-fg/90 mt-0.5">IST · UTC+5:30</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
