import React, { useState } from "react";
import FlipCard from "./FlipCard";
import drive from "../assets/logos/Drive-Logo-3-PNG.jpg";
import Hubara from "../assets/logos/Hubara-Logo.svg"
import XLogo from "../assets/logos/10XLogo-06-300x300.png"
import oraah from "../assets/logos/oraah-Black-logo-150x150.png"
import Dubshi from "../assets/logos/Dubshi-300x300.png"
import Infrafit from "../assets/logos/Infrafit-Logo-300x166.png"
import Rateb from "../assets/logos/Lama-Rateb-and-Marwa-Rateb-logo-150x150.png"
import Shades from "../assets/logos/Shades-Logo-Black-300x61.png"
import MMR_mmr from "../assets/logos/MMR_mmr-300x300.png"
import Mantis from "../assets/logos/Mantis-Black-logo-300x214.jpg"
import bonjour from "../assets/logos/logo-bonjour-01-300x150.png"
import Auracious from "../assets/logos/Auracious-Global-Consultancy-Logo-300x284.png"
import arabian from "../assets/logos/arabian-flames_logo-150x133.png"
import Castalion from "../assets/logos/Castalion-New-logo-300x238.png"
import GoodwillLogo from "../assets/logos/GoodwillLogo_tranp-300x238.png"
import A2Z from "../assets/logos/A2Z-NEW-LOGO-300x300.png"
import ARM from "../assets/logos/ARM-Business-Center-logo.png"
import AHK from "../assets/logos/AHK-Group-logo-300x67.png"
import Skycool from "../assets/logos/Skycool-PNG-300x137.png"
import Levantine from "../assets/logos/Levantine-medical-centre-logo.webp"
import Samara from "../assets/logos/Samara-Logo-300x87.png"
import chimney from "../assets/logos/Chimney-Logo-Transparent-Picsart-AiImageEnhancer-240x300.jpg";
const data = {
  web: [
    {
      logo: drive,
      title: "The Drive hub Luxury Car Rental Portal",
      description: "For The Drive Hub, we developed a complete digital and branding solution to merge luxury with technology."
    },
    {
      logo: AHK,
      title: "AHK & Co. Business Setup & Consulting",
      description: "For AHK & Co., a forward-thinking business setup and consulting firm, we delivered a complete 360° branding and digital transformation."
    },
     {
      logo: ARM,
      title: "ARM Business Center Business Center Solutions",
      description: "For ARM Business Center, we provided a complete digital solution to showcase their business setup services and modern office spaces."
    },
    {
      logo: A2Z,
      title: "A2Z Business Center Business Center Solutions",
      description: "For A2Z Business Center, we delivered a complete branding and digital experience"
    },
     {
      logo: GoodwillLogo,
      title: "Goodwill Homes Real Estate",
      description: "Our collaboration with Goodwill Homes encompassed a comprehensive digital and branding strategy."
    },
    {
      logo: Castalion,
      title: "Castilion Estates Real Estate",
      description: "For Castilion Estates, a luxury real estate firm, we provided a full branding and digital transformation to reinforce their premium positioning."
    },
     {
      logo: arabian,
      title: "Arabian Flames Luxury Perfume Brand",
      description: "For Castilion Estates, a luxury real estate firm, we provided a full branding and digital transformation to reinforce their premium positioning."
    },
    {
      logo: Auracious,
      title: "Auracious Global Consulting Life Coaching & Personal Growth",
      description: "Auracious Global Consulting is a brand centered on transformation and personal growth."
    },
     {
      logo: bonjour,
      title: "Bonjour Box Kids’ School Essential",
      description: "For Bonjour, a playful kids’ school essentials brand, we designed and developed a vibrant, colorful, and user-friendly website that reflects their cheerful personality."
    },
    {
      logo: Mantis,
      title: "Mantis Gents Salon Grooming & Lifestyle",
      description: "For Mantis Gents Salon, we delivered a full-scale digital transformation from branding to lead generation."
    },
     {
      logo: MMR_mmr,
      title: "Millionaire’s Mansions Real Estate Luxury Real Estate",
      description: "For Millionaire’s Mansions, we provided an extensive branding and digital strategy to reflect their luxury positioning in real estate market."
    },
    {
      logo: Shades,
      title: "Shades SalonBeauty & Wellness",
      description: "For Shades Salon, we provided a complete digital and branding solution that mirrors their chic, modern aesthetic."
    },
      {
      logo: Hubara,
      title: "Hubara Clothing Brand",
      description: "For Hubara, we provided end-to-end branding and digital solutions to bring the brand from concept to reality."
    },
     {
      logo: Rateb,
      title: "Lama Rateb & Marwa Rateb Public Figures & Content Creators",
      description: "For content creators Lama and Marwa Rateb, we provided a full branding and digital solution to amplify their online influence."
    },
    {
      logo: Infrafit,
      title: "Infrafit Fitness & Wellness",
      description: "For Infrafit, we delivered a full-scale digital transformation to enhance brand consistency and lead generation."
    },
   
    {
      logo: Skycool,
      title: "Skycool Technical Services",
      description: "For Skycool, we delivered a complete digital and branding strategy to highlight their technical expertise in cooling solutions and HVAC services"
    },
     {
      logo: Samara,
      title: "Samara Builders Construction & Real Estate",
      description: "For Samara Builders, we provided a full branding and digital solution to showcase their reliability, quality, and professionalism."
    },
    {
      logo: Levantine,
      title: "Levantine Medical Centre Healthcare",
      description: "For Levantine Medical Centre, we developed a professional, patient-friendly website that emphasizes trust, clarity, and ease of use."
    }
  ],

  marketing: [
   {
      logo: drive,
      title: "The Drive hub Luxury Car Rental Portal",
      description: "For The Drive Hub, we developed a complete digital and branding solution to merge luxury with technology."
    },
    {
      logo: AHK,
      title: "AHK & Co. Business Setup & Consulting",
      description: "For AHK & Co., a forward-thinking business setup and consulting firm, we delivered a complete 360° branding and digital transformation."
    },
      {
      logo: GoodwillLogo,
      title: "Goodwill Homes Real Estate",
      description: "Our collaboration with Goodwill Homes encompassed a comprehensive digital and branding strategy."
    },
       {
      logo: Dubshi,
      title: "Dubshi Streetwear Fashion Brand",
      description: "For Dubshi, we delivered a comprehensive branding and digital strategy that amplified their unique voice and storytelling approach.."
    },
      {
      logo: oraah,
      title: "GOraah Perfume Brand",
      description: "For Oraah, a niche perfume brand, we provided a full digital and branding solution to strengthen their market presence."
    },
       {
      logo: XLogo,
      title: "10x Curtains Home Decor",
      description: "For 10x Curtains, we delivered a comprehensive branding and digital marketing strategy to elevate their premium curtain collections."
    },
       {
      logo: MMR_mmr,
      title: "Millionaire’s Mansions Real Estate Luxury Real Estate",
      description: "For Millionaire’s Mansions, we provided an extensive branding and digital strategy to reflect their luxury positioning in real estate market."
    },
  ],

  advertising: [
    {
      logo: drive,
      title: "The Drive hub Luxury Car Rental Portal",
      description: "For The Drive Hub, we developed a complete digital and branding solution to merge luxury with technology."
    },
    {
      logo: AHK,
      title: "AHK & Co. Business Setup & Consulting",
      description: "For AHK & Co., a forward-thinking business setup and consulting firm, we delivered a complete 360° branding and digital transformation."
    },
     {
      logo: Dubshi,
      title: "Dubshi Streetwear Fashion Brand",
      description: "For Dubshi, we delivered a comprehensive branding and digital strategy that amplified their unique voice and storytelling approach.."
    },
    {
      logo: Mantis,
      title: "Mantis Gents Salon Grooming & Lifestyle",
      description: "For Mantis Gents Salon, we delivered a full-scale digital transformation from branding to lead generation."
    },
      {
      logo: XLogo,
      title: "10x Curtains Home Decor",
      description: "For 10x Curtains, we delivered a comprehensive branding and digital marketing strategy to elevate their premium curtain collections."
    },
      {
      logo: chimney,
      title: "Chimney Design Studio Interior Design",
      description: "For Chimney Design Studio, we delivered a complete digital strategy to enhance visibility and engagement."
    },
     {
      logo: Rateb,
      title: "Lama Rateb & Marwa Rateb Public Figures & Content Creators",
      description: "For content creators Lama and Marwa Rateb, we provided a full branding and digital solution to amplify their online influence."
    },
  ],

  uiux: [
     {
      logo: drive,
      title: "The Drive hub Luxury Car Rental Portal",
      description: "For The Drive Hub, we developed a complete digital and branding solution to merge luxury with technology."
    },
    {
      logo: AHK,
      title: "AHK & Co. Business Setup & Consulting",
      description: "For AHK & Co., a forward-thinking business setup and consulting firm, we delivered a complete 360° branding and digital transformation."
    },
     {
      logo: chimney,
      title: "Chimney Design Studio Interior Design",
      description: "For Chimney Design Studio, we delivered a complete digital strategy to enhance visibility and engagement."
    },
  ]
};

export default function ServicesSection() {

  const [active, setActive] = useState("web");

  const buttons = [
    { key: "web", label: "Web Development" },
    { key: "marketing", label: "Digital Marketing" },
    { key: "advertising", label: "Advertising" },
    { key: "uiux", label: "UI/UX Design" }
  ];

  return (
    <section className=" px-6">

 <div className="flex justify-center mb-12">

  <div className="w-full max-w-5xl bg-[#90550c]  rounded-full shadow-lg flex flex-wrap justify-center gap-5">

    {buttons.map((btn) => (
      <button
        key={btn.key}
        onClick={() => setActive(btn.key)}
        className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300
          
          ${
            active === btn.key
              ? "bg-[#C97A1B] text-white shadow-md"
              : "text-gray-300 hover:text-black"
          }
        `}
      >
        {btn.label}
      </button>
    ))}

  </div>

</div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">

        {data[active].map((item, index) => (
          <FlipCard key={index} {...item} />
        ))}

      </div>

    </section>
  );
}