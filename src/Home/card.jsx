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
    reverse ? "justify-end translate-x-20" : "-translate-x-20"
  } mb-10`}
>
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`max-w-2xl w-full rounded-2xl overflow-hidden
    bg-[#EDE7DF] border border-[#0D1F3C]/10
    px-8 flex items-center gap-8 shadow-xl
    ${reverse ? "flex-row-reverse" : "flex-row"}
    `}
  >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
      className="flex justify-center "        >
        
          <img
            src={image}
            alt={title}
            className="w-full max-w-[620px] h-[300px] object-contain rounded-xl hover:scale-105 transition duration-500"
          />
        </motion.div>
        <div className="w-1/2 text-[#0D1F3C]">
          <h2 className="section-title">
            {title}
          </h2>
          <p className="section-desc font-medium">
            {description}
          </p>
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