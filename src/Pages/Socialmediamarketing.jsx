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
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaUsers,
  FaShoppingCart,
  FaHandshake
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function mobileappdevelopment() 
{
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
      const socialPlatformsData = [
  { title: "Meta pages", icon: <FaInstagram /> },
  { title: "TikTok Business Accounts", icon: <FaTiktok /> },
  { title: "LinkedIn Company Pages", icon: <FaLinkedin /> },

  { title: "X Profiles", icon: <FaTwitter /> },
  { title: "YouTube Channels", icon: <FaYoutube /> },
  { title: "Pinterest Boards", icon: <FaPinterest /> },

  { title: "Brand Communities & Groups", icon: <FaUsers /> },
  { title: "E-commerce Social Shops", icon: <FaShoppingCart /> },
  { title: "Brand Collaboration Campaigns", icon: <FaHandshake /> },
];
const featuresData = [
  {
    title: "Strategic Content Planning",
    desc: "We create targeted content that engages your audience."
  },
  {
    title: "Creative Visual Design",
    desc: "Eye-catching posts designed to boost brand visibility."
  },
  {
    title: "Platform Optimization",
    desc: "Optimized campaigns for Instagram, Facebook, and more."
  },
  {
    title: "Audience Engagement",
    desc: "We manage interactions to build strong relationships."
  },
  {
    title: "Performance Tracking",
    desc: "Track results and improve campaigns with insights."
  }
];
const services = [
  {
    title: "Social Media Strategy",
    description: "Develop result-driven social media strategies tailored to your brand goals and target audience."
  },
  {
    title: "Content Creation",
    description: "Create engaging posts, graphics, and videos that capture attention and boost audience interaction."
  },
  {
    title: "Social Media Management",
    description: "Manage your social media accounts with regular posting, monitoring, and audience engagement."
  },
  {
    title: "Paid Ads Campaigns",
    description: "Run targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to maximize ROI."
  },
  {
    title: "Audience Growth & Engagement",
    description: "Increase followers and engagement through strategic content, campaigns, and community building."
  },
  {
    title: "Influencer Marketing",
    description: "Collaborate with influencers to expand your brand reach and build trust with your audience."
  },
  {
    title: "Analytics & Reporting",
    description: "Track performance with detailed analytics and reports to optimize campaigns and strategies."
  },
  {
    title: "Brand Awareness Campaigns",
    description: "Boost brand visibility with creative campaigns that reach the right audience at the right time."
  },
  {
    title: "Social Media Optimization",
    description: "Optimize profiles, content, and strategies to improve reach, visibility, and engagement."
  },
  {
    title: "Reels & Short Video Marketing",
    description: "Leverage trending reels and short videos to increase reach and connect with modern audiences."
  },
  {
    title: "Hashtag & Trend Research",
    description: "Use effective hashtags and trending topics to maximize content visibility and reach."
  },
  {
    title: "Crisis & Reputation Management",
    description: "Handle negative feedback and protect your brand image with proactive reputation management."
  }
];
  return (
    <div>
        <HeroBanner
       title="Smart Marketing. Measurable Impact."
       lines="From strategy to execution, we craft social media campaigns that build brand presence and drive real business growth"
       animateText={false}
       containerWidth="max-w-[800px]"
titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
 <Services 
      title="Our Social Media Marketing Services"
      services={services} 
    />
 <WebDevelopmentPhases
  phaseTitle="Social Media Marketing Phases"
  phaseDescription="CODX drives impactful social media presence with a proven process: Research, Strategy, Creation, Execution, and Optimization."
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
  items={socialPlatformsData}
/>
<WebServicesSection
  title="End-to-End E-Commerce Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "Social Media Strategy",
      desc: "Custom, data-driven strategies to grow your brand online."
    },
    {
      title: "Content Creation & Graphic Design",
      desc: "Creative visuals and copy that engage and convert."
    },
    {
      title: "Video & Reels Production",
      desc: "Short-form and long-form videos that capture attention and drive action."
    },
    {
      title: "Social Media Management",
      desc: "Daily posting, engagement, and audience growth on your platforms."
    },
    {
      title: "Paid Advertising Campaigns",
      desc: "ROI-focused social ad campaigns for leads, sales, and brand reach."
    },
    {
      title: "Influencer Marketing & Collaborations",
      desc: "Connecting with the right voices to amplify your brand message."
    },
    {
      title: "Community Building & Engagement",
      desc: "Creating strong online communities that drive loyalty."
    },
    {
      title: "Social Media Audits & Optimization",
      desc: "Identifying gaps, opportunities, and improvements for better performance."
    },
     {
      title: "Reporting & Analytics",
      desc: "Clear insights and reports to track growth and ROI."
    },
    {
      title: "Social Media Consultation",
      desc: "Expert guidance to refine your social strategy and grow effectively."
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
