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
    <div ref={sectionRef} className="relative px-6  overflow-hidden ">
      <div className="relative z-10 mb-12 ">
        <h2 className="section-heading">
          Proven Track Record: Our Gains
        </h2>
   
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto z-10 items-start">
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
            className="group relative"
          >
          <div 
  className={`group relative bg-white rounded-2xl shadow-lg border transition-all duration-500 hover:scale-105 overflow-hidden ${
    activeIndex === index
      ? "border-[#2ABFBF] shadow-xl h-auto"
      : "border-gray-200 hover:border-[#2ABFBF] hover:shadow-xl h-[200px]"
  }`}
>
              <div 
  className={` className="absolute rounded-2xl top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
 ${
    activeIndex === index
      ? "scale-x-100"
      : "scale-x-0 group-hover:scale-x-100 "
  }`}
  style={{ backgroundColor: "#2ABFBF" }}
/>
              
              <div className="relative p-8 flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className={`section-heading ${
                    activeIndex === index ? "scale-110" : "scale-100"
                  }`}>
                    {item.number}
                  </div>
                </div>
                <h3 className="section-subtitle">
                  {item.text}
                </h3>                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="section-desc">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid > div {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .grid > div:nth-child(1) { animation-delay: 0.1s; }
        .grid > div:nth-child(2) { animation-delay: 0.2s; }
        .grid > div:nth-child(3) { animation-delay: 0.3s; }
        .grid > div:nth-child(4) { animation-delay: 0.4s; }
        .grid > div:nth-child(5) { animation-delay: 0.5s; }
        .grid > div:nth-child(6) { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
};

export default StatsSection;