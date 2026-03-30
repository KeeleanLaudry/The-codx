import React from "react";

export default function FlipCard({ logo, title, description }) {
  return (
    <div className="group perspective w-full h-[260px] pb-10">

      <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-x-180 w-full h-full">

        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg flex flex-col justify-center items-center p-6">

          {/* Circle Background */}
          <div className="w-28 h-28 rounded-full  flex items-center justify-center mb-3">
            <img 
              src={logo} 
              alt={title} 
              className="w-36 h-18 object-contain"
            />
          </div>

        </div>

        {/* Back */}
        <div className="absolute inset-0 rotate-x-180 backface-hidden 
          bg-gradient-to-br from-[#0D1F3C] via-[#1a3a5c] to-[#2ABFBF]
          text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 text-center">

          <h3 className="text-lg md:text-xl font-semibold mb-2">
            {title}
          </h3>

          <p className="text-base leading-relaxed font-medium text-[#EDE7DF]">
            {description}
          </p>

        </div>

      </div>
    </div>
  );
}