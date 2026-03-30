import React from "react";

export default function DifferenceSection({
  title = "The Difference We Deliver",
  features = [],
  bgColor = "#F7F3EE",
  accentColor = "#2ABFBF",
  textColor = "#0D1F3C"
}) {
  return (
    <section
      className="relative px-6 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: `radial-gradient(circle at center, ${
                i % 2 === 0 ? accentColor : "#EADECF"
              }08, transparent 70%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              filter: "blur(40px)"
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className=" mb-12">
          <h2 className="section-heading">{title}</h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {features.map((item, index) => (
            <div
  key={index}
  className="group relative bg-white rounded-2xl shadow-lg 
  hover:shadow-2xl md:hover:scale-105 
  active:scale-95 transition-all duration-500 overflow-hidden"
  style={{
    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
  }}
>
              {/* Top Line */}
            <div
  className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 
  group-hover:scale-x-100 group-active:scale-x-100 
  transition-transform duration-500 origin-left"
  style={{ backgroundColor: accentColor }}
/>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-semibold mb-3 transition-colors duration-500 group-hover:text-[var(--accent)]"
                  style={{ color: textColor }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-base font-medium "
                  style={{ color: textColor }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Border Hover */}
              <div
                className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none opacity-0 group-hover:opacity-100"
                style={{
                  border: `2px solid ${accentColor}`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
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

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}