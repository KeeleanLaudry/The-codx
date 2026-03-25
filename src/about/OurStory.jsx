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
    <section className="relative py-24 px-6 md:px-16 overflow-hidden" style={{ backgroundColor: "#F7F3EE" }}>
      
      {/* Floating decorative circles */}
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
              }08, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="relative text-center mb-20">
        {/* Decorative Circle */}
        <div 
          className="w-24 h-24 rounded-full mx-auto mb-6 opacity-20 animate-pulse"
          style={{ backgroundColor: "#EADECF" }}
        />
        
        <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: "#0D1F3C" }}>
          Our{" "}
          <span style={{ color: "#2ABFBF" }}>
            Story
          </span>
        </h2>
        
        {/* Underline */}
        <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#2ABFBF" }} />
        
        <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "#0D1F3C" }}>
          A journey of innovation, growth, and digital transformation
        </p>
      </div>

      {/* Main timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full" style={{ backgroundColor: `${"#2ABFBF"}30` }} />
        
        {/* Timeline items */}
        <div className="relative space-y-24">
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
                    className="transform transition-all duration-500 hover:scale-105 group"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {/* Year tag */}
                    <div
                      className={`inline-block mb-4 px-5 py-2 rounded-full ${
                        isEven ? 'mr-0' : 'ml-0'
                      }`}
                      style={{ 
                        backgroundColor: `${"#2ABFBF"}15`,
                        border: `1px solid ${"#2ABFBF"}30`
                      }}
                    >
                      <span className="font-mono text-sm font-bold" style={{ color: "#2ABFBF" }}>
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 
                      className="text-xl md:text-2xl font-bold mb-3 relative inline-block"
                      style={{ color: "#0D1F3C" }}
                    >
                      {item.title}
                      <span
                        className={`absolute bottom-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full ${
                          isEven ? 'right-0' : 'left-0'
                        }`}
                        style={{ backgroundColor: "#2ABFBF" }}
                      />
                    </h3>
                    
                    <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: "#0D1F3C" }}>
                      "{item.desc}"
                    </p>
                    
                    {/* Decorative quote mark */}
                    <div 
                      className={`text-6xl font-serif absolute opacity-10 -z-10 ${
                        isEven ? '-left-8 top-0' : '-right-8 top-0'
                      }`}
                      style={{ color: "#2ABFBF" }}
                    >
                      "
                    </div>
                  </div>
                </div>

                {/* Center marker */}
                <div className="relative flex items-center justify-center w-16">
                  {/* Glowing dot */}
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
                  
                  {/* Decorative circle around dot */}
                  <div 
                    className="absolute w-12 h-12 rounded-full -z-10 animate-spin-slow"
                    style={{ 
                      border: `1px dashed ${"#2ABFBF"}40`,
                      animation: "spin 20s linear infinite"
                    }}
                  />
                </div>

                <div className="w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="relative z-10 mt-20 text-center">
        <div 
          className="w-12 h-12 rounded-full mx-auto mb-4 opacity-30"
          style={{ backgroundColor: "#EADECF" }}
        />
        <p className="text-sm" style={{ color: "#2ABFBF" }}>
          Building the future, one milestone at a time
        </p>
      </div>

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
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-15px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
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
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
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
      `}</style>
    </section>
  );
}