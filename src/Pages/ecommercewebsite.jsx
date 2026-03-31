import React from 'react'
import HeroBanner from "../Home/HeroBanner";
import WebDevelopmentPhases from '../web-development/WebDevelopmentPhases ';
import TechnologiesSection from '../web-development/technologiesweuse';
import WebServicesSection from '../web-development/WebServicesSection';
import PortalCard from '../Home/card';
import rejuvenation from "../assets/rejuvenation-procedures-300x113.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import realestate from "../assets/real-estate.jpg";
import business from "../assets/business.jpg";
import health from "../assets/health.jpg"; 
import BrandsGrid from '../Home/logos';
import ContactSection from '../Contact/contactForm';
import VideoSection from  "../mobile-app-development/videosection";
import Appsection from "../mobile-app-development/appproject";
import PlatformTypes from '../mobile-app-development/platform';
import Services from '../web-development/servicecard';
import DifferenceSection from '../web-development/DifferenceDeliver';

import {
  FaShoppingCart,
  FaUsers,
  FaBuilding,
  FaDownload,
  FaGem,
  FaSpa,
  FaRunning,
  FaTv
} from "react-icons/fa";
export default function mobileappdevelopment() {
     const industries = [
      {
        title: "Beauty & Wellness",
        description: "Creating powerful brand identities that attract and retain customers.",
        image: rejuvenation
      },
      {
        title: "Ecommerce",
        description: "Optimising digital storefronts for maximum sales and customer retention.",
        image: ecommerce
      },
      {
        title: "Real Estate",
        description: "Expanding market reach and driving high-value conversions in real estate.",
        image: realestate
      },
      {
        title: "Business Consultancy",
        description: "Building stronger, more resilient businesses with expert consultancy.",
        image: business
      },
      {
        title: "Health Care",
        description: "Empowering healthier communities with expert healthcare consultancy.",
        image: health
      }
    ];
    const ecommercePlatformsData = [
  { title: "B2C & B2B E-Commerce Websites", icon: <FaShoppingCart /> },
  { title: "Marketplaces & Multi-Vendor Platforms", icon: <FaUsers /> },
  { title: "Subscription-Based Online Stores", icon: <FaBuilding /> },

  { title: "Digital Product Stores", icon: <FaDownload /> },
  { title: "Luxury & High-End Retail Websites", icon: <FaGem /> },
  { title: "Booking & Service-Based E-Commerce", icon: <FaSpa /> },

  { title: "Wholesale Platforms with Bulk Pricing", icon: <FaRunning /> },
  { title: "Custom E-Commerce Portals", icon: <FaTv /> },
];
const featuresData = [
  {
    title: "Custom Online Store Development",
    desc: "Build fully functional e-commerce websites tailored to your business."
  },
  {
    title: "Product & Catalog Management",
    desc: "Easily manage products, categories, pricing, and inventory."
  },
  {
    title: "Secure Payment Integration",
    desc: "Enable safe and smooth transactions with multiple payment options."
  },
  {
    title: "Shopping Cart & Checkout",
    desc: "Provide a seamless and user-friendly buying experience."
  },
  {
    title: "Order Tracking & Management",
    desc: "Track orders, manage deliveries, and enhance customer satisfaction."
  }
];
const services = [
  {
    title: "E-commerce Website Development",
    description: "Build scalable and user-friendly online stores with seamless navigation and high performance."
  },
  {
    title: "Custom E-commerce Solutions",
    description: "Get tailor-made e-commerce platforms designed to match your unique business requirements."
  },
  {
    title: "Shopping Cart Development",
    description: "Implement secure and intuitive shopping cart systems for smooth and hassle-free checkout experiences."
  },
  {
    title: "Product Management Systems",
    description: "Easily manage products, categories, pricing, and inventory with efficient admin dashboards."
  },
  {
    title: "Payment Gateway Integration",
    description: "Enable secure and multiple payment options including cards, UPI, and digital wallets."
  },
  {
    title: "Order Management System",
    description: "Track and manage orders, returns, and customer data efficiently in real-time."
  },
  {
    title: "E-commerce UI/UX Design",
    description: "Design attractive and conversion-focused interfaces to enhance user experience and boost sales."
  },
  {
    title: "Mobile Commerce (M-commerce)",
    description: "Deliver seamless shopping experiences across mobile devices with responsive and optimized designs."
  },
  {
    title: "E-commerce SEO Optimization",
    description: "Improve visibility and rankings of your online store to drive organic traffic and increase sales."
  },
  {
    title: "Performance Optimization",
    description: "Boost website speed and performance for better user experience and higher conversion rates."
  },
  {
    title: "E-commerce Security Solutions",
    description: "Protect your store with advanced security measures, secure transactions, and data encryption."
  },
  {
    title: "Maintenance & Support",
    description: "Ensure smooth operation with regular updates, bug fixes, and ongoing technical support."
  }
];
  return (
    <div>
        <HeroBanner
       title="E-commerce Website Development Smart Stores. Seamless Shopping."
       lines="From concept to launch, we create conversion-focused online stores that deliver outstanding user experience and drive sales"
       animateText={false}
     containerWidth="max-w-[800px]"
titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
    <Services 
         title="Our E-commerce Services"
         services={services} 
       />
   <WebDevelopmentPhases
  phaseTitle="E-Commerce Development Phases"
  phaseDescription="CODX streamlines healthcare web development with a proven process: Discovery, UI/UX Design, Secure Development, and Ongoing Support for long-term success."
  phasesData={[
    {
      id: 1,
      title: "Discovery Phase",
      description: "We dive deep into your requirements, goals, and target audience. This foundational step ensures alignment and a clear roadmap for success.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           color: "#FF7F50"
    },
    {
      id: 2,
      title: "UI/UX Design Phase",
      description: "Crafting intuitive and engaging experiences. Our designers create wireframes and high-fidelity prototypes that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       color: "#FAD5A5"
    },
    {
      id: 3,
      title: "Development Phase",
      description: "Secure and scalable coding practices. Our engineers build robust healthcare web solutions with a focus on performance and compliance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#e1a57d"

    },
    {
      id: 4,
      title: "Testing and Deployment Phase",
      description: "Rigorous quality assurance and seamless deployment. We ensure your application is reliable, secure, and ready for users, followed by ongoing support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#FBCEB1"

    }
  ]}
  />
         <DifferenceSection
              title="The Difference We Deliver"
              features={featuresData}
              bgColor="#F7F3EE"
              accentColor="#2ABFBF"
              textColor="#0D1F3C"
            />
        <Appsection/>
<PlatformTypes
  title="Platform Types We Can Develop"
  items={ecommercePlatformsData}
/>
<WebServicesSection
  title="End-to-End E-Commerce Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "UI/UX Design",
      desc: "Beautiful, conversion-focused shopping experiences that keep users engaged and buying."
    },
    {
      title: "Custom Online Store Development",
      desc: "Fully tailored e-commerce websites that grow with your business."
    },
    {
      title: "Platform Migration",
      desc: "Move from outdated systems to modern, secure, and high-performance platforms with zero downtime."
    },
    {
      title: "Payment & Shipping Integrations",
      desc: "Seamless checkout experiences with secure payment gateways and flexible shipping solutions."
    },
    {
      title: "Product & Inventory Management Systems",
      desc: "Advanced product organization, stock alerts, and management tools to simplify operations."
    },
    {
      title: "Headless & Progressive E-Commerce",
      desc: "Modern, fast, and scalable architecture for future-ready online stores."
    },
    {
      title: "Performance Optimization & SEO",
      desc: "Lightning-fast loading, mobile-first design, and search-friendly structure to boost traffic and sales."
    },
    {
      title: "Marketing & Analytics Integration",
      desc: "Built-in support for Google Analytics, Meta Pixel, email marketing, and automation tools."
    },
     {
      title: "Maintenance & Support",
      desc: "Keep your store updated, secure, and running at peak performance 24/7."
    },
    {
      title: "E-Commerce Consultation",
      desc: "Get expert advice on technology stacks, growth strategies, and scaling your online business."
    }
  ]}
/>
        <VideoSection/>
<div className='max-w-5xl mx-auto mb-10  px-5 lg:px-0'>
<div className='section-heading '>
            Industries We Serve
          </div>
<div className='section-subtitle '>
  Serving diverse industries, from retail to healthcare, with tailored digital strategies to meet unique business needs.

</div>
</div>
<div className="relative max-w-5xl mx-auto">

  {industries.map((item, index) => (
    <div
      key={index}
      className="sticky top-16 mb-10"
    >
      <PortalCard
        {...item}
        reverse={index % 2 !== 0}
      />
    </div>
  ))}

</div>
        <TechnologiesSection/>
<BrandsGrid title="Trusted by 350+ Clients Worldwide" />
<ContactSection/>
    </div>
  )
}
