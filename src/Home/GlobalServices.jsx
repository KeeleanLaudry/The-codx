import { useState,useEffect } from "react";
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
      desc: "At Codx, we craft customized web solutions that align perfectly with your business objectives. Using industry leading technologies, we develop responsive, high performing websites that deliver seamless experiences to users.",
      image: development,
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      icon: Megaphone,
      title: "Strategic Marketing, With Agility & Results.",
      desc: "CODX Software delivers strategic digital marketing solutions that enhance online visibility, drive engagement, and maximise conversions.",
      image: Social,
    },
    {
      id: "emerging",
      name: "Emerging Tech",
      icon: Rocket,
      title: "Next-Gen Solutions With Innovation.",
      desc: "CODX Software empowers businesses with next-generation technology solutions that drive innovation, operational efficiency, and immersive digital experiences.",
      image: innovation,
    },
    {
      id: "creative",
      name: "Creative",
      icon: PenTool,
      title: "Impactful Branding With Creativity.",
      desc: "Many can offer a marketing strategy, but CODX Software delivers one that is crafted specifically for you. We assess your limitations, objectives, and aspirations to develop solutions that align perfectly with your vision.",
      image: advertising,
    },
    {
      id: "it",
      name: "IT Solutions",
      icon: Lightbulb,
      title: "Reliable IT With Efficiency.",
      desc: "CODX Software provides comprehensive IT solutions designed to optimize business operations, enhance digital transformation, and ensure seamless technology integration.",
      image: service,
    }
  ];
  const [isPaused, setIsPaused] = useState(false);
useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setActive(prev => {
      const currentIndex = services.findIndex(s => s.id === prev);
      const nextIndex = (currentIndex + 1) % services.length;
      return services[nextIndex].id;
    });
  }, 3000);

  return () => clearInterval(interval);
}, [isPaused]);
  const activeService = services.find(s => s.id === active);

  return (
    <section className="px-6 py-16 relative overflow-hidden" style={{ backgroundColor: "#F7F3EE", color: "#0D1F3C" }}>

      {/* BACKGROUND GLOW */}
   

      <div className="max-w-5xl mx-auto relative ">

        {/* TOP TABS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {services.map(service => {
            const Icon = service.icon;
            const isActive = active === service.id;

            return (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
              onClick={() => {
                setActive(service.id);
                setIsPaused(true);

                setTimeout(() => {
                  setIsPaused(false);
                }, 5000);
              }}
                              
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
                      className="w-10 h-10 mb-3"
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
    <h2 className="section-subheading  font-inria text-[20px]">
                    {activeService.title}
                </h2>

                <p className="section-desc font-medium mb-6 " style={{ color: "#0D1F3CCC" }}>
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