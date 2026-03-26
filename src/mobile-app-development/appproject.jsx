import React from "react";
import projectImg from "../assets/project-image.jpg";

export default function MobileProjects() {
  return (
    <section className="w-full  py-12">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="section-heading">
          Our Mobile App Development Projects
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="relative group overflow-hidden rounded-lg">

          {/* Image */}
          <img
            src={projectImg}
            alt="Project"
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-[#EDE7DF] opacity-0 group-hover:opacity-20 transition duration-500"></div>

          {/* Read More Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="primary-btn">
              READ MORE
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}