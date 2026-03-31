import React from "react";
import { motion } from "framer-motion";

const PortalCard = ({
  title,
  description,
  buttonText = "learn more",
  image,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 ">
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          w-full
          bg-[#EDE7DF]
          border border-[#0D1F3C]/10
          rounded-xl
          shadow-md
          flex flex-col md:flex-row
          items-center
          gap-4 md:gap-6
          p-5 md:p-6
        "
      >

        {/* TEXT */}
        <div className="w-full md:w-1/2 text-[#0D1F3C] text-center md:text-left">
          
          <h2 className="section-heading">
            {title}
          </h2>

          <p className="text-[#0d1f3cb1] text-sm md:text-xl font-semibold leading-6 mb-4">
            {description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
             primary-btn
            "
          >
            {buttonText}
          </motion.button>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={image}
            alt={title}
            className="
              w-full
              max-w-[350px]
              object-contain
              rounded-lg
              transition duration-500 hover:scale-105
            "
          />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default PortalCard;