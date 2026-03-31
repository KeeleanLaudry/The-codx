import React from "react";
import { motion } from "framer-motion";

const PortalCard = ({
  title,
  description,
  buttonText = "learn More",
  image,
  reverse = false
}) => {
  return (
    <div
      className={`max-w-5xl flex ${
        reverse 
          ? "lg:justify-end lg:translate-x-10" 
          : "lg:-translate-x-10"
      }  px-4 `}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`max-w-2xl w-full rounded-2xl overflow-hidden
        bg-[#EDE7DF] border border-[#0D1F3C]/10
        px-4 sm:px-6 lg:px-8 py-4 lg:py-0
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
          <h2 className="section-title">
            {title}
          </h2>
          <p className="section-desc font-medium">
            {description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="primary-btn"
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PortalCard;