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
  FaUsers,
  FaShareAlt,
  FaBullhorn,
  FaUserTie,
  FaDesktop,
  FaCommentDots,
  FaMagic,
  FaGraduationCap,
  FaYoutube
} from "react-icons/fa";

import { SiTiktok } from "react-icons/si";
export default function mobileappdevelopment() {
  const videoContentData = [
  { title: "Brand & Corporate Films", icon: <FaUsers /> },
  { title: "Social Media Video Ads", icon: <FaShareAlt /> },
  { title: "Promotional & Marketing Videos", icon: <FaBullhorn /> },

  { title: "Product Demos & Explainers", icon: <FaUserTie /> },
  { title: "Event Coverage & Recaps", icon: <FaDesktop /> },
  { title: "Testimonial & Case Study Videos", icon: <FaCommentDots /> },

  { title: "Animated & Motion Graphics Videos", icon: <FaMagic /> },
  { title: "Training & Educational Content", icon: <FaGraduationCap /> },
  { title: "YouTube Channel Content", icon: <FaYoutube /> },

  { title: "Short-Form Reels & TikToks", icon: <SiTiktok /> },
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
    title: "Creative Video Production",
    desc: "High-quality videos that tell your brand story effectively."
  },
  {
    title: "Script & Storyboarding",
    desc: "Well-planned concepts to deliver clear and engaging messages."
  },
  {
    title: "Professional Editing",
    desc: "Seamless editing with visuals, sound, and effects."
  },
  {
    title: "Social Media Videos",
    desc: "Optimized videos for Instagram, YouTube, and other platforms."
  },
  {
    title: "Product & Promo Videos",
    desc: "Showcase products and services to boost engagement and sales."
  }
];
const services = [
  {
    title: "Video Strategy & Planning",
    description: "Plan impactful video content aligned with your brand goals, audience, and marketing strategy."
  },
  {
    title: "Script Writing",
    description: "Craft engaging and compelling scripts that effectively communicate your message."
  },
  {
    title: "Storyboarding",
    description: "Visualize your video concept with detailed storyboards before production begins."
  },
  {
    title: "Corporate Video Production",
    description: "Create professional corporate videos to showcase your brand, services, and company values."
  },
  {
    title: "Promotional Videos",
    description: "Produce high-converting promotional videos designed to attract and engage your target audience."
  },
  {
    title: "Social Media Videos",
    description: "Create short, engaging videos optimized for platforms like Instagram, YouTube, and Facebook."
  },
  {
    title: "Product Demo Videos",
    description: "Showcase your products with detailed demo videos that highlight features and benefits."
  },
  {
    title: "Explainer Videos",
    description: "Simplify complex ideas with animated or live-action explainer videos."
  },
  {
    title: "Video Editing & Post Production",
    description: "Enhance your videos with professional editing, color grading, sound design, and effects."
  },
  {
    title: "Motion Graphics & Animation",
    description: "Add creativity with motion graphics and animations to make your videos more engaging."
  },
  {
    title: "YouTube Video Production",
    description: "Produce high-quality YouTube videos optimized for engagement, retention, and growth."
  },
  {
    title: "Video Marketing & Optimization",
    description: "Optimize video content for SEO, reach, and performance across digital platforms."
  }
];
  return (
    <div>
        <HeroBanner
       title="Tell Your Story With Powerful Visuals"
       lines="Our video team creates cinematic, high-impact content — from concept to final cut — helping brands connect, engage, and inspire audiences across all platforms"
       animateText={false}
    titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
        <Services 
                     title="Our Video Production Services"
                     services={services} 
                   />
<WebDevelopmentPhases
  phaseTitle="Video Production Development Phases"
  phaseDescription="CODX drives impactful social media presence with a proven process: Research, Strategy, Creation, Execution, and Optimization."
  phasesData={[
    {
      id: 1,
      title: "Concept & Pre-Production",
      description: "We dive deep into your requirements, goals, and target audience. This foundational step ensures alignment and a clear roadmap for success.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           color: "#FF7F50"
    },
    {
      id: 2,
      title: "Filming & Production",
      description: "Crafting intuitive and engaging experiences. Our designers create wireframes and high-fidelity prototypes that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       color: "#FAD5A5"
    },
    {
      id: 3,
      title: "Editing & Post-Production",
      description: "Secure and scalable coding practices. Our engineers build robust healthcare web solutions with a focus on performance and compliance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#e1a57d"

    },
    {
      id: 4,
      title: "Delivery & Optimization",
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
  items={videoContentData}
/>
<WebServicesSection
  title="End-to-End Video Production Development Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "Creative Concept Development",
      desc: "Storyboarding, scripting, and visual planning to bring ideas to life."
    },
    {
      title: "Full-Scale Video Production",
      desc: "Professional filming with cinematic quality and engaging visuals."
    },
    {
      title: "Video Editing & Post-Production",
      desc: "Cutting-edge editing, color grading, and sound design for a polished final product."
    },
    {
      title: "Motion Graphics & Animation",
      desc: "Dynamic animations and visual effects to elevate your video content."
    },
    {
      title: "Social Media Video Ads",
      desc: "Platform-optimized videos for Instagram, TikTok, YouTube, and more."
    },
    {
      title: "Corporate & Brand Story Videos",
      desc: "Showcase your brand story with professional, compelling video content."
    },
    {
      title: "Product Launch & Demo Videos",
      desc: "Clear, engaging videos that highlight your product features and benefits."
    },
    {
      title: "Event Highlight Videos",
      desc: "Capture and showcase the best moments of your events."
    },
     {
      title: "Training & Educational Videos",
      desc: "Informative, clear, and professionally edited content for your team or customers."
    },
    {
      title: "Video Strategy Consultation",
      desc: "Expert guidance on video content planning and platform optimization."
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
