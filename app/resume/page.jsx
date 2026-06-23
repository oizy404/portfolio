"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaGraduationCap,
  FaBriefcase,
  FaUser,
  FaTools,
  FaDownload,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaAward,
} from "react-icons/fa";
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
  SiFigma,
  SiCanva,
  SiPhp,
} from "react-icons/si";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import CTA from "@/components/shared/CTA";
import { staggerContainer, staggerItem } from "@/lib/motion";

// ---- Content (unchanged) ----------------------------------------------------
const about = {
  title: "About Me",
  description:
    "Hello! I'm Mitz Castillo, a passionate Web Developer and WordPress Developer based in Davao City, Philippines. I have been a WordPress Developer for three years and have gained extensive experience handling tasks and projects as a full-stack developer. Currently working as a Freelance WordPress Developer since April 2023, I specialize in custom WordPress development, WooCommerce solutions, and website optimization. I am adaptable to various tools and technologies and always open to learning new skills and embracing opportunities for growth. My goal is to provide exceptional web solutions that meet clients' needs and exceed their expectations.",
  info: [
    { fieldName: "Full Name", fieldValue: "Mitz Mia Castillo", icon: <FaUser /> },
    { fieldName: "WhatsApp", fieldValue: "+63 9483 474 194", icon: <FaPhone /> },
    { fieldName: "Experience", fieldValue: "3+ Years", icon: <FaBriefcase /> },
    { fieldName: "Location", fieldValue: "Davao City, Philippines", icon: <FaMapMarkerAlt /> },
    { fieldName: "Email", fieldValue: "cmitzmia@gmail.com", icon: <FaEnvelope /> },
    { fieldName: "Languages", fieldValue: "English, Filipino", icon: <FaGlobe /> },
  ],
};

const experience = {
  icon: <FaBriefcase className="text-accent" />,
  title: "My Experience",
  description:
    "Professional journey and career milestones in web development and WordPress development.",
  items: [
    {
      company: "",
      position: "Freelance WordPress Developer",
      duration: "2024-2025",
      description:
        "Freelance WordPress development services specializing in custom implementations and client collaboration.",
      achievements: [
        "Apply Figma designs accurately to WordPress websites",
        "Fix WordPress Issues",
        "Collaborate directly with clients",
      ],
    },
    {
      company: "",
      position: "WordPress Woocommerce Developer",
      duration: "2022 - 2025",
      description:
        "Full-stack WordPress and WooCommerce development with focus on maintenance, customization, and optimization.",
      achievements: [
        "Maintain & Build WordPress/WooCommerce Websites",
        "Update WordPress/WooCommerce Website",
        "Redesign WordPress/WooCommerce Websites",
        "Fix Front end and Backend Issues",
        "Build custom features and plugin customization",
        "Theme customization",
        "API integration and payment method integration",
        "Ajax and Webhook Integration",
        "Manage multiple WordPress/WooCommerce sites using different hosting server",
        "Apply on page SEO practices",
        "Review and test web implementations",
        "Communicate directly with the clients",
      ],
    },
    {
      company: "",
      position: "Trainee Web Developer",
      duration: "2021-2022",
      description:
        "Completed comprehensive web development training with hands-on project experience.",
      achievements: [
        "Create a Performance Evaluation System, using the following:",
        "LARAVEL Framework",
        "HTML5 & CSS",
        "JS",
      ],
    },
  ],
};

const education = {
  icon: <FaGraduationCap className="text-accent" />,
  title: "Education",
  description:
    "Academic background and formal education in Information Technology and web development.",
  items: [
    {
      institution: "Assumption College of Davao",
      degree: "Bachelor of Science in Information Technology",
      duration: "2018 - 2022",
      description:
        "Comprehensive study of computer science fundamentals, software development, database management, and web technologies.",
      achievements: [
        "Completed capstone project in web development",
        "Active member of IT Student Organization",
      ],
    },
  ],
};

