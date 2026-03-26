import React from "react";

export default function FlipCard({ logo, title, description }) {
  return (
    <div className="group perspective  h-[280px]">
      <div className="relative preserve-3d transition-all duration-700 group-hover:rotate-x-180 max-w-5xl h-full">
        
        {/* Front Card */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 overflow-hidden"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="relative mb-4">
          
            <img 
              src={logo} 
              alt={title} 
              className="w-32 h-28 object-contain relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
            />
          </div>
          
          {/* Title */}
          <h3 className="section-subtitle text-center" >
            {title}
          </h3>
          
          {/* Hover Indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm"
              style={{ backgroundColor: "#2ABFBF20" }}
            >
              <span className="text-sm" style={{ color: "#2ABFBF" }}>↻</span>
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 rotate-x-180 backface-hidden rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-center overflow-hidden"
          style={{ 
            background: "linear-gradient(135deg, #0D1F3C 0%, #1a2f4e 100%)"
          }}
        >
          {/* Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #2ABFBF 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }}
          />
          
    
          <div className="relative z-10 transform transition-all duration-500 group-hover:scale-105">
            <h3 className="text-xl font-bold mb-3" style={{ color: "#FFFFFF" }}>
              {title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#EADECF" }}>
              {description}
            </p>
          </div>
          
        
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        /* Smooth hover effects */
        .group:hover .backface-hidden:first-child {
          box-shadow: 0 20px 35px -10px rgba(43, 191, 191, 0.15);
        }
        
        /* Optional: Add shine effect on hover */
        .group:hover .backface-hidden:first-child::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(43, 191, 191, 0.1), transparent);
          animation: shine 0.8s ease-in-out;
        }
        
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}