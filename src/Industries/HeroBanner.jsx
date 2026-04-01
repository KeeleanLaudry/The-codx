import React from "react";
import bgVideo from "../assets/herobanner.webm";

const BeautyHeroSection = ({
  title,
  description,
  cards = []
}) => {
  return (
    <div className="w-full  rounded-2xl overflow-hidden">

      {/* HERO SECTION */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/webm" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          
          <h1 className="bg-gradient-to-r from-[#2ABFBF] via-[#0D1F3C] to-[#2ABFBF] 
          font-semibold leading-tight pb-2 text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text">
            
            {Array.isArray(title) ? (
              title.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))
            ) : (
              title
            )}

          </h1>

          <p className="mt-4 text-[#2ABFBF] font-semibold text-sm sm:text-base md:text-lg">
            {description}
          </p>

        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="py-8 sm:py-10 px-4 sm:px-6 md:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#EADECF] text-sm sm:text-base text-[#0D1F3C] text-center py-5 px-4 rounded-2xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              {item}
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default BeautyHeroSection;