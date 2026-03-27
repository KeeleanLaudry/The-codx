import React from "react";

export default function FlipCard({ logo, title, description }) {
  return (
    <div className="group perspective w-full h-[260px]">

      <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-x-180 w-full h-full">

        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg flex flex-col justify-center items-center p-6">

         <img src={logo} alt={title} className="w-34 h-32 object-contain" />    

        </div>
<div className="absolute inset-0 rotate-x-180 backface-hidden  bg-gradient-to-br from-[#FAD5A5] via-[#FBCEB1] to-[#FF7F50]
      text-black  rounded-xl shadow-lg flex flex-col items-center justify-center p-6 text-center">

  <h3 className="text-xl font-semibold text-white mb-2">
    {title}
  </h3>

  <p className="text-sm leading-relaxed font-medium text-white">
    {description}
  </p>

</div>

      </div>

    </div>
  );
}