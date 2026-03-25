import React from "react";

const timeline = [
  {
    year: "2019",
    title: "The Vision is Born",
    desc: "CODX was founded with a mission to empower businesses through technology, innovation, and creativity."
  },
  {
    year: "2020",
    title: "Laying the Foundation",
    desc: "We launched our first wave of services focusing on website development and branding."
  },
  {
    year: "2021",
    title: "Expanding Horizons",
    desc: "CODX diversified into social media marketing helping businesses scale their digital presence."
  },
  {
    year: "2022",
    title: "Innovation at Scale",
    desc: "We introduced cutting-edge web solutions and custom apps tailored to meet evolving client needs."
  },
  {
    year: "2023",
    title: "Recognition and Growth",
    desc: "CODX achieved milestones with partnerships on global projects."
  },
  {
    year: "2024",
    title: "Empowering Businesses Globally",
    desc: "Expanded into AI integrations and data-driven marketing strategies."
  },
  {
    year: "2025",
    title: "Leading the Future of Digital Transformation",
    desc: "CODX continues to pioneer scalable and impactful digital solutions."
  },
  {
  year: "2026",
  title: "Scaling Innovation Worldwide",
  desc: "CODX continues to expand globally by delivering advanced AI solutions, automation systems, and next-generation digital platforms for businesses."
}
];

export default function OurStory() {
  return (
    <section className="relative  py-24 text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Heading with creative typography */}
      <div className="relative text-center mb-20">
        <h2 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 opacity-10">
          JOURNEY
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl md:text-5xl font-bold">
            <span className="text-white">OUR </span>
            <span className="gradient-text relative">
              STORY
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent"></span>
            </span>
          </span>
        </div>
      </div>

      {/* Main timeline */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Curved connecting line */}
        <svg
          className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none"
          style={{ minHeight: '800px' }}
        >
          <path
            d="M 400,50 
               C 600,200 200,350 400,500 
               C 600,650 200,800 400,950
               C 600,1100 200,1250 400,1400"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF7F50" />
              <stop offset="100%" stopColor="#FF7F50" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Timeline items */}
        <div className="relative space-y-32">
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative flex items-center ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content side */}
                <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div
                    className="transform transition-all duration-500 hover:scale-105"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                    }}
                  >
                    {/* Year tag */}
                    <div
                        className={`inline-block mb-4 mr-4 px-4 py-2 bg-gradient-to-r from-[#2ABFBF] to-transparent border border-orange-500/30 rounded-full ${
                          isEven ? '' : 'flex-row-reverse'
                        }`}
                      >
                      <span className="text-[#0D1F3C] font-mono text-lg">{item.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 relative inline-block">
                      {item.title}
                      <span
                        className={`absolute bottom-0 h-0.5 bg-[#0D1F3C] transition-all duration-300 w-0 group-hover:w-full ${
                          isEven ? 'right-0' : 'left-0'
                        }`}
                      />
                    </h3>
                    
                    <p className="text-[#2ABFBF] font-medium text-base leading-relaxed max-w-md ml-auto mr-auto">
                      "{item.desc}"
                    </p>
                    
                    {/* Decorative quote mark */}
                    <span className="text-6xl font-serif text-[#2abfbf5d] absolute opacity-50 -z-10">
                      "
                    </span>
                  </div>
                </div>

                {/* Center marker */}
                <div className="relative flex items-center justify-center w-16">
                  {/* Glowing dot */}
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#2ABFBF] rounded-full shadow-[0_0_20px_rgba(255,127,80,0.5)] animate-pulse"></div>
                    <div className="absolute inset-0 w-4 h-4 bg-[#2ABFBF] rounded-full animate-ping opacity-20"></div>
                  </div>
                  
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-6 w-0.5 h-24 bg-gradient-to-b from-[#2ABFBF] to-transparent"></div>
                  )}
                </div>

                <div className="w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}