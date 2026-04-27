"use client";

import { Drawer } from "vaul";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navLinks, socials, site } from "@/data/site";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root direction="right" open={open} onOpenChange={setOpen}>
      <Drawer.Trigger
        aria-label="Open menu"
        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-surface transition-colors"
      >
        <Hamburger open={open} />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-bg/60 backdrop-blur-sm" />
        <Drawer.Content
          className="fixed right-0 top-0 bottom-0 z-50 flex h-full w-[85%] max-w-sm flex-col border-l border-border bg-bg p-6 outline-none"
          aria-describedby={undefined}
        >
          <Drawer.Title className="sr-only">Navigation menu</Drawer.Title>
          <div className="mb-10 flex items-center justify-between">
            <span className="inline-flex items-baseline">
              <span className="font-semibold text-[15px] tracking-tight">{site.shortName}</span>
              <span className="text-accent font-semibold text-[15px]">.</span>
            </span>
            <Drawer.Close
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-surface transition-colors"
            >
              <Hamburger open />
            </Drawer.Close>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                }}
                className="flex flex-col gap-1"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-2xl font-semibold tracking-tight text-fg hover:text-accent transition-colors border-b border-border"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <div className="mt-auto pt-8 border-t border-border space-y-2">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-sm text-fg hover:text-accent transition-colors"
            >
              ↗ Résumé (PDF)
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block font-mono text-sm text-fg hover:text-accent transition-colors"
            >
              ↗ {site.email}
            </a>
            <div className="pt-4 flex gap-x-4 gap-y-2 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function Hamburger({ open }) {
  return (
    <div className="relative h-4 w-5" aria-hidden>
      <motion.span
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-0 h-px w-full bg-fg"
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-fg"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 bottom-0 h-px w-full bg-fg"
      />
    </div>
  );
}
