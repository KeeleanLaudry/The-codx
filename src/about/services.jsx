import React, { useState } from "react";

const services = [
  {
    title: "Development",
    description: "Designed to scale with your business and deliver exceptional user experiences.",
    details: "We build high-performing websites, mobile apps, and custom platforms.",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#FF7F50"
  },
  {
    title: "Digital Marketing",
    description: "From SEO to social media and paid ads.",
    details: "We create data-driven marketing strategies that boost visibility, engagement, and conversions.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#FAD5A5"
  },
  {
    title: "Emerging Tech",
    description: "Stay ahead of the curve with AI, AR/VR, Blockchain, and IoT solutions.",
    details: "That transform how you operate, connect, and innovate.",
    bgImage: "https://i.pinimg.com/736x/95/47/e5/9547e51db9a80dfe103c9c19ee729dfc.jpg",
    color: "#e1a57d"
  },
  {
    title: "Advertising and Creative",
    description: "We blend strategy and storytelling to craft bold campaigns, stunning visuals.",
    details: "compelling brand experiences that leave a lasting impression.",
    bgImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#FBCEB1"
  },
  {
    title: "IT Services and Solutions",
    description: "From cloud solutions to cybersecurity and managed IT.",
    details: "We provide end-to-end support to keep your business secure, connected, and running smoothly.",
    bgImage: "https://i.pinimg.com/736x/ca/28/17/ca2817d6ae10ef785210ed60a67d8150.jpg",
    color: "#FF7F50"
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-black  overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              background: `radial-gradient(circle at center, ${
                ["#FF7F50", "#FAD5A5", "#e1a57d", "#FBCEB1"][i % 4]
              }15, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">Our </span>
          <span className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-orange-400 bg-clip-text text-transparent">

            Services
          </span>
        </h2>
      
      </div>

      {/* Cards Grid - 5 in a row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group perspective-1000 h-[350px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                  hoveredIndex === index ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <img 
                      src={service.bgImage} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute inset-0" style={{
                      background: `linear-gradient(135deg, ${service.color}40, transparent)`
                    }}></div>
                  </div>

                  {/* Content - Front */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FF7F50] transition-all duration-500"></div>
                    
                    {/* Title with animated underline */}
                    <h3 className="text-xl font-bold text-white mb-2 relative">
                      {service.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7F50] group-hover:w-12 transition-all duration-500"></span>
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-xs font-medium leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Hover indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[#FBCEB1] text-lg">↻</span>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    {/* Same background but different overlay */}
                    <img 
                      src={service.bgImage} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{
                      background: `linear-gradient(135deg, ${service.color}CC, #000000)`
                    }}></div>
                  </div>

                  {/* Content - Back */}
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                    <div className="animate-slide-up">
                     
                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      
                      {/* Details */}
                      <p className="text-gray-200  font-medium text-sm leading-relaxed">
                        {service.details}
                      </p>
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
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
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
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}