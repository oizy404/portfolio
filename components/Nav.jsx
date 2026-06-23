"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { navLinks } from "@/lib/nav";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1">
      {navLinks.map((link) => {
        const isActive = link.path === pathname;
        return (
          <Link
            key={link.path}
            href={link.path}
            aria-current={isActive ? "page" : undefined}
            className={`relative rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
              isActive ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {/* Animated pill that slides between active items (shared layoutId) */}
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 -z-10 rounded-full bg-accent/15 ring-1 ring-accent/30"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
