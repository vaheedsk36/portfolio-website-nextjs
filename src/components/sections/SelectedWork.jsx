"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { FaGithub } from "react-icons/fa6";
import Container from "../Container";
import Card3D from "../ui/Card3D";
import BorderBeam from "../ui/BorderBeam";
import { FadeInUp } from "../ui/TextReveal";
import { selectedWork } from "@/data/site";

export default function SelectedWork() {
  const featured = selectedWork[0];
  const rest = selectedWork.slice(1);

  return (
    <section id="work" className="py-24 md:py-32 relative">
      <Container>
        <FadeInUp>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                § 03 — Selected Work
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-fg">
                Things I&apos;ve shipped
              </h2>
            </div>
            <Link
              href="/archive"
              className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted hover:text-accent transition-colors group inline-flex items-center gap-1.5"
            >
              View archive
              <IconArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeInUp>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          {/* Featured: spans 2 rows, 4 cols on desktop */}
          <FadeInUp className="md:col-span-4 md:row-span-2">
            <BentoCard project={featured} featured />
          </FadeInUp>

          {/* Rest: 2 cols each */}
          {rest.map((p, i) => (
            <FadeInUp
              key={p.slug}
              delay={0.1 + i * 0.08}
              className="md:col-span-2"
            >
              <BentoCard project={p} />
            </FadeInUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BentoCard({ project, featured }) {
  const primary = project.href || project.repo;
  const Wrapper = ({ children }) =>
    primary ? (
      <a href={primary} target="_blank" rel="noopener noreferrer" className="block h-full">
        {children}
      </a>
    ) : (
      <div className="block h-full">{children}</div>
    );

  return (
    <Card3D intensity={5} className="h-full">
      <Wrapper>
        <div
          className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-surface ${
            featured ? "min-h-[400px] md:min-h-[520px]" : "min-h-[240px]"
          }`}
        >
          {/* Decorative gradient */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-30"
              style={{
                background: featured
                  ? "radial-gradient(circle, #7C5CFF 0%, transparent 70%)"
                  : "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
              }}
            />
          </div>

          <BorderBeam
            size={featured ? 280 : 180}
            duration={featured ? 10 : 8}
            colorFrom="#7C5CFF"
            colorTo="#22D3EE"
          />

          <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
            {/* Top: year + arrow */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
                  {project.year}
                </span>
                {project.confidential && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-accent border border-accent/40 rounded px-1.5 py-0.5">
                    NDA
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-muted">
                {project.repo && (
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaGithub className="size-4" />
                  </span>
                )}
                {primary && (
                  <IconArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                )}
              </div>
            </div>

            {/* Middle: title + blurb */}
            <div className="flex-1 flex flex-col justify-end mt-8">
              <h3
                className={`font-semibold tracking-tight text-fg group-hover:text-gradient-accent transition-colors ${
                  featured ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mt-3 text-muted leading-relaxed ${
                  featured ? "text-base md:text-lg max-w-xl" : "text-sm"
                }`}
              >
                {project.blurb}
              </p>

              {/* Stack */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-[0.08em] text-fg/60 bg-bg/60 border border-border rounded px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Card3D>
  );
}
