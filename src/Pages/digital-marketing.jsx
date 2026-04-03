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
import { FaGoogle, FaYoutube, FaLinkedin, FaChartPie } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import { MdOutlineCampaign } from "react-icons/md";
import { FaBuilding, FaLaptopCode, FaAppStoreIos } from "react-icons/fa";
import DifferenceSection from '../web-development/DifferenceDeliver';
import { Helmet } from "react-helmet-async";

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
    const adsPlatformsData = [
  { title: "Google Search & Display Ads", icon: <FaGoogle /> },
  { title: "Meta Ads", icon: <SiMeta /> },
  { title: "YouTube Ads", icon: <FaYoutube /> },
  { title: "LinkedIn Ads for B2B Growth", icon: <FaLinkedin /> },
  { title: "SEO for Corporate & E-commerce Sites", icon: <FaLaptopCode /> },
  { title: "Influencer Marketing Campaigns", icon: <MdOutlineCampaign /> },
  { title: "Email Automation & CRM Integration", icon: <FaBuilding /> },
  { title: "App Store Optimization (iOS & Android)", icon: <FaAppStoreIos /> },
  { title: "Reputation & Review Management", icon: <FaChartPie /> },
];
const featuresData = [
  {
    title: "Data-Driven Strategies",
    desc: "We use insights to create effective marketing campaigns."
  },
  {
    title: "SEO & Visibility",
    desc: "Improve rankings and reach the right audience."
  },
  {
    title: "Paid Advertising",
    desc: "Run targeted ads that drive real conversions."
  },
  {
    title: "Content Marketing",
    desc: "Engaging content that builds trust and brand value."
  },
  {
    title: "Analytics & Reporting",
    desc: "Track performance and optimize for better results."
  }
];
const services = [
  {
    title: "Digital Marketing Strategy",
    description: "Create data-driven marketing strategies tailored to your business goals and target audience."
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website’s visibility on search engines and drive organic traffic with proven SEO techniques."
  },
  {
    title: "Search Engine Marketing (SEM)",
    description: "Run paid campaigns on Google Ads to generate high-quality leads and boost conversions."
  },
  {
    title: "Social Media Marketing",
    description: "Promote your brand across social platforms with engaging content and targeted campaigns."
  },
  {
    title: "Content Marketing",
    description: "Create valuable and relevant content that attracts, engages, and converts your audience."
  },
  {
    title: "Email Marketing",
    description: "Reach your audience directly with personalized email campaigns that drive engagement and sales."
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Maximize ROI with targeted PPC campaigns across search engines and social media platforms."
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Enhance your website performance to convert more visitors into customers effectively."
  },
  {
    title: "Affiliate Marketing",
    description: "Expand your reach through affiliate partnerships that promote your products and services."
  },
  {
    title: "Online Reputation Management",
    description: "Monitor and improve your brand image across digital platforms to build trust and credibility."
  },
  {
    title: "Marketing Analytics & Reporting",
    description: "Track campaign performance with detailed analytics and insights to make informed decisions."
  },
  {
    title: "Lead Generation Campaigns",
    description: "Generate high-quality leads through targeted campaigns designed to increase conversions."
  }
];
  return (
    <>
    <Helmet>
            <title>
             Best Digital Marketing Agency Dubai | Seo Services In Dubai - Codx Softwares
            </title>
        
            <meta
              name="description"
              content="We are a top internet marketing agency Dubai offering digital marketing services. As a digital marketing agency UAE, we can maximize the ROI for your company."
            />
        
            <meta
              name="keywords"
              content="Best Digital Marketing Agency Dubai, Seo Services In Dubai"
            />
        
            <meta name="robots" content="index, follow" />
          </Helmet>
    <div>
        <HeroBanner
       title="Elevate Your Brand with
Intelligent Social Media Marketing"
       lines="We combine creativity, data-driven insights, and cutting-edge strategy to grow your online presence, build authority, and drive measurable results across every digital platform"
       animateText={false}
       containerWidth="max-w-3xl"
titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
   <Services 
           title="Our Digital Marketing Services"
           services={services} 
         />
<WebDevelopmentPhases
  phaseTitle="Digital Marketing Phases"
  phaseDescription="CODX drives impactful social media presence with a proven process: Research, Strategy, Creation, Execution, and Optimization."
  phasesData={[
    {
      id: 1,
      title: "Research & Discovery",
      description: "We dive deep into your requirements, goals, and target audience. This foundational step ensures alignment and a clear roadmap for success.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           color: "#FF7F50"
    },
    {
      id: 2,
      title: "Strategy & Planning",
      description: "Crafting intuitive and engaging experiences. Our designers create wireframes and high-fidelity prototypes that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       color: "#FAD5A5"
    },
    {
      id: 3,
      title: "Campaign Creation & Launch",
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
  items={adsPlatformsData}
/><WebServicesSection
  title="End-to-End Digital Marketing Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "SEO Optimization",
      desc: "Increase visibility with on-page, off-page, and technical SEO strategies."
    },
    {
      title: "PPC Campaign Management",
      desc: "ROI-focused Google Ads & social media advertising."
    },
    {
      title: "Online Reputation Management",
      desc: "Protect and enhance your digital presence."
    },
    {
      title: "PR & Media Outreach",
      desc: "Tell your brand story through press and publications."
    },
    {
      title: "App Store Optimization (ASO)",
      desc: "Boost app visibility and downloads with smart ASO tactics."
    },
    {
      title: "Influencer Marketing Campaigns",
      desc: "Partner with the right creators to amplify your brand."
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: "Turn clicks into customers with smarter website design & testing."
    },
    {
      title: "Email Marketing Automation",
      desc: "Engage, nurture, and convert with tailored email journeys."
    },
     {
      title: "Global Translation & Localization",
      desc: "Make your marketing campaigns resonate across cultures."
    },
    {
      title: "Digital Marketing Consultation",
      desc: "Get expert advice to shape your online growth strategy."
    }
  ]}
/>
        {/* <VideoSection/> */}
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
    </>
  )
}
