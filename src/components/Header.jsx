"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { site, navLinks } from "@/data/site";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-6">
        <Link
          href="/"
          className="group inline-flex items-baseline text-fg hover:text-accent transition-colors"
          aria-label="Home"
        >
          <span className="font-semibold text-[15px] tracking-tight">{site.shortName}</span>
          <span className="text-accent font-semibold text-[15px]">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-mono text-[12px] uppercase tracking-[0.1em] text-muted hover:text-fg transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex font-mono text-[12px] uppercase tracking-[0.1em] text-muted hover:text-fg transition-colors"
          >
            CV
          </a>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-cmdk"))}
            className="hidden md:inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 backdrop-blur-sm px-2 py-1 font-mono text-[11px] text-muted hover:text-fg hover:border-border-strong transition-colors"
            aria-label="Open command menu"
          >
            <span>⌘</span>
            <span>K</span>
          </button>
          <MobileDrawer />
        </div>
      </div>
    </motion.header>
  );
}
