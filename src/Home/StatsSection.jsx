import React from "react";

const stats = [
  { 
    number: "80%", 
    text: "Clients Return for More Projects", 
    desc: "Our commitment to excellence and tangible results builds trust, with nearly half of our clients coming back for additional partnerships." 
  },
  { 
    number: "65%", 
    text: "of New Clients from Referrals", 
    desc: "A testament to our dedication, satisfied clients consistently recommend us to their peers, showcasing the quality of our work." 
  },
  { 
    number: "14", 
    text: "Average Short Time for Projects", 
    desc: "Fast, efficient onboarding ensures we kick off your project within just 14 days of finalizing the agreement." 
  },
  { 
    number: "500+", 
    text: "Projects Successfully Completed", 
    desc: "From concept to completion, we've launched over 500 unique and diverse projects tailored to our clients' needs." 
  },
  { 
    number: "5+ Countries", 
    text: "Global Reach in Clientele", 
    desc: "Trusted by clients worldwide, we've delivered solutions to businesses in over 5+ countries and are growing." 
  },
  { 
    number: "30+ Industries", 
    text: "Diverse Expertise Across Sectors", 
    desc: "Our proven success spans industries like Real Estate, E-Commerce, aesthetic and wellness, technology and beyond." 
  },
];

const StatsSection = () => {
  return (
    <div className="relative px-6 py-10 text-center overflow-hidden">
         <div className="relative z-10 mb-16">
     
        <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-4">
          Proven Track Record: Our Gains
        </h2>
    
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            {/* Gradient border effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2ABFBF] to-[#f4a261] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm"></div>
            
            <div className="relative bg-white rounded-2xl p-8 m-[2px] h-full flex flex-col items-center text-center">
              
              {/* Number */}
              <div className="relative z-10">
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0D1F3C] to-[#2ABFBF] bg-clip-text text-transparent mb-3">
                  {item.number}
                </h3>
                <div className="w-12 h-0.5 bg-[#2ABFBF] mx-auto my-4 rounded-full"></div>
              </div>
              
              <p className="text-[#0D1F3C] text-xl font-semibold mb-4">
                {item.text}
              </p>
              
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
              
              <div className="mt-4 text-[#2ABFBF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-1">
                <span>Hover to learn more</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

  
    </div>
  );
};

export default StatsSection;