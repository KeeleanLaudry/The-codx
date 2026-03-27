import React from "react";

const FeaturesSection = ({ title, features = [], customText }) => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 ">
      
      {/* Title */}
      <h2 className="section-heading mb-10">
        {title}
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#EADECF] text-[#0D1F3C] font-medium rounded-2xl py-8 px-6 shadow-md hover:scale-105 transition duration-300"
          >
            {item}
          </div>
        ))}
      </div>

      {customText && (
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <div className="bg-[#EADECF] text-[#0D1F3C] font-medium rounded-2xl py-6 px-6 shadow-md">
            💡 {customText}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesSection;