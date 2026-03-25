import React, { useState } from "react";

const HealthcareServicesSection = ({ title, services = [], highlights = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-black py-10 px-6 md:px-12">
      
      {/* TITLE */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 
      bg-gradient-to-r from-[#FAD5A5] via-[#FBCEB1] to-[#FF7F50] 
      bg-clip-text text-transparent">
        {title}
      </h2>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full mx-auto mb-14">
        {services.map((item, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-2">
              <p className="text-white text-sm font-semibold">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto">
  {highlights.map((item, i) => (
    <div key={i} className="group relative cursor-pointer overflow-hidden rounded-2xl">

      {/* CARD BASE */}
      <div className="h-[160px] flex items-center justify-center text-center font-semibold text-black 
      bg-gradient-to-r from-[#2b2b2b] via-[#d9b38c] to-[#FF7F50] transition-all duration-300">
        
        <p className="text-lg z-10 transition-opacity duration-300 group-hover:opacity-0">
          {item.title}
        </p>
      </div>
      <div
        className="absolute inset-0 bg-black/90 flex items-center justify-center text-center px-4
        translate-y-full group-hover:translate-y-0
        transition-transform duration-500 ease-in-out"
      >
        <p className="text-sm text-white">
          {item.description}
        </p>
      </div>

    </div>
  ))}
</div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </section>
  );
};

export default HealthcareServicesSection;