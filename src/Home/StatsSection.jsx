import { desc, text } from "framer-motion/client";
import React from "react";

const stats = [
  { number: "80%", text: "Clients Return for More Projects", desc: "Our commitment to excellence and tangible results builds trust, with nearly half of our clients coming back for additional partnerships." },
  { number: "65%",text: "of New Clients from Referrals" , desc: "A testament to our dedication, satisfied clients consistently recommend us to their peers, showcasing the quality of our work." },
  { number: "14",text: "Average Short Time for Projects", desc: "Fast, efficient onboarding ensures we kick off your project within just 14 days of finalizing the agreement." },
  { number: "500+",text: "Projects Successfully Completed", desc: "From concept to completion, we’ve launched over 150 unique and diverse projects tailored to our clients’ needs." },
  { number: "5+ Countries",text: "Global Reach in Clientele", desc: "Trusted by clients worldwide, we’ve delivered solutions to businesses in over 5+ countries and are growing." },
  { number: "30+ Industries",text: "Diverse Expertise Across Sectors", desc: "Our proven success spans industries like Real Estate, E-Commerce, aesthetic and wellness, technology and beyond." },
];

const StatsSection = () => {
  return (
    <div className="bg-black py-20 px-6 text-center">

      <h2 className="text-[#f4a261] text-3xl font-semibold mb-12">
        Proven Track Record: Our Gains
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {stats.map((item, index) => (
          <div key={index} className="flip-card">

            <div className="flip-card-inner">

              {/* Front */}
          <div className="flip-card-front flex flex-col items-center justify-center text-center gap-5 p-5">
  <h3 className="text-4xl font-bold">{item.number}</h3>
  <p className="text-xl font-semibold">{item.text}</p>
</div>
              {/* Back */}
              <div className="flip-card-back">
                <p className="font-medium text-base">{item.desc}</p>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default StatsSection;