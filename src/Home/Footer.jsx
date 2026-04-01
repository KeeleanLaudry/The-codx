import React from "react";
import logo from "../assets/THE CODX logo-15.svg"; // replace with your logo
import { Link } from "react-router-dom";
const Footer = () => {
  const links = [
  { name: "About Us", path: "/about" },
  { name: "Our Work", path: "/our-work" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
];
const services = [
  { name: "Development", path: "/mobile-app-development" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "Advertising And Creative", path: "/video-production" },
  { name: "IT Services And Solutions", path: "/it-resources" },
];
const industries = [
  { name: "E-commerce", path: "/ecommerce" },
  { name: "Real Estate", path: "/real-estate" },
  { name: "Beauty & Wellness", path: "/beauty-wellness" },
  { name: "Business Consultancy", path: "/business-consultancy" },
  { name: "Healthcare", path: "/healthcare" },
];
  return (
   <footer className="relative bg-[#EDE7DF] text-gray-600 pt-10 pb-5 px-6 overflow-hidden mt-10">
      
      {/* BIG BACKGROUND TEXT */}
      <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[180px] font-bold text-[#010712] opacity-5 pointer-events-none select-none">
       the CODX
      </h1>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        
        {/* CONTACT */}
        <div>
<img 
  src={logo} 
  alt="logo" 
  className="h-[7rem] md:h-20 lg:h-24 object-contain" 
/>
          <h3 className="text-[#0D1F3C] text-xl font-semibold mb-4 border-l-2 border-[#2ABFBF] pl-2">
            Contact Us
          </h3>

          <p className="text-xl leading-6 text-gray-600">
            8th Floor, Clover Bay Tower - Office No 803 <br />
            - Marasi Dr - Business Bay - Dubai
          </p>

          <p className="mt-3 text-xl text-gray-600">+971 50 285 2701</p>
          <p className="mt-2 text-xl text-gray-600">Singh@codxsoftwares.com</p>
        </div>

        {/* OVERVIEW */}
        <div>
          <h3 className="text-[#0D1F3C] text-xl font-semibold mb-4 border-l-2 border-[#2ABFBF] pl-2">
            Overview
          </h3>

        <ul className="space-y-3 text-xl text-gray-600">
  {links.map((item, i) => (
    <li key={i}>
      <Link to={item.path} className="hover:text-[#2ABFBF] transition-colors">
        {item.name}
      </Link>
    </li>
  ))}
</ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-[#0D1F3C] text-xl font-semibold mb-4 border-l-2 border-[#2ABFBF] pl-2">
            Our Services
          </h3>

   <ul className="space-y-3 text-xl font-medium text-gray-600">
  {services.map((item, index) => (
    <li key={index}>
      <Link
        to={item.path}
        className="hover:text-[#2ABFBF] transition-colors"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h3 className="text-[#0D1F3C]  text-xl font-semibold mb-4 border-l-2 border-[#2ABFBF] pl-2">
            Our Industries
          </h3>

          <ul className="space-y-3 text-xl text-gray-600">
  {industries.map((item, index) => (
    <li key={index}>
      <Link
        to={item.path}
        className="hover:text-[#2ABFBF] transition-all duration-300"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#EDE7DF] mt-12 pt-4 text-center text-lg font-semibold text-[#0D1F3C] relative z-10">
        © The Codx Softwares 2026 / All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;