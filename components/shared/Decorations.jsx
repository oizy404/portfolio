import { cn } from "@/lib/utils";

/* ============================================================
   Decorative, purely-visual SVG/CSS elements.
   All self-contained (inline SVG / CSS) — no external requests,
   so they always render and add zero network cost.
   Every piece is aria-hidden + pointer-events-none.
   ============================================================ */

/**
 * GlowOrb — soft blurred radial light. Use a few behind sections for
 * ambient depth. Color via className (e.g. "bg-accent/20").
 */
export const GlowOrb = ({ className }) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none absolute -z-0 rounded-full blur-[100px]",
      className
    )}
  />
);

/**
 * DotGrid — subtle dotted pattern, faded toward the edges with a mask.
 * Great as a quiet texture behind heros.
 */
export const DotGrid = ({ className }) => (
  <svg
    aria-hidden
    className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
  >
    <defs>
      <pattern id="dotgrid" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dotgrid)" />
  </svg>
);

/**
 * Noise — fine film-grain overlay for a premium, less-flat surface.
 * Uses an inline SVG fractal-noise filter (data URI) blended over the page.
 */
export const Noise = ({ className }) => (
  <div
    aria-hidden
    className={cn(
      "pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-overlay",
      className
    )}
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    }}
  />
);

/**
 * Blob — organic gradient shape (inline SVG). Decorative accent for corners.
 */
export const Blob = ({ className }) => (
  <svg
    aria-hidden
    viewBox="0 0 600 600"
    className={cn("pointer-events-none absolute", className)}
  >
    <defs>
      <linearGradient id="blobgrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8488f0" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#6b6fe0" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <path
      fill="url(#blobgrad)"
      d="M300 60c70 0 140 30 180 90s40 140 10 210-90 120-170 120-160-40-200-110-40-160 0-230S230 60 300 60z"
    />
  </svg>
);
