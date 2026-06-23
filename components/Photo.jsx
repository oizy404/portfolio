"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient glow behind the portrait */}
      <div
        aria-hidden
        className="absolute h-[260px] w-[260px] rounded-full bg-accent/25 blur-[90px] xl:h-[420px] xl:w-[420px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        // Was a ~2.4s delayed reveal — now snappy.
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* Portrait */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative h-[280px] w-[280px] mix-blend-lighten xl:h-[470px] xl:w-[470px]">
            <Image
              src="/assets/profile.png"
              priority
              quality={100}
              fill
              sizes="(max-width: 1280px) 280px, 470px"
              alt="Mitz Mia Castillo"
              className="object-contain"
            />
          </div>
        </div>

        {/* Animated accent ring */}
        <motion.svg
          className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="256"
            r="250"
            stroke="#8488f0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
