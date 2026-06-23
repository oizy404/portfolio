"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight, BsWordpress, BsShop, BsGraphUp } from "react-icons/bs";
import {
  FaCode,
  FaRocket,
  FaMobile,
  FaTools,
  FaCreditCard,
  FaTruck,
  FaBoxes,
  FaEnvelope,
  FaCog,
  FaChartLine,
  FaKeyboard,
  FaFileAlt,
  FaShieldAlt,
  FaDatabase,
  FaPlug,
  FaPalette,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import CTA from "@/components/shared/CTA";
import { staggerContainer, staggerItem } from "@/lib/motion";

// ---- Content (unchanged) ----------------------------------------------------
const wordpressServices = [
  {
    num: "01",
    title: "WordPress Setup & Installation",
    description:
      "Complete WordPress installation and configuration, including hosting setup, domain configuration, SSL certificates, and initial security hardening.",
    icon: <FaCog className="text-2xl" />,
    category: "WordPress",
  },
  {
    num: "02",
    title: "Theme Customization",
    description:
      "Modifying existing WordPress themes to better fit the client's needs and brand identity.",
    icon: <FaCode className="text-2xl" />,
    category: "WordPress",
  },
  {
    num: "03",
    title: "Plugin Development & Customization",
    description:
      "Developing custom plugins to add specific features and functionalities to the WordPress site. Tweaking and extending existing plugins to enhance their functionality or ensure compatibility with the site.",
    icon: <FaTools className="text-2xl" />,
    category: "WordPress",
  },
  {
    num: "04",
    title: "Performance Optimization",
    description:
      "Improving the speed and performance of WordPress sites through various techniques such as caching, image optimization, and code minification.",
    icon: <FaRocket className="text-2xl" />,
    category: "WordPress",
  },
  {
    num: "05",
    title: "Responsive Design",
    description: "Ensuring the website is mobile-friendly and looks great on all devices.",
    icon: <FaMobile className="text-2xl" />,
    category: "WordPress",
  },
  {
    num: "06",
    title: "WordPress Redesign & Development",
    description:
      "Complete WordPress website redesign and redevelopment including modern design implementation, React hooks integration, and performance optimization for enhanced user experience.",
    icon: <FaPalette className="text-2xl" />,
    category: "WordPress",
  },
  {
    num: "07",
    title: "Maintenance & Support",
    description:
      "Offering ongoing maintenance and support services to keep the site updated, backed up, and running smoothly.",
    icon: <FaTools className="text-2xl" />,
    category: "WordPress",
  },
];

const woocommerceServices = [
  {
    num: "08",
    title: "WooCommerce Setup & Configuration",
    description:
      "Setting up and configuring WooCommerce for new or existing WordPress sites with optimal settings.",
    icon: <BsShop className="text-2xl" />,
    category: "WooCommerce",
  },
  {
    num: "09",
    title: "Custom WooCommerce Development",
    description:
      "Developing custom solutions to extend WooCommerce functionality, such as custom product types, checkout processes, and integrations.",
    icon: <FaCode className="text-2xl" />,
    category: "WooCommerce",
  },
  {
    num: "10",
    title: "WooCommerce Redesign & Development",
    description:
      "Complete WooCommerce store redesign and redevelopment including modern e-commerce design, checkout optimization, and performance enhancements for better conversion rates.",
    icon: <FaPalette className="text-2xl" />,
    category: "WooCommerce",
  },
  {
    num: "11",
    title: "Payment Gateway Integration",
    description: "Integrating various payment gateways to facilitate secure online transactions.",
    icon: <FaCreditCard className="text-2xl" />,
    category: "WooCommerce",
  },
  {
    num: "12",
    title: "Shipping & Tax Configuration",
    description:
      "Setting up and configuring shipping methods, zones, and tax rates based on client requirements.",
    icon: <FaTruck className="text-2xl" />,
    category: "WooCommerce",
  },
  {
    num: "13",
    title: "Product Management",
    description:
      "Assisting with the creation, management, and organization of products, including variations and attributes.",
    icon: <FaBoxes className="text-2xl" />,
    category: "WooCommerce",
  },
  {
    num: "14",
    title: "Inventory Management",
    description: "Implementing solutions for efficient inventory tracking and management.",
    icon: <FaBoxes className="text-2xl" />,
    category: "WooCommerce",
  },
  {
    num: "15",
    title: "WooCommerce Maintenance & Support",
    description:
      "Providing ongoing support and maintenance for WooCommerce stores, including updates, backups, and troubleshooting.",
    icon: <FaTools className="text-2xl" />,
    category: "WooCommerce",
  },
];

const seoServices = [
  {
    num: "16",
    title: "Keyword Research & Strategy",
    description:
      "Basic keyword research to identify relevant search terms and develop content strategies that help improve website visibility.",
    icon: <FaKeyboard className="text-2xl" />,
    category: "SEO",
  },
  {
    num: "17",
    title: "On-Page SEO Optimization",
    description:
      "Optimizing website content, meta tags, headers, and internal linking structure to improve search engine visibility.",
    icon: <FaFileAlt className="text-2xl" />,
    category: "SEO",
  },
  {
    num: "18",
    title: "Technical SEO",
    description:
      "Improving website technical aspects including site speed, mobile responsiveness, and basic SEO technical implementations.",
    icon: <FaTools className="text-2xl" />,
    category: "SEO",
  },
  {
    num: "19",
    title: "SEO Analytics & Reporting",
    description:
      "Setting up basic tracking and providing reports on SEO performance and website traffic improvements.",
    icon: <FaChartLine className="text-2xl" />,
    category: "SEO",
  },
];

const additionalServices = [
  {
    num: "20",
    title: "Contact Forms Setup",
    description:
      "Setting up or creating contact forms for clients using various plugins and services.",
    icon: <FaEnvelope className="text-2xl" />,
    category: "Additional",
  },
  {
    num: "21",
    title: "Frontend Issue Fixes",
    description:
      "Diagnosing and fixing frontend issues including UI bugs, responsive design problems, JavaScript errors, and user interface improvements.",
    icon: <FaCode className="text-2xl" />,
    category: "Additional",
  },
  {
    num: "22",
    title: "Backend Issue Fixes",
    description:
      "Resolving backend problems including database issues, server errors, API problems, and performance bottlenecks for optimal website functionality.",
    icon: <FaDatabase className="text-2xl" />,
    category: "Additional",
  },
  {
    num: "23",
    title: "Login Security & Two-Factor Authentication",
    description:
      "Implementing advanced login security measures including two-factor authentication, login attempt limiting, and secure user access controls.",
    icon: <FaShieldAlt className="text-2xl" />,
    category: "Additional",
  },
  {
    num: "24",
    title: "Site Restoration Services",
    description:
      "Professional website restoration from backups, disaster recovery, and emergency site recovery services to get your site back online quickly.",
    icon: <FaTools className="text-2xl" />,
    category: "Additional",
  },
  {
    num: "25",
    title: "Backup Monitoring & Maintenance",
    description:
      "Ongoing backup system monitoring, maintenance, and verification to ensure your website data is always protected and recoverable.",
    icon: <FaDatabase className="text-2xl" />,
    category: "Additional",
  },
  {
    num: "26",
    title: "API Integrations & Custom Connections",
    description:
      "Custom API integrations and third-party service connections to extend your website functionality and automate business processes.",
    icon: <FaPlug className="text-2xl" />,
    category: "Additional",
  },
];

// ---- Reusable service grid (replaces 4 copy-pasted grid blocks) -------------
const ServiceGroup = ({ services }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
  >
    {services.map((service) => (
      <ServiceCard key={service.num} service={service} />
    ))}
  </motion.div>
);

const Services = () => {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <Section variant="accent" className="section-sm pt-28">
        <SectionHeading
          eyebrow="What I offer"
          title={
            <>
              My <span className="text-accent">Services</span>
            </>
          }
          subtitle="Comprehensive WordPress and WooCommerce development services to bring your digital vision to life. From custom themes to e-commerce solutions, I deliver quality results that drive success."
        />
        <Reveal delay={0.1} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg">
              Get Started
              <BsArrowDownRight />
            </Button>
          </Link>
          <Link href="/work">
            <Button variant="outline" size="lg">
              View My Works
            </Button>
          </Link>
        </Reveal>
      </Section>

      {/* ===================== WORDPRESS ===================== */}
      <Section>
        <SectionHeading
          icon={<BsWordpress className="text-lg" />}
          eyebrow="WordPress"
          title="WordPress Development"
          subtitle="Professional WordPress development services to create powerful, scalable websites"
          className="mb-14"
        />
        <ServiceGroup services={wordpressServices} />
      </Section>

      {/* ===================== WOOCOMMERCE ===================== */}
      <Section variant="surface">
        <SectionHeading
          icon={<BsShop className="text-lg" />}
          eyebrow="WooCommerce"
          title="WooCommerce Solutions"
          subtitle="Complete e-commerce solutions to power your online store and drive sales"
          className="mb-14"
        />
        <ServiceGroup services={woocommerceServices} />
      </Section>

      {/* ===================== SEO ===================== */}
      <Section>
        <SectionHeading
          icon={<BsGraphUp className="text-lg" />}
          eyebrow="SEO"
          title="SEO Services"
          subtitle="Search Engine Optimization services to improve your website`s visibility and drive organic traffic"
          className="mb-14"
        />
        <ServiceGroup services={seoServices} />
      </Section>

      {/* ===================== ADDITIONAL ===================== */}
      <Section variant="surface">
        <SectionHeading
          eyebrow="And more"
          title="Additional Services"
          subtitle="Extra services to enhance your website`s functionality and user experience"
          className="mb-14"
        />
        <ServiceGroup services={additionalServices} />
      </Section>

      {/* ===================== CTA ===================== */}
      <CTA
        title="Ready to Start Your Project?"
        description="Let`s discuss your requirements and create something amazing together. I`m here to help bring your vision to life."
        primary={{ label: "Get In Touch", href: "/contact" }}
        secondary={{ label: "View My Work", href: "/work" }}
      />
    </>
  );
};

// ---- ServiceCard ------------------------------------------------------------
const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="card card-interactive group flex flex-col p-8"
    >
      <div className="mb-6 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
            {service.icon}
          </div>
          <span className="font-mono text-3xl font-bold text-transparent text-outline transition-all duration-500 group-hover:text-outline-hover">
            {service.num}
          </span>
        </div>
        <span className="tag-accent">{service.category}</span>
      </div>

      <h3 className="mb-4 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-accent">
        {service.title}
      </h3>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-white/60">
        {service.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
        <Link href="/contact" aria-label={`Enquire about ${service.title}`} className="ml-4">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <BsArrowDownRight className="text-lg" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Services;