// Certifications data preserved (tab intentionally hidden, as in the original).
const certifications = {
  icon: <FaAward className="text-accent" />,
  title: "Certifications & Achievements",
  description: "Professional certifications and notable achievements in web development.",
  items: [
    {
      title: "WordPress Development Certification",
      issuer: "Online Course Platform",
      duration: "2022",
      description:
        "Advanced WordPress development including custom themes, plugins, and WooCommerce.",
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "FreeCodeCamp",
      duration: "2021",
      description: "HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles.",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      duration: "2021",
      description:
        "ES6, Regular Expressions, Debugging, Data Structures, and Algorithm Scripting.",
    },
  ],
};

const skills = {
  title: "Tech & Tools",
  description:
    "Technologies and tools I use to build modern, responsive, and scalable web applications.",
  categories: {
    frontend: {
      title: "Frontend Development",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5", level: "Advanced" },
        { icon: <FaCss3 />, name: "CSS3", level: "Advanced" },
        { icon: <FaJs />, name: "JavaScript", level: "Intermediate" },
        { icon: <SiNextdotjs />, name: "Next.js", level: "Basic" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Advanced" },
        { icon: <SiBootstrap />, name: "Bootstrap", level: "Advanced" },
        { icon: <SiJquery />, name: "jQuery", level: "Advanced" },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        { icon: <SiPhp />, name: "PHP", level: "Advanced" },
        { icon: <FaNodeJs />, name: "Node.js", level: "Basic" },
        { icon: <SiMysql />, name: "MySQL", level: "Advanced" },
      ],
    },
    cms: {
      title: "CMS & E-commerce",
      skills: [
        { icon: <SiWordpress />, name: "WordPress", level: "Expert" },
        { icon: <SiWoocommerce />, name: "WooCommerce", level: "Expert" },
      ],
    },
    tools: {
      title: "Development Tools",
      skills: [
        { icon: <SiGit />, name: "Git", level: "Advanced" },
        { icon: <SiGithub />, name: "GitHub", level: "Advanced" },
        { icon: <SiBitbucket />, name: "Bitbucket", level: "Advanced" },
        { icon: <SiPostman />, name: "Postman", level: "Intermediate" },
        { icon: <SiFigma />, name: "Figma", level: "Intermediate" },
        { icon: <SiCanva />, name: "Canva", level: "Intermediate" },
      ],
    },
  },
};

// Proficiency badges: monochrome scale with the lime accent reserved for the
// top tier — brighter = higher level. Keeps the palette cohesive.
const levelStyles = {
  Expert: "bg-accent/15 text-accent",
  Advanced: "bg-white/10 text-white/85",
  Intermediate: "bg-white/[0.07] text-white/60",
  Basic: "bg-white/5 text-white/45",
};

