import React from "react";
import { motion } from "framer-motion";

export default function CollaborationSection() {
  const data = [
    {
      title: "Startups",
      desc: "Join our esteemed clients benefiting from tailored tech solutions that drive growth.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
    },
    {
      title: "Mid-Size Companies",
      desc: "Experience specialized solutions for web and mobile development and scalable systems.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    },
    {
      title: "Enterprises",
      desc: "We provide comprehensive digital solutions aligned with your strategic goals.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    },
  ];

  return (
    <section className="bg-[#F7F3EE] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gradient-text leading-tight pb-2 text-center text-4xl md:text-5xl font-semibold 
           mb-16"
        >
          Strong Collaboration With
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative group rounded-3xl overflow-hidden shadow-lg"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[380px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* NAVY OVERLAY */}
              <div className="absolute inset-0 bg-[#0D1F3C]/60 group-hover:bg-[#0D1F3C]/40 transition duration-300"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

                <p className="text-sm text-[#EDE7DF] opacity-90 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* TEAL GLOW ON HOVER */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#2ABFBF] rounded-3xl transition duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
