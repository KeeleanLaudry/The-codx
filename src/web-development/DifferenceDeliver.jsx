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
    <section className="w-full bg-black py-20 px-6">
      
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#e6c2a2] mb-16">
        The Difference We Deliver
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-5">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1f1f1f] to-[#151515] p-8 rounded-2xl text-white hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}