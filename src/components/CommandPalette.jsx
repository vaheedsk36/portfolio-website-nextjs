"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { site, socials, navLinks } from "@/data/site";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    document.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmdk", onOpen);
    };
  }, []);

  const go = (href) => {
    setOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 800);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[18vh] px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="absolute inset-0 bg-bg/60 backdrop-blur-sm" aria-hidden />
      <Command
        label="Command Menu"
        className="relative w-full max-w-lg overflow-hidden rounded-lg border border-border-strong bg-surface shadow-2xl shadow-black/40"
      >
        <Command.Input
          placeholder="Type a command or search…"
          className="w-full border-b border-border bg-transparent px-4 py-3 text-sm text-fg placeholder:text-subtle outline-none"
        />
        <Command.List className="max-h-[320px] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center font-mono text-[12px] text-subtle">
            No results.
          </Command.Empty>

          <Command.Group heading="Navigate" className="text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.08em]">
            {navLinks.map((l) => (
              <CmdItem key={l.href} onSelect={() => go(l.href)}>
                {l.label}
              </CmdItem>
            ))}
            <CmdItem onSelect={() => go("/")}>Home</CmdItem>
          </Command.Group>

          <Command.Group heading="Contact" className="text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.08em]">
            <CmdItem onSelect={copyEmail}>
              {copied ? "Copied!" : `Copy email — ${site.email}`}
            </CmdItem>
            <CmdItem onSelect={() => go(site.resume)}>Open résumé (PDF)</CmdItem>
          </Command.Group>

          <Command.Group heading="Social" className="text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.08em]">
            {socials.map((s) => (
              <CmdItem key={s.href} onSelect={() => go(s.href)}>
                {s.label} — {s.handle}
              </CmdItem>
            ))}
          </Command.Group>

          <Command.Group heading="Source" className="text-muted [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.08em]">
            <CmdItem onSelect={() => go("https://github.com/vaheedsk36/portfolio-website-nextjs")}>
              View source on GitHub
            </CmdItem>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}

function CmdItem({ children, onSelect }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-fg/90 aria-selected:bg-surface-2 aria-selected:text-fg data-[selected=true]:bg-surface-2"
    >
      {children}
    </Command.Item>
  );
}
