"use client";

import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  duration = "40s",
  gap = "1.5rem",
  className,
}) {
  return (
    <div
      style={{ "--duration": duration, "--gap": gap }}
      className={cn("group flex overflow-hidden marquee-fade-x", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center justify-around",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{ gap }}
          aria-hidden={i === 1}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
