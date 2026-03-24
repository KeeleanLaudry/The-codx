import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import bgVideo from "../assets/bg-video.mp4";

export default function Hero({
  title,
  lines = [],
  animateText = true,
   containerWidth = "max-w-6xl",
     titleSize = "text-5xl md:text-6xl",   // ✅ new
  linesSize = "text-4xl md:text-6xl"
}) {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!animateText) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animateText, lines.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
   <div className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-6 mx-auto ${containerWidth}`}>
       <h1 className={`bg-gradient-to-r from-[#FAD5A5] via-[#FBCEB1] via-[#e1a57d] to-[#FF7F50] 
bg-clip-text text-transparent ${titleSize} font-semibold leading-tight pb-2`}>
  {title}
</h1>
        {animateText ? (

          <div className="min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-[#FAD5A5] via-[#FBCEB1] via-[#e1a57d] to-[#FF7F50] bg-clip-text text-transparent text-4xl md:text-6xl font-semibold leading-tight pb-2"
              >
                {lines[index]}
              </motion.p>
            </AnimatePresence>
          </div>

        ) : (

        <p className={`text-gray-200 mt-6 ${linesSize}`}>
  {lines}
</p>

        )}

      </div>
    </div>
  );
}