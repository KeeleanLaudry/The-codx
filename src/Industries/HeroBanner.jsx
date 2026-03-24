import React from "react";

const BeautyHeroSection = ({
  title,
  description,
  backgroundImage,
  cards = []
}) => {
  return (
    <div className="w-full mt-10 rounded-2xl overflow-hidden">
      
      {/* HERO SECTION */}
      <div
        className="relative h-[520px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="bg-gradient-to-r from-[#FAD5A5] via-[#FBCEB1] via-[#e1a57d] to-[#FF7F50] 
  font-semibold leading-tight pb-2text-4xl md:text-5xl  text-transparent bg-clip-text ">
            {title}
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            {description}
          </p>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="bg-black py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 text-black text-center py-6 px-4 rounded-2xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
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