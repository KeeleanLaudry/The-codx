import React from 'react'
import HeroBanner from "../Home/HeroBanner";
import GlobalServices from "../Home/GlobalServices"
import PortalCard from '../Home/card';
import web from "../assets/web portal.png"
import eccomerce from "../assets/ecommerce.png"
import realestate from "../assets/real estate.png"
import BeautyWellness from "../assets/beauty & welness.png"
import BusinessConsultancy from "../assets/business consulatancy.png";
import Health from "../assets/health care.png";
import Logos from '../Home/logos';
import StatsSection from '../Home/StatsSection';
import Collabrator from"../Home/CollaborationSection";
import TechnologiesSection from '../web-development/technologiesweuse';
import TestimonialSection from '../Home/Testimonial';
import BlogSection from '../about/BlogSection';
import ContactSection from '../Contact/contactForm';
export default function Home() {
   const portalData = [
  {
    title: "Web Portal",
    description: "Optimising digital storefronts for maximum sales and customer retention.",
    image: web
  },
  {
    title: "Ecommerce",
    description: "Optimising digital storefronts for maximum sales and customer retention.",
    image: eccomerce
  },
  {
    title: "Real Estate",
    description: "Expanding market reach and driving high-value conversions in real estate.",
    image: realestate
  },
  {
    title: "Beauty & Wellness",
    description: "Creating powerful brand identities that attract and retain customers.",
    image: BeautyWellness
  },
  {
    title: "Business Consultancy",
    description: "Building stronger, more resilient businesses with expert consultancy and strategic insights.",
    image: BusinessConsultancy
  },
  {
    title: "Health Care",
    description: "Empowering healthier, more resilient communities with expert healthcare consultancy and strategic insights.",
    image: Health
  }
];
  return (
    <div>
   <HeroBanner
  title="CODX! Digitally yours"
  lines={[
    "Empowering Digital Journeys.",
    "Your Growth, Our Code.",
    "Code. Create. Connect."
  ]}
/>
      <GlobalServices />
<Logos />
         <div className="space-y-8  max-w-5xl mx-auto relative ">
      <div className="space-y-3 sm:space-y-4 max-w-5xl mx-auto px-5 lg:px-0">
  <h1 className="section-heading mb-5">
    Industries and Expertise
  </h1>

<div className="relative max-w-5xl mx-auto">

  {portalData.map((item, index) => (
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
</div>
<Collabrator />
<StatsSection />
<TechnologiesSection/>
<BlogSection/>
<TestimonialSection/>
<ContactSection/>
    </div>
    </div>
  )
}
