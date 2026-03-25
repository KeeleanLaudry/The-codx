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
    <section className="  bg-gradient-to-r from-[#2c2724] via-[#e2b78c] to-[#f57c4c]  w-full py-20 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE VIDEO */}
<div className="sticky top-20">
          <video
            src={Videofile}
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-xl -ml-[10%] shadow-lg"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col gap-8 text-white">
            <div className=" text-4xl font-semibold">
Our Process: The Project Handling Journey
            </div>
            <div className="">
Embark on your digital transformation with CODX’s comprehensive mobile application development solutions, tailored to meet your unique needs. From Android to cross-platform app development, our expert developers in UAE leverage state-of-the-art technologies to deliver seamless experiences both locally and globally. Whether building new apps or enhancing existing ones, CODX ensures excellence at every step.
</div>
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">

        <div className="min-w-[40px] h-[40px] flex items-center justify-center bg-orange-100 text-black rounded-full">
  <FaCheck className="text-lg text-orange-500" />
</div>

              <div>
                <h3 className="text-xl font-semibold ">
                  {step.title}
                </h3>

                <p className=" mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}