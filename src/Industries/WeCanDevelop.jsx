import React from "react";

const FeaturesSection = ({ title, features = [], customText }) => {
  return (
    <section className="bg-black py-16 px-6 text-center">
      
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#e7c7a1] mb-12">
        {title}
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 text-black font-medium rounded-2xl py-8 px-6 shadow-md hover:scale-105 transition duration-300"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Custom Requirement Box */}
      {customText && (
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-gray-200 text-black rounded-2xl py-6 px-6 shadow-md">
            💡 {customText}
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesSection;