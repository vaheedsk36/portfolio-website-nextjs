"use client";

import Container from "../Container";
import Marquee from "../ui/Marquee";
import { FadeInUp } from "../ui/TextReveal";
import { techMarquee } from "@/data/site";
import { iconMap } from "@/lib/icons";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <Container className="mb-12">
        <FadeInUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            § 02 — Stack
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-fg">
            What I build with
          </h2>
          <p className="mt-3 text-muted max-w-xl">
            The tools I reach for daily. From shipping production web apps to RAG pipelines.
          </p>
        </FadeInUp>
      </Container>

      <div className="space-y-6 relative">
        <Marquee duration="50s" pauseOnHover>
          {techMarquee.row1.map((t) => (
            <TechPill key={t.name} tech={t} />
          ))}
        </Marquee>
        <Marquee duration="60s" reverse pauseOnHover>
          {techMarquee.row2.map((t) => (
            <TechPill key={t.name} tech={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TechPill({ tech }) {
  const Icon = iconMap[tech.icon];
  return (
    <div className="group flex items-center gap-3 rounded-full border border-border bg-surface/40 backdrop-blur-sm px-5 py-3 hover:border-accent/60 hover:bg-surface transition-all duration-300">
      {Icon && (
        <Icon
          className="size-5 transition-transform group-hover:scale-110"
          style={{ color: tech.color }}
        />
      )}
      <span className="font-mono text-sm text-fg/80 group-hover:text-fg whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}
