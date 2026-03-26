import React from "react";

export default function WebServicesSection({ title, description, servicesData }) {
  
  // 👉 Pair data (2 per row)
  const rows = [];
  for (let i = 0; i < servicesData.length; i += 2) {
    rows.push(servicesData.slice(i, i + 2));
  }

  return (
    <section className=" py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <h2 className="section-heading">
          {title}
        </h2>

        <p className="section-subtitle">
          {description}
        </p>

        <div className="h-[1px] bg-gray-800 my-12"></div>

        <div className="relative">

          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-800"></div>

          <div className="space-y-12">

            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid md:grid-cols-2 gap-10">

                {row.map((service, index) => {
                  const globalIndex = rowIndex * 2 + index;

                  return (
                    <div key={index} className="text-left">
                      <div className="flex items-center gap-4 bg-[#EADECF]  rounded-full px-6 py-4 transition">
                    <div className="min-w-[50px] h-[50px] flex items-center justify-center rounded-full 
bg-gradient-to-br from-[#0D1F3C] to-[#2ABFBF] 
text-white font-bold ">
  {String(globalIndex + 1).padStart(2, "0")}
</div>
                        <h3 className="section-webtitle">
                          {service.title}
                        </h3>
                      </div>
                      <p className="section-desc font-medium">
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