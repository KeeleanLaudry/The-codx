import React from 'react'
import HeroBanner from "../Home/HeroBanner";
import WebDevelopmentPhases from '../web-development/WebDevelopmentPhases ';
import DifferenceDeliver from '../web-development/DifferenceDeliver';
import WebServicesSection from '../web-development/WebServicesSection';
import PortalCard from '../Home/card';
import rejuvenation from "../assets/rejuvenation-procedures-300x113.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import realestate from "../assets/real-estate.jpg";
import business from "../assets/business.jpg";
import health from "../assets/health.jpg"; 
import BrandsGrid from '../Home/logos';
import TechnologiesSection from '../web-development/technologiesweuse';
import Services from '../web-development/servicecard';
import ContactSection from '../Contact/contactForm';
import PlatformTypes from "../mobile-app-development/platform"
import {
  FaGraduationCap,
  FaUsers,
  FaLayerGroup,
  FaStore,
  FaPlane,
  FaBuilding,
  FaCity,
  FaHeartbeat,
  FaChartLine,
  FaCalendarAlt,
  FaComments,
  FaBriefcase,
  FaMoneyBillWave,
  FaProjectDiagram,
  FaCubes
} from "react-icons/fa";
export default function webdevelopment() {
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
const platformTypesData = [
  { title: "LMS & Education", icon: <FaGraduationCap /> },
  { title: "Social Networking", icon: <FaUsers /> },
  { title: "SaaS Platform", icon: <FaLayerGroup /> },

  { title: "Marketplaces", icon: <FaStore /> },
  { title: "Travel & Booking", icon: <FaPlane /> },
  { title: "Real Estate", icon: <FaBuilding /> },

  { title: "Property Management", icon: <FaCity /> },
  { title: "Health & Wellness", icon: <FaHeartbeat /> },
  { title: "Analytics & Dashboard", icon: <FaChartLine /> },

  { title: "Event Management", icon: <FaCalendarAlt /> },
  { title: "Community Forums", icon: <FaComments /> },
  { title: "Job Portals", icon: <FaBriefcase /> },

  { title: "Financial Services", icon: <FaMoneyBillWave /> },
  { title: "CRM & ERP", icon: <FaProjectDiagram /> },
  { title: "Custom Solutions for any business needed", icon: <FaCubes /> },
];
  return (
    <div>
      <HeroBanner
  title="Your Vision, Our Expertise A Perfect Digital Blend"
  lines="From concept to launch, we ensure your website stands out with excellence."
  animateText={false}
containerWidth="max-w-[600px]"
titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"
/>

<Services/>

<WebDevelopmentPhases
  phaseTitle="Web Development Phases"
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
<DifferenceDeliver/>
<PlatformTypes
  title="Platform Types We Can Develop"
  items={platformTypesData}
/>
<WebServicesSection
  title="End-to-End Web App Development Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "UI/UX Design",
      desc: "Transform your ideas into captivating realities with CODX’s expert UI/UX design services. Enhance user satisfaction and engagement through our innovative design strategies and development expertise in Dubai."
    },
    {
      title: "Custom Web Development",
      desc: "Looking for specialized web app solutions? CODX is your go-to partner. We design and develop unique web applications tailored to meet your business needs, ensuring creativity and functionality at every step."
    },
    {
      title: "MVP Development",
      desc: "Unleash your digital potential with CODX’s MVP development services. As Dubai’s trusted website development company, we create customized, scalable solutions to bring your ideas to life efficiently."
    },
    {
      title: "PWA Development",
      desc: "CODX specializes in building Progressive Web Apps (PWAs) that redefine your digital presence. Our team ensures flawless user experiences with state-of-the-art PWA solutions designed to perform."
    },
    {
      title: "E-Commerce Solutions",
      desc: "Expand your reach with CODX’s advanced e-commerce solutions. We integrate intuitive UI/UX designs with robust development to deliver smooth and engaging online shopping experiences for your customers."
    },
    {
      title: "CMS Development",
      desc: "Discover CODX’s dynamic content management solutions designed to streamline your operations. Our CMS development services offer seamless UI/UX integration to optimize your online presence."
    },
    {
      title: "ERP Solutions",
      desc: "Enhance efficiency with CODX’s ERP development services. Our custom ERP solutions integrate business operations effortlessly, delivering streamlined processes and growth opportunities for your organization."
    },
    {
      title: "Migration Services",
      desc: "CODX specializes in building Progressive Web Apps (PWAs) that redefine your digital presence. Our team ensures flawless user experiences with state-of-the-art PWA solutions designed to perform."
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
 
<TechnologiesSection/>
<BrandsGrid title="Trusted by 350+ Clients Worldwide" />

<ContactSection/>
    </div>
  )
}
