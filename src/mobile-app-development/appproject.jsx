import React from "react";
import projectImg from "../assets/project-image.jpg";

export default function MobileProjects() {
  return (
    <section className="w-full bg-black py-12">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold text-[#e6c2a2]">
          Our Mobile App Development Projects
        </h2>
      </div>

      {/* Project Card */}
      <div className="w-full mx-auto px-6">
        <div className="relative group overflow-hidden rounded-lg">

          {/* Image */}
          <img
            src={projectImg}
            alt="Project"
            className="w-full h-[420px] object-cover"
          />

          {/* Orange Hover Overlay */}
          <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition duration-500"></div>

          {/* Read More Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-6 py-2 border border-white text-white bg-orange-500 rounded-full 
            opacity-0 group-hover:opacity-100 transition duration-500">
              READ MORE
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}