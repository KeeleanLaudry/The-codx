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
    <div className="flex justify-center w-full ">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`max-w-6xl w-full rounded-2xl overflow-hidden
        bg-[#EDE7DF] border border-[#0D1F3C]/10
        py-8 px-10 flex items-center gap-10 shadow-xl
        ${reverse ? "flex-row-reverse" : "flex-row"}
        `}
      >

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center w-1/2"
        >
          <img
            src={image}
            alt={title}
            className="w-[420px] h-[280px] object-contain rounded-xl hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* TEXT */}
        <div className="w-1/2 text-[#0D1F3C]">

          {/* Title */}
          <h2 className="gradient-text text-4xl md:text-5xl uppercase font-bold mb-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg opacity-80 mb-6">
            {description}
          </p>

          {/* Button */}
        <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="primary-btn .primary-btn:hover"
>
  {buttonText}
</motion.button>

        </div>
      </motion.div>

    </div>
  );
};

export default PortalCard;