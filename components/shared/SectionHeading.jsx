"use client";

import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

/**
 * SectionHeading — eyebrow + title + subtitle block.
 * Used by every page's section intros; keeps typographic hierarchy consistent.
 *
 * @param {string}  eyebrow  - small mono label above the title
 * @param {node}    title    - heading content (can include <span> emphasis)
 * @param {string}  subtitle - supporting paragraph
 * @param {node}    icon     - optional icon rendered beside the eyebrow
 * @param {boolean} centered - center-align the block (default true)
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  icon,
  centered = true,
  className = "",
}) => {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        centered ? "mx-auto max-w-2xl text-center items-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <span className="eyebrow">
          {icon}
          {eyebrow}
        </span>
      )}
      {title && <h2 className="h2">{title}</h2>}
      {subtitle && (
        <p className="text-base leading-relaxed text-white/60 md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