// ---- Shared timeline card (used by Experience + Education) -------------------
const TimelineCard = ({ duration, title, subtitle, description, achievements, heading }) => (
  <motion.div variants={staggerItem} className="card card-interactive p-8">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <div className="lg:w-1/3">
        <span className="tag-accent mb-3">{duration}</span>
        <h4 className="mb-2 text-xl font-bold text-white">{title}</h4>
        {subtitle && <p className="font-medium text-accent">{subtitle}</p>}
      </div>
      <div className="lg:w-2/3">
        <p className="mb-4 leading-relaxed text-white/60">{description}</p>
        <h5 className="mb-3 font-semibold text-white">{heading}</h5>
        <ul className="space-y-2">
          {achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span className="text-white/60">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Resume = () => {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <Section variant="accent" className="section-sm pt-28">
        <SectionHeading
          eyebrow="Get to know me"
          title={
            <>
              About <span className="text-accent">Me</span>
            </>
          }
          subtitle="Passionate WordPress Developer with 3+ years of experience creating exceptional web solutions. Explore my journey, skills, and achievements."
        />
        <Reveal delay={0.1} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg">Get In Touch</Button>
          </Link>
          <a href="/assets/Mitz.pdf" download="Mitz_Castillo_CV.pdf">
            <Button variant="outline" size="lg">
              <FaDownload />
              Download CV
            </Button>
          </a>
        </Reveal>
      </Section>

      {/* ===================== TABS ===================== */}
      <Section>
        <Tabs defaultValue="about" className="flex flex-col gap-12 xl:flex-row xl:gap-16">
          {/* Tab list */}
          <Reveal as="div" className="xl:w-[320px] xl:flex-shrink-0">
            <TabsList className="card flex w-full flex-col gap-3 p-4 xl:sticky xl:top-28">
              {[
                { value: "about", icon: <FaUser />, label: "About Me" },
                { value: "experience", icon: <FaBriefcase />, label: "Experience" },
                { value: "education", icon: <FaGraduationCap />, label: "Education" },
                { value: "skills", icon: <FaTools />, label: "Tech & Tools" },
              ].map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className="justify-start gap-3">
                  {tab.icon}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>

          {/* Tab content */}
          <div className="min-h-[60vh] w-full">
            {/* About */}
            <TabsContent value="about">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8"
              >
                <motion.div variants={staggerItem}>
                  <h3 className="flex items-center gap-3 text-3xl font-bold">
                    <FaUser className="text-accent" />
                    {about.title}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-white/60">
                    {about.description}
                  </p>
                </motion.div>

                <div className="grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
                  {about.info.map((item) => (
                    <motion.div
                      key={item.fieldName}
                      variants={staggerItem}
                      className="card card-interactive p-5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-white/50">{item.fieldName}</p>
                          <p className="truncate font-medium text-white">{item.fieldValue}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8"
              >
                <motion.div variants={staggerItem}>
                  <h3 className="flex items-center gap-3 text-3xl font-bold">
                    {experience.icon}
                    {experience.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-white/60">{experience.description}</p>
                </motion.div>

                <ScrollArea className="h-[520px] pr-4">
                  <div className="space-y-6">
                    {experience.items.map((item, i) => (
                      <TimelineCard
                        key={i}
                        duration={item.duration}
                        title={item.position}
                        subtitle={item.company}
                        description={item.description}
                        achievements={item.achievements}
                        heading="Key Achievements:"
                      />
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8"
              >
                <motion.div variants={staggerItem}>
                  <h3 className="flex items-center gap-3 text-3xl font-bold">
                    {education.icon}
                    {education.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-white/60">{education.description}</p>
                </motion.div>

                <ScrollArea className="h-[520px] pr-4">
                  <div className="space-y-6">
                    {education.items.map((item, i) => (
                      <TimelineCard
                        key={i}
                        duration={item.duration}
                        title={item.degree}
                        subtitle={item.institution}
                        description={item.description}
                        achievements={item.achievements}
                        heading="Achievements:"
                      />
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8"
              >
                <motion.div variants={staggerItem}>
                  <h3 className="flex items-center gap-3 text-3xl font-bold">
                    <FaTools className="text-accent" />
                    {skills.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-white/60">{skills.description}</p>
                </motion.div>

                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-12">
                    {Object.entries(skills.categories).map(([key, category], categoryIndex) => (
                      <motion.div key={key} variants={staggerItem} className="space-y-6">
                        <h4 className="flex items-center gap-3 text-2xl font-bold text-white">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                            {categoryIndex + 1}
                          </span>
                          {category.title}
                        </h4>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                          {category.skills.map((skill) => (
                            <TooltipProvider key={skill.name} delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="card card-interactive group w-full p-6">
                                  <div className="flex flex-col items-center gap-3">
                                    <span className="text-4xl text-white/80 transition-colors duration-300 group-hover:text-accent">
                                      {skill.icon}
                                    </span>
                                    <div className="text-center">
                                      <p className="text-sm font-medium text-white">{skill.name}</p>
                                      <span
                                        className={`mt-2 inline-block rounded-full px-2 py-1 text-xs font-medium ${
                                          levelStyles[skill.level] || levelStyles.Basic
                                        }`}
                                      >
                                        {skill.level}
                                      </span>
                                    </div>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">
                                    {skill.name} - {skill.level}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </Section>

      {/* ===================== CTA ===================== */}
      <CTA
        title="Let`s Work Together"
        description="Ready to bring your project to life? I`m always excited to work on new challenges and help clients achieve their goals."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "View My Work", href: "/work" }}
      />
    </>
  );
};

export default Resume;
