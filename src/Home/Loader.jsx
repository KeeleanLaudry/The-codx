import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CodxIntro() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [sparkles, setSparkles] = useState([]);
  const [currentChar, setCurrentChar] = useState("");
  const navigate = useNavigate();
  const fullText = "THE CODX";

  // Generate sparkles on each new character
  useEffect(() => {
    if (displayText.length > 0 && displayText.length <= fullText.length) {
      const newSparkle = {
        id: Date.now(),
        x: displayText.length * 35 + Math.random() * 50,
        y: Math.random() * 100 - 50,
      };
      setSparkles(prev => [...prev, newSparkle]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 500);
      
      // Set current character for special effect
      setCurrentChar(displayText[displayText.length - 1]);
      setTimeout(() => setCurrentChar(""), 200);
    }
  }, [displayText, fullText.length]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
       setDisplayText(fullText.slice(0, index).toUpperCase());
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => navigate("/"), 2000);
      }
    }, 180);
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [fullText, navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-[#F7F3EE] overflow-hidden relative">
      
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #EADECF 2px, transparent 2px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Background Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#2ABFBF]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-[#FF6B6B]"
        animate={{
          x: [0, -80, 100, 0],
          y: [0, 50, -100, 0],
          scale: [1, 0.8, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Container */}
      <div className="relative z-10">
        
        {/* Glowing Background for Text */}
        <motion.div
          className="absolute inset-0 blur-3xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            background: "radial-gradient(circle, rgba(42,191,191,0.3), transparent)",
          }}
        />

        {/* Typewriter Text with Creative Effects */}
        <div className="relative">
          <h1 className="uppercase text-[#0D1F3C] text-7xl md:text-9xl font-black tracking-tighter">
            {displayText.split("").map((char, idx) => {
              const isX = char === 'X';
              const isLastChar = idx === displayText.length - 1;
              
              return (
                <motion.span
                  key={idx}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    rotateY: 90,
                    filter: "blur(10px)"
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotateY: 0,
                    filter: "blur(0px)"
                  }}
                  transition={{ 
                    delay: idx * 0.08,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                    damping: 12
                  }}
                  className="inline-block relative"
                  style={{ 
                    whiteSpace: "pre",
                    color: isX ? "#2ABFBF" : "#0D1F3C",
                    textShadow: isLastChar && currentChar === char
                      ? "0 0 20px rgba(42,191,191,0.8)"
                      : isX ? "0 0 10px rgba(255,107,107,0.3)" : "none",
                    transformStyle: "preserve-3d"
                  }}
                >
                  {char === " " ? "\u00A0\u00A0" : char}
                  
                  {/* Character-specific effects */}
                  {isLastChar && currentChar === char && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        background: `radial-gradient(circle, ${isX ? "#FF6B6B" : "#2ABFBF"}, transparent)`,
                      }}
                    />
                  )}
                </motion.span>
              );
            })}
            
            {/* Creative Cursor */}
            {showCursor && displayText.length < fullText.length && (
              <motion.span
                className="inline-block w-1 h-16 ml-2"
                animate={{ 
                  opacity: [0, 1, 0],
                  height: [16, 64, 16],
                  backgroundColor: ["#2ABFBF", "#FF6B6B", "#2ABFBF"]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </h1>
          
          {/* Decorative Line with Animation */}
          <motion.div
            className="absolute -bottom-6 left-0 h-1 bg-gradient-to-r from-[#2ABFBF] via-[#0D1F3C] to-transparent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: displayText.length * 80 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          
          {/* Pulsing Dot at the end of line */}
          {displayText.length === fullText.length && (
            <motion.div
              className="absolute -bottom-6 rounded-full bg-[#2ABFBF]"
              initial={{ left: displayText.length * 70 - 4, width: 0, height: 0 }}
              animate={{ 
                left: displayText.length * 38 - 6,
                width: [0, 8, 0],
                height: [0, 8, 0],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </div>

        {/* Subtitle that appears after text completes */}
        {displayText.length === fullText.length && (
          <motion.div
            className="absolute top-full left-0 mt-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.p
              className="text-[#2ABFBF] text-sm md:text-base tracking-[0.3em] text-center font-semibold"
              animate={{
                letterSpacing: ["0.2em", "0.4em", "0.2em"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
             
            </motion.p>
            
            {/* Decorative dots */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#2ABFBF]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Sparkle Effects on each character */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 rounded-full bg-[#2ABFBF]"
          style={{
            left: `calc(50% + ${sparkle.x - 200}px)`,
            top: `calc(50% + ${sparkle.y}px)`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0, x: [0, (Math.random() - 0.5) * 100], y: [0, (Math.random() - 0.5) * 100] }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Final Burst Effect */}
      {displayText.length === fullText.length && (
        <>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`burst-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                backgroundColor: Math.random() > 0.5 ? "#2ABFBF" : "#FF6B6B",
                left: "50%",
                top: "50%",
              }}
              initial={{ x: 0, y: 0, opacity: 0.8 }}
              animate={{
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 300,
                opacity: 0,
              }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          ))}
        </>
      )}
    </div>
  );
}