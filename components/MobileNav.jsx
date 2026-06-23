"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Social from "./Social";
import { navLinks } from "@/lib/nav";

// Mobile menu shares the same link source as the desktop nav, plus Contact.
const links = [...navLinks, { name: "contact", path: "/contact" }];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex items-center justify-center text-accent"
        aria-label="Open menu"
      >
        <CiMenuFries className="text-3xl" />
      </SheetTrigger>

      <SheetContent className="flex flex-col border-l border-line bg-primary">
        {/* Logo */}
        <div className="mb-16 mt-12 text-center">
          <Link href="/" onClick={() => setOpen(false)}>
            <span className="font-display text-3xl font-bold tracking-tight">
              Mitz<span className="text-accent">.</span>
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex flex-col items-center gap-6">
          {links.map((link) => {
            const isActive = link.path === pathname;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`text-lg font-medium capitalize transition-colors ${
                  isActive
                    ? "text-accent underline decoration-accent decoration-2 underline-offset-8"
                    : "text-white/70 hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Socials */}
        <div className="mt-auto pb-10 pt-12">
          <Social
            containerStyles="flex items-center justify-center gap-4"
            iconStyles="flex h-11 w-11 items-center justify-center rounded-full border border-line text-white/70 transition-all hover:border-accent hover:text-accent"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
