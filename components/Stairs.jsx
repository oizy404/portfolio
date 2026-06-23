import { motion } from "framer-motion";

// Wipe animation for each "step". Steps sweep off-screen on enter and
// back across on exit, producing a clean curtain reveal between pages.
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const STEPS = 6;

// Reverse the index so the stagger flows in a consistent direction.
const reverseIndex = (index) => STEPS - index - 1;

const Stairs = () => {
  return (
    <>
      {[...Array(STEPS)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.32,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.06,
          }}
          // Recolored from a harsh white to an on-brand accent gradient,
          // and sped up for a snappier feel.
          className="relative h-full w-full bg-gradient-to-b from-accent to-accent-hover"
        />
      ))}
    </>
  );
};

export default Stairs;
