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
export default function webdevelopment() {
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
<div className="text-center mb-16">

<h2 className="text-4xl md:text-5xl font-semibold
bg-gradient-to-r from-[#FAD5A5] via-[#FBCEB1] via-[#e1a57d] to-[#FF7F50]
bg-clip-text text-transparent">

Industries We Serve

</h2>

<p className="text-gray-200 text-base md:text-base mt-4  mx-auto leading-relaxed">

Serving diverse industries, from retail to healthcare, with tailored digital strategies to meet unique business needs.

</p>

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
<TechnologiesSection/>
<BrandsGrid title="Trusted by 350+ Clients Worldwide" />

<ContactSection/>
    </div>
  )
}
