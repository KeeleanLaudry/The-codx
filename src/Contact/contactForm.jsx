import React, { useState } from "react";
import Sir from "../assets/Sir.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    contactNo: "",
    connectUs: "",
    project: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden" >
      <div className="max-w-5xl w-full relative ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="hidden md:block relative group">
         
            <img
              src={Sir}
              alt="contact character"
              className="w-[380px] relative z-10 transform transition-transform duration-500 group-hover:scale-105"
            />      
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl relative overflow-hidden">
            <div className="mb-4">
              <h2 className="section-heading">
                Let's Connect
              </h2>
            
             
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="section-subtitle">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: "#F7F3EE",
                      borderColor: "#EADECF",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#2ABFBF"}
                    onBlur={(e) => e.target.style.borderColor = "#EADECF"}
                  />
                </div>

                <div>
                  <label className="section-subtitle">
                    Email 
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: "#F7F3EE",
                      borderColor: "#EADECF"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#2ABFBF"}
                    onBlur={(e) => e.target.style.borderColor = "#EADECF"}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="section-subtitle" >
                    Company 
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: "#F7F3EE",
                      borderColor: "#EADECF"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#2ABFBF"}
                    onBlur={(e) => e.target.style.borderColor = "#EADECF"}
                  />
                </div>

                <div>
                  <label className="section-subtitle">
                    Contact No 
                  </label>
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder=" Contact No "
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{ 
                      backgroundColor: "#F7F3EE",
                      borderColor: "#EADECF"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#2ABFBF"}
                    onBlur={(e) => e.target.style.borderColor = "#EADECF"}
                  />
                </div>
              </div>

              {/* Dropdown */}
              <div>
                <label className="section-subtitle" >
                  How did you find us?
                </label>
                <select
                  name="connectUs"
                  value={formData.connectUs}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 cursor-pointer"
                  style={{ 
                    backgroundColor: "#F7F3EE",
                    borderColor: "#EADECF"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#2ABFBF"}
                  onBlur={(e) => e.target.style.borderColor = "#EADECF"}
                >
                  <option value="website">Website</option>
                  <option value="social-media">Marketing</option>
                  <option value="coffee">Just Want To Have Coffee</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="section-subtitle " >
                  Tell Us About Your Project
                </label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell Us About Your Project"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                  style={{ 
                    backgroundColor: "#F7F3EE",
                    borderColor: "#EADECF"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#2ABFBF"}
                  onBlur={(e) => e.target.style.borderColor = "#EADECF"}
                />
              </div>

              {/* Button with enhanced styling */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="primary-btn"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className=" inset-0 bg-gradient-to-r from-[#2ABFBF] to-[#2ABFBF80] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </form>

           
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(20px, -20px) rotate(5deg);
          }
          66% {
            transform: translate(-15px, 15px) rotate(-5deg);
          }
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        input:focus, textarea:focus, select:focus {
          ring-color: #2ABFBF;
          border-color: #2ABFBF;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;