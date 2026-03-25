import React from "react";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
import philosophy from "../assets/philosophy.jpg";

const data = [
  {
    title: "Mission.",
    image: mission,
    desc: "To create transformative digital solutions that fuse strategy, technology, and creativity, empowering businesses with innovation, precision, and long-term impact. ",
  },
  {
    title: "Vision.",
    image: vision,
    desc: "To redefine possibilities at the intersection of branding and technology, shaping iconic, future-ready solutions that inspire growth and lasting value.",
  },
  {
    title: "Philosophy",
    image: philosophy,
    desc: "We believe in collaboration, innovation, and legacy — not following trends, but creating them through holistic, forward-thinking outcomes.",
  },
];

export default function OurApproach() {
  return (
    <section className=" text-whit">
      <h2
        className="text-center text-5xl font-semibold mb-16 
     gradient-text
      bg-clip-text text-transparent"
      >
        Our Approach
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">
        {data.map((item, i) => (
          <div key={i} className="group perspective text-center">
            {/* CARD */}
            <div className="relative h-[420px] w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rotate-y-180 backface-hidden 
      bg-gradient-to-r from-[#EADECF] via-[#d6c3b3c6] to-[#EADECF]
      text-[#0D1F3C] flex items-center justify-center text-center p-6 rounded-xl"
              >
                <p className="text-lg font-medium     text-[#0D1F3C]">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* TITLE BELOW CARD */}
            <h3 className=" gradient-text mt-5 text-xl font-semibold text-white">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}