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
export default function mobileappdevelopment() {
  return (
    <div>
        <HeroBanner
       title="Innovative Apps. Powerful Results "
       lines="From concept to launch, we build user-focused apps that deliver performance and value."
       animateText={false}
containerWidth="max-w-[650px]"
titleSize="text-4xl sm:text-3xl md:text-4xl"
linesSize="text-lg sm:text-xl md:text-xl"/> 
       <WebDevelopmentPhases
  phaseTitle="Mobile App Development Phases"
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
        <TechnologiesSection/>
                        <Appsection/>
<PlatformTypes/>
<WebServicesSection
  title="End-to-End Web App Development Services"
  description="Revolutionize your digital presence with CODX’s comprehensive web development services. From concept to launch, we deliver tailored solutions that ensure exceptional outcomes. Trust Dubai’s top web development agency to bring your vision to life."

  servicesData={[
    {
      title: "UI/UX Design",
      desc: "Engaging, intuitive, and visually stunning designs to deliver exceptional user experiences."
    },
    {
      title: "Custom App Development",
      desc: "Tailored mobile applications that fit your business model and scale with your growth."
    },
    {
      title: "MVP Development",
      desc: "Launch your idea quickly with a lean, functional product to test and validate your concept."
    },
    {
      title: "PWA Development",
      desc: "Build smooth shopping experiences with powerful features like payments, product management, and user personalization."
    },
    {
      title: "E-Commerce Apps",
      desc: "Expand your reach with CODX’s advanced e-commerce solutions. We integrate intuitive UI/UX designs with robust development to deliver smooth and engaging online shopping experiences for your customers."
    },
    {
      title: "CMS-Integrated Apps",
      desc: "Easily manage your app content with seamless CMS integration and optimized UI."
    },
    {
      title: "ERP & Enterprise Apps",
      desc: "Streamline your business operations with secure, scalable, and data-driven enterprise app solutions."
    },
    {
      title: "App Migration & Upgrades",
      desc: "Move your app to a new platform or update old code with zero downtime and enhanced performance."
    },
     {
      title: "Support & Maintenances",
      desc: "Continuous updates, bug fixes, and performance enhancements to keep your app running flawlessly."
    },
    {
      title: "App Development Consultation",
      desc: "Get expert guidance on app strategy, architecture, and scaling to ensure long-term success."
    }
  ]}
/>
        <VideoSection/>
<div className='text-white justify-center text-center text-5xl p-5 font-semibold'>
            Industries We Serve
          </div>
<div className='text-white justify-center text-center mb-2 font-semibold pb-10'>
  Serving diverse industries, from retail to healthcare, with tailored digital strategies to meet unique business needs.

</div>
         <div className="space-y-10">
          
  <div className="sticky top-24">
    <PortalCard
      title="Beauty & Wellness"
      description="Creating powerful brand identities that attract and retain customers."
      image={rejuvenation}
      reverse
    />
  </div>

  <div className="sticky top-28">
    <PortalCard
      title="Ecommerce"
      description="Optimising digital storefronts for maximum sales and customer retention."
      image={ecommerce}
      reverse
    />
  </div>

  <div className="sticky top-32">
    <PortalCard
      title="Real Estate"
      description="Expanding market reach and driving high-value conversions in real estate."
      image={realestate}
      reverse
    />
  </div>

  <div className="sticky top-36">
    <PortalCard
      title="Business Consultancy"
      description="Building stronger, more resilient businesses with expert consultancy."
      image={business}
      reverse
    />
  </div>

  <div className="sticky top-40">
    <PortalCard
      title="Health Care"
      description="Empowering healthier communities with expert healthcare consultancy."
      image={health}
      reverse
    />
  </div>

</div> 

<BrandsGrid title="Trusted by 350+ Clients Worldwide" />
<ContactSection/>
    </div>
  )
}
