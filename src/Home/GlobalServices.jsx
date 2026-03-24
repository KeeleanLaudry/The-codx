import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, 
  Megaphone, 
  Rocket, 
  PenTool, 
  Lightbulb, 
  ArrowRight, 
  MapPin,
  Sparkles,
  Globe,
  Zap
} from "lucide-react";
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
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      icon: Megaphone,
      title: "Strategic Marketing, With Agility & Outstanding Results.",
      desc: "CODX Software delivers strategic digital marketing solutions that enhance online visibility, drive engagement, and maximise conversions.",
      image: Social,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "emerging",
      name: "Emerging Tech",
      icon: Rocket,
      title: "Next-Gen Solutions, With Innovation & Excellence.",
      desc: "CODX Software empowers businesses with next-generation technology solutions that drive innovation, operational efficiency, and immersive digital experiences.",
      image: innovation,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "creative",
      name: "Advertising and Creative",
      icon: PenTool,
      title: "Impactful Branding, With Creativity & Precision.",
      desc: "Many can offer a marketing strategy, but CODX Software delivers one that is crafted specifically for you. We assess your limitations, objectives, and aspirations to develop solutions that align perfectly with your vision.",
      image: advertising,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "it",
      name: "IT Services and Solutions",
      icon: Lightbulb,
      title: "Reliable IT Solutions, With Innovation & Efficiency.",
      desc: "CODX Software provides comprehensive IT solutions designed to optimize business operations, enhance digital transformation, and ensure seamless technology integration.",
      image: service,
      color: "from-indigo-500 to-purple-500",
    }
  ];

  const activeService = services.find(s => s.id === active);
  const activeIndex = services.findIndex(s => s.id === active);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    })
  };

  const imageVariants = {
    hidden: { rotateY: -90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.4
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="bg-black text-white px-6 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] animate-pulse animation-delay-2000" />
      </motion.div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
  
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center mb-16"
          variants={itemVariants}
        >
          {services.map(service => {
            const Icon = service.icon;
            const isActive = active === service.id;
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setHoveredId(service.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => setActive(service.id)}
                className={`cursor-pointer relative group`}
              >
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 blur-xl transition-opacity duration-300`}
                  animate={{ opacity: isActive ? 0.3 : 0 }}
                />
                <motion.div
                  className={`relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 backdrop-blur-sm
                    ${isActive 
                      ? "bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl border border-orange-500/50" 
                      : "bg-gray-900/30 hover:bg-gray-900/60 border border-transparent hover:border-orange-500/30"}`}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    boxShadow: isActive ? "0 20px 40px rgba(249, 115, 22, 0.2)" : "none"
                  }}
                >
                  <motion.div
                    animate={isHovered ? floatingAnimation : {}}
                  >
                    <Icon className={`w-10 h-10 mb-4 transition-all duration-300 ${
                      isActive ? "text-orange-400" : "text-orange-500 group-hover:text-orange-400"
                    }`} />
                  </motion.div>
                  
                  <p className="font-semibold text-sm md:text-base relative">
                    {service.name}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </p>

                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main content area */}
        <AnimatePresence mode="wait" custom={activeIndex}>
          <motion.div
            key={active}
            custom={activeIndex}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="mt-8"
          >
            <motion.div 
              className="rounded-[32px] bg-gradient-to-r from-orange-400 to-gray-200 p-10 md:p-12 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full filter blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div
                className={`flex flex-col md:flex-row items-center gap-10 relative z-10
                  ${activeIndex % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* TEXT CONTENT */}
                <motion.div 
                  className="flex-1 text-black"
                  initial={{ x: activeIndex % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                      {activeService.title}
                    </h2>
                  </motion.div>

                  <motion.p 
                    className="text-gray-700 text-base font-medium md:text-lg mb-8 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {activeService.desc}
                  </motion.p>

                  <motion.button
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    className="group inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Learn More</span>
                
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Ripple effect */}
                    <motion.span
                      className="absolute inset-0 bg-white"
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileHover={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </motion.div>

                {/* IMAGE */}
                <motion.div 
                  className="flex-1 flex justify-center"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <motion.div
                    animate={floatingAnimation}
                    className="relative"
                  >
                    <img
                      src={activeService.image}
                      alt={activeService.name}
                      className="w-[300px] md:w-[350px] drop-shadow-2xl"
                    />
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-orange-500/20 rounded-full filter blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}