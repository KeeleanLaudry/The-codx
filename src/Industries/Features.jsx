import React from "react";

const FeaturesSection = ({ items = [] }) => {
  return (
    <section className="bg-black text-white px-6 md:px-12">
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        
        {items.map((item, i) => (
          <div key={i} className="flex gap-4 items-start">

            {/* ICON */}
            <div className="mt-1 text-white/80">
              {item.icon}
            </div>

            {/* TEXT */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
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