import React, { useState } from "react";

const HealthcareServicesSection = ({ title, services = [], highlights = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Color palette
  const colors = {
    cream: "#F7F3EE",
    parchment: "#EDE7DF",
    navy: "#0D1F3C",
    teal: "#2ABFBF",
    circleBg: "#EADECF",
  };

  return (
    <section className="max-w- 5xl mx-auto py-16 px-6 md:px-12" style={{ background: colors.cream }}>
      {/* TITLE */}
      <h2 
        className="text-center text-3xl md:text-4xl font-semibold mb-12"
        style={{ color: colors.navy }}
      >
        {title}
      </h2>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full mx-auto mb-14">
        {services.map((item, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ boxShadow: "0 10px 25px -5px rgba(13, 31, 60, 0.1)" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div 
              className="absolute inset-0 flex items-center justify-center text-center px-3 transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${colors.navy}cc, ${colors.navy}99)`,
              }}
            >
              <p className="text-white text-sm font-semibold tracking-wide">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* HIGHLIGHTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto">
        {highlights.map((item, i) => (
          <div 
            key={i} 
            className="group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl"
            style={{ boxShadow: "0 10px 25px -5px rgba(13, 31, 60, 0.1)" }}
          >
            {/* CARD BASE */}
            <div 
              className="h-[180px] flex items-center justify-center text-center font-semibold transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${colors.circleBg}, ${colors.parchment})`,
              }}
            >
              <p 
                className="text-lg z-10 transition-opacity duration-300 group-hover:opacity-0 px-4"
                style={{ color: colors.navy }}
              >
                {item.title}
              </p>
            </div>
            
            {/* HOVER OVERLAY */}
            <div
              className="absolute inset-0 flex items-center justify-center text-center px-5
              translate-y-full group-hover:translate-y-0
              transition-transform duration-500 ease-out"
              style={{ background: colors.navy }}
            >
              <p 
                className="text-sm leading-relaxed"
                style={{ color: colors.cream }}
              >
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
        
        .service-card {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HealthcareServicesSection;