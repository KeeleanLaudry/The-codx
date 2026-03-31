import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, ChevronRight, Send } from "lucide-react";
import logo from "../assets/codx logo.png";
import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [scrolled] = useState(false);
  const [email, setEmail] = useState("");

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
    { icon: Facebook, href: "#", name: "Facebook", color: "hover:bg-[#1877f2]" },
    { icon: Twitter, href: "#", name: "Twitter", color: "hover:bg-[#1da1f2]" },
    { icon: Linkedin, href: "#", name: "LinkedIn", color: "hover:bg-[#0a66c2]" },
    { icon: Instagram, href: "#", name: "Instagram", color: "hover:bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Email submitted:", email);
    setEmail("");
  };

  const FooterSection = ({ title, children }) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#0D1F3C] relative inline-block pb-2">
        {title}
        <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#2ABFBF] rounded-full"></span>
      </h3>
      <div className="pt-3">{children}</div>
    </div>
  );

  return (
    <footer className="relative bg-[#EDE7DF] overflow-hidden">
    
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo"
                className={`transition-all duration-500 ${
                  scrolled ? "h-9" : "h-12"
                }`}
              />
            </div>

            <p className="text-[#0D1F3C]/70 text-base leading-relaxed">
              We transform ideas into digital realities. With expertise across industries, we deliver innovative solutions that drive growth and success.
            </p>

            <div className="space-y-4 text-[#0D1F3C]/80">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#2ABFBF]/10 flex items-center justify-center group-hover:bg-[#2ABFBF] transition-colors">
                  <MapPin className="w-4 h-4 text-[#2ABFBF] group-hover:text-white transition-colors" />
                </div>
                <p className="text-base">{companyInfo.address}</p>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#2ABFBF]/10 flex items-center justify-center group-hover:bg-[#2ABFBF] transition-colors">
                  <Phone className="w-4 h-4 text-[#2ABFBF] group-hover:text-white transition-colors" />
                </div>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-base hover:text-[#2ABFBF] transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-[#2ABFBF]/10 flex items-center justify-center group-hover:bg-[#2ABFBF] transition-colors">
                  <Mail className="w-4 h-4 text-[#2ABFBF] group-hover:text-white transition-colors" />
                </div>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-base hover:text-[#2ABFBF] transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-3 text-[#0D1F3C] text-base">Stay Updated</h4>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-xl bg-white border border-[#EADECF] text-[#0D1F3C] text-base focus:outline-none focus:ring-2 focus:ring-[#2ABFBF] focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#2ABFBF] to-[#f4a261] text-white hover:shadow-lg hover:shadow-[#2ABFBF]/30 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white border border-[#EADECF] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-[#0D1F3C] group-hover:text-[#2ABFBF] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <FooterSection title="Quick Links">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center space-x-2 text-[#0D1F3C]/70 hover:text-[#2ABFBF] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span className="text-base">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          <div>
            <FooterSection title="Our Services">
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="group flex items-center space-x-2 text-[#0D1F3C]/70 hover:text-[#2ABFBF] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span className="text-base">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          <div>
            <FooterSection title="Our Industries">
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index}>
                    <a
                      href={industry.href}
                      className="group flex items-center space-x-2 text-[#0D1F3C]/70 hover:text-[#2ABFBF] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span className="text-base">{industry.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#EADECF] bg-[#EDE7DF]/50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-base text-[#0D1F3C]/60">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-base">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-[#0D1F3C]/60 hover:text-[#2ABFBF] transition-colors"
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