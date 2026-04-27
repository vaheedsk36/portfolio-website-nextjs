export default function SectionHeader({ index, label, eyebrow }) {
  return (
    <div className="flex items-baseline gap-3 pb-8 border-b border-border">
      <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
        § {index}
      </span>
      <h2 className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
        {label}
      </h2>
      {eyebrow && (
        <span className="ml-auto font-mono text-[11px] text-subtle">{eyebrow}</span>
      )}
    </div>
  );
}
