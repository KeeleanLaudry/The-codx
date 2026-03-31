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
  FaChartPie,
  FaShoppingCart,
  FaGlobe,
  FaGraduationCap,
  FaHeartbeat,
  FaUsers,
  FaPlane,
  FaStore,
  FaUniversity,
  FaBuilding,
  FaComments,
  FaBriefcase
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
    const designPlatformsData = [
  { title: "SaaS Platforms", icon: <FaChartPie /> },
  { title: "E-Commerce Websites & Online Stores", icon: <FaShoppingCart /> },
  { title: "Corporate & Business Websites", icon: <FaGlobe /> },

  { title: "Learning & Education Platforms (LMS)", icon: <FaGraduationCap /> },
  { title: "Healthcare & Wellness Platforms", icon: <FaHeartbeat /> },
  { title: "Real Estate & Property Portals", icon: <FaUsers /> },

  { title: "Booking & Travel Platforms", icon: <FaPlane /> },
  { title: "Marketplaces & Multi-Vendor Platforms", icon: <FaStore /> },
  { title: "Finance & Banking Interfaces", icon: <FaUniversity /> },

  { title: "Analytics & Dashboard Tools", icon: <FaBuilding /> },
  { title: "Community & Social Platforms", icon: <FaComments /> },
  { title: "Custom Business Applications", icon: <FaBriefcase /> },
];
const featuresData = [
  {
    title: "User-Centered Design",
    desc: "Design experiences focused on user needs and behavior."
  },
  {
    title: "Wireframing & Prototyping",
    desc: "Create interactive layouts to visualize the user journey."
  },
  {
    title: "Responsive Design",
    desc: "Ensure seamless experience across mobile, tablet, and desktop."
  },
  {
    title: "Visual & Interaction Design",
    desc: "Craft engaging interfaces with intuitive interactions."
  },
  {
    title: "Usability Testing",
    desc: "Analyze user feedback to improve design and performance."
  }
];
const services = [
  {
    title: "User Research & Analysis",
    description: "Understand user behavior and needs through research, surveys, and data analysis to create effective design strategies."
  },
  {
    title: "Wireframing & Prototyping",
    description: "Create structured wireframes and interactive prototypes to visualize app and website layouts before development."
  },
  {
    title: "UI Design (User Interface)",
    description: "Design visually appealing and modern interfaces that align with your brand identity and enhance user engagement."
  },
  {
    title: "UX Design (User Experience)",
    description: "Craft seamless and intuitive user journeys that improve usability and overall satisfaction."
  },
  {
    title: "Responsive Design",
    description: "Ensure your designs adapt perfectly across all devices including mobile, tablet, and desktop."
  },
  {
    title: "Interaction Design",
    description: "Design smooth interactions and animations that enhance usability and create engaging user experiences."
  },
  {
    title: "Usability Testing",
    description: "Test designs with real users to identify issues and improve user experience before final launch."
  },
  {
    title: "Design System Creation",
    description: "Build consistent design systems with reusable components, styles, and guidelines for scalability."
  },
  {
    title: "Mobile App UI/UX Design",
    description: "Design intuitive and engaging mobile app interfaces focused on performance and user satisfaction."
  },
  {
    title: "Website UI/UX Design",
    description: "Create modern, responsive, and user-friendly website designs that drive engagement and conversions."
  },
  {
    title: "UX Audit & Improvement",
    description: "Analyze existing designs to identify gaps and improve usability, accessibility, and performance."
  },
  {
    title: "Accessibility & Inclusive Design",
    description: "Ensure your design is accessible to all users, including people with disabilities, following best practices."
  }
];
  return (
    <div>
        <HeroBanner
       title="Designs That Delight. Experiences That Convert."
       lines="From research to final visuals, we craft digital experiences that engage users, elevate brands, and drive measurable results."
       animateText={false}
      containerWidth="max-w-[700px]"
titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
     <Services 
             title="Our UI/UX Designing Services"
             services={services} 
           />
 <WebDevelopmentPhases
  phaseTitle="UI/UX Designing Phases"
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
      title: "Wireframing & Prototyping",
      description: "Crafting intuitive and engaging experiences. Our designers create wireframes and high-fidelity prototypes that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       color: "#FAD5A5"
    },
    {
      id: 3,
      title: "Visual Design & Interaction Detailing",
      description: "Secure and scalable coding practices. Our engineers build robust healthcare web solutions with a focus on performance and compliance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#e1a57d"

    },
    {
      id: 4,
      title: "Usability Testing & Iteration",
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
  title="Platform Types We Can Design"
  items={designPlatformsData}
/>
{/* <WebServicesSection
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
/> */}
        <VideoSection/>
<div className='max-w-5xl mx-auto mb-10 px-5 lg:px-0'>
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
