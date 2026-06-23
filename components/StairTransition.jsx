"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import Stairs from "./Stairs";

// Renders the accent "stairs" curtain wipe on every route change.
// (The redundant second full-screen fade overlay was removed — PageTransition
// now handles the content reveal, so we no longer double-cover the page.)
const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
