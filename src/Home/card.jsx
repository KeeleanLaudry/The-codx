import React from "react";
import { motion } from "framer-motion";

const PortalCard = ({
  title,
  description,
  buttonText = "Learn More",
  image,
  reverse = false
}) => {
  return (
    <div
      className={`w-full flex ${
        reverse 
          ? "lg:justify-end lg:translate-x-20" 
          : "lg:-translate-x-20"
      } mb-6 sm:mb-8 lg:mb-10`}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`max-w-2xl w-full rounded-2xl overflow-hidden
        bg-[#EDE7DF] border border-[#0D1F3C]/10
        px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-0
        flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 shadow-xl
        ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
        `}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center w-full lg:w-auto"
        >
          <img
            src={image}
            alt={title}
            className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[620px] h-[180px] sm:h-[240px] lg:h-[300px] object-contain rounded-xl hover:scale-105 transition duration-500"
          />
        </motion.div>
        
        <div className="w-full lg:w-1/2 text-[#0D1F3C] text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#0D1F3C]/80 mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#2ABFBF] text-white font-semibold rounded-full hover:bg-[#0D1F3C] transition-all duration-300 shadow-md text-sm sm:text-base"
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PortalCard;