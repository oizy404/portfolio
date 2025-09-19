"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { BsArrowUpRight, BsGithub, BsEye, BsCode, BsCalendar3 } from "react-icons/bs";
import { FaWordpress, FaLaravel, FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp } from "react-icons/fa";
import { SiElementor, SiMysql, SiBootstrap, SiJquery, SiTailwindcss } from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: '01',
    category: 'Full-Stack Development',
    title: 'Clinic Management System',
    description: "Comprehensive automated clinic management system built with Laravel PHP framework. Features include patient management, appointment scheduling, medical records, billing system, and reporting dashboard.",
    features: [
      "Patient management system",
      "Appointment scheduling",
      "Medical records database",
      "Billing and invoicing",
      "Analytics dashboard"
    ],
    stack: [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> }
    ],
    image: '/assets/work/1.png',
    live: "",
    github: "",
    duration: "6 months",
    client: "Medical Clinic",
    year: "2022"
  },
  {
    num: '02',
    category: 'WordPress Development',
    title: 'Corporate Website from Figma',
    description: "Professional corporate website development from Figma design mockups using Elementor page builder. Implemented pixel-perfect design with custom animations, contact forms, and content management system.",
    features: [
      "Pixel-perfect Figma implementation",
      "Custom animations and interactions",
      "Contact form integration",
      "Content management system",
      "Multi-page architecture",
      "Plugin Customization"
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> }
    ],
    image: '/assets/work/2.png',
    live: "",
    github: "",
    duration: "3 weeks",
    client: "Upwork Client",
    year: "2025"
  },
  {
    num: '03',
    category: 'Wordpress Redesign',
    title: 'Blog Redesign',
    description: "A complete redesign of the website`s blog section, including the Header, Footer, Blog Listing Page, and Single Blog Page. The goal was to deliver a modern, responsive, and user-friendly interface that improves readability, navigation, and overall engagement.",
    features: [
      "Custom WordPress theme customization",
      "Redesigned header and footer for better branding",
      "Responsive blog listing and single post layouts",
      "Enhanced SEO structure for better visibility"
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> }
    ],
    image: '/assets/work/3.png',
    live: "",
    github: "",
    duration: "2 weeks",
    client: "Upwork Client",
    year: "2025"
  },
  {
    num: '04',
    category: 'Wordpress Redesign',
    title: 'Home Page & Blog Redesign',
    description: "A complete redesign of the website`s homepage and blog section, including the Header, Footer, Blog Listing Page, and Single Blog Page. The goal was to deliver a modern, responsive, and user-friendly interface that improves readability, navigation, and overall engagement.",
    features: [
      "Custom WordPress theme customization",
      "Redesigned header and footer for better branding",
      "Redesigned homepage and add motion effects",
      "Responsive blog listing and single post layouts",
      "Enhanced SEO structure for better visibility"
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> }
    ],
    image: '/assets/work/4.png',
    live: "",
    github: "",
    duration: "1 week",
    client: "Upwork Client",
    year: "2025"
  },
  {
    num: '05',
    category: 'WordPress Development',
    title: 'Develop WordPress Website from Figma',
    description: "Converted Figma design mockups into a fully functional WordPress website using Elementor. Delivered a responsive, pixel-perfect layout with smooth animations, optimized performance, and easy content management.",
    features: [
      "Responsive, pixel-perfect implementation from Figma",
      "Develop Homepage",
      "Develop Blog Page",
      "Develop Sinle Post Page",
      "Custom animations and interactive elements",
      "Cross-browser and mobile compatibility"
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> }
    ],
    image: '/assets/work/5.png',
    live: "",
    github: "",
    duration: "4days",
    client: "Upwork Client",
    year: "2025"
  },
  {
    num: '06',
    category: 'WordPress Redesign',
    title: 'Redesign Existing Website',
    description: "Redesigned the homepage and created a modern contact page to improve branding, usability, and lead generation. Focused on delivering a clean, responsive design with optimized user experience.",
    features: [
      "Modern homepage redesign with improved layout",
      "Custom-designed contact page with form integration",
      "Responsive design across all devices",
      "Enhanced branding and visual consistency",
      "Optimized performance and fast loading speed"
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> }
    ],
    image: '/assets/work/6.png',
    live: "",
    github: "",
    duration: "1 day",
    client: "Upwork Client",
    year: "2025"
  },

];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Explore my latest projects showcasing expertise in WordPress development,
              full-stack applications, and modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="default" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg font-semibold">
                  <span>Start a Project</span>
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg">
                  <span>View Services</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-20"
      >
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col xl:flex-row xl:gap-[60px]"
          >
            {/* Project Details */}
            <motion.div
              variants={itemVariants}
              className="w-full xl:w-[50%] flex flex-col justify-center order-2 xl:order-none"
            >
              <div className="flex flex-col gap-8">
                {/* Project Header */}
                <div className="space-y-4">
                  <motion.div
                    key={project.num}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-8xl leading-none font-extrabold text-transparent text-outline"
                  >
                    {project.num}
                  </motion.div>

                  <div className="space-y-2">
                    <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                    <h2 className="text-4xl xl:text-5xl font-bold leading-tight text-white">
                      {project.title}
                    </h2>
                  </div>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
                  <div className="text-center">
                    <BsCalendar3 className="text-accent text-xl mx-auto mb-2" />
                    <p className="text-white/60 text-sm">Duration</p>
                    <p className="text-white font-medium">{project.duration}</p>
                  </div>
                  <div className="text-center">
                    <BsEye className="text-accent text-xl mx-auto mb-2" />
                    <p className="text-white/60 text-sm">Client</p>
                    <p className="text-white font-medium">{project.client}</p>
                  </div>
                  <div className="text-center">
                    <BsCode className="text-accent text-xl mx-auto mb-2" />
                    <p className="text-white/60 text-sm">Year</p>
                    <p className="text-white font-medium">{project.year}</p>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-4">
                  <p className="text-white/70 leading-relaxed text-lg">{project.description}</p>
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1f] rounded-lg border border-white/10 hover:border-accent/50 transition-all duration-300"
                      >
                        <span className="text-accent text-lg">{item.icon}</span>
                        <span className="text-white font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {/* <div className="flex items-center gap-4 pt-6">
                  <Link href={project.live || "#"}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="default"
                            size="lg"
                            className="flex items-center gap-2 px-6 py-3"
                            disabled={!project.live}
                          >
                            <BsArrowUpRight className="text-lg" />
                            <span>Live Demo</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{project.live ? "View Live Project" : "Demo not available"}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={project.github || "#"}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="lg"
                            className="flex items-center gap-2 px-6 py-3"
                            disabled={!project.github}
                          >
                            <BsGithub className="text-lg" />
                            <span>Source Code</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{project.github ? "View Source Code" : "Source code private"}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>*/}
              </div> 
            </motion.div>
            {/* Project Images */}
            <motion.div
              variants={itemVariants}
              className="w-full xl:w-[50%] order-1 xl:order-none"
            >
              <div className="relative">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:h-[600px] mb-12 rounded-xl overflow-hidden"
                  onSlideChange={handleSlideChange}
                  loop={true}
                >
                  {projects.map((projectItem, index) => (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[400px] xl:h-[600px] relative group flex justify-center items-center bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl overflow-hidden">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>

                        {/* Image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={projectItem.image}
                            alt={`${projectItem.title} - ${projectItem.category}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Project Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-white font-bold text-lg">{projectItem.title}</h3>
                                <p className="text-accent text-sm">{projectItem.category}</p>
                              </div>
                              <div className="text-4xl font-bold text-white/20">
                                {projectItem.num}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  {/* Enhanced Slider Buttons */}
                  <WorkSliderButtons
                    containerStyles="flex gap-4 absolute right-6 bottom-6 z-30"
                    btnStyles="bg-white/10 backdrop-blur-sm hover:bg-accent text-white hover:text-primary text-xl w-12 h-12 flex justify-center items-center transition-all duration-300 rounded-full border border-white/20 hover:border-accent"
                    iconsStyles="text-lg"
                  />
                </Swiper>

                {/* Project Counter */}
                <div className="absolute top-6 right-6 z-30">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-white text-sm font-medium">
                      {project.num} / {projects.length.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 relative"
      >
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let`s collaborate to bring your vision to life. I`m here to help you create
              exceptional web solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="default" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg font-semibold">
                  <span>Get Started</span>
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg">
                  <span>View Services</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Work;