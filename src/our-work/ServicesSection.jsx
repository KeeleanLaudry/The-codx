import React, { useState } from "react";
import FlipCard from "./FlipCard";
import { Globe, TrendingUp, Target, PenTool } from "lucide-react";
import { useGetCaseStudiesQuery } from "../Api/BrandApi";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const [active, setActive] = useState("web");
  const navigate = useNavigate();

  // ✅ API CALL
  const { data, isLoading, error } = useGetCaseStudiesQuery();

  // ✅ SAFE DATA HANDLING
  const cases = Array.isArray(data) ? data : data?.data || [];

  // ✅ BUTTONS SAME
  const buttons = [
    { key: "web", label: "Web Development", icon: Globe, color: "from-[#0D1F3C] to-[#2ABFBF]" },
    { key: "marketing", label: "Digital Marketing", icon: TrendingUp, color: "from-[#2ABFBF] to-[#0D1F3C]" },
    { key: "advertising", label: "Advertising", icon: Target, color: "from-[#0D1F3C] to-[#2ABFBF]" },
    { key: "uiux", label: "UI/UX Design", icon: PenTool, color: "from-[#2ABFBF] to-[#0D1F3C]" }
  ];
console.log("CASES:", cases);
cases.forEach(c => console.log("BRAND:", c.brandId));
const categoryMap = {
  web: ["web", "web development"],
  marketing: ["marketing", "digital marketing"],
  advertising: ["advertising"],
  uiux: ["uiux", "ui/ux", "ui ux"]
};
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error loading data</p>;


const filteredData = cases.filter((item) => {
  const brandCategory = item.brandId?.category?.toLowerCase().trim();

  return categoryMap[active]?.some(cat =>
    brandCategory?.includes(cat)
  );
});
  return (
    <section className="mb-10 px-6 py-10">

      {/* Buttons UI SAME */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-full shadow-lg border border-[#EADECF]">
          {buttons.map((btn) => {
            const Icon = btn.icon;
            const isActive = active === btn.key;

            return (
              <button
                key={btn.key}
                onClick={() => setActive(btn.key)}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-500
                  flex items-center gap-2 overflow-hidden
                  ${isActive ? "text-white" : "text-[#0D1F3C]/60 hover:text-[#0D1F3C]"}
                `}
              >
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${btn.color} rounded-full`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                  </div>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{btn.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ✅ CARDS GRID (API DATA) */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">

        {filteredData.map((item) => (
          <div
            key={item._id}
            onClick={() => navigate(`/case-study/${item._id}`)} // ✅ CLICK WORKS
            className="cursor-pointer"
          >
           <FlipCard
  logo={item.brandId?.logo || item.logo || item.image}
  title={item.brandId?.title}
  description={item.brandId?.description}
/>
          </div>
        ))}

      </div>

    </section>
  );
}