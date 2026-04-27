import Link from "next/link";
import Container from "@/components/Container";
import { uses } from "@/data/site";

export const metadata = {
  title: "Uses",
  description: "The hardware, software, and tools I reach for daily.",
};

export default function UsesPage() {
  return (
    <Container className="pt-20 pb-24">
      <div className="mb-12">
        <Link
          href="/"
          className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted hover:text-accent transition-colors"
        >
          ← Back
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-fg">Uses</h1>
      <p className="mt-4 text-muted max-w-xl leading-relaxed">
        The hardware, editor, and tools I reach for daily. Inspired by the &lt;
        <a
          href="https://uses.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg hover:text-accent link-underline"
        >
          uses.tech
        </a>
        &gt; community.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
        <UsesGroup heading="Hardware" items={uses.hardware} />
        <UsesGroup heading="Editor & Terminal" items={uses.editor} />
        <UsesGroup heading="Daily" items={uses.daily} />
      </div>
    </Container>
  );
}

function UsesGroup({ heading, items }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle pb-3 mb-4 border-b border-border">
        {heading}
      </p>
      <dl className="space-y-4">
        {items.map((it) => (
          <div key={it.label}>
            <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-subtle">
              {it.label}
            </dt>
            <dd className="mt-1 text-fg/85 text-sm">{it.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
