"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import { GlowOrb } from "./Decorations";

/**
 * CTA — the call-to-action band that previously lived (duplicated) at the
 * bottom of the Home, Resume, Services and Work pages. Now a single component
 * driven by props, so copy and layout stay consistent everywhere.
 *
 * @param {string} title
 * @param {string} description
 * @param {{label:string, href:string}} primary
 * @param {{label:string, href:string}} secondary
 */
const CTA = ({ title, description, primary, secondary }) => {
  return (
    <section className="accent-band section-sm">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-accent opacity-50"
      />
      <GlowOrb className="left-[12%] top-0 h-72 w-72 bg-accent/20" />
      <GlowOrb className="bottom-0 right-[12%] h-72 w-72 bg-accent/10" />
      <div className="container relative z-10 text-center">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="h2 text-white">{title}</h2>
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </p>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            {primary && (
              <Link href={primary.href}>
                <Button size="lg">{primary.label}</Button>
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href}>
                <Button variant="outline" size="lg">
                  {secondary.label}
                </Button>
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
