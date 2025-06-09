"use client";

import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight} from "react-icons/bs";


const services = [
  {
    num: "01",
    title: "Theme Customization",
    description: "Modifying existing WordPress themes to better fit the client's needs."
  },
  {
    num: "02",
    title: "Plugin Development & Customization",
    description: "Developing custom plugins to add specific features and functionalities to the WordPress site. Tweaking and extending existing plugins to enhance their functionality or ensure compatibility with the site."
  },
  {
    num: "03",
    title: "Performance Optimization",
    description: "Improving the speed and performance of WordPress sites through various techniques such as caching, image optimization, and code minification."
  },
  {
    num: "04",
    title: "Responsive Design",
    description: "Ensuring the website is mobile-friendly and looks great on all devices."
  },
  {
    num: "05",
    title: "Maintenance & Support",
    description: "Offering ongoing maintenance and support services to keep the site updated, backed up, and running smoothly."
  },

  
  {
    num: "06",
    title: "WooCommerce Setup & Configuration",
    description: "Setting up and configuring WooCommerce for new or existing WordPress sites."
  },
  {
    num: "07",
    title: "Custom WooCommerce Development",
    description: "Developing custom solutions to extend WooCommerce functionality, such as custom product types, checkout processes, and integrations."
  },
  {
    num: "08",
    title: "Payment Gateway Integration",
    description: "Integrating various payment gateways to facilitate secure online transactions."
  },
  {
    num: "9",
    title: "Woocommerce Shipping & Tax Configuration",
    description: "Setting up and configuring shipping methods, zones, and tax rates based on client requirements."
  },
  {
    num: "10",
    title: "Woocommerce Product Management",
    description: "Assisting with the creation, management, and organization of products, including variations and attributes."
  },
  {
    num: "11",
    title: "Woocommerce Inventory Management",
    description: "Implementing solutions for efficient inventory tracking and management."
  },
  {
    num: "12",
    title: "Woocommerce Maintenance & Support",
    description: "Providing ongoing support and maintenance for WooCommerce stores, including updates, backups, and troubleshooting."
  },
  {
    num: "13",
    title: "Setup or Create Contact Forms",
    description: "Setting up or creating contact forms for clients using various plugins and services."
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial = {{ opacity: 0 }}
          animate = {{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  {/* <Link href="/" className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link> */}
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;



const woocommerceServices = [
  {
    num: "01",
    title: "WooCommerce Setup & Configuration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    num: "02",
    title: "Custom WooCommerce Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    num: "03",
    title: "Payment Gateway Integration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    num: "04",
    title: "Shipping & Tax Configuration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    num: "05",
    title: "Product Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    num: "06",
    title: "Inventory Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
];