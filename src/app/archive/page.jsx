import Link from "next/link";
import Container from "@/components/Container";
import { archive } from "@/data/site";

export const metadata = {
  title: "Archive",
  description: "A complete list of things I've built.",
};

export default function ArchivePage() {
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

      <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-fg">Archive</h1>
      <p className="mt-4 text-muted max-w-xl leading-relaxed">
        A complete list of things I've built — work projects, side projects, and the toy ones I keep
        around for nostalgia. Sorted newest first.
      </p>

      <div className="mt-16 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border">
              <Th className="w-[110px]">Year</Th>
              <Th>Project</Th>
              <Th className="hidden md:table-cell">Made at</Th>
              <Th className="hidden lg:table-cell">Built with</Th>
              <Th className="w-[80px] text-right">Links</Th>
            </tr>
          </thead>
          <tbody>
            {archive.map((p, i) => (
              <tr
                key={`${p.title}-${i}`}
                className="border-b border-border last:border-0 hover:bg-surface/40 transition-colors"
              >
                <Td className="font-mono text-[12px] text-subtle align-top pt-5">{p.year}</Td>
                <Td className="text-fg align-top pt-5">{p.title}</Td>
                <Td className="hidden md:table-cell text-muted align-top pt-5 font-mono text-[12px]">
                  {p.made}
                </Td>
                <Td className="hidden lg:table-cell align-top pt-5">
                  <span className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] text-subtle">
                    {p.stack.join(" · ")}
                  </span>
                </Td>
                <Td className="text-right align-top pt-5">
                  <span className="inline-flex gap-3 font-mono text-[12px]">
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent"
                      >
                        ↗
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent"
                      >
                        src
                      </a>
                    )}
                  </span>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

function Th({ children, className = "" }) {
  return (
    <th className={`pb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-subtle font-normal ${className}`}>
      {children}
    </th>
  );
}

function Td({ children, className = "" }) {
  return <td className={`py-4 pr-4 ${className}`}>{children}</td>;
}
