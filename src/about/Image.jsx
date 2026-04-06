import React from "react";
import { motion } from "framer-motion";

// Import images (ensure paths are correct)
import Alaina from "../assets/Alaina.png";
import Rija from "../assets/Rija.png";
import Shashi from "../assets/Shashi.png";
import Suparna from "../assets/suparna.png";
import Vedanti from "../assets/vedanti.png";
import Gargi from "../assets/gargi.png";
import Samiya from "../assets/samiya.png";
import Sayali from "../assets/sayali.png";
import Pratibha from "../assets/Pratibha.png";
import Sir from "../assets/Sir.png";

const team = [
  { name: "Shekhar Singh", role: "Managing Director", img: Sir, gradient: "from-[#2ABFBF]/20 to-[#2ABFBF]/5" },
  { name: "Pratibha Syal", role: "CEO & Founder", img: Pratibha, gradient: "from-[#0D1F3C]/10 to-[#2ABFBF]/10" },
    { name: "Shashi Thakur", role: "WordPress Developer", img: Shashi, gradient: "from-[#2ABFBF]/20 to-[#2ABFBF]/5" },
  { name: "Syeda Rija", role: "WordPress Developer", img: Rija, gradient: "from-[#2ABFBF]/20 to-[#2ABFBF]/5" },
   { name: "Gargi Guru", role: "Social Media Coordinator", img: Gargi, gradient: "from-[#0D1F3C]/10 to-[#2ABFBF]/10" },
  { name: "Alaina Shoeb", role: "Front-end Developer", img: Alaina, gradient: "from-[#0D1F3C]/10 to-[#2ABFBF]/10" },
  { name: "Sayali Chavan", role: "Front-end Developer", img: Sayali, gradient: "from-[#2ABFBF]/20 to-[#2ABFBF]/5" },
    { name: "Samiya Zaidi", role: "App Developer", img: Samiya, gradient: "from-[#2ABFBF]/20 to-[#2ABFBF]/5" },
  { name: "Superna Choudhary", role: "Graphic Designer", img: Suparna, gradient: "from-[#0D1F3C]/10 to-[#2ABFBF]/10" },
  { name: "Vedanti Gabhane", role: "UI UX Designer", img: Vedanti, gradient: "from-[#2ABFBF]/20 to-[#2ABFBF]/5" },
];

function TeamCard({ name, role, img, gradient, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex justify-center group py-12 sm:py-12"
    >
      <motion.div
        whileHover={{ y: -20 }}
        className="relative w-[300px] h-[250px] rounded-2xl p-6 flex flex-col justify-end text-white shadow-lg overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D1F3C 0%, #0D1F3C 100%)",
          border: "1px solid rgba(42, 191, 191, 0.2)",
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #2ABFBF 1.5px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold tracking-tight mb-1">{name}</h3>
          <p className="text-base font-semibold opacity-80" style={{ color: "#2ABFBF" }}>
            {role}
          </p>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[3px] bg-[#2ABFBF] rounded-full"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Avatar Image - ENLARGED SIZE */}
      <motion.div
        className="absolute -top-40 z-20"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="relative">
          <img
            src={img}
            alt={name}
            className="w-[250px] h-[350px] object-contain drop-shadow-2xl relative z-10 mb-12"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section className="px-4 py-20 relative max-w-7xl mx-auto">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EADECF] opacity-30 blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#2ABFBF] opacity-10 blur-3xl -z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Accent badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: "#EADECF",
              border: "1px solid rgba(42, 191, 191, 0.3)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#2ABFBF]" />
            <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "#0D1F3C" }}>
              Our Creative Collective
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
            style={{ color: "#0D1F3C" }}
          >
            Humans of{" "}
            <span style={{ color: "#2ABFBF" }}>Codx Softwares</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-44"
            style={{ color: "#4a5568" }}
          >
            Passionate designers, developers & innovators bringing ideas to life with elegance.
          </motion.p>
        </div>

        {/* First Row - 2 Cards (Mentor & CEO) */}
     {/* First Row - 2 Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-y-32 sm:gap-y-28 mb-28 sm:mb-36">
    {team.slice(0, 2).map((member, index) => (
    <TeamCard key={index} {...member} index={index} />
  ))}
</div>

{/* Remaining Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-28 place-items-center">
    {team.slice(2).map((member, index) => (
    <TeamCard key={index + 2} {...member} index={index} />
  ))}
</div>
      </div>
    </section>
  );
}