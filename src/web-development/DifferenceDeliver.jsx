import React from "react";

const features = [
  {
    title: "Data-Driven Campaigns",
    desc: "Every decision is backed by audience insights, trends, and analytics to maximize ROI."
  },
  {
    title: "Creative That Converts",
    desc: "We craft scroll-stopping visuals and copy designed to engage and drive action."
  },
  {
    title: "Multi-Platform Expertise",
    desc: "From Google to TikTok, we know how to leverage each platform for your goals."
  },
  {
    title: "End-to-End Ad Management",
    desc: "We handle everything — from strategy to reporting — so you can focus on growth."
  },
  {
    title: "Transparent Performance Reporting",
    desc: "Clear, detailed reports showing results, spend, and ROI at every stage."
  }
];

export default function DifferenceSection() {
  return (
    <section className="relative px-6 overflow-hidden" style={{ backgroundColor: "#F7F3EE" }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Circles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: `radial-gradient(circle at center, ${i % 2 === 0 ? "#2ABFBF" : "#EADECF"}08, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              filter: 'blur(40px)'
            }}
          />
        ))}
        
       
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading" >
            The Difference We Deliver
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: "#2ABFBF" }}
              />
              
              {/* Card Content */}
              <div className="p-6">
         
                <h3 
                  className="text-lg font-bold mb-3 transition-colors duration-500 group-hover:text-[#2ABFBF]"
                  style={{ color: "#0D1F3C" }}
                >
                  {item.title}
                </h3>
                
                <p className="text-sm font-medium leading-relaxed" style={{ color: "#0D1F3C" }}>
                  {item.desc}
                </p>
              </div>
              
              <div 
                className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none opacity-0 group-hover:opacity-100`}
                style={{
                  border: `2px solid ${"#2ABFBF"}`,
                }}
              />
            </div>
          ))}
        </div>

      
      </div>

      <style jsx>{`
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
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}