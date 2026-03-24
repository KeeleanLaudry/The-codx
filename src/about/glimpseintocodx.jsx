import React from "react";

export default function GlimpseSection({
  title,
  paragraph1,
  paragraph2,
  image,
  reverse = false
}) {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-200 to-orange-400 bg-clip-text text-transparent">
            {title}
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            {paragraph1}
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            {paragraph2}
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="section visual"
            className="rounded-[40px] w-[420px] h-[520px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}