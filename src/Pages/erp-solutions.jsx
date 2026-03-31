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
  FaIndustry,
  FaChartLine,
  FaHeartbeat,
  FaLaptopCode,
  FaGraduationCap,
  FaHotel,
  FaUserTie,
  FaBuilding
} from "react-icons/fa";

export default function mobileappdevelopment() {
  const industriesData = [
  { title: "Retail & E-commerce", icon: <FaShoppingCart /> },
  { title: "Manufacturing & Supply Chain", icon: <FaIndustry /> },
  { title: "Finance & Accounting", icon: <FaChartLine /> },

  { title: "Healthcare & Pharmaceuticals", icon: <FaHeartbeat /> },
  { title: "Technology & SaaS", icon: <FaLaptopCode /> },
  { title: "Education & Institutions", icon: <FaGraduationCap /> },

  { title: "Hospitality & Travel", icon: <FaHotel /> },
  { title: "Professional Services", icon: <FaUserTie /> },
  { title: "Real Estate & Property Management", icon: <FaBuilding /> },
];

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
    const featuresData = [
  {
    title: "Integrated Business Management",
    desc: "Manage all business operations from a single unified system."
  },
  {
    title: "Inventory & Stock Control",
    desc: "Track stock levels, orders, and deliveries in real-time."
  },
  {
    title: "Accounting & Finance",
    desc: "Automate billing, invoices, and financial reporting."
  },
  {
    title: "HR & Payroll Management",
    desc: "Handle employee data, attendance, and salary processing."
  },
  {
    title: "Reports & Analytics",
    desc: "Get insights with detailed reports for better decision-making."
  }
];
const services = [
  {
    title: "ERP Consulting",
    description: "Analyze your business processes and recommend the best ERP solutions to improve efficiency and productivity."
  },
  {
    title: "Custom ERP Development",
    description: "Build tailored ERP systems that align with your business needs and streamline operations."
  },
  {
    title: "ERP Implementation",
    description: "Ensure smooth deployment of ERP systems with proper setup, configuration, and integration."
  },
  {
    title: "ERP Integration",
    description: "Integrate ERP with existing systems like CRM, HR, and accounting for seamless data flow."
  },
  {
    title: "Inventory Management",
    description: "Track stock levels, manage inventory, and optimize supply chain operations effectively."
  },
  {
    title: "Accounting & Finance Management",
    description: "Automate financial processes including billing, invoicing, and reporting with accuracy."
  },
  {
    title: "Human Resource Management (HRM)",
    description: "Manage employee data, payroll, attendance, and performance within a unified system."
  },
  {
    title: "Sales & CRM Integration",
    description: "Enhance customer relationships and sales tracking with integrated CRM functionalities."
  },
  {
    title: "Reporting & Analytics",
    description: "Generate real-time reports and insights to support better decision-making."
  },
  {
    title: "ERP Migration Services",
    description: "Upgrade or migrate your existing system to a modern ERP platform with zero data loss."
  },
  {
    title: "ERP Maintenance & Support",
    description: "Ensure smooth functioning with regular updates, bug fixes, and ongoing technical support."
  },
  {
    title: "Cloud ERP Solutions",
    description: "Access your business data anytime, anywhere with secure and scalable cloud-based ERP systems."
  }
];
  return (
    <div>
        <HeroBanner
       title="Expert IT Talent. On-Demand Solutions."
       lines="We provide highly skilled IT professionals and technology consultants to help businesses scale, innovate, and achieve digital transformation with confidence"
       animateText={false}
     containerWidth="max-w-5xl"
      titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
     <Services 
                         title="Our ERP Services"
                         services={services} 
                       />
<WebDevelopmentPhases
  phaseTitle="Video Production Development Phases"
  phaseDescription="CODX drives impactful social media presence with a proven process: Research, Strategy, Creation, Execution, and Optimization."
  phasesData={[
    {
      id: 1,
      title: "Discovery & Business Analysis",
      description: "We dive deep into your requirements, goals, and target audience. This foundational step ensures alignment and a clear roadmap for success.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           color: "#FF7F50"
    },
    {
      id: 2,
      title: "System Design & Customization",
      description: "Crafting intuitive and engaging experiences. Our designers create wireframes and high-fidelity prototypes that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       color: "#FAD5A5"
    },
    {
      id: 3,
      title: "Implementation & Data Migration",
      description: "Secure and scalable coding practices. Our engineers build robust healthcare web solutions with a focus on performance and compliance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#e1a57d"

    },
    {
      id: 4,
      title: "Testing & Go-Live Support",
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
  items={industriesData}
/>
<WebServicesSection
  title="End-to-End IT Resource Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "Dedicated Development Teams",
      desc: "Flexible teams for long-term software projects."
    },
    {
      title: "Cloud Architects & DevOps Experts",
      desc: "Cloud migration, automation, and infrastructure scaling."
    },
    {
      title: "Agile Project Management",
      desc: "Scrum Masters & Project Managers to ensure smooth delivery."
    },
    {
      title: "Web & App Developers on Demand",
      desc: "Hire ReactJS, NodeJS, .NET, and mobile experts."
    },
    {
      title: "QA & Testing Engineers",
      desc: "Manual and automated testing for flawless product launches."
    },
    {
      title: "Dynamics 365 & ERP Specialists",
      desc: "Custom implementations and integrations for enterprise systems."
    },
    {
      title: "MarTech Stack Optimization",
      desc: "Consulting and setup for marketing technology tools."
    },
    {
      title: "Cloud Transformation Projects",
      desc: "End-to-end planning and execution of digital cloud migration."
    },
     {
      title: "IT Support & Maintenance Teams",
      desc: "Dedicated experts to ensure system uptime and stability."
    },
    {
      title: "IT Strategy Consultation",
      desc: "Expert advice on scaling, modernizing, and optimizing your IT ecosystem."
    }
  ]}
/>
      
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
