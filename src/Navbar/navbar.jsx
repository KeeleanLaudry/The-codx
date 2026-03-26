import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/codx logo.png";

export default function CodxNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Development");
  const [activeService, setActiveService] = useState("Web Development");
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const industriesButtonRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // ─── SCROLLED: Split pill layout (Oval AI style) ───────────────────────────
  if (scrolled) {
    return (
      <div
        className="fixed top-0 left-0 w-full font-poppins z-50 flex items-start justify-between px-8 pt-5"
        ref={navbarRef}
      >
        {/* LEFT — Logo (no pill, no border) */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-9 drop-shadow-lg cursor-pointer"
          />
        </Link>

        {/* RIGHT — Nav pill + CTA pill grouped together */}
        <div className="flex items-center gap-3">
          {/* NAV PILL */}
          <div className="relative">
            <nav className="flex items-center gap-8 bg-black/70 backdrop-blur-2xl border border-white/15 rounded-full px-8 py-3 shadow-2xl shadow-black/20 text-sm font-medium text-white/85 transition-all duration-500">
              <Link to="/about" className="relative group py-0.5">
                <span className="hover:text-white transition-colors">
                  About Codx
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* SERVICES DROPDOWN */}
              <div className="flex items-center" ref={servicesButtonRef}>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen(!servicesOpen);
                    setIndustriesOpen(false);
                  }}
                  className="flex items-center gap-1.5 cursor-pointer group py-0.5"
                >
                  <span className="group-hover:text-white transition-colors">
                    Services
                  </span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {servicesOpen && (
                  <div
                    ref={servicesRef}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1200px] bg-black/90 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl animate-fadeIn"
                  >
                    <div className="grid grid-cols-4 gap-1 p-4 bg-white/5 border-b border-white/10">
                      {Object.keys(services).map((category) => {
                        const CategoryIcon = categoryIcons[category];
                        return (
                          <div
                            key={category}
                            onClick={() => {
                              setActiveCategory(category);
                              setActiveService(services[category][0]);
                            }}
                            className={`cursor-pointer p-3 rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-2
                          ${
                            activeCategory === category
                              ? "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-white"
                              : "hover:bg-white/10 text-gray-300 hover:text-white"
                          }`}
                          >
                            {CategoryIcon && (
                              <CategoryIcon
                                size={16}
                                className={
                                  activeCategory === category
                                    ? "text-orange-400"
                                    : ""
                                }
                              />
                            )}
                            <span className="text-sm font-medium">
                              {category}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-[280px_1fr_340px] gap-8 p-6">
                      <div className="space-y-1 border-r border-white/10 pr-4">
                        {services[activeCategory].map((service) => {
                          const ServiceIcon = serviceDetails[service]?.icon;
                          return (
                            <div
                              key={service}
                              onClick={() => setActiveService(service)}
                              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group
                            ${
                              activeService === service
                                ? "bg-gradient-to-r from-orange-500/20 to-transparent border-l-2 border-orange-500"
                                : "hover:bg-white/5"
                            }`}
                            >
                              {ServiceIcon && (
                                <ServiceIcon
                                  size={16}
                                  className={
                                    activeService === service
                                      ? "text-orange-400"
                                      : "text-gray-500 group-hover:text-gray-300"
                                  }
                                />
                              )}
                              <span
                                className={`text-sm ${
                                  activeService === service
                                    ? "text-white font-medium"
                                    : "text-gray-400 group-hover:text-gray-200"
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
                          className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-orange-400 transition-colors group"
                        >
                          {activeService}
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                        <div className="grid grid-cols-2 gap-2">
                          {(serviceDetails[activeService]?.info || []).map(
                            (item, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-300 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                                <span className="truncate">{item}</span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      <div className="border-l border-white/10 pl-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles size={14} className="text-orange-400" />
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Featured Insight
                          </h3>
                        </div>
                        {(serviceDetails[activeService]?.articles || []).map(
                          (article, i) => (
                            <div
                              key={i}
                              className="group relative bg-gradient-to-br from-white/5 to-transparent p-5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/5 hover:border-white/20"
                            >
                              <p className="text-sm text-gray-200 leading-relaxed mb-3">
                                {article}
                              </p>
                              <div className="flex items-center gap-1 text-orange-400 text-xs font-medium group-hover:gap-2 transition-all">
                                Read more <ChevronRight size={12} />
                              </div>
                              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                                <Star size={12} className="text-orange-400" />
                              </div>
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
                  className="flex items-center gap-1.5 cursor-pointer group py-0.5"
                >
                  <span className="group-hover:text-white transition-colors">
                    Industries
                  </span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`}
                  />
                </div>

                {industriesOpen && (
                  <div
                    ref={industriesRef}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 top-full w-[1200px] bg-black/90 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl animate-fadeIn"
                  >
                    <div className="grid grid-cols-3 gap-8 p-8">
                      <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Globe size={18} className="text-orange-400" />
                          <h3 className="text-lg font-semibold text-white">
                            Industries We Serve
                          </h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Empowering diverse industries with exclusive IT
                          solutions that drive innovation and business success.
                        </p>
                      </div>
                      <div className="col-span-2">
                        <div className="grid grid-cols-2 gap-4">
                          {industriesList.map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                to={item.link}
                                key={i}
                                className="group flex items-start gap-4 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                              >
                                <div className="rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 group-hover:from-orange-500/30 transition-all">
                                  <Icon size={20} className="text-orange-400" />
                                </div>
                                <div>
                                  <h4 className="text-white font-medium group-hover:text-orange-400 transition-colors">
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

              <Link to="/our-work" className="relative group py-0.5">
                <span className="hover:text-white transition-colors">
                  Our Work
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>

          {/* CTA PILL */}
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-2xl border border-white/15 rounded-full px-4 py-2.5 shadow-2xl shadow-black/20 transition-all duration-500">
            <button className="relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium px-5 py-1.5 hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/20">
              Speak to an expert
            </button>
            <div className="w-px h-5 bg-white/15 mx-1"></div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 w-8 h-8 cursor-pointer transition-all duration-300 group">
                <Phone
                  size={14}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 w-8 h-8 cursor-pointer transition-all duration-300 group">
                <Mail
                  size={14}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
        {/* end right group */}
      </div>
    );
  }

  // ─── DEFAULT: Full-width transparent navbar ────────────────────────────────
  return (
    <div
      className="fixed top-0 left-0 w-full font-poppins z-50"
      ref={navbarRef}
    >
      <div className="flex items-center justify-between w-full py-5 px-10 bg-gradient-to-b from-black/40 to-transparent">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-12 cursor-pointer drop-shadow-lg transition-all duration-500"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-medium text-white/90 text-base">
          <Link to="/about" className="relative group py-2">
            <span className="hover:text-white transition-colors">
              About Codx
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* SERVICES DROPDOWN */}
          <div className="flex items-center" ref={servicesButtonRef}>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setServicesOpen(!servicesOpen);
                setIndustriesOpen(false);
              }}
              className="flex items-center gap-1.5 cursor-pointer group py-2"
            >
              <span className="group-hover:text-white transition-colors">
                Services
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </div>

            {servicesOpen && (
              <div
                ref={servicesRef}
                onClick={(e) => e.stopPropagation()}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1200px] bg-black/90 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl animate-fadeIn"
              >
                <div className="grid grid-cols-4 gap-1 p-4 bg-white/5 border-b border-white/10">
                  {Object.keys(services).map((category) => {
                    const CategoryIcon = categoryIcons[category];
                    return (
                      <div
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setActiveService(services[category][0]);
                        }}
                        className={`cursor-pointer p-3 rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-2
                        ${
                          activeCategory === category
                            ? "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 text-white"
                            : "hover:bg-white/10 text-gray-300 hover:text-white"
                        }`}
                      >
                        {CategoryIcon && (
                          <CategoryIcon
                            size={16}
                            className={
                              activeCategory === category
                                ? "text-orange-400"
                                : ""
                            }
                          />
                        )}
                        <span className="text-sm font-medium">{category}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-[280px_1fr_340px] gap-8 p-6">
                  <div className="space-y-1 border-r border-white/10 pr-4">
                    {services[activeCategory].map((service) => {
                      const ServiceIcon = serviceDetails[service]?.icon;
                      return (
                        <div
                          key={service}
                          onClick={() => setActiveService(service)}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group
                          ${
                            activeService === service
                              ? "bg-gradient-to-r from-orange-500/20 to-transparent border-l-2 border-orange-500"
                              : "hover:bg-white/5"
                          }`}
                        >
                          {ServiceIcon && (
                            <ServiceIcon
                              size={16}
                              className={
                                activeService === service
                                  ? "text-orange-400"
                                  : "text-gray-500 group-hover:text-gray-300"
                              }
                            />
                          )}
                          <span
                            className={`text-sm ${
                              activeService === service
                                ? "text-white font-medium"
                                : "text-gray-400 group-hover:text-gray-200"
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
                      className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-orange-400 transition-colors group"
                    >
                      {activeService}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      {(serviceDetails[activeService]?.info || []).map(
                        (item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-300 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                            <span className="truncate">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="border-l border-white/10 pl-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles size={14} className="text-orange-400" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                        Featured Insight
                      </h3>
                    </div>
                    {(serviceDetails[activeService]?.articles || []).map(
                      (article, i) => (
                        <div
                          key={i}
                          className="group relative bg-gradient-to-br from-white/5 to-transparent p-5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/5 hover:border-white/20"
                        >
                          <p className="text-sm text-gray-200 leading-relaxed mb-3">
                            {article}
                          </p>
                          <div className="flex items-center gap-1 text-orange-400 text-xs font-medium group-hover:gap-2 transition-all">
                            Read more <ChevronRight size={12} />
                          </div>
                          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                            <Star size={12} className="text-orange-400" />
                          </div>
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
              className="flex items-center gap-1.5 cursor-pointer group py-2"
            >
              <span className="group-hover:text-white transition-colors">
                Industries
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`}
              />
            </div>

            {industriesOpen && (
              <div
                ref={industriesRef}
                onClick={(e) => e.stopPropagation()}
                className="absolute left-1/2 -translate-x-1/2 mt-4 top-full w-[1200px] bg-black/90 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl animate-fadeIn"
              >
                <div className="grid grid-cols-3 gap-8 p-8">
                  <div className="col-span-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe size={18} className="text-orange-400" />
                      <h3 className="text-lg font-semibold text-white">
                        Industries We Serve
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Empowering diverse industries with exclusive IT solutions
                      that drive innovation and business success.
                    </p>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                      {industriesList.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            to={item.link}
                            key={i}
                            className="group flex items-start gap-4 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                          >
                            <div className="rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 group-hover:from-orange-500/30 transition-all">
                              <Icon size={20} className="text-orange-400" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium group-hover:text-orange-400 transition-colors">
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

          <Link to="/our-work" className="relative group py-2">
            <span className="hover:text-white transition-colors">Our Work</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative overflow-hidden rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50 px-7 py-2.5 text-base">
            <span className="relative z-10">Speak to an expert</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
          </button>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 w-9 h-9 cursor-pointer transition-all duration-300 group">
              <Phone
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 w-9 h-9 cursor-pointer transition-all duration-300 group">
              <Mail
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}