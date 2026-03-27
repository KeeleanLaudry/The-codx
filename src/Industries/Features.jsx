import React from "react";

const FeaturesSection = ({ items = [] }) => {
  // Color palette
  const colors = {
    cream: "#F7F3EE",
    parchment: "#EDE7DF",
    navy: "#0D1F3C",
    teal: "#2ABFBF",
    circleBg: "#EADECF",
  };

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 md:px-12" >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        
        {items.map((item, i) => (
          <div 
            key={i} 
            className="flex gap-5 items-start group transition-all duration-300 hover:translate-x-1"
          >
            {/* ICON with teal accent background */}
            <div 
              className="mt-1 flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 group-hover:scale-110"
              style={{ 
                background: `linear-gradient(135deg, ${colors.teal}15, ${colors.teal}08)`,
                color: colors.teal
              }}
            >
              <div className="w-6 h-6">
                {item.icon}
              </div>
            </div>

            {/* TEXT */}
            <div className="flex-1">
              <h3 
                className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-[#2ABFBF]"
                style={{ color: colors.navy }}
              >
                {item.title}
              </h3>

              <p 
                className="leading-relaxed text-sm md:text-base"
                style={{ color: colors.navy + "cc" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FeaturesSection;