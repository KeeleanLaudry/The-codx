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
<div className="max-w-7xl mx-auto flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`max-w-5xl w-full rounded-2xl overflow-hidden justify-center
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
      className="flex justify-center "        >
          <img
            src={image}
            alt={title}
            className="w-full max-w-[520px] h-[280px] object-contain rounded-xl hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* TEXT */}
        <div className="w-1/2 text-[#0D1F3C] px-6">

          {/* Title */}
          <h2 className="section-title">
            {title}
          </h2>

          {/* Description */}
          <p className="section-desc font-medium">
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