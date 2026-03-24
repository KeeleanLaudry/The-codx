import React from "react";

const PortalCard = ({
  title,
  description,
  buttonText = "Learn More",
  image,
  reverse = false
}) => {
  return (
    <div className="flex justify-center w-full">
      
      <div
        className={`max-w-6xl w-full rounded-2xl overflow-hidden
        bg-gradient-to-r from-[#2c2724] via-[#e2b78c] to-[#f57c4c]
        py-6 px-12 flex items-center gap-10
        ${reverse ? "flex-row-reverse" : "flex-row"}
        `}
      >
        {/* IMAGE */}
        <div className="flex justify-center w-1/2">
          <img
            src={image}
            alt={title}
  className="w-[480px] h-[320px] object-contain"
       />
        </div>

        {/* TEXT */}
        <div className="text-white w-1/2">
          <h2 className="text-5xl uppercase font-bold mb-4">
            {title}
          </h2>

          <p className="text-lg opacity-90 mb-6">
            {description}
          </p>

          <button
            className="bg-white text-black font-semibold px-6 py-3
            rounded-full shadow-md hover:scale-105 transition"
          >
            {buttonText}
          </button>
        </div>
      </div>

    </div>
  );
};

export default PortalCard;