import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, ChevronRight } from "lucide-react";
import logo from "../assets/codx logo.png";
import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [scrolled] = useState(false);

  const companyInfo = {
    name: "CODX",
    tagline: "Digitally Yours!",
    address:
      "8th Floor, Clover Bay Tower - Office No 803 - Marasi Dr - Business Bay - Dubai",
    phone: "+971 50 285 2701",
    email: "Singh@codxsoftwares.com",
  };

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Our Work", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const services = [
    { name: "Development", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Advertising And Creative", href: "#" },
    { name: "IT Services And Solutions", href: "#" },
  ];

  const industries = [
    { name: "E-commerce", href: "#" },
    { name: "Real Estate", href: "#" },
    { name: "Beauty & Wellness", href: "#" },
    { name: "Business Consultancy", href: "#" },
    { name: "Healthcare", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  const FooterSection = ({ title, children }) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white border-b border-white pb-1 inline-block">
        {title}
      </h3>
      <div className="pt-3">{children}</div>
    </div>
  );

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className={`transition-all duration-500 ${
                  scrolled ? "h-9" : "h-12"
                }`}
              />
            </div>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-white" />
                <p className="text-sm">{companyInfo.address}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-sm hover:text-gray-400"
                >
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-sm hover:text-gray-400"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-3 text-white">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-black border border-white text-white text-sm focus:outline-none"
                />
                <button className="px-4 py-2 rounded-r-lg bg-white text-black hover:bg-gray-200 transition">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 border border-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterSection title="Quick Links">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Services */}
          <div>
            <FooterSection title="Our Services">
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* Industries */}
          <div>
            <FooterSection title="Our Industries">
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a
                      href={industry.href}
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white"
                    >
                      <ChevronRight className="w-4 h-4" />
                      <span>{industry.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;