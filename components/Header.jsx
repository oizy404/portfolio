"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  // Track scroll to fade in a solid blurred background once the user scrolls,
  // so the header floats cleanly over the hero but stays legible elsewhere.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 text-white transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-primary/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-5 lg:py-6">
        {/* Logo */}
        <Link href="/" className="group" aria-label="Mitz — home">
          <span className="font-display text-2xl font-bold tracking-tight">
            Mitz
            <span className="text-accent transition-colors group-hover:text-accent-soft">
              .
            </span>
          </span>
        </Link>

        {/* Desktop nav + contact */}
        <div className="hidden items-center gap-6 lg:flex">
          <Nav />
          <Link href="/contact">
            <Button size="sm">Contact</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
