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

export default function BrandsGrid({ title = "Trusted by 350+ Clients Worldwide" }) {
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
    <section className="  px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">
          {title}
        </h2>
        <div className="relative overflow-hidden">
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