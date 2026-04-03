import React, { useState, useEffect, useRef } from "react";
import {  useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  Mail,
  Code,
  Smartphone,
  ShoppingCart,
  Palette,
  Megaphone,
  Video,
  Database,
  Layers,
  Sparkles,
  Building2,
  ShoppingBag,
  Briefcase,
  HeartPulse,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Award,
  ChevronRight,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/THE CODX logo-15.svg";

export default function CodxNavbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Development");
  const [activeService, setActiveService] = useState("Web Development");
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const industriesButtonRef = useRef(null);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
      if (
        industriesButtonRef.current &&
        !industriesButtonRef.current.contains(event.target) &&
        industriesRef.current &&
        !industriesRef.current.contains(event.target)
      ) {
        setIndustriesOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutsideMobile = (event) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobileIndustriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideMobile);
    return () => document.removeEventListener("mousedown", handleClickOutsideMobile);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const servicePageLinks = {
    "Web Development": "/web-development",
    "Mobile App Development": "/mobile-app-development",
    "E-commerce Website": "/ecommerce-website",
    "UI UX Design": "/ui-ux-design",
    "Social Media Marketing": "/social-media-marketing",
    "Digital Marketing Services": "/digital-marketing",
    "Digital Branding": "/digital-branding",
    Ads: "/ads",
    "Video Production": "/video-production",
    ERP: "/erp-solutions",
    "IT Resources": "/it-resources",
  };

  const services = {
    Development: [
      "Web Development",
      "Mobile App Development",
      "E-commerce Website",
      "UI UX Design",
    ],
    "Digital Marketing": [
      "Social Media Marketing",
      "Digital Marketing Services",
    ],
    "Advertising & Creative": ["Digital Branding", "Ads", "Video Production"],
    "IT Services & Solutions": ["ERP", "IT Resources"],
  };

  const serviceDetails = {
    "Web Development": {
      icon: Code,
      info: [
        "Ibexa DXP Development",
        "Sharepoint Development",
        "WordPress Development",
        "Drupal Development",
        "Joomla Development",
        "ASP.Net Development",
        "AngularJS Development",
        "Ruby on Rails Development",
        "CMS Development",
        "Laravel Development",
        "PHP Development",
        "Python Development",
        "Website Maintenance",
        "Enterprise Development",
        "Pentesting",

      ],
      articles: [
        "The Future of Business Is Digital — Here's How CODX Helps You Stay Ahead",
      ],
    },
    "Mobile App Development": {
      icon: Smartphone,
      info: [
        "Hybrid App Development",
        "iOS App Development",
        "Android App Development",
        "React Native App Development",
        "Flutter App Development",
        "Progressive Web App Development",
      ],
      articles: [
        "The Future of Business Is Digital — Here's How CODX Helps You Stay Ahead",
      ],
    },
    "E-commerce Website": {
      icon: ShoppingCart,
      info: [
        "Shopify Development",
        "Shopify Plus Development",
        "WooCommerce Development",
        "Mirakl Development",
        "Magento Development",
        "BigCommerce Development",
      ],
      articles: [
        "The Future of Business Is Digital — Here's How CODX Helps You Stay Ahead",
      ],
    },
    "UI UX Design": {
      icon: Palette,
      info: [
        "UX Design",
        "UX Audit",
        "Landing Page Design",
        "PSD to HTML",
        "UX Workshop",
        "Graphic Design",
        "Responsive Website Design",
        "Google 3D Map Design",
      ],
      articles: [
        "The Future of Business Is Digital — Here's How CODX Helps You Stay Ahead",
      ],
    },
    "Social Media Marketing": {
      icon: Users,
      info: [
        "LinkedIn Marketing",
        "Instagram Marketing",
        "Facebook Marketing",
        "TikTok Marketing",
        "Twitter Marketing",
        "Content Marketing",
        "Social Media Optimization",
      ],
      articles: ["Why Your Website Is Your Strongest Marketing Tool"],
    },
    "Digital Marketing Services": {
      icon: TrendingUp,
      info: [
        "Public Relations (PR)",
        "Pay Per Click (PPC)",
        "Search Engine Optimization (SEO)",
        "Online Reputation Management (ORM)",
        "ASO App Store Optimization",
        "Influencer Marketing",
        "Conversion Rate Optimization",
        "Translation Services",
        "Email Marketing",
      ],
      articles: ["Why Your Website Is Your Strongest Marketing Tool"],
    },
    "Digital Branding": {
      icon: Award,
      info: [
        "Packaging Design",
        "Business Card Design",
        "Brochure Design",
        "Logo Design",
        "Corporate Identity Design",
      ],
      articles: [
        "The Power of Digital Marketing — Turning Clicks into Conversions",
      ],
    },
    Ads: {
      icon: Megaphone,
      info: [
        "Paid Ads (Google, Meta, TikTok, YouTube, Snapchat)",
        "Social Media Campaigns",
      ],
      articles: [
        "The Power of Digital Marketing — Turning Clicks into Conversions",
      ],
    },
    "Video Production": {
      icon: Video,
      info: ["Video Production & Editing"],
      articles: [
        "The Power of Digital Marketing — Turning Clicks into Conversions",
      ],
    },
    ERP: {
      icon: Database,
      info: [
        "NetSuite",
        "SAP",
        "Microsoft Dynamics 365",
        "Oracle Cloud",
        "Odoo",
      ],
      articles: ["How Custom Software Solutions Simplify Business Operations"],
    },
    "IT Resources": {
      icon: Users,
      info: [
        "Hire Scrum Master",
        "Hire Dynamics 365 Developer",
        "Hire AWS Resource",
        "Hire React Native Developer",
        "Hire SQA Engineer",
        "Hire Sharepoint Developer",
        "Hire Azure Developer",
        "Hire Mobile App Developer",
        "Hire NodeJS Developer",
        "Hire ReactJS Developer",
        "Hire Project Manager",
        "Hire .NET Developer",
        "Digital Cloud Transformation",
        "MarTech Consulting",
      ],
      articles: ["How Custom Software Solutions Simplify Business Operations"],
    },
  };

  const industriesList = [
    {
      name: "Beauty & Wellness",
      icon: Sparkles,
      link: "/beauty-wellness",
      description: "Digital transformation for modern wellness brands",
    },
    {
      name: "Real Estate",
      icon: Building2,
      link: "/real-estate",
      description: "PropTech solutions and virtual experiences",
    },
    {
      name: "E-commerce",
      icon: ShoppingBag,
      link: "/ecommerce",
      description: "Scalable platforms and conversion optimization",
    },
    {
      name: "Business Consultancy",
      icon: Briefcase,
      link: "/business-consultancy",
      description: "Strategic IT consulting for growth",
    },
    {
      name: "Healthcare",
      icon: HeartPulse,
      link: "/healthcare",
      description: "HIPAA-compliant digital health solutions",
    },
  ];

  const categoryIcons = {
    Development: Code,
    "Digital Marketing": TrendingUp,
    "Advertising & Creative": Palette,
    "IT Services & Solutions": Database,
  };

const pillGlassStyle = {
background: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.3)",
  boxShadow: `
    0 8px 32px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.4)
  `,
};

  const dropdownGlassStyle = {
   background: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.3)",
  boxShadow: `
    0 8px 32px rgba(0,0,0,0.08),
    inset 0 1px 0 rgba(255,255,255,0.4)
  `,
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full z-50 bg-transparent flex items-center justify-between px-4 sm:px-6 md:px-8 "
        ref={navbarRef}
       
      >
        {/* LEFT — Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
className="w-60 sm:w-56 md:w-[420px] lg:w-[250px] h-auto drop-shadow-sm cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-3">
          {/* NAV PILL */}
          <div className="relative">
            <nav
              className="flex items-center gap-4 xl:gap-8 rounded-full px-4 xl:px-8 py-2 xl:py-3 transition-all duration-500"
              style={pillGlassStyle}
            >
              <Link
                to="/about"
                className="relative group py-0.5 text-[#0D1F3C] font-medium text-sm xl:text-[17px] "
              >
                <span className="hover:text-[#2ABFBF] transition-colors">
                  About Codx
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ABFBF] group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* SERVICES DROPDOWN */}
              <div className="flex items-center" ref={servicesButtonRef}>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen(!servicesOpen);
                    setIndustriesOpen(false);
                  }}
                  className="flex items-center gap-1.5 cursor-pointer group py-0.5 text-[#0D1F3C] font-medium text-sm xl:text-[17px]"
                >
                  <span className="group-hover:text-[#2ABFBF] transition-colors">
                    Services
                  </span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 text-[#0D1F3C] ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {servicesOpen && (
                  <div
                    ref={servicesRef}
                    onClick={(e) => e.stopPropagation()}
                className=" bg-white/80 backdrop-blur-md absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1100px] rounded-2xl shadow-2xl "              
                
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-4 border-b border-[#0D1F3C]/10 bg-[#EADECF]/30">
                      {Object.keys(services).map((category) => {
                        const CategoryIcon = categoryIcons[category];
                        return (
                          <div
                            key={category}
                            onClick={() => {
                              setActiveCategory(category);
                              setActiveService(services[category][0]);
                            }}
                            className={`cursor-pointer p-2 md:p-3 rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-2
                          ${
                            activeCategory === category
                              ? "bg-[#2ABFBF]/10 border border-[#2ABFBF]/30 text-[#0D1F3C]"
                              : "hover:bg-[#0D1F3C]/5 text-[#0D1F3C]/70 hover:text-[#0D1F3C]"
                          }`}
                          >
                            {CategoryIcon && (
                              <CategoryIcon
                                size={14}
                                className={
                                  activeCategory === category
                                    ? "text-[#2ABFBF]"
                                    : "text-[#0D1F3C]/50"
                                }
                              />
                            )}
                            <span className="text-xs md:text-base font-semibold">
                              {category}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_260px] gap-4 md:gap-8 p-4 md:p-6">
                      <div className="space-y-1 border-r border-[#0D1F3C]/10 pr-4">
                        {services[activeCategory].map((service) => {
                          const ServiceIcon = serviceDetails[service]?.icon;
                          return (
                            <div
                              key={service}
                              onClick={() => setActiveService(service)}
                              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group 
                            ${
                              activeService === service
                                ? "bg-[#2ABFBF]/10 border-l-2 border-[#2ABFBF]"
                                : "hover:bg-[#0D1F3C]/5"
                            }`}
                            >
                              {ServiceIcon && (
                                <ServiceIcon
                                  size={16}
                                  className={
                                    activeService === service
                                      ? "text-[#2ABFBF]"
                                      : "text-[#0D1F3C]/50 group-hover:text-[#0D1F3C]/70"
                                  }
                                />
                              )}
                              <span
                                className={`text-base font-medium ${
                                  activeService === service
                                    ? "text-[#0D1F3C] font-medium"
                                    : "text-[#0D1F3C]/60 group-hover:text-[#0D1F3C]/80"
                                }`}
                              >
                                {service}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="space-y-4">
                        <Link
                          to={servicePageLinks[activeService] || "#"}
                           onClick={() => setServicesOpen(false)}
                          className="inline-flex items-center gap-2 text-base md:text-lg font-semibold text-[#0D1F3C] hover:text-[#2ABFBF] transition-colors group"
                        >
                          {activeService}
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {(serviceDetails[activeService]?.info || []).slice(0, 20).map(
                            (item, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-xs md:text-sm text-[#0D1F3C]/70 px-2 py-1.5 rounded-lg hover:bg-[#0D1F3C]/5 transition-colors"
                              >
                                <div className="w-1.5 h-1.5 bg-[#2ABFBF] rounded-full flex-shrink-0"></div>
                                <span className="font-medium text-base truncate">{item}</span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="hidden md:block border-l border-[#0D1F3C]/10 pl-2">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles size={14} className="text-[#2ABFBF]" />
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0D1F3C]/50">
                            Featured Insight
                          </h3>
                        </div>
                        {(serviceDetails[activeService]?.articles || []).map(
                          (article, i) => (
                            <div
                              key={i}
                              className="
                              group relative 
                              p-5 
                              rounded-xl 
                              min-h-[350px]   // 👈 height increase
                              flex flex-col justify-between
                              transition-all duration-300 
                              cursor-pointer 
                              hover:border-[#2ABFBF]/20
"
                            >
                              <p className="text-base text-[#0D1F3C]/80 font-medium leading-relaxed mb-3">
                                {article}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* INDUSTRIES DROPDOWN */}
              <div className="flex items-center" ref={industriesButtonRef}>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndustriesOpen(!industriesOpen);
                    setServicesOpen(false);
                  }}
                  className="flex items-center gap-1.5 cursor-pointer group py-0.5 text-[#0D1F3C] font-medium text-sm xl:text-[17px]"
                >
                  <span className="group-hover:text-[#2ABFBF] transition-colors">
                    Industries
                  </span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 text-[#0D1F3C] ${industriesOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {industriesOpen && (
                  <div
                    ref={industriesRef}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white/80 backdrop-blur-md absolute left-1/2 -translate-x-1/2 mt-4 top-full w-[95vw] max-w-[1050px] rounded-2xl shadow-2xl "
                    // style={dropdownGlassStyle}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 md:p-8">
                      <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Globe size={18} className="text-[#2ABFBF]" />
                          <h3 className="text-lg font-semibold text-[#0D1F3C]">
                            Industries We Serve
                          </h3>
                        </div>
                        <p className="text-[#0D1F3C]/70 text-[17px] leading-relaxed">
                          Empowering diverse industries with exclusive IT
                          solutions that drive innovation and business success.
                        </p>
                      </div>
                      <div className="col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {industriesList.map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                to={item.link}
                                key={i}
                                  onClick={() => setIndustriesOpen(false)}

                                className="group flex items-start gap-4 p-2 rounded-xl hover:bg-[#0D1F3C]/5 transition-all duration-300 border border-transparent hover:border-[#2ABFBF]/20"
                              >
                                <div className="rounded-xl bg-[#2ABFBF]/10 group-hover:bg-[#2ABFBF]/20 transition-all p-0.75">
                                  <Icon size={18} className="text-[#2ABFBF]" />
                                </div>
                                <div>
                                  <h4 className="text-[#0D1F3C] text-[17px] font-medium group-hover:text-[#2ABFBF] transition-colors">
                                    {item.name}
                                  </h4>
                                  
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/our-work"
                className="relative group py-0.5 text-[#0D1F3C] font-medium text-sm xl:text-[17px]"
              >
                <span className="hover:text-[#2ABFBF] transition-colors">
                  Our Work
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2ABFBF] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>

          {/* CTA PILL */}
          <div
            className="flex items-center gap-2 rounded-full px-3 xl:px-4 py-2 transition-all duration-500"
            style={pillGlassStyle}
          >
     <button
      onClick={() => navigate("/contact-us")}
      className="relative overflow-hidden rounded-full bg-[#0D1F3C] text-white text-xs xl:text-sm font-semibold px-3 xl:px-5 py-1.5 hover:bg-[#2ABFBF] transition-all duration-300 shadow-md whitespace-nowrap"
    >
      speak to an expert
    </button>
            <div className="w-px h-5 bg-[#0D1F3C]/20 mx-1"></div>
            <div className="flex items-center gap-1.5">
             <a href="tel:+971502852701">
  <div className="flex items-center justify-center rounded-full border border-[#0D1F3C]/20 text-[#0D1F3C] hover:bg-[#2ABFBF]/10 hover:border-[#2ABFBF]/40 w-7 h-7 xl:w-8 xl:h-8 cursor-pointer transition-all duration-300 group">
    <Phone
      size={12}
      className="group-hover:scale-110 transition-transform"
    />
  </div>
</a>
              <a
  href="mailto:Singh@codxsoftwares.com"
className="flex items-center justify-center rounded-full border border-[#0D1F3C]/20 text-[#0D1F3C] hover:bg-[#2ABFBF]/10 hover:border-[#2ABFBF]/40 w-7 h-7 xl:w-8 xl:h-8 cursor-pointer transition-all duration-300 group"  onClick={(e) => {
    e.stopPropagation();
  }}
>
  <Mail size={12} />
</a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button - Visible on mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-[#0D1F3C]/10 shadow-md z-50"
        >
          {mobileMenuOpen ? (
            <X size={20} className="text-[#0D1F3C]" />
          ) : (
            <Menu size={20} className="text-[#0D1F3C]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-[#F7F3EE] z-50 shadow-2xl lg:hidden overflow-y-auto"
            style={{
              background: "rgba(247, 243, 238, 0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="p-6 pt-20">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <Link
                  to="/about"
                  className="block py-3 text-[#0D1F3C] font-medium text-lg border-b border-[#0D1F3C]/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Codx
                </Link>

                {/* Mobile Services */}
                <div className="border-b border-[#0D1F3C]/10">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-3 text-[#0D1F3C] font-medium text-lg"
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="pb-3 space-y-3">
                      {Object.keys(services).map((category) => (
                        <div key={category} className="ml-4">
                          <div className="flex items-center gap-2 py-2">
                            {categoryIcons[category] && React.createElement(categoryIcons[category], { size: 16, className: "text-[#2ABFBF]" })}
                            <span className="text-sm font-semibold text-[#0D1F3C]">{category}</span>
                          </div>
                          <div className="ml-6 space-y-2">
                            {services[category].map((service) => (
                              <Link
                                key={service}
                                to={servicePageLinks[service] || "#"}
                                className="block py-1.5 text-sm text-[#0D1F3C]/70 hover:text-[#2ABFBF] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Industries */}
                <div className="border-b border-[#0D1F3C]/10">
                  <button
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className="flex items-center justify-between w-full py-3 text-[#0D1F3C] font-medium text-lg"
                  >
                    <span>Industries</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  
                  {mobileIndustriesOpen && (
                    <div className="pb-3 space-y-2">
                      {industriesList.map((industry) => {
                        const Icon = industry.icon;
                        return (
                          <Link
                            key={industry.name}
                            to={industry.link}
                            className="flex items-center gap-3 py-2 ml-4"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon size={16} className="text-[#2ABFBF]" />
                            <span className="text-sm text-[#0D1F3C]/70 hover:text-[#2ABFBF] transition-colors">
                              {industry.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Link
                  to="/our-work"
                  className="block py-3 text-[#0D1F3C] font-medium text-lg border-b border-[#0D1F3C]/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Work
                </Link>

                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3">
             <button
  type="button"
  onClick={(e) => {
    e.stopPropagation();   // 🔥 IMPORTANT
    navigate("/contact-us");
  }}
  className="relative overflow-hidden rounded-full bg-[#0D1F3C] text-white text-sm xl:text-sm font-semibold px-3 xl:px-5 py-1.5 hover:bg-[#2ABFBF] transition-all duration-300 shadow-md whitespace-nowrap"
>
  speak to an expert
</button>
               <div className="flex gap-3  pt-2">
  
  {/* Phone */}
  <a href="tel:+971502852701">
    <div className="flex items-center justify-center 
      rounded-full border border-[#0D1F3C]/20 
      text-[#0D1F3C] hover:bg-[#2ABFBF]/10 hover:border-[#2ABFBF]/40 
      w-8 h-8 md:w-10 md:h-10 
      cursor-pointer transition-all duration-300 group">
      
      <Phone size={16} className="group-hover:scale-110 transition-transform" />
    </div>
  </a>

  {/* Mail */}
  <a
    href="mailto:Singh@codxsoftwares.com?subject=Inquiry&body=Hello Codx Team,"
    className="flex items-center justify-center 
      rounded-full border border-[#0D1F3C]/20 
      text-[#0D1F3C] hover:bg-[#2ABFBF]/10 hover:border-[#2ABFBF]/40 
      w-8 h-8 md:w-10 md:h-10 
      transition-all duration-300 group"
    onClick={(e) => e.stopPropagation()}
  >
    <Mail size={16} className="group-hover:scale-110 transition-transform" />
  </a>

</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}