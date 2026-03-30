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
  FaSearch,
  FaYoutube,
  FaLinkedin,
  FaSnapchatGhost,
  FaBuilding,
  FaStore,
  FaShoppingBag
} from "react-icons/fa";
import { SiMeta, SiTiktok } from "react-icons/si";

export default function mobileappdevelopment() {
  const adsCampaignsData = [
  { title: "Google Search & Display Campaigns", icon: <FaSearch /> },
  { title: "YouTube Video Ads", icon: <FaYoutube /> },
  { title: "Meta Ads", icon: <SiMeta /> },

  { title: "TikTok Viral Ad Campaigns", icon: <SiTiktok /> },
  { title: "LinkedIn B2B Advertising", icon: <FaLinkedin /> },
  { title: "Snapchat Brand Awareness Ads", icon: <FaSnapchatGhost /> },

  { title: "Media Remarketing Campaigns", icon: <FaBuilding /> },
  { title: "Seasonal & Launch-Based Promotions", icon: <FaStore /> },
  { title: "E-commerce Performance Ads", icon: <FaShoppingBag /> },
];
const featuresData = [
  {
    title: "Targeted Ad Campaigns",
    desc: "Reach the right audience at the right time."
  },
  {
    title: "Google & Social Ads",
    desc: "Run ads across Google, Facebook, and Instagram."
  },
  {
    title: "Creative Ad Design",
    desc: "Engaging visuals that drive clicks and action."
  },
  {
    title: "Budget Optimization",
    desc: "Maximize results while minimizing ad spend."
  },
  {
    title: "Performance Tracking",
    desc: "Analyze and improve campaigns for better ROI."
  }
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
      const services = [
  {
    title: "Ad Strategy & Planning",
    description: "Create data-driven advertising strategies tailored to your business goals and target audience."
  },
  {
    title: "Creative Ad Design",
    description: "Design eye-catching visuals and creatives that grab attention and drive engagement."
  },
  {
    title: "Copywriting for Ads",
    description: "Craft compelling ad copies that convert viewers into customers with strong messaging."
  },
  {
    title: "Social Media Ads",
    description: "Run targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn."
  },
  {
    title: "Google Ads Campaigns",
    description: "Reach potential customers through search, display, and video ads on Google."
  },
  {
    title: "Display Advertising",
    description: "Increase brand visibility with visually engaging banner ads across websites and apps."
  },
  {
    title: "Video Ads Development",
    description: "Create high-converting video ads for platforms like YouTube and social media."
  },
  {
    title: "Retargeting & Remarketing",
    description: "Reconnect with users who have previously interacted with your brand to boost conversions."
  },
  {
    title: "A/B Testing & Optimization",
    description: "Test different ad variations to improve performance and maximize return on investment."
  },
  {
    title: "Landing Page Optimization",
    description: "Optimize landing pages to improve ad performance and increase conversion rates."
  },
  {
    title: "Performance Tracking & Analytics",
    description: "Monitor campaign performance with detailed analytics and actionable insights."
  },
  {
    title: "Budget Management",
    description: "Optimize ad spend efficiently to achieve maximum results within your budget."
  }
];
  return (
    <div>
        <HeroBanner
       title="Reach The Right Audience With Impactful Ads"
       lines="We design and run highly targeted ad campaigns that maximize reach, drive engagement, and deliver real ROI — from social media to display and search networks."
       animateText={false}
 containerWidth="max-w-5xl"
titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
        <Services 
                title="Our Ads Development Services"
                services={services} 
              />
<WebDevelopmentPhases
  phaseTitle="Ads Development Phases"
  phaseDescription="CODX drives impactful social media presence with a proven process: Research, Strategy, Creation, Execution, and Optimization."
  phasesData={[
    {
      id: 1,
      title: "Research & Audience Analysis",
      description: "We dive deep into your requirements, goals, and target audience. This foundational step ensures alignment and a clear roadmap for success.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           color: "#FF7F50"
    },
    {
      id: 2,
      title: "Campaign Strategy & Planning",
      description: "Crafting intuitive and engaging experiences. Our designers create wireframes and high-fidelity prototypes that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       color: "#FAD5A5"
    },
    {
      id: 3,
      title: "Creative Development & Launch",
      description: "Secure and scalable coding practices. Our engineers build robust healthcare web solutions with a focus on performance and compliance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#e1a57d"

    },
    {
      id: 4,
      title: "Monitoring & Optimization",
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
  items={adsCampaignsData}
/>
<WebServicesSection
  title="End-to-End Ads App Development Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "Google Ads Management",
      desc: "Search, display & shopping campaigns that convert clicks to customers."
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Creative, targeted ads for awareness, engagement & sales."
    },
    {
      title: "TikTok Advertising",
      desc: "Trend-driven campaigns to reach younger audiences and drive viral growth."
    },
    {
      title: "YouTube Video Ads",
      desc: "Engaging video campaigns with measurable reach and impact."
    },
    {
      title: "Snapchat Campaigns",
      desc: "Targeted ads built for storytelling and audience engagement."
    },
    {
      title: "Social media Paid Campaigns",
      desc: "Full-funnel ads for growth across all social platforms."
    },
    {
      title: "Remarketing & Retargeting",
      desc: "Reconnect with your audience and increase conversion rates."
    },
    {
      title: "Conversion-Focused Landing Pages",
      desc: "Custom pages built to maximize ad performance and ROI."
    },
     {
      title: "Ad Campaign Audits",
      desc: "Detailed analysis to improve and scale your current ad efforts."
    },
    {
      title: "Advertising Consultation",
      desc: "Expert advice to shape winning ad strategies for your business."
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
