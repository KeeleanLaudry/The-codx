import React, { useState } from 'react';

const WebDevelopmentPhases = ({
  phaseTitle = "Web Development Phases",
  phaseDescription = "CODx streamlines healthcare web development with a proven process: Discovery, UI/UX Design, Secure Development, and Ongoing Support for long-term success.",
  phasesData = [],
  colors = {
    cream: "#F7F3EE",
    parchment: "#EDE7DF",
    navy: "#0D1F3C",
    teal: "#2ABFBF",
    circle: "#EADECF"
  }
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative  max-w-5xl mx-auto  overflow-hidden" >
      <div className="absolute inset-0">
        {/* Floating orbs with new color scheme */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              background: `radial-gradient(circle at 30% 30%, ${[colors.teal, colors.navy, colors.circle, colors.teal][i % 4]}10, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-${i % 3} ${15 + i * 2}s ease-in-out infinite`,
              opacity: 0.3,
            }}
          />
        ))}
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.teal} 1px, transparent 1px)`,
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4  ">
        <div className=" mb-5">
          <h2 className="section-heading" >
            {phaseTitle}
          </h2>          
          <p className="section-desc" >
            {phaseDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phasesData.map((phase, index) => (
            <div
              key={phase.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(index)}
            >
              {/* Card */}
              <div 
                className={`relative h-[350px] rounded-2xl overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-105 shadow-2xl' : 'scale-100'
                }`}
                style={{
                  boxShadow: hoveredIndex === index ? `0 20px 40px -10px ${colors.teal}80` : 'none',
                  backgroundColor: colors.parchment
                }}
              >
                <div className="absolute inset-0">
                  <img 
                    src={phase.image} 
                    alt={phase.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div 
                    className={`absolute inset-0 transition-all duration-500 ${
                      hoveredIndex === index 
                        ? 'bg-gradient-to-t from-[#0D1F3C] via-[#0D1F3C]/80 to-[#0D1F3C]/40' 
                        : 'bg-gradient-to-t from-[#0D1F3C] via-[#0D1F3C]/90 to-[#0D1F3C]/60'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-500 backdrop-blur-sm ${
                        hoveredIndex === index ? 'scale-110' : 'scale-100'
                      }`}
                      style={{ 
                        backgroundColor: `${colors.teal}20`,
                        color: colors.teal,
                        border: `1px solid ${colors.teal}40`
                      }}
                    >
                      {phase.id}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div 
                        className={`h-[2px] bg-gradient-to-r from-[#2ABFBF] to-[#2ABFBF] transition-all duration-500 ${
                          hoveredIndex === index ? 'w-12' : 'w-8'
                        }`}
                      />
                      <h3 className="text-lg font-bold text-white">
                        {phase.title}
                      </h3>
                    </div>
                    
                    <p className={`text-sm font-medium  transition-all duration-500 ${
                      hoveredIndex === index ? 'text-[#EADECF]' : 'text-[#EDE7DF]'
                    }`}>
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Border Effect on Hover */}
                <div 
                  className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    border: `2px solid ${colors.teal}`,
                    boxShadow: `inset 0 0 30px ${colors.teal}40`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(50px, -30px) rotate(10deg); }
          66% { transform: translate(-30px, 40px) rotate(-5deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 50px) rotate(-8deg); }
          66% { transform: translate(30px, -30px) rotate(12deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, 40px) rotate(15deg); }
          66% { transform: translate(-40px, -30px) rotate(-10deg); }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WebDevelopmentPhases;