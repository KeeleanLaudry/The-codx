import React, { useState } from 'react';

const WebDevelopmentPhases = ({
  phaseTitle = "Web Development Phases",
  phaseDescription = "",
  phasesData = [],
  colors = {
    cream: "#FAD5A5",
    peach: "#e1a57d",
    blush: "#FBCEB1",
    coral: "#FF7F50"
  }
}) => {  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);


  

  return (
    <section className="relative bg-black min-h-screen py-20 overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
     
        
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              background: `radial-gradient(circle at 30% 30%, ${[colors.coral, colors.cream, colors.peach, colors.blush][i % 4]}15, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-${i % 3} ${15 + i * 2}s ease-in-out infinite`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
     <h2 className="text-5xl md:text-5xl font-semibold mb-6">
  <span className="bg-gradient-to-r from-[#FAD5A5] via-[#FBCEB1] via-[#e1a57d] to-[#FF7F50] bg-clip-text text-transparent">
    {phaseTitle}
  </span>
</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            CODx streamlines healthcare web development with a proven process: Discovery, UI/UX Design, Secure Development, and 
            Ongoing Support for long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
{phasesData.map((phase, index) => (
              <div
              key={phase.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(index)}
            >
              {/* Card */}
              <div className={`relative h-[400px] rounded-2xl overflow-hidden transition-all duration-500 ${
                hoveredIndex === index ? 'scale-105 shadow-2xl' : 'scale-100'
              }`}
                style={{
                  boxShadow: hoveredIndex === index ? `0 20px 40px -10px ${phase.color}80` : 'none'
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
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'bg-gradient-to-t from-black via-black/70 to-black/40' 
                      : 'bg-gradient-to-t from-black via-black/80 to-black/60'
                  }`}></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span 
                      className="text-8xl font-bold transition-all duration-500"
                      style={{ 
                        color: phase.color,
                        opacity: hoveredIndex === index ? 0.8 : 0.4,
                        transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      {phase.id}
                    </span>
                    
                  </div>

                  <div className="space-y-3 transform transition-all duration-500"
                    style={{
                      transform: hoveredIndex === index ? 'translateY(-5px)' : 'translateY(0)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-[2px] bg-gradient-to-r from-[#FF7F50] to-[#FAD5A5] transition-all duration-500 ${
                        hoveredIndex === index ? 'w-12' : 'w-8'
                      }`}></div>
                      <h3 className="text-xl font-bold text-white">
                        {phase.title}
                      </h3>
                    </div>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                      hoveredIndex === index ? 'text-gray-200' : 'text-gray-400'
                    }`}>
                      {phase.description}
                    </p>
                  </div>
                </div>
                <div 
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    border: `2px solid ${phase.color}`,
                    boxShadow: `inset 0 0 30px ${phase.color}40`
                  }}
                ></div>
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
      `}</style>
    </section>
  );
};

export default WebDevelopmentPhases;