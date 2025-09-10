"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight, BsWordpress, BsShop } from "react-icons/bs";
import { FaCode, FaRocket, FaMobile, FaTools, FaCreditCard, FaTruck, FaBoxes, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// WordPress Development Services
const wordpressServices = [
  {
    num: "01",
    title: "Theme Customization",
    description: "Modifying existing WordPress themes to better fit the client's needs and brand identity.",
    icon: <FaCode className="text-2xl" />,
    category: "WordPress"
  },
  {
    num: "02",
    title: "Plugin Development & Customization",
    description: "Developing custom plugins to add specific features and functionalities to the WordPress site. Tweaking and extending existing plugins to enhance their functionality or ensure compatibility with the site.",
    icon: <FaTools className="text-2xl" />,
    category: "WordPress"
  },
  {
    num: "03",
    title: "Performance Optimization",
    description: "Improving the speed and performance of WordPress sites through various techniques such as caching, image optimization, and code minification.",
    icon: <FaRocket className="text-2xl" />,
    category: "WordPress"
  },
  {
    num: "04",
    title: "Responsive Design",
    description: "Ensuring the website is mobile-friendly and looks great on all devices.",
    icon: <FaMobile className="text-2xl" />,
    category: "WordPress"
  },
  {
    num: "05",
    title: "Maintenance & Support",
    description: "Offering ongoing maintenance and support services to keep the site updated, backed up, and running smoothly.",
    icon: <FaTools className="text-2xl" />,
    category: "WordPress"
  },
];

// WooCommerce Services
const woocommerceServices = [
  {
    num: "06",
    title: "WooCommerce Setup & Configuration",
    description: "Setting up and configuring WooCommerce for new or existing WordPress sites with optimal settings.",
    icon: <BsShop className="text-2xl" />,
    category: "WooCommerce"
  },
  {
    num: "07",
    title: "Custom WooCommerce Development",
    description: "Developing custom solutions to extend WooCommerce functionality, such as custom product types, checkout processes, and integrations.",
    icon: <FaCode className="text-2xl" />,
    category: "WooCommerce"
  },
  {
    num: "08",
    title: "Payment Gateway Integration",
    description: "Integrating various payment gateways to facilitate secure online transactions.",
    icon: <FaCreditCard className="text-2xl" />,
    category: "WooCommerce"
  },
  {
    num: "09",
    title: "Shipping & Tax Configuration",
    description: "Setting up and configuring shipping methods, zones, and tax rates based on client requirements.",
    icon: <FaTruck className="text-2xl" />,
    category: "WooCommerce"
  },
  {
    num: "10",
    title: "Product Management",
    description: "Assisting with the creation, management, and organization of products, including variations and attributes.",
    icon: <FaBoxes className="text-2xl" />,
    category: "WooCommerce"
  },
  {
    num: "11",
    title: "Inventory Management",
    description: "Implementing solutions for efficient inventory tracking and management.",
    icon: <FaBoxes className="text-2xl" />,
    category: "WooCommerce"
  },
  {
    num: "12",
    title: "WooCommerce Maintenance & Support",
    description: "Providing ongoing support and maintenance for WooCommerce stores, including updates, backups, and troubleshooting.",
    icon: <FaTools className="text-2xl" />,
    category: "WooCommerce"
  },
];

// Additional Services
const additionalServices = [
  {
    num: "13",
    title: "Contact Forms Setup",
    description: "Setting up or creating contact forms for clients using various plugins and services.",
    icon: <FaEnvelope className="text-2xl" />,
    category: "Additional"
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

const Services = () => {
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
              My <span className="text-accent">Services</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive WordPress and WooCommerce development services to bring your digital vision to life.
              From custom themes to e-commerce solutions, I deliver quality results that drive success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="default" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg font-semibold">
                  <span>Get Started</span>
                  <BsArrowDownRight className="text-lg" />
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg">
                  <span>View My Works</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* WordPress Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-primary"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BsWordpress className="text-4xl text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                WordPress Development
              </h2>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Professional WordPress development services to create powerful, scalable websites
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {wordpressServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* WooCommerce Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-[#1a1a1f] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BsShop className="text-4xl text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                WooCommerce Solutions
              </h2>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Complete e-commerce solutions to power your online store and drive sales
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {woocommerceServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Additional Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-primary"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Extra services to enhance your website's functionality and user experience
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
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
              Let's discuss your requirements and create something amazing together.
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button variant="default" size="lg" className="uppercase flex items-center gap-2 px-8 py-6 text-lg font-semibold">
                  <span>Get In Touch</span>
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

// ServiceCard Component
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-[#1a1a1f] rounded-xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
            {service.icon}
          </div>
          <div className="text-3xl font-bold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
            {service.num}
          </div>
        </div>
        <div className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
          {service.category}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-all duration-300 mb-4 leading-tight">
        {service.title}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="w-full h-px bg-gradient-to-r from-accent/50 to-transparent"></div>
        <Link href="/contact" className="ml-4">
          <Button variant="ghost" size="sm" className="text-accent hover:text-primary hover:bg-accent p-2 rounded-full">
            <BsArrowDownRight className="text-lg" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Services;