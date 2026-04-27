import { site, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-subtle">
            © {new Date().getFullYear()} {site.name} · Built with Next.js + Tailwind
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-muted hover:text-accent transition-colors link-underline"
              >
                {s.label}
                <span className="ml-1 text-subtle">↗</span>
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.08em] text-subtle">
          Press <kbd className="rounded border border-border px-1 py-px text-fg/80">⌘</kbd>{" "}
          <kbd className="rounded border border-border px-1 py-px text-fg/80">K</kbd> for menu
        </p>
      </div>
    </footer>
  );
}
