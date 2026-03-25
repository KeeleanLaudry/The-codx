import React from "react";

export default function GlimpseSection({
  title,
  paragraph1,
  paragraph2,
  image,
  reverse = false
}) {
  return (
    <section className=" text-white py-20 px-6">
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text bg-clip-text text-transparent">
            {title}
          </h2>

          <p className="text-[#0D1F3C] leading-relaxed mb-6 text-base font-medium">
            {paragraph1}
          </p>

          <p className="text-[#0D1F3C] leading-relaxed text-base font-medium">
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