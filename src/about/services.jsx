import React, { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Development",
    description: "Designed to scale with your business and deliver exceptional user experiences.",
    details: "We build high-performing websites, mobile apps, and custom platforms that drive results.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  },
  {
    title: "Digital Marketing",
    description: "From SEO to social media and paid ads, we create data-driven strategies.",
    details: "Boost visibility, engagement, and conversions with our proven marketing approaches.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  },
  {
    title: "Emerging Tech",
    description: "Stay ahead with AI, AR/VR, Blockchain, and IoT solutions.",
    details: "Transform how you operate, connect, and innovate with cutting-edge technology.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  },
  {
    title: "Advertising & Creative",
    description: "Blend strategy and storytelling for bold campaigns.",
    details: "Create stunning visuals and compelling brand experiences that leave lasting impressions.",
    image: "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  },
  {
    title: "IT Services & Solutions",
    description: "From cloud solutions to cybersecurity and managed IT.",
    details: "End-to-end support to keep your business secure, connected, and running smoothly.",
    image: "https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "linear-gradient(135deg, #2ABFBF20, #0D1F3C20)"
  }
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && scrollContainerRef.current) {
      autoScrollInterval.current = setInterval(() => {
        const container = scrollContainerRef.current;
        if (container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          setScrollPosition((prev) => {
            const newPosition = prev + 1;
            if (newPosition >= maxScroll) {
              return 0;
            }
            return newPosition;
          });
        }
      }, 30);
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isAutoScrolling]);

  // Update scroll position
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section 
      className="relative px-6 md:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              filter: 'blur(50px)'
            }}
          />
        ))}
      </div>

      <div className="  max-w-5xl mx-auto">
        <div className=" mb-16">
          <h2 className="section-heading" >
           OUR SERVICES
          </h2>
        </div>
        <div 
          ref={scrollContainerRef}
          className="relative z-10 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            scrollBehavior: 'smooth',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-6 min-w-max px-4 pb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group perspective-1000 w-[320px] h-[420px] flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                    hoveredIndex === index ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {service.title}
                      </h3>
                      
                      <p className="text-base font-medium  text-white/90 line-clamp-2">
                        {service.description}
                      </p>

                    </div>
                    <div 
                      className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ borderColor: "#2ABFBF" }}
                    />
                  </div>

                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />              
                    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                      <div className="transform transition-all duration-500">
                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {service.title}
                        </h3>
                        
                        <div className="w-12 h-0.5 bg-[#2ABFBF] mx-auto mb-4"></div>
                        
                        <p className="text-[18px] leading-relaxed text-white/95">
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
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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