"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiJquery,
  SiGithub,
  SiGit,
  SiBitbucket,
  SiWordpress,
  SiWoocommerce,
  SiBootstrap,
  SiMysql,
  SiPostman,
  SiPhp,
  SiFigma,
  SiCanva,
} from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import CTA from "@/components/shared/CTA";
import { GlowOrb, DotGrid } from "@/components/shared/Decorations";
import { staggerContainer, staggerItem } from "@/lib/motion";

// ---- Content (unchanged) ----------------------------------------------------
const skills = {
  title: "TECH & TOOLS",
  description: "Technologies and tools I use to bring ideas to life",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <SiJquery />, name: "JQuery" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "basic node.js" },
    { icon: <SiNextdotjs />, name: "basic next.js" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <SiMysql />, name: "MySql Sql" },
    { icon: <SiWordpress />, name: "wordpress" },
    { icon: <SiWoocommerce />, name: "woocommerce" },
    { icon: <SiGithub />, name: "github" },
    { icon: <SiGit />, name: "git" },
    { icon: <SiBitbucket />, name: "bitbucket" },
    { icon: <SiPostman />, name: "postman" },
    { icon: <SiFigma />, name: "basic figma" },
    { icon: <SiCanva />, name: "canva" },
  ],
};

const Home = () => {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        {/* Layered background: radial accent glow + faint grid + ambient orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-radial-accent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid [background-size:64px_64px] opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <DotGrid className="text-white/[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <GlowOrb className="left-[-8%] top-[8%] h-[380px] w-[380px] bg-accent/15" />
        <GlowOrb className="bottom-[6%] right-[-6%] h-[420px] w-[420px] bg-accent/10" />

        <div className="container relative z-10">
          <div className="flex min-h-[calc(100svh-96px)] flex-col items-center justify-center gap-10 py-16 lg:flex-row lg:justify-between lg:gap-12 lg:py-0">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 max-w-2xl text-center lg:order-none lg:text-left"
            >
              {/* Availability status pill */}
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for freelance work
              </span>

              <span className="eyebrow justify-center lg:justify-start">
                Web Developer | WordPress Full-Stack Developer
              </span>

              <h1 className="h1 mt-5">
                Hello I`m <br />
                <span className="relative text-accent">
                  Mitz Mia Castillo
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-accent/40"
                  />
                </span>
              </h1>

              <p className="mx-auto mb-10 mt-6 max-w-[600px] text-base leading-relaxed text-white/70 md:text-lg lg:mx-0">
                A hardworking, adaptable and collaborative developer who is
                passionate about helping clients turn their visions into
                reality. A creative problem-solver that is dedicated to creating
                stunning, functional websites that provide an exceptional user
                experience.
              </p>

              {/* CTAs + socials */}
              <div className="flex flex-col items-center gap-8 lg:flex-row">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/work">
                    <Button size="lg">View My Work</Button>
                  </Link>
                  <a href="/assets/Mitz.pdf" download="Mitz_Castillo_CV.pdf">
                    <Button variant="outline" size="lg">
                      Download CV
                      <FiDownload />
                    </Button>
                  </a>
                </div>

                <Social
                  containerStyles="flex gap-3"
                  iconStyles="flex h-11 w-11 items-center justify-center rounded-full border border-line text-white/70 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                />
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-none"
            >
              <Photo />
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </section>

      {/* ===================== TECH & TOOLS ===================== */}
      <Section variant="surface">
        <SectionHeading
          eyebrow="What I work with"
          title={<span className="text-gradient">{skills.title}</span>}
          subtitle={skills.description}
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6"
        >
          {skills.skillList.map((skill) => (
            <motion.div key={skill.name} variants={staggerItem}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="card card-interactive group flex h-[120px] w-full flex-col items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-accent/70">
                    <span className="text-4xl text-white/80 transition-colors duration-300 group-hover:text-accent">
                      {skill.icon}
                    </span>
                    <span className="px-2 text-center font-mono text-xs capitalize text-white/50 transition-colors duration-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ===================== CTA ===================== */}
      <CTA
        title="Ready to bring your ideas to life?"
        description="Let`s collaborate and create something amazing together. I`m always excited to work on new projects and challenges."
        primary={{ label: "Get In Touch", href: "/contact" }}
        secondary={{ label: "View Works", href: "/work" }}
      />
    </>
  );
};

export default Home;
