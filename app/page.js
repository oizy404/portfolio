import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { ScrollArea } from "@/components/ui/scroll-area";

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
import { SiTailwindcss, SiNextdotjs, SiJquery, SiGithub, SiGit, SiBitbucket, SiWordpress, SiWoocommerce, SiBootstrap, SiMysql, SiPostman }from "react-icons/si";


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

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer | Wordpress Developer</span>
            <h1 className="h1 mb-6">
              Hello I’m <br/> <span className="text-accent">Mitz Castillo</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            A hardworking, adaptable and collaborative developer who is passionate about helping clients turn their visions into reality. A creative problem-solver that is dedicated to creating stunning, functional websites that provide an exceptional user experience.            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload />
              </Button> */}
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Stats /> */}

      <div className="flex flex-col gap-[30px] text-center xl:text-left justify-center">
        <h3 className="text-accent text-4xl font-bold text-center">{skills.title}</h3>
        <ScrollArea className="h-[300px]">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] justify-center">
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
    </section>
  )
}

export default Home
