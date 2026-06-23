"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Fades + lifts the page content into view after the stairs wipe clears.
// (Old version painted a full-screen overlay and waited ~1s — removed for a
// faster, lighter reveal.)
const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
