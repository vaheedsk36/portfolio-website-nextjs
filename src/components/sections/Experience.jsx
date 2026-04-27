"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Container from "../Container";
import { FadeInUp } from "../ui/TextReveal";
import { experience } from "@/data/site";

export default function Experience() {
  // Flatten roles for stacking
  const roles = experience.flatMap((c) =>
    c.roles.map((r) => ({ ...r, company: c.company, location: c.location }))
  );

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <Container>
        <FadeInUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            § 04 — Experience
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-fg">
            Where I&apos;ve been{" "}
            <span className="text-muted">— 2020 to today</span>
          </h2>
        </FadeInUp>
      </Container>

      <Container className="mt-16">
        <div className="relative">
          {roles.map((role, i) => (
            <RoleCard key={`${role.company}-${role.title}`} role={role} index={i} total={roles.length} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function RoleCard({ role, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1 - index) * 0.04]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6 + index * 0.05]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${100 + index * 24}px`, paddingBottom: "1.5rem" }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="rounded-2xl border border-border bg-surface/80 backdrop-blur-md p-6 md:p-10 origin-top relative overflow-hidden"
      >
        {/* Number watermark */}
        <span className="absolute -top-6 -right-2 font-mono text-[140px] md:text-[200px] font-bold text-fg/[0.025] leading-none pointer-events-none select-none">
          0{index + 1}
        </span>

        <div className="flex items-start justify-between gap-6 flex-wrap relative">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              {role.company}
              <span className="text-subtle ml-2">· {role.location}</span>
            </p>
            <h3 className="mt-2 text-xl md:text-3xl font-semibold tracking-tight text-fg">
              {role.title}
            </h3>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted bg-bg/60 border border-border rounded-full px-3 py-1.5 whitespace-nowrap">
            {role.period}
          </span>
        </div>

        <ul className="mt-6 space-y-3 text-fg/80 leading-relaxed">
          {role.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm md:text-base">
              <span className="mt-2.5 h-px w-4 flex-none bg-accent" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
