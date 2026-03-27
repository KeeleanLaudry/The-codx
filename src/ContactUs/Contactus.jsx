import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactSection from "../Contact/contactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Globe,
  Building2,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [location, setLocation] = useState("india");

  const mapUrls = {
    india:
      "https://www.google.com/maps?q=First+Floor,+Building+No+120+Sec+20A+Chandigarh+160020&output=embed",

    uae:
      "https://www.google.com/maps?q=Clover+Bay+Tower+Dubai&output=embed",
  };


  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: "Sending..." });

    // Simulate API call - replace with your actual form submission
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: true,
        message: "Thank you! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: "" });
      }, 5000);
    }, 1500);
  };

  const locations = [
    {
      country: "UAE",
      address: "8th Floor, Clover Bay Tower – Office No 803 – Marasi Dr – Business Bay – Dubai",
      phone: "+971 50 285 2701",
      email: "info@codxsoftwares.com",
      mapLink: "https://maps.google.com/?q=Clover+Bay+Tower+Business+Bay+Dubai",
      hours: "Sun-Thu: 9am - 6pm",
      icon: Building2,
    },
    {
      country: "India",
      address: "First Floor, Building No 120 Sec, 20A, Chandigarh, 160020",
      phone: "+91 978 080 9487",
      email: "info@codxsoftwares.com",
      mapLink: "https://maps.google.com/?q=Chandigarh+160020",
      hours: "Mon-Sat: 10am - 7pm",
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen  font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
     
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="section-heading">
              Contact Us
            </h1>
            <p className="section-subtitle">
              We'd love to hear from you! Give us a call, drop by the office, 
              chat us, or fill out the form to discuss your needs!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards / Locations */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => {
            const Icon = location.icon;
            return (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#2ABFBF]/10 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-[#0D1F3C] px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2ABFBF]/20 flex items-center justify-center">
                      <Icon size={20} className="text-[#2ABFBF]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{location.country}</h2>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex gap-3">
                    <MapPin size={20} className="text-[#2ABFBF] flex-shrink-0 mt-1" />
                    <p className="text-[#0D1F3C]/80 leading-relaxed">{location.address}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Phone size={20} className="text-[#2ABFBF] flex-shrink-0 mt-1" />
                    <a href={`tel:${location.phone}`} className="text-[#0D1F3C]/80 hover:text-[#2ABFBF] transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex gap-3">
                    <Mail size={20} className="text-[#2ABFBF] flex-shrink-0 mt-1" />
                    <a href={`mailto:${location.email}`} className="text-[#0D1F3C]/80 hover:text-[#2ABFBF] transition-colors">
                      {location.email}
                    </a>
                  </div>
                  
                  <div className="flex gap-3">
                    <Clock size={20} className="text-[#2ABFBF] flex-shrink-0 mt-1" />
                    <p className="text-[#0D1F3C]/80">{location.hours}</p>
                  </div>
                  
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-[#2ABFBF] font-medium hover:gap-3 transition-all duration-300"
                  >
                    Get Directions <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form & CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 ">
       <ContactSection/>
        </section>

         <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">

      {/* 🔘 Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setLocation("india")}
          className={`px-5 py-2 rounded-full border transition ${
            location === "india"
              ? "primary-btn"
              : "bg-white text-[#0D1F3C] border-gray-300"
          }`}
        >
          India
        </button>

        <button
          onClick={() => setLocation("uae")}
          className={`px-5 py-2 rounded-full border transition ${
            location === "uae"
              ? "primary-btn"
              : "bg-white text-[#0D1F3C] border-gray-300"
          }`}
        >
          UAE
        </button>
      </div>

      {/* 🗺️ Map */}
      <motion.div
        key={location} // 🔥 animation refresh
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl overflow-hidden shadow-xl"
      >
        <iframe
          title="Office Location"
          src={mapUrls[location]}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          className="w-full"
        ></iframe>
      </motion.div>
    </section>
  
    </div>
  );
}