import React, { useState } from "react";

export default function FlipCard({ logo, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[220px] md:h-[200px] cursor-pointer rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full bg-white rounded-2xl shadow-md border border-[#EADECF] overflow-hidden group hover:shadow-2xl transition-all duration-500">
        
        {/* 🔥 Corner Reveal Effect */}
       <div
  className="absolute bottom-0 right-0 bg-gradient-to-tl from-[#2ABFBF] to-[#0D1F3C] transition-all duration-700 ease-out overflow-hidden z-20"
  style={{
    width: isHovered ? '100%' : '0px',
    height: isHovered ? '100%' : '0px',
    borderRadius: isHovered ? '0' : '0',
  }}
>
<div className={`relative z-20 p-6 text-center transition-all duration-500 ${isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
  
  {/* Logo (center always) */}
  <div className="h-16 flex items-center justify-center mb-4">
    <img
      src={logo}
      alt={title}
      className="max-h-full object-contain"
    />
  </div>

  {/* Title (optional) */}
  <h3 className="text-lg font-bold text-[#0D1F3C]">
    {title}
  </h3>

</div>
          {/* Content inside corner (visible on hover) */}
   <div className={`absolute inset-0 p-6 flex flex-col items-center justify-center text-center transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
  
  {/* Logo (hover version) */}
  <img
    src={logo}
    alt={title}
    className="max-h-16 max-w-full object-contain mb-3 brightness-0 invert"
  />

  <h3 className="text-lg font-bold text-white mb-2">
    {title}
  </h3>

  <button className="mt-4 px-4 py-1.5 bg-white rounded-full text-[#0D1F3C] text-xs font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 shadow-md hover:shadow-xl">
    <span>View Case Study</span>
  </button>

</div>
        </div>

        {/* 🔥 Overlay Gradient */}
        <div className={`absolute inset-0 bg-[linear-gradient(135deg,_#0D1F3C,_#2ABFBF)] transition-all duration-500 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

        {/* 📦 Main Content */}
        <div className={`relative z-20 p-6 text-center transition-all duration-500 ${isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          
          {/* Logo */}
          <div className="h-16 flex items-center justify-center mb-4">
            <img
              src={logo}
              alt={title}
              className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#0D1F3C] transition-colors duration-300">
            {title}
          </h3>

          {/* Description (hidden initially, shows on hover) */}
          <p className="text-sm text-gray-600 mt-2 opacity-0 max-h-0 overflow-hidden transition-all duration-500">
            {description}
          </p>

        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 1s ease-in-out infinite;
        }
        
        .delay-150 {
          animation-delay: 0.15s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}