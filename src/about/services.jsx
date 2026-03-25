import React, { useState } from "react";

const services = [
  {
    title: "Development",
    description: "Designed to scale with your business and deliver exceptional user experiences.",
    details: "We build high-performing websites, mobile apps, and custom platforms that drive results.",
    icon: "💻",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  },
  {
    title: "Digital Marketing",
    description: "From SEO to social media and paid ads, we create data-driven strategies.",
    details: "Boost visibility, engagement, and conversions with our proven marketing approaches.",
    icon: "📊",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  },
  {
    title: "Emerging Tech",
    description: "Stay ahead with AI, AR/VR, Blockchain, and IoT solutions.",
    details: "Transform how you operate, connect, and innovate with cutting-edge technology.",
    icon: "🚀",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  },
  {
    title: "Advertising & Creative",
    description: "Blend strategy and storytelling for bold campaigns.",
    details: "Create stunning visuals and compelling brand experiences that leave lasting impressions.",
    icon: "🎨",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  },
  {
    title: "IT Services & Solutions",
    description: "From cloud solutions to cybersecurity and managed IT.",
    details: "End-to-end support to keep your business secure, connected, and running smoothly.",
    icon: "⚙️",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative px-6 md:px-16 overflow-hidden" >
      {/* Animated background particles with new color scheme */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: `radial-gradient(circle at center, ${
                ["#2ABFBF", "#EDE7DF", "#EADECF", "#0D1F3C"][i % 4]
              }10, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              filter: 'blur(50px)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center mb-16">
     
        <h2 className=" gradient-text text-5xl md:text-6xl font-bold mb-4" >
          Our Services
        </h2>
        
        <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "#0D1F3C" }}>
          Comprehensive solutions tailored to your business needs
        </p>
      </div>

      {/* Cards Grid - 5 in a row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group perspective-1000 h-[380px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                  hoveredIndex === index ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: service.gradient,
                      backgroundColor: "#EDE7DF"
                    }}
                  />
                  <div 
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10"
                    style={{ backgroundColor: "#2ABFBF" }}
                  />
                  <div 
                    className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-10"
                    style={{ backgroundColor: "#2ABFBF" }}
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="mt-4">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{ 
                          backgroundColor: `${"#2ABFBF"}20`,
                          color: "#2ABFBF"
                        }}
                      >
                        {service.icon}
                      </div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: "#0D1F3C" }}>
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm leading-relaxed" style={{ color: "#0D1F3C" }}>
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="flex justify-end">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 group-hover:translate-x-1"
                        style={{ backgroundColor: `${"#2ABFBF"}20` }}
                      >
                        <span style={{ color: "#2ABFBF" }}>→</span>
                      </div>
                    </div>
                  </div>

                  {/* Border effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ borderColor: "#2ABFBF" }}
                  />
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden">
                  {/* Background */}
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${"#2ABFBF"}20, ${"#0D1F3C"}20)`,
                      backgroundColor: "#EDE7DF"
                    }}
                  />
                  
                  {/* Pattern overlay */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${"#2ABFBF"} 1px, transparent 1px)`,
                      backgroundSize: "24px 24px"
                    }}
                  />

                  {/* Content - Back */}
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                    <div className="animate-slide-up">
                      {/* Icon */}
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
                        style={{ backgroundColor: `${"#2ABFBF"}20` }}
                      >
                        {service.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold mb-3" style={{ color: "#0D1F3C" }}>
                        {service.title}
                      </h3>
                      
                      {/* Details */}
                      <p className="text-sm leading-relaxed" style={{ color: "#0D1F3C" }}>
                        {service.details}
                      </p>

                      {/* Decorative dot */}
                      <div 
                        className="w-8 h-8 rounded-full mx-auto mt-4 opacity-20"
                        style={{ backgroundColor: "#EADECF" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <style jsx>{`
        .perspective-1000 {
          perspective: 2000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -20px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}