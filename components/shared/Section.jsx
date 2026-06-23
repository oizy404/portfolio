"use client";

import { cn } from "@/lib/utils";
import { GlowOrb } from "./Decorations";

/**
 * Section — consistent page section wrapper.
 * Standardizes vertical rhythm and background treatment so individual
 * pages no longer repeat `py-20 bg-... relative` everywhere.
 *
 * @param {"default"|"surface"|"accent"} variant - background treatment
 */
const Section = ({
  children,
  id,
  variant = "default",
  className = "",
  containerClassName = "",
  ...props
}) => {
  const variants = {
    default: "bg-primary",
    surface: "bg-surface/40",
    accent: "accent-band",
  };

  return (
    <section
      id={id}
      className={cn("section relative", variants[variant], className)}
      {...props}
    >
      {/* Accent band gets a faint radial glow + ambient orbs for depth */}
      {variant === "accent" && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-radial-accent opacity-60"
          />
          <GlowOrb className="left-[8%] top-0 h-72 w-72 bg-accent/15" />
          <GlowOrb className="bottom-0 right-[8%] h-72 w-72 bg-accent/10" />
        </>
      )}
      <div className={cn("container relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
