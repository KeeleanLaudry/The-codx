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
  FaMapMarkedAlt,
  FaShoppingCart,
  FaAddressCard,
  FaDraftingCompass,
  FaDesktop,
  FaShareAlt,
  FaBuilding,
  FaCalendarAlt
} from "react-icons/fa";
export default function mobileappdevelopment() {
  const brandingPlatformsData = [
  { title: "Logos & Brand Marks", icon: <FaMapMarkedAlt /> },
  { title: "Packaging for Products & E-commerce", icon: <FaShoppingCart /> },
  { title: "Business Cards & Stationery Sets", icon: <FaAddressCard /> },

  { title: "Corporate Identity & Brand Guidelines", icon: <FaDraftingCompass /> },
  { title: "Brochures, Catalogs & Company Profiles", icon: <FaDesktop /> },
  { title: "Social Media Brand Assets", icon: <FaShareAlt /> },

  { title: "Pitch Deck & Presentation Templates", icon: <FaBuilding /> },
  { title: "Event & Marketing Collateral", icon: <FaCalendarAlt /> },
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
    title: "Brand Identity Design",
    desc: "Create a strong and memorable visual identity."
  },
  {
    title: "Consistent Brand Voice",
    desc: "Maintain a clear and unified brand message."
  },
  {
    title: "Online Presence Building",
    desc: "Establish your brand across digital platforms."
  },
  {
    title: "Creative Visual Strategy",
    desc: "Design visuals that reflect your brand values."
  },
  {
    title: "Brand Growth & Recognition",
    desc: "Increase visibility and build lasting impressions."
  }
];
const services = [
  {
    title: "Brand Strategy Development",
    description: "Define your brand vision, mission, and positioning to create a strong and lasting market presence."
  },
  {
    title: "Logo & Visual Identity Design",
    description: "Create memorable logos and visual elements that reflect your brand personality and values."
  },
  {
    title: "Brand Guidelines",
    description: "Establish consistent branding with detailed guidelines for colors, typography, and design elements."
  },
  {
    title: "Brand Voice & Messaging",
    description: "Develop a clear and consistent brand voice that connects with your target audience."
  },
  {
    title: "Social Media Branding",
    description: "Build a cohesive brand presence across all social media platforms with consistent visuals and messaging."
  },
  {
    title: "Website Branding",
    description: "Align your website design with your brand identity to create a seamless user experience."
  },
  {
    title: "Rebranding Services",
    description: "Refresh your existing brand identity to stay relevant and competitive in the market."
  },
  {
    title: "Brand Awareness Campaigns",
    description: "Increase visibility and recognition through targeted branding campaigns."
  },
  {
    title: "Personal Branding",
    description: "Build a strong personal brand to establish authority and credibility in your industry."
  },
  {
    title: "Content & Creative Direction",
    description: "Ensure all content aligns with your brand identity through strategic creative direction."
  },
  {
    title: "Brand Positioning",
    description: "Differentiate your brand in the market with a unique value proposition and clear positioning."
  },
  {
    title: "Brand Consistency Management",
    description: "Maintain consistent branding across all digital platforms and customer touchpoints."
  }
];
  return (
    <div>
        <HeroBanner
       title="Build a Powerful Brand
Identity Online"
       lines="We craft memorable digital identities — from visual design to brand voice — ensuring your business stands out, connects with the right audience, and leaves a lasting impression across all digital platforms"
       animateText={false}
     containerWidth="max-w-5xl"
titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
      <Services 
              title="Our Digital branding Services"
              services={services} 
            />
<WebDevelopmentPhases
  phaseTitle="Digital Branding Phases"
  phaseDescription="CODX streamlines healthcare Digital Branding with a proven process: Discovery, UI/UX Design, Secure Development, and Ongoing Support for long-term success."
  phasesData={[
    {
      id: 1,
      title: "Discovery & Research",
      description: "We dive deep into your requirements, goals, and target audience. This foundational step ensures alignment and a clear roadmap for success.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           color: "#FF7F50"
    },
    {
      id: 2,
      title: "Concept Development",
      description: "Crafting intuitive and engaging experiences. Our designers create wireframes and high-fidelity prototypes that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       color: "#FAD5A5"
    },
    {
      id: 3,
      title: "Design & Creation",
      description: "Secure and scalable coding practices. Our engineers build robust healthcare web solutions with a focus on performance and compliance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#e1a57d"

    },
    {
      id: 4,
      title: "Finalization & Delivery",
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
  items={brandingPlatformsData}
/>
<WebServicesSection
  title="End-to-End Digital Branding Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "Logo Design",
      desc: "Create timeless, impactful brand marks that represent your business."
    },
    {
      title: "Packaging Design",
      desc: "Visually stunning and functional packaging that sells your product."
    },
    {
      title: "Corporate Identity Development",
      desc: "Complete identity systems including colours, fonts, and brand guides."
    },
    {
      title: "Brochure & Catalog Design",
      desc: "Showcase your offerings with professional, print-ready layouts."
    },
    {
      title: "Stationery & Business Cards",
      desc: "Professional cards, letterheads, and envelopes that impress."
    },
    {
      title: "Brand Guidelines Creation",
      desc: "Define how your brand should look and feel across all channels."
    },
    {
      title: "Social Media Branding",
      desc: "Custom designs for profiles, posts, and campaigns."
    },
    {
      title: "Event & Marketing Collateral",
      desc: "Banners, flyers, and promotional designs to elevate your presence."
    },
     {
      title: "Brand Refresh & Rebranding",
      desc: "Modernize and upgrade your existing brand identity."
    },
    {
      title: "Creative Consultation",
      desc: "Get expert guidance on visual strategy and brand development."
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
