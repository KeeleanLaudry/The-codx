import React from "react";
import Sir from "../assets/Sir.png"; // your left image

const ContactSection = () => {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center px-6 ">
      
      <div className="max-w-6xl w-full flex items-center justify-center ">

        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src={Sir}
            alt="contact character"
            className="w-[320px]"
          />
        </div>

        <div className="bg-[#f3f3f3] rounded-2xl shadow-xl p-10 w-full max-w-2xl">

          <h2 className="text-3xl font-bold text-black mb-8">
            Let's Connect
          </h2>

          <form className="space-y-5">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div>
                <label className="text-sm font-semibold">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                />
              </div>

            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="text-sm font-semibold">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full mt-2 border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Contact No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contact No"
                  className="w-full mt-2 border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

            </div>

            {/* Dropdown */}
            <div>
              <label className="text-sm font-semibold">Connect Us</label>
              <select className="w-full mt-2 border border-gray-300 rounded-md px-4 py-2">
                <option>Select</option>
                <option>Website</option>
                <option>Marketing</option>
                <option>Just Want To Have Coffee</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-semibold">
                Tell Us About Your Project
              </label>
              <textarea
                rows="4"
                className="w-full mt-2 border border-gray-300 rounded-md px-4 py-2"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2 rounded-md font-semibold"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;