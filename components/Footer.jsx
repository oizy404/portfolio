import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import Social from "./Social";
import { navLinks } from "@/lib/nav";

// New footer (UI enhancement — reuses existing contact info, no new content).
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-primary">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + blurb */}
          <div className="space-y-4">
            <Link href="/" aria-label="Mitz — home">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Mitz<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              Web Developer &amp; WordPress Full-Stack Developer building clean,
              high-performance websites and WooCommerce stores.
            </p>
            <Social
              containerStyles="flex items-center gap-3 pt-2"
              iconStyles="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white/60 transition-all hover:border-accent hover:text-accent"
            />
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[...navLinks, { name: "contact", path: "/contact" }].map(
                (link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-sm capitalize text-white/60 transition-colors hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Get in touch
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:cmitzmia@gmail.com"
                  className="flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <FaEnvelope className="text-accent" />
                  cmitzmia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent" />
                Davao City, Philippines
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-center text-xs text-white/40">
          © {year} Mitz Mia Castillo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
