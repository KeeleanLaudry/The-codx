import { motion } from "framer-motion";

// Images
import arabian from "../assets/brand/arabian-flames.png";
import ahk from "../assets/brand/ahk-1.png";
import x from "../assets/brand/10x.png";
import mmr from "../assets/brand/mmr.png";
import mantis from "../assets/brand/mantis.png";
import goodwill from "../assets/brand/goodwill.png";
import catallion from "../assets/brand/catallion.png";
import auracious from "../assets/brand/auracious.png";
import eatplaystudy from "../assets/brand/eat play study.png";
import Shades from "../assets/brand/Shades.png";

export default function BrandsGrid({ title = "Trusted by 80+ Clients Worldwide" }) {
  const brands = [
    { id: 1, image: arabian },
    { id: 2, image: ahk },
    { id: 3, image: x },
    { id: 4, image: mmr },
    { id: 5, image: mantis },
    { id: 6, image: goodwill },
    { id: 7, image: catallion },
    { id: 8, image: auracious },
    { id: 9, image: eatplaystudy },
    { id: 10, image: Shades },
  ];

  // duplicate for infinite loop
  const logos = [...brands, ...brands];

  return (
    <section className="bg-black py-20 px-6 overflow-hidden">

      <div className="max-w-8xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
        <h2 className="hero-gradient text-4xl md:text-5xl font-bold">
  {title}
</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10"/>
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10"/>

          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {logos.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 
                
                transition"
              >
                <img
                  src={brand.image}
                  className="h-30 w-auto object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </motion.div>

        </div>

      </div>

    </section>
  );
}