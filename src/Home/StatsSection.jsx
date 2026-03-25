import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
const stats = [
  { 
    number: "80%", 
    text: "Clients Return for More Projects", 
    desc: "Our commitment to excellence and tangible results builds trust, with nearly half of our clients coming back for additional partnerships." 
  },
  { 
    number: "65%", 
    text: "of New Clients from Referrals", 
    desc: "A testament to our dedication, satisfied clients consistently recommend us to their peers, showcasing the quality of our work." 
  },
  { 
    number: "14", 
    text: "Average Short Time for Projects", 
    desc: "Fast, efficient onboarding ensures we kick off your project within just 14 days of finalizing the agreement." 
  },
  { 
    number: "500+", 
    text: "Projects Successfully Completed", 
    desc: "From concept to completion, we've launched over 500 unique and diverse projects tailored to our clients' needs." 
  },
  { 
    number: "5+ Countries", 
    text: "Global Reach in Clientele", 
    desc: "Trusted by clients worldwide, we've delivered solutions to businesses in over 5+ countries and are growing." 
  },
  { 
    number: "30+ Industries", 
    text: "Diverse Expertise Across Sectors", 
    desc: "Our proven success spans industries like Real Estate, E-Commerce, aesthetic and wellness, technology and beyond." 
  },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
const isInView = useInView(sectionRef, { amount: 0.5 }); 
const [activeIndex, setActiveIndex] = useState(0);
const [isHovered, setIsHovered] = useState(false);
useEffect(() => {
  if (!isInView || isHovered) return;

  const interval = setInterval(() => {
    setActiveIndex(prev => (prev + 1) % stats.length);
  }, 1200);

  return () => clearInterval(interval);
}, [isInView, isHovered, stats.length]);
  return (
<div ref={sectionRef} className="relative px-6 py-10 text-center overflow-hidden">        
   <div className="relative z-10 mb-16">
     
        <h2 className="section-heading">
          Proven Track Record: Our Gains
        </h2>
    
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto  z-10 items-start">
        {stats.map((item, index) => (
        <div
  key={index}
  onMouseEnter={() => {
    setIsHovered(true);
    setActiveIndex(index); 
  }}
  onMouseLeave={() => {
    setIsHovered(false); 
  }}
className={`group relative bg-white rounded-2xl shadow-lg border transition-all duration-300 ${
  activeIndex === index
    ? "border-[#2ABFBF]"
    : "border-transparent hover:border-[#2ABFBF]"
}`}>
            {/* Gradient border effect on hover */}
            <div className="absolute inset-0 border-[#2ABFBF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm"></div>
            
            <div className="relative bg-white rounded-2xl p-8 m-[2px] h-full flex flex-col items-center text-center">
              
              {/* Number */}
              <div className="relative z-10">
                <h3 className="section-title">
                  {item.number}
                </h3>
              </div>
              
              <p className="section-subtitle">
                {item.text}
              </p>
<div
  className={`overflow-hidden transition-all duration-500 ${
    activeIndex === index
      ? "max-h-40 opacity-100"
      : "max-h-0 opacity-0"
  }`}
>
  <p className="section-desc">
    {item.desc}
  </p>
</div>
              
             
            </div>
          </div>
        ))}
      </div>

  
    </div>
  );
};

export default StatsSection;