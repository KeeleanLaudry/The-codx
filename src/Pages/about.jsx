import GlimpseSection from "../about/glimpseintocodx";
import React from 'react'
import OurApproach from "../about/apporoch";
import businesswomen from "../assets/smart-businesswomen.jpg";  
import enterprises from "../assets/enterprises.jpg";  
import HeroBanner from "../Home/HeroBanner";
import OurStory from "../about/OurStory";
import Services from "../about/services"
import { Helmet } from "react-helmet-async";

export default function services() {
  return (
    <>
     <Helmet>
        <title>
         About Us - Best Digital Marketing Company UAE | Codx Softwares
        </title>
    
        <meta
          name="description"
          content="Codx Softwaresis a custom software development company in UAE delivers IT solutions, web development, e-commerce and digital marketing services."
        />
    
        <meta
          name="keywords"
          content="Best Digital Marketing Company UAE"
        />
    
        <meta name="robots" content="index, follow" />
      </Helmet>
    <div>
<HeroBanner
  title="Innovate, Scale, Succeed - CODX"
  lines="At CODX, we design future-proof solutions that empower businesses to grow, engage, and excel in an ever-changing digital landscape."
  animateText={false}
  titleSize="text-4xl sm:text-3xl md:text-5xl"
linesSize="text-lg sm:text-xl md:text-xl"
/>
      <GlimpseSection
        title="A GLIMPSE INTO CODX"
        paragraph1="We bring this wealth of knowledge and precision to every project we undertake, no matter the scale. At CODX, we believe that powerful outcomes emerge at the intersection of branding, technology, strategy, and innovation. Our approach is holistic, forward-thinking, and deeply collaborative. Whether you’re launching a new brand, developing a complex digital solution, or scaling your business operations, our integrated services are designed to elevate your impact and unlock new growth opportunities."
        paragraph2="With CODX, you’re not just hiring a team  you’re gaining a long-term partner committed to turning your vision into a lasting legacy. We don’t follow trends; we help shape them. Together, let’s redefine what’s possible."
        image={businesswomen}
      />
      <OurApproach/>
      
        <GlimpseSection
        title="THE CODX EXPERIENCE"
        paragraph1="Our team brings unmatched experience to the table, having led fully integrated, multicultural, and global campaigns across all major categories. From retail giants to healthcare pioneers, we help brands connect with diverse audiences worldwide, driving success across industries."
        paragraph2="Deeply rooted in the digital landscape, we specialize in social media management. Understanding the Arab consumer’s early adoption and high engagement with social media, we craft impactful strategies for lasting success."
        image={enterprises}
      />
      <Services/>
      <OurStory/>
    </div>
    </>
  )
}
