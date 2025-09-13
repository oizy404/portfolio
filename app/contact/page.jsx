"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "WhatsApp",
    info: "+63 9483 474 194",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    info: "cmitzmia@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    info: "Davao City, Philippines",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] roundex-xl">
              <h3 className="text-4xl text-accent">Let`s work together</h3>
              <p className="text-white/60">
              Need a Wordpress Developer / Web Developer to work with? You can send me an Email using the email provided(form below is on progress). Have a nice day!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="web-design">Web Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Type your message here." />
              {/* button */}
              <Button size="md" className="max-2-40">Send Message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=> {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                    <p className="text-white-60">{item.title}</p>
                    <h3 className="text-white/60 text-lg">{item.info}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Contact;