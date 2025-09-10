"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent , TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
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
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiJquery, SiGithub, SiGit, SiBitbucket, SiWordpress, SiWoocommerce, SiBootstrap, SiMysql, SiPostman, SiFigma, SiCanva, SiPhp }from "react-icons/si";

const about = {
  title: 'About Me',
  description: "Hello! I'm Mitz Castillo, a passionate Web Developer and WordPress Developer based in Davao City, Philippines. I have been a WordPress Developer for three years and have gained extensive experience handling tasks and projects as a full-stack developer. I am adaptable to various tools and technologies and always open to learning new skills and embracing opportunities for growth. My goal is to provide exceptional web solutions that meet clients' needs and exceed their expectations.",
  info: [
    {
      fieldName: "Full Name",
      fieldValue: "Mitz Mia Castillo",
      icon: <FaUser className="text-accent" />
    },
    {
      fieldName: "Phone",
      fieldValue: "+63 9483 474 194",
      icon: <FaPhone className="text-accent" />
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
      icon: <FaBriefcase className="text-accent" />
    },
    {
      fieldName: "Location",
      fieldValue: "Davao City, Philippines",
      icon: <FaMapMarkerAlt className="text-accent" />
    },
    {
      fieldName: "Email",
      fieldValue: "cmitzmia@gmail.com",
      icon: <FaEnvelope className="text-accent" />
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Filipino",
      icon: <FaGlobe className="text-accent" />
    },
  ]
}

const experience = {
  icon: <FaBriefcase className="text-accent" />,
  title: "My Experience",
  description: "Professional journey and career milestones in web development and WordPress development.",
  items: [
    {
      company: "Freelance",
      position: "WordPress Fullstack Developer",
      duration: "2022 - Present",
      description: "Developing custom WordPress themes and plugins, WooCommerce solutions, and full-stack web applications. Working with clients to deliver high-quality, responsive websites that meet business requirements.",
      achievements: [
        "Built custom WordPress websites",
        "Developed custom WooCommerce solutions",
        "Maintained client satisfaction rate"
      ]
    },
    {
      company: "Assumption College of Davao",
      position: "Trainee Web Developer",
      duration: "2021 - 2022",
      description: "Completed comprehensive web development training program focusing on modern web technologies, responsive design, and best practices in software development.",
      achievements: [
        "Completed 500+ hours of training",
        "Learned modern web development stack",
      ]
    },
  ]
}

const education = {
  icon: <FaGraduationCap className="text-accent" />,
  title: "Education",
  description: "Academic background and formal education in Information Technology and web development.",
  items: [
    {
      institution: "Assumption College of Davao",
      degree: "Bachelor of Science in Information Technology",
      duration: "2018 - 2022",
      description: "Comprehensive study of computer science fundamentals, software development, database management, and web technologies.",
      achievements: [
        // "Graduated with honors",
        // "Dean's List for 3 consecutive semesters",
        "Completed capstone project in web development",
        "Active member of IT Student Organization"
      ]
    },
  ]
}

// Certifications and achievements
const certifications = {
  icon: <FaAward className="text-accent" />,
  title: "Certifications & Achievements",
  description: "Professional certifications and notable achievements in web development.",
  items: [
    {
      title: "WordPress Development Certification",
      issuer: "Online Course Platform",
      duration: "2022",
      description: "Advanced WordPress development including custom themes, plugins, and WooCommerce."
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "FreeCodeCamp",
      duration: "2021",
      description: "HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles."
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      duration: "2021",
      description: "ES6, Regular Expressions, Debugging, Data Structures, and Algorithm Scripting."
    },
  ]
}

const skills = {
  title: "Tech & Tools",
  description: "Technologies and tools I use to build modern, responsive, and scalable web applications.",
  categories: {
    frontend: {
      title: "Frontend Development",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5", level: "Advanced" },
        { icon: <FaCss3 />, name: "CSS3", level: "Advanced" },
        { icon: <FaJs />, name: "JavaScript", level: "Intermediate" },
        { icon: <FaReact />, name: "React.js", level: "Intermediate" },
        { icon: <SiNextdotjs />, name: "Next.js", level: "Intermediate" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Advanced" },
        { icon: <SiBootstrap />, name: "Bootstrap", level: "Advanced" },
        { icon: <SiJquery />, name: "jQuery", level: "Advanced" },
      ]
    },
    backend: {
      title: "Backend Development",
      skills: [
        { icon: <SiPhp />, name: "PHP", level: "Advanced" },
        { icon: <FaNodeJs />, name: "Node.js", level: "Intermediate" },
        { icon: <SiMysql />, name: "MySQL", level: "Advanced" },
      ]
    },
    cms: {
      title: "CMS & E-commerce",
      skills: [
        { icon: <SiWordpress />, name: "WordPress", level: "Expert" },
        { icon: <SiWoocommerce />, name: "WooCommerce", level: "Expert" },
      ]
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
      ]
    }
  }
}

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

const Resume = () => {
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
              About <span className="text-accent">Me</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Passionate WordPress Developer with 2+ years of experience creating exceptional web solutions.
              Explore my journey, skills, and achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="default" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg font-semibold">
                  <span>Get In Touch</span>
                </Button>
              </Link>
              {/* <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg">
                <FaDownload className="text-lg" />
                <span>Download CV</span>
              </Button> */}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-20"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="about"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 bg-[#1a1a1f] p-6 rounded-xl">
                <TabsTrigger value="about" className="w-full justify-start gap-3 text-left">
                  <FaUser className="text-lg" />
                  About Me
                </TabsTrigger>
                <TabsTrigger value="experience" className="w-full justify-start gap-3 text-left">
                  <FaBriefcase className="text-lg" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="w-full justify-start gap-3 text-left">
                  <FaGraduationCap className="text-lg" />
                  Education
                </TabsTrigger>
                {/* <TabsTrigger value="certifications" className="w-full justify-start gap-3 text-left">
                  <FaAward className="text-lg" />
                  Certifications
                </TabsTrigger> */}
                <TabsTrigger value="skills" className="w-full justify-start gap-3 text-left">
                  <FaTools className="text-lg" />
                  Tech & Tools
                </TabsTrigger>
              </TabsList>
            </motion.div>
            {/* Tab Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="min-h-[70vh] w-full"
            >
              {/* About Me */}
              <TabsContent value="about" className="w-full">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-4xl font-bold flex items-center gap-3 justify-center xl:justify-start">
                      {about.icon || <FaUser className="text-accent" />}
                      {about.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-4 leading-relaxed">
                      {about.description}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-[#1a1a1f] p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-white/60 text-sm">{item.fieldName}</p>
                            <p className="text-white font-medium">{item.fieldValue}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </TabsContent>

              {/* Experience */}
              <TabsContent value="experience" className="w-full">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-4xl font-bold flex items-center gap-3 justify-center xl:justify-start">
                      {experience.icon}
                      {experience.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-4">
                      {experience.description}
                    </p>
                  </motion.div>

                  <ScrollArea className="h-[500px]">
                    <div className="space-y-8">
                      {experience.items.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="bg-[#1a1a1f] p-8 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
                        >
                          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                            <div className="lg:w-1/3">
                              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3">
                                {item.duration}
                              </div>
                              <h4 className="text-xl font-bold text-white mb-2">{item.position}</h4>
                              <p className="text-accent font-medium">{item.company}</p>
                            </div>
                            <div className="lg:w-2/3">
                              <p className="text-white/70 mb-4 leading-relaxed">{item.description}</p>
                              <div className="space-y-2">
                                <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                                <ul className="space-y-2">
                                  {item.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} className="flex items-start gap-3">
                                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                      <span className="text-white/70">{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
              {/* Education */}
              <TabsContent value="education" className="w-full">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-4xl font-bold flex items-center gap-3 justify-center xl:justify-start">
                      {education.icon}
                      {education.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-4">
                      {education.description}
                    </p>
                  </motion.div>

                  <ScrollArea className="h-[500px]">
                    <div className="space-y-8">
                      {education.items.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="bg-[#1a1a1f] p-8 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
                        >
                          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                            <div className="lg:w-1/3">
                              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3">
                                {item.duration}
                              </div>
                              <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                              <p className="text-accent font-medium">{item.institution}</p>
                            </div>
                            <div className="lg:w-2/3">
                              <p className="text-white/70 mb-4 leading-relaxed">{item.description}</p>
                              <div className="space-y-2">
                                <h5 className="text-white font-semibold mb-3">Achievements:</h5>
                                <ul className="space-y-2">
                                  {item.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} className="flex items-start gap-3">
                                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                      <span className="text-white/70">{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              {/* Certifications */}
              <TabsContent value="certifications" className="w-full">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-4xl font-bold flex items-center gap-3 justify-center xl:justify-start">
                      {certifications.icon}
                      {certifications.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-4">
                      {certifications.description}
                    </p>
                  </motion.div>

                  <ScrollArea className="h-[500px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {certifications.items.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="bg-[#1a1a1f] p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <FaAward className="text-accent text-xl" />
                            </div>
                            <div className="flex-1">
                              <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium mb-3">
                                {item.duration}
                              </div>
                              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                              <p className="text-accent font-medium mb-3">{item.issuer}</p>
                              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
              {/* Skills */}
              <TabsContent value="skills" className="w-full">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <motion.div variants={itemVariants}>
                    <h3 className="text-4xl font-bold flex items-center gap-3 justify-center xl:justify-start">
                      <FaTools className="text-accent" />
                      {skills.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-4">
                      {skills.description}
                    </p>
                  </motion.div>

                  <ScrollArea className="h-[600px]">
                    <div className="space-y-12">
                      {Object.entries(skills.categories).map(([categoryKey, category], categoryIndex) => (
                        <motion.div
                          key={categoryKey}
                          variants={itemVariants}
                          className="space-y-6"
                        >
                          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                              <span className="text-accent font-bold text-sm">{categoryIndex + 1}</span>
                            </div>
                            {category.title}
                          </h4>

                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {category.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                variants={itemVariants}
                                className="group"
                              >
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full">
                                      <div className="bg-[#1a1a1f] p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 group-hover:scale-105">
                                        <div className="flex flex-col items-center gap-3">
                                          <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                            {skill.icon}
                                          </div>
                                          <div className="text-center">
                                            <p className="text-white font-medium text-sm">{skill.name}</p>
                                            <div className="mt-2">
                                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                                                skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                                                'bg-yellow-500/20 text-yellow-400'
                                              }`}>
                                                {skill.level}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="capitalize">{skill.name} - {skill.level}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>
      </motion.div>

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
              Let's Work Together
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Ready to bring your project to life? I'm always excited to work on new challenges
              and help clients achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="default" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg font-semibold">
                  <span>Start a Project</span>
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg">
                  <span>View My Work</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Resume;