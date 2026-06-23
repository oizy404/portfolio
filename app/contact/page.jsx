"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Reveal from "@/components/shared/Reveal";

// ---- Content (unchanged) ----------------------------------------------------
const info = [
  { icon: <FaPhoneAlt />, title: "WhatsApp", info: "+63 9483 474 194" },
  { icon: <FaEnvelope />, title: "Email", info: "cmitzmia@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", info: "Davao City, Philippines" },
];

const Contact = () => {
  return (
    <section className="section pt-28">
      <div className="container">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-16">
          {/* Form */}
          <Reveal as="div" className="order-2 xl:order-none xl:w-[55%]">
            {/* FIX: original had typos `roundex-xl` (→ rounded-2xl) and a stray
                hardcoded surface color; now uses the design-system card. */}
            <form className="card flex flex-col gap-6 p-8 md:p-10">
              <div className="space-y-3">
                <span className="eyebrow">Contact</span>
                <h2 className="h2 text-white">
                  Let`s work <span className="text-accent">together</span>
                </h2>
                <p className="text-white/60">
                  Need a Wordpress Developer / Web Developer to work with? You can send me an
                  Email using the email provided(form below is on progress). Have a nice day!
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Input type="text" placeholder="Firstname" aria-label="Firstname" />
                <Input type="text" placeholder="Lastname" aria-label="Lastname" />
                <Input type="email" placeholder="Email Address" aria-label="Email Address" />
                <Input type="tel" placeholder="Phone Number" aria-label="Phone Number" />
              </div>

              <Select>
                <SelectTrigger aria-label="Select a service">
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

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                aria-label="Message"
              />

              {/* FIX: original `max-2-40` was a typo and did nothing. */}
              <Button size="md" className="w-full sm:w-fit sm:px-10">
                Send Message
              </Button>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal as="div" delay={0.1} className="order-1 flex flex-1 items-center xl:order-none">
            <ul className="flex w-full flex-col gap-6">
              {info.map((item) => (
                <li key={item.title} className="card card-interactive flex items-center gap-6 p-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent">
                    {item.icon}
                  </div>
                  <div>
                    {/* FIX: original `text-white-60` was invalid (→ text-white/50). */}
                    <p className="text-sm text-white/50">{item.title}</p>
                    <h3 className="text-lg text-white">{item.info}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
