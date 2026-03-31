import React from "react";

export default function GlimpseSection({
  title,
  paragraph1,
  paragraph2,
  image,
  reverse = false
}) {
  return (
    <section className=" max-w-5xl mx-auto py-5 px-6">
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Content */}
        <div>
          <h2 className="section-heading">
            {title}
          </h2>

          <p className="section-desc font-medium">
            {paragraph1}
          </p>

          <p className="section-desc font-medium">
            {paragraph2}
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="section visual"
            className="rounded-[40px] w-[420px] h-[450px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}