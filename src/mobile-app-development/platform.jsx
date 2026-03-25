import React from "react";
import { 
  FaChartPie,
  FaBuilding,
  FaShoppingCart,
  FaPlane,
  FaHeartbeat,
  FaChartLine,
  FaCity,
  FaTicketAlt,
  FaGlobe,
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
  FaCube
} from "react-icons/fa";

const platforms = [
  { title: "SaaS Applications", icon: <FaChartPie /> },
  { title: "Real Estate Apps", icon: <FaBuilding /> },
  { title: "Marketplace E-Commerce Apps", icon: <FaShoppingCart className="text-orange-500"/> },
  { title: "Travel and Booking Platforms", icon: <FaPlane /> },
  { title: "Health & Wellness Apps", icon: <FaHeartbeat /> },
  { title: "Analytics & Dashboard Apps", icon: <FaChartLine /> },
  { title: "Property Management Systems", icon: <FaCity /> },
  { title: "Event & Ticketing Apps", icon: <FaTicketAlt /> },
  { title: "Community Forums", icon: <FaGlobe /> },
  { title: "CRM and ERP Solutions", icon: <FaUsers /> },
  { title: "Financial Services Apps", icon: <FaGlobe /> },
  { title: "Learning & Education Apps", icon: <FaGraduationCap /> },
  { title: "Job Portals", icon: <FaBriefcase /> },
  { title: "Custom Business Apps", icon: <FaCube /> },
];

export default function PlatformTypes() {
  return (
    <section className="w-full bg-black">

      {/* Heading */}
      <h2 className="text-center text-4xl font-semibold text-[#e6c2a2] mb-14">
        Platform Types We Can Develop
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {platforms.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-3xl py-5 flex flex-col items-center justify-center text-center hover:bg-gray-300 transition"
          >
            <div className="text-3xl mb-3">{item.icon}</div>

            <p className="text-lg font-medium text-black">
              {item.title}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}