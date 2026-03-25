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
export default function Home() {
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
         <div className="space-y-8 p-10 ">
            <h1 className="gradient-text text-2xl md:text-5xl font-semibold mb-8 text-center">
    Industries and Expertise
  </h1>
             <PortalCard
          title="Web Portal"
          description="Optimising digital storefronts for maximum sales and customer retention."
          image={web}   
        />


      <PortalCard
        title="Ecommerce"
        description="Optimising digital storefronts for maximum sales and customer retention."
        image={eccomerce}
        reverse
      />

      <PortalCard
        title="Real Estate"
        description="Expanding market reach and driving high-value conversions in real estate."
        image={realestate}
        
      />
       <PortalCard
          title="Beauty & Wellness"
          description="Creating powerful brand identities that attract and retain customers."
          image={BeautyWellness}
          reverse   
        />


      <PortalCard
        title="Business Consultancy"
        description="Building stronger, more resilient businesses with the guidance of expert consultancy and strategic insights."
        image={BusinessConsultancy}
        
      />

      <PortalCard
        title="Health Care"
        description="Empowering healthier, more resilient communities with expert healthcare consultancy and strategic insights."
        image={Health}
        reverse
      />
      {/* <TestimonialSection/> */}
<StatsSection />
<TechnologiesSection/>
<Collabrator/>

    </div>
    </div>
  )
}
