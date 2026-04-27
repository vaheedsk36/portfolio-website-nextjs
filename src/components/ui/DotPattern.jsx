"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

export default function DotPattern({ className, dotColor = "rgba(255,255,255,0.18)", size = 24, dot = 1 }) {
  const id = useId();
  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        "[mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]",
        className
      )}
    >
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <circle cx={size / 2} cy={size / 2} r={dot} fill={dotColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
