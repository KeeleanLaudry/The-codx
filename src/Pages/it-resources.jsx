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
  FaProjectDiagram,
  FaUsers,
  FaAws,
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaBug,
  FaMicrosoft,
  FaUserTie,
  FaCloudUploadAlt,
  FaChartLine
} from "react-icons/fa";
export default function mobileappdevelopment() {
  const teamExpertiseData = [
  { title: "Scrum Masters & Agile Coaches", icon: <FaProjectDiagram /> },
  { title: "Dynamics 365 Developers & Consultants", icon: <FaUsers /> },
  { title: "AWS & Cloud Architects", icon: <FaAws /> },

  { title: "Mobile App Developers (iOS & Android)", icon: <FaMobileAlt /> },
  { title: "ReactJS & React Native Developers", icon: <FaReact /> },
  { title: "NodeJS & .NET Developers", icon: <FaNodeJs /> },

  { title: "SQA & Testing Engineers", icon: <FaBug /> },
  { title: "SharePoint & Azure Developers", icon: <FaMicrosoft /> },
  { title: "IT Project Managers & Tech Leads", icon: <FaUserTie /> },

  { title: "Cloud Transformation Specialists", icon: <FaCloudUploadAlt /> },
  { title: "MarTech Strategy & Integration Experts", icon: <FaChartLine /> },
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
    title: "IT Infrastructure Management",
    desc: "Efficient setup and maintenance of servers, networks, and systems."
  },
  {
    title: "Resource Allocation",
    desc: "Optimize the use of IT resources for maximum productivity."
  },
  {
    title: "Cloud & Server Support",
    desc: "Secure and scalable cloud solutions with reliable server management."
  },
  {
    title: "Technical Support Services",
    desc: "24/7 assistance to resolve IT issues and ensure smooth operations."
  },
  {
    title: "Security & Data Protection",
    desc: "Protect systems and data with advanced security measures."
  }
];
const services = [
  {
    title: "IT Staff Augmentation",
    description: "Scale your team quickly with skilled IT professionals tailored to your project requirements."
  },
  {
    title: "Dedicated Development Team",
    description: "Hire a dedicated team of developers, designers, and testers for long-term projects."
  },
  {
    title: "Contract-Based Hiring",
    description: "Get expert IT professionals on a contract basis for short-term or specific project needs."
  },
  {
    title: "Remote IT Resources",
    description: "Access global talent with flexible remote IT resource hiring options."
  },
  {
    title: "Full-Time IT Recruitment",
    description: "Hire full-time IT professionals who align with your company culture and goals."
  },
  {
    title: "Project-Based Resource Allocation",
    description: "Assign skilled resources based on project scope, timeline, and technical requirements."
  },
  {
    title: "Technology Experts Hiring",
    description: "Hire specialists in technologies like Java, React, PHP, Python, and more."
  },
  {
    title: "QA & Testing Resources",
    description: "Ensure quality delivery with experienced QA engineers and software testers."
  },
  {
    title: "DevOps & Cloud Experts",
    description: "Hire DevOps engineers and cloud specialists to streamline deployment and operations."
  },
  {
    title: "UI/UX Designers Hiring",
    description: "Get creative designers to build intuitive and engaging user interfaces and experiences."
  },
  {
    title: "Flexible Engagement Models",
    description: "Choose from hourly, part-time, or full-time hiring models based on your needs."
  },
  {
    title: "Resource Management & Support",
    description: "Ensure smooth collaboration and performance with continuous resource management and support."
  }
];
  return (
    <div>
        <HeroBanner
       title="Streamline Your Business With Intelligent ERP"
       lines="We build custom ERP systems that simplify operations, integrate workflows, and provide real-time data to help you make faster, smarter business decisions"
       animateText={false}
          containerWidth="max-w-5xl"
      titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
       <Services 
                           title="Our IT Resource Services"
                           services={services} 
                         />
<WebDevelopmentPhases
  phaseTitle="IT Resource Development Phases"
  phaseDescription="CODX drives impactful social media presence with a proven process: Research, Strategy, Creation, Execution, and Optimization."
  phasesData={[
    {
      id: 1,
      title: "Requirement Analysis",
      description: "We dive deep into your requirements, goals, and target audience. This foundational step ensures alignment and a clear roadmap for success.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           color: "#FF7F50"
    },
    {
      id: 2,
      title: "Talent Sourcing & Screening",
      description: "Crafting intuitive and engaging experiences. Our designers create wireframes and high-fidelity prototypes that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       color: "#FAD5A5"
    },
    {
      id: 3,
      title: "Onboarding & Integration",
      description: "Secure and scalable coding practices. Our engineers build robust healthcare web solutions with a focus on performance and compliance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#e1a57d"

    },
    {
      id: 4,
      title: "Performance Monitoring & Support",
      description: "Rigorous quality assurance and seamless deployment. We ensure your application is reliable, secure, and ready for users, followed by ongoing support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#FBCEB1"

    }
  ]}
  />    
      <TechnologiesSection/>
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
  items={teamExpertiseData}
/>
<WebServicesSection
  title="End-to-End ERP Development Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "ERP Consultation & System Selection",
      desc: "Helping you choose the right ERP platform for your business."
    },
    {
      title: "ERP Implementation & Deployment",
      desc: "Seamless installation and configuration of your ERP system."
    },
    {
      title: "Custom Module Development",
      desc: "Tailoring ERP modules to fit your unique workflow."
    },
    {
      title: "Data Migration & Integration",
      desc: "Securely transferring and integrating existing data into your new ERP."
    },
    {
      title: "Process Automation",
      desc: "Improving efficiency by automating core business operations."
    },
    {
      title: "ERP for Financial Management",
      desc: "Managing accounting, budgeting, and financial reporting seamlessly."
    },
    {
      title: "Supply Chain & Inventory ERP Solutions",
      desc: "Streamlining logistics, procurement, and inventory management."
    },
    {
      title: "Employee & HR Management Systems",
      desc: "Integrated HR and payroll solutions for better workforce management."
    },
     {
      title: "ERP Support & Maintenance",
      desc: "Continuous updates, bug fixes, and feature enhancements."
    },
    {
      title: "ERP Strategy Consultation",
      desc: "Expert advice to scale and optimize your ERP ecosystem."
    }
  ]}
/>
   
<div className='max-w-5xl mx-auto mb-10'>
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
      className="sticky top-24 mb-20"
    >
      <PortalCard
        {...item}
        reverse={index % 2 !== 0}
      />
    </div>
  ))}

</div>
<BrandsGrid title="Trusted by 350+ Clients Worldwide" />
<ContactSection/>
    </div>
  )
}
