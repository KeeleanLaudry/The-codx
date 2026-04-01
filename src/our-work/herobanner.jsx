import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgVideo from "../assets/herobanner.webm";

export default function HeroBanner() {

  // 🔥 Typing Animation
  const text = "Transforming Brands, One Project at a Time";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // 🔥 Parallax Scroll
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

  return (
    <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">

     <motion.video
  autoPlay
  loop
  muted
  playsInline
  style={{ scale }}
  className="absolute inset-0 w-full h-full object-cover brightness-75"
>
  <source src={bgVideo} type="video/webm" />
</motion.video>

<div className="absolute inset-0 bg-black/40"></div>
      {/* 🌈 Animated Gradient Overlay */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">

        BUTTON
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium hover:bg-white/30 transition"
        >
          Speak to an expert
        </motion.button>

        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-black text-sm sm:text-base md:text-lg max-w-3xl"
        >
          At Codx, every project reflects our commitment to understanding
          our clients’ vision, industry, and business goals. We combine
          creative design with strategic digital solutions, helping brands
          evolve online, connect meaningfully with their audience, and
          achieve tangible results. From startups to luxury enterprises,
          our holistic approach ensures each brand we work with thrives
          in a competitive digital landscape.
        </motion.p>

      </div> */}

      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }
      `}</style>

    </section>
  );
}