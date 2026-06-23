"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

/**
 * Reveal — fade-and-rise a block into view on scroll.
 * Replaces the repeated `initial / whileInView / transition` boilerplate.
 *
 * @param {string} as       - element/motion tag ("div" default)
 * @param {number} delay    - optional stagger delay (seconds)
 * @param {boolean} once    - only animate the first time (default true)
 */
const Reveal = ({
  children,
  className = "",
  as = "div",
  delay = 0,
  once = true,
  ...props
}) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
