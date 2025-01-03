"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent , TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiJquery, SiGithub, SiGit, SiBitbucket, SiWordpress, SiWoocommerce, SiBootstrap, SiMysql, SiPostman }from "react-icons/si";

const about = {
  title: 'About me',
  description: "Hello! I'm Mitz Castillo, a passionate Web Developer and WordPress Developer based in Davao City, Philippines. I have been a WordPress Developer for two years and have gained extensive experience handling tasks and projects as a full-stack developer. I am adaptable to various tools and technologies and always open to learning new skills and embracing opportunities for growth. My goal is to provide exceptional web solutions that meet clients' needs and exceed their expectations.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Mitz Castillo",
    },
    {
      fieldName: "Phone:",
      fieldValue: "+63 9483 474 194",
    },
    {
      fieldName: "Experience:",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Filipino",
    },
    {
      fieldName: "Email:",
      fieldValue: "cmitzmia@gmail.com",
    },
    {
      fieldName: "Language:",
      fieldValue: "English",
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "",
  items: [
    {
      company: " --- ",
      position: "Wordpress Fullstack Developer",
      duration: "2022-Present"
    },
    {
      company: "Assumption College of Davao",
      position: "Trainee Web Developer",
      duration: "2021-2022"
    },
  ]
}

const education = {
  icon: "/assets/resume/badge.svg",
  title: "Education",
  description: "",
  items: [
    {
      institution: "Assumption College of Davao",
      degree: "Bachelor of Science in Information Technology",
      duration: "2018-2022"
    },
  ]
}

const skills = {
  title: "Tech & Tools",
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
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiJquery />,
      name: "JQuery",
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
      icon: <SiTailwindcss />,
      name: "tailwind.css",
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

  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Tech & Tools</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
          {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-3 px-3 rounded-xl flex flex-col justify-start items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h6 className="text-md max-w-[260px] min-h-[6px] text-left lg:text-left">{item.position}</h6>
                          <div className="flex items-center gap-2">
                            {/* dot */}
                            {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-3 px-3 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h6 className="text-md max-w-[260px] min-h-[6px] text-left lg:text-left">{item.degree}</h6>
                          <div className="flex items-center gap-2">
                            {/* dot */}
                            {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index)=>{
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index)=> {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-1">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-lg">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;