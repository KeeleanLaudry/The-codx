import React from "react";
import { motion } from "framer-motion";

const PortalCard = ({
  title,
  description,
  buttonText = "Learn More",
  image,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-6">
      
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
          
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            {title}
          </h2>

          <p className="text-[#4A3E2C] text-sm md:text-base leading-6 mb-4">
            {description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              bg-gradient-to-r from-[#0D1F3C] to-[#2ABFBF]
              text-white
              px-5 py-2.5
              rounded-full
              text-sm
              shadow hover:shadow-md
              transition
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