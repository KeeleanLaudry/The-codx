import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Megaphone,
  Rocket,
  PenTool,
  Lightbulb,
  ArrowRight
} from "lucide-react";

// Replace these with your actual image imports or paths
import Social from "../assets/Social-strategy.png";
import innovation from "../assets/innovation.png";
import service from "../assets/services-and-solution.png";
import advertising from "../assets/advertising.png";
import development from "../assets/develop.png";

export default function GlobalServices() {
  const [active, setActive] = useState("development");
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: "development",
      name: "Development",
      icon: Code,
      title: "Professional Development, With Speed & Exceptional Standards.",
      desc: "We craft customized web solutions aligned with your business goals.",
      image: development,
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      icon: Megaphone,
      title: "Strategic Marketing, With Agility & Results.",
      desc: "Boost visibility, engagement, and conversions with smart strategies.",
      image: Social,
    },
    {
      id: "emerging",
      name: "Emerging Tech",
      icon: Rocket,
      title: "Next-Gen Solutions With Innovation.",
      desc: "Leverage cutting-edge technologies for growth and transformation.",
      image: innovation,
    },
    {
      id: "creative",
      name: "Creative",
      icon: PenTool,
      title: "Impactful Branding With Creativity.",
      desc: "We design experiences that align with your brand vision.",
      image: advertising,
    },
    {
      id: "it",
      name: "IT Solutions",
      icon: Lightbulb,
      title: "Reliable IT With Efficiency.",
      desc: "Optimize operations with scalable IT solutions.",
      image: service,
    }
  ];

  const activeService = services.find(s => s.id === active);

  return (
    <section className="px-6 py-16 relative overflow-hidden" style={{ backgroundColor: "#F7F3EE", color: "#0D1F3C" }}>

      {/* BACKGROUND GLOW */}
   

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TOP TABS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {services.map(service => {
            const Icon = service.icon;
            const isActive = active === service.id;

            return (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(service.id)}
                className="cursor-pointer"
              >
                <div
                  className={`flex flex-col items-center text-center p-6 rounded-2xl transition
                  ${isActive
                    ? "bg-white shadow-xl border"
                    : "bg-white/60 hover:bg-white border border-transparent hover:border"}
                  `}
                  style={{
                    borderColor: isActive ? "#2ABFBF" : undefined,
                    borderColor: !isActive && hoveredId === service.id ? "#2ABFBF" : undefined
                  }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Icon
                    className={`w-10 h-10 mb-3`}
                    style={{ color: isActive ? "#2ABFBF" : "#0D1F3C" }}
                  />

                  <p className="font-semibold text-sm relative" style={{ color: "#0D1F3C" }}>
                    {service.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 border" style={{ backgroundColor: "#EDE7DF", borderColor: "#0D1F3C10" }}>

              <div className="flex-1">
                <h2 className="text-3xl md:text-2xl font-bold mb-6" style={{ color: "#0D1F3C" }}>
                  {activeService.title}
                </h2>

                <p className="mb-6" style={{ color: "#0D1F3CCC" }}>
                  {activeService.desc}
                </p>

                <button className="primary-btn px-6 py-3 rounded-full transition flex items-center gap-2" 
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2ABFBF"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0D1F3C"}
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>

              {/* IMAGE */}
              <motion.div
                className="flex-1 flex justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="relative">
                  <img
                    src={activeService.image}
                    alt={activeService.name}
                    className="w-[280px] md:w-[320px]"
                  />

                  {/* GLOW */}
                </div>
              </motion.div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}