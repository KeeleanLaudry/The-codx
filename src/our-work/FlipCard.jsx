import React from "react";

export default function ExpertiseSection({
  data = [],
  centerData,
  title,
  description,
}) {
  return (
    <section className="relative py-20 px-4 bg-[#F7F3EE] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-[#2ABFBF]/20 to-[#0D1F3C]/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        {/* Heading */}
        <h2 className="section-heading mb-3">{title}</h2>
        <p className="text-[#6B7280] mb-14">{description}</p>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {data.slice(0, 2).map((item, i) => (
              <GlassCard key={i} {...item} />
            ))}
          </div>

          {/* CENTER */}
          <div className="flex justify-center">
            <div className="glass-card-large text-center">
              <img src={centerData.logo} className="w-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#0D1F3C]">
                {centerData.title}
              </h3>
              <p className="text-sm text-[#6B7280] mt-1">
                {centerData.subtitle}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            {data.slice(2, 4).map((item, i) => (
              <GlassCard key={i} {...item} />
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .glass-card {
          backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.6);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: 0.4s;
        }

        .glass-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(42,191,191,0.15);
        }

        .glass-card-large {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.7);
          border-radius: 26px;
          padding: 40px;
          width: 100%;
          max-width: 300px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          transition: 0.4s;
        }

        .glass-card-large:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}