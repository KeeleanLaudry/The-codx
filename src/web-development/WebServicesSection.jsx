import React from "react";

export default function WebServicesSection({ title, description, servicesData }) {
  
  // 👉 Pair data (2 per row)
  const rows = [];
  for (let i = 0; i < servicesData.length; i += 2) {
    rows.push(servicesData.slice(i, i + 2));
  }

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#FAD5A5] via-[#FBCEB1] to-[#FF7F50] bg-clip-text text-transparent">
          {title}
        </h2>

        <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="h-[1px] bg-gray-800 my-12"></div>

        <div className="relative">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-800"></div>

          <div className="space-y-12">

            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid md:grid-cols-2 gap-10">

                {row.map((service, index) => {
                  const globalIndex = rowIndex * 2 + index;

                  return (
                    <div key={index} className="text-left">
                      <div className="flex items-center gap-4 bg-[#0d0d0d] border border-gray-800 rounded-full px-6 py-4 transition">
                    <div className="min-w-[50px] h-[50px] flex items-center justify-center rounded-full 
bg-gradient-to-br from-[#FAD5A5] via-[#FBCEB1] to-[#FF7F50] 
text-black font-bold shadow-[0_0_15px_rgba(255,127,80,0.5)]">
  {String(globalIndex + 1).padStart(2, "0")}
</div>
                        <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#FAD5A5] to-[#FBCEB1] bg-clip-text text-transparent">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-white mt-4 text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  );
                })}

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}