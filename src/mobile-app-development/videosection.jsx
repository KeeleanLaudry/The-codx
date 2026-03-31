import React from "react";
import Videofile from "../assets/journeySectionVideo-1.mp4";
import { FaCheck } from "react-icons/fa";
const steps = [
  {
    title: "Architecture",
    description:
      "We begin with in-depth research and analysis of your business goals, identifying requirements and writing clear objectives. The process involves meticulous planning, selecting the best technologies, and defining the optimal framework."
  },
  {
    title: "Design",
    description:
      "At CODX, we transform ideas into engaging interfaces, emphasizing intuitive navigation and clean aesthetics. Our designers craft layouts that enhance usability."
  },
  {
    title: "Development",
    description:
      "CODX brings your vision to life with agile development practices, creating clean and scalable code that integrates seamlessly with future updates."
  },
  {
    title: "Testing",
    description:
      "We employ rigorous testing techniques, combining manual and automated methods to ensure perfection and reliability."
  },
  {
    title: "Delivery",
    description:
      "Your vision becomes reality as we transform your concept into a fully functional product deployed for users."
  },
  {
    title: "Support",
    description:
      "CODX provides robust post-launch support to keep your application running smoothly with continuous improvements."
  }
];
export default function ProcessSection() {
  return (
    <section className="w-full py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

        {/* VIDEO */}
        <div className="w-full lg:sticky lg:top-20">
          <video
            src={Videofile}
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6 text-white">

          <h2 className="section-heading ">
            Our Process: The Project Handling Journey
          </h2>

          <p className="section-subtitle text-sm sm:text-base">
Embark on your digital transformation with CODX’s comprehensive mobile application development solutions, tailored to meet your unique needs. From Android to cross-platform app development, our expert developers in UAE leverage state-of-the-art technologies to deliver seamless experiences both locally and globally. Whether building new apps or enhancing existing ones, CODX ensures excellence at every step.
          </p>

          {/* STEPS */}
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 items-start">

                {/* ICON */}
                <div className="min-w-[34px] h-[34px] sm:min-w-[40px] sm:h-[40px] flex items-center justify-center bg-[#E6ECF5] rounded-full">
                  <FaCheck className="text-sm sm:text-lg text-[#1A2F4E]" />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="section-webtitle text-base sm:text-lg">
                    {step.title}
                  </h3>

                  <p className="section-desc font-medium text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
