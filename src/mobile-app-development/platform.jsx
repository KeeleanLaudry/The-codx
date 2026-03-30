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
  { title: "Marketplace E-Commerce Apps", icon: <FaShoppingCart /> },
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

export default function PlatformTypes({ title, items }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">

      {/* Heading */}
      <h2 className="section-heading">
        {title}
      </h2>

      <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-3xl py-5 flex flex-col items-center justify-center text-center hover:bg-gray-300 transition"
          >
            <div className="text-3xl mb-3">{item.icon}</div>

            <p className="section-desc">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}