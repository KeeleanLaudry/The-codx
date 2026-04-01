import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import bgVideo from "../assets/herobanner.webm";

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
    <div className="relative w-full h-[95vh] overflow-hidden">
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={bgVideo} type="video/webm" />
</video>

<div className="absolute inset-0 bg-black/30"></div>
<div className="absolute bottom-4 w-full flex justify-center z-20 px-3">

  <div
    className="
      w-full max-w-3xl
      flex flex-col sm:flex-row items-center
      gap-2 sm:gap-6 
      px-4 sm:px-20 py-3
      rounded-2xl sm:rounded-full
      border border-white/40
      shadow-[0_8px_30px_rgba(13,31,60,0.15)]
    "
    style={{
      background: "rgba(247, 243, 238, 0.7)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)"
    }}
  >

    {/* TITLE */}
    <span className="text-[#0D1F3C] font-semibold text-sm sm:text-lg whitespace-nowrap text-center">
      Our Global Presence
    </span>

    {/* COUNTRIES */}
    <div className="
      flex flex-wrap justify-center sm:justify-end
      gap-3 sm:gap-5
      text-[#0D1F3C]/80 text-xs sm:text-lg
    ">

      {["India", "UAE", "Saudi Arabia", "USA", "Kuwait"].map((country, i) => (
        <span key={i} className="flex items-center gap-1.5">

          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#0D1F3C] border border-[#2ABFBF]/40"></span>

          <span className="font-medium">
            {country}
          </span>

        </span>
      ))}

    </div>

  </div>

</div>
{/* Overlay */}
   <div className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-6 mx-auto ${containerWidth}`}>
       {/* <h1 className={`gradient-text bg-clip-text font-inria  text-transparent ${titleSize} font-semibold leading-tight pb-2`}>
  {title}
</h1> */}
  
        {/* {animateText ? (

          <div className="min-h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.8 }}
className="bg-gradient-to-r from-[#2ABFBF] via-[#0D1F3C] to-[#2ABFBF]  font-inria bg-clip-text text-transparent text-4xl md:text-6xl font-semibold leading-tight pb-2"              >
                {lines[index]}
              </motion.p>
            </AnimatePresence>
          </div>

        ) : (

        <p className={`text-[#2ABFBF]  font-semibold mt-6 ${linesSize}`}>
  {lines}
</p>

        )} */}

      </div>
    </div>
  );
}