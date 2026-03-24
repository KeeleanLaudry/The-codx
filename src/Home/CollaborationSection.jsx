import React from "react";

export default function CollaborationSection() {
  const data = [
    {
      title: "Startups",
      desc: "Join our esteemed clients benefiting from tailored tech solutions that drive growth. From innovative UI/UX design to agile software development, we ensure your business thrives at every stage.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200",
    },
    {
      title: "Mid-Size Companies",
      desc: "Experience specialized solutions for web and mobile development, product upgrades, and scalable systems designed to meet your unique business needs.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    },
    {
      title: "Enterprises",
      desc: "We provide comprehensive, end-to-end digital solutions to align with your strategic goals. From advanced web platforms to scalable applications.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    },
  ];

  return (
    <section className="bg-black  px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#FAD5A5] via-[#FBCEB1] via-[#e1a57d] to-[#FF7F50] bg-clip-text text-transparent  leading-tight pb-2 mb-16">
          Strong Collaboration With
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item, i) => (
            <div
              key={i}
              className="relative group rounded-3xl overflow-hidden"
            >
              {/* IMAGE */}
            <img
  src={item.img}
  alt={item.title}
  className="w-full h-[380px] object-cover opacity-70 transition duration-500 group-hover:scale-105"
/>

              {/* DARK OVERLAY */}
<div className="absolute inset-0 bg-[#FF7F50] opacity-20"></div>
              {/* CONTENT */}
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-3xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-base text-gray-100 font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}