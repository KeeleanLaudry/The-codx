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
    <section className="relative py-10 px-4 md:px-16 overflow-hidden" style={{ backgroundColor: "#F7F3EE" }}>
      
      {/* Header Section */}
      <div className="relative text-center mb-8 md:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#0D1F3C" }}>
          Our{" "}
          <span style={{ color: "#2ABFBF" }}>
            Story
          </span>
        </h2>
      </div>

      {/* Main timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline center line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full" style={{ backgroundColor: `${"#2ABFBF"}30` }} />
        
        {/* Timeline items */}
        <div className="relative">
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-center mb-12 md:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content side - Mobile */}
                <div className={`w-full md:w-1/2 px-5 md:px-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} mb-4 md:mb-0`}>
                  <div
                    className="transform transition-all duration-500 hover:scale-105 group"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-start`}>
                      {/* Year tag */}
                      <div
                        className="mb-2 px-4 md:px-5 py-2 rounded-full"
                        style={{ 
                          backgroundColor: `${"#2ABFBF"}15`,
                          border: `1px solid ${"#2ABFBF"}30`
                        }}
                      >
                        <span className="font-mono text-xs md:text-sm font-bold" style={{ color: "#2ABFBF" }}>
                          {item.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 
                        className="text-lg md:text-2xl font-bold mb-2 md:mb-3 relative inline-block"
                        style={{ color: "#0D1F3C" }}
                      >
                        {item.title}
                        <span
                          className={`absolute bottom-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full left-0 md:${isEven ? 'right-0' : 'left-0'}`}
                          style={{ backgroundColor: "#2ABFBF" }}
                        />
                      </h3>
                    </div>
                    
                    <p className="text-sm md:text-base leading-relaxed max-w-full md:max-w-md md:mx-auto" style={{ color: "#0D1F3C" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center marker - Hidden on mobile */}
                <div className="hidden md:flex relative items-center justify-center w-16">
                  <div className="relative">
                    <div 
                      className="w-4 h-4 rounded-full shadow-lg animate-pulse"
                      style={{ 
                        backgroundColor: "#2ABFBF",
                        boxShadow: `0 0 15px ${"#2ABFBF"}80`
                      }}
                    />
                    <div 
                      className="absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: "#2ABFBF" }}
                    />
                  </div>
                  
                  <div 
                    className="absolute w-12 h-12 rounded-full -z-10 animate-spin-slow"
                    style={{ 
                      border: `1px dashed ${"#2ABFBF"}40`,
                      animation: "spin 20s linear infinite"
                    }}
                  />
                </div>

                <div className="hidden md:block w-1/2"></div>
                
                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-0 top-0 transform -translate-x-1/2">
                  <div className="relative">
                    <div 
                      className="w-3 h-3 rounded-full shadow-lg"
                      style={{ 
                        backgroundColor: "#2ABFBF",
                        boxShadow: `0 0 10px ${"#2ABFBF"}80`
                      }}
                    />
                    <div 
                      className="absolute inset-0 w-3 h-3 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: "#2ABFBF" }}
                    />
                  </div>
                </div>
                
                {/* Mobile vertical line */}
                <div className="md:hidden absolute left-0 top-6 w-0.5 h-full -translate-x-1/2" style={{ backgroundColor: `${"#2ABFBF"}30` }} />
              </div>
            );
          })}
        </div>
      </div>

      <style >{`
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
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #EDE7DF;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #2ABFBF;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #0D1F3C;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}