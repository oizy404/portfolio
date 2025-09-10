"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJquery, SiGithub, SiGit, SiBitbucket, SiWordpress, SiWoocommerce, SiBootstrap, SiMysql, SiPostman, SiPhp, SiFigma, SiCanva }from "react-icons/si";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const skills = {
  title: "TECH & TOOLS",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiJquery />,
      name: "JQuery",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaReact />,
      name: "basic react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "basic node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "basic next.js",
    },
    {
      icon: <SiPhp />,
      name: "PHP",
    },
    {
      icon: <SiMysql />,
      name: "MySql Sql",
    },
    {
      icon: <SiWordpress />,
      name: "wordpress",
    },
    {
      icon: <SiWoocommerce />,
      name: "woocommerce",
    },
    {
      icon: <SiGithub />,
      name: "github",
    },
    {
      icon: <SiGit />,
      name: "git",
    },
    {
      icon: <SiBitbucket />,
      name: "bitbucket",
    },
    {
      icon: <SiPostman />,
      name: "postman",
    },
    {
      icon: <SiFigma />,
      name: "basic figma",
    },
    {
      icon: <SiCanva />,
      name: "canva",
    },
  ]
}

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-screen flex items-center relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/10 z-1"></div>
        
        <div className="container mx-auto h-full relative z-10">
          <div className="flex flex-col xl:flex-row items-center xl:gap-16 justify-center xl:justify-between xl:pt-8 xl:pb-24 h-full max-w-7xl mx-auto">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center xl:text-left order-2 xl:order-none flex-1 xl:max-w-2xl xl:pr-8"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-accent font-medium tracking-wider uppercase"
              >
                Web Developer | WordPress Full-Stack Developer
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h1 mb-6 mt-4"
              >
                Hello I'm <br/> 
                <span className="text-accent relative">
                  Mitz Mia Castillo
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-0 left-0 h-1 bg-accent/30 rounded-full"
                  />
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="max-w-[600px] mb-12 text-white/80 text-lg leading-relaxed"
              >
                A hardworking, adaptable and collaborative developer who is passionate about helping clients turn their visions into reality. A creative problem-solver that is dedicated to creating stunning, functional websites that provide an exceptional user experience.
              </motion.p>
              
              {/* CTA buttons and socials */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col xl:flex-row items-center gap-8"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/work">
                    <Button variant="default" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg font-semibold">
                      <span>View My Work</span>
                    </Button>
                  </Link>
                  <a href="/assets/Mitz.pdf" download="Mitz_Castillo_CV.pdf">
                    <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg">
                      <span>Download CV</span>
                      <FiDownload />
                    </Button>
                  </a>
                </div>
                
                {/* <div className="mb-8 xl:mb-0">
                  <Social 
                    containerStyles="flex gap-6" 
                    iconStyles="w-12 h-12 border-2 border-accent rounded-full flex
                    justify-center items-center text-accent text-xl hover:bg-accent
                    hover:text-primary hover:scale-110 transition-all duration-500"
                  />
                </div> */}
              </motion.div>
            </motion.div>
            
            {/* photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 xl:order-none mt-[200px] mb-12 md:mt-12 xl:mt-0 xl:mb-0 flex-1 xl:max-w-xl flex justify-center xl:justify-center xl:pl-8"
            >
              <Photo />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-[#1a1a1f] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <Stats />
      </motion.section> */}

      {/* Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-primary relative"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[30px] text-center xl:text-left justify-center"
          >
            <div className="text-center mb-12">
              <h3 className="text-accent text-4xl font-bold mb-4">{skills.title}</h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 xl:gap-8">
              {skills.skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/20">
                        <div className="text-4xl group-hover:text-accent transition-all duration-300 mb-2">
                          {skill.icon}
                        </div>
                        <span className="text-xs text-white/60 group-hover:text-white transition-all duration-300 capitalize text-center px-2">
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
            </div>
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
              Ready to bring your ideas to life?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let`s collaborate and create something amazing together. I`m always excited to work on new projects and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="default" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg font-semibold">
                  <span>Get In Touch</span>
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg">
                  <span>View Works</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
