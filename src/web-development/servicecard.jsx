import React, { useEffect, useRef } from "react";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with tailored digital marketing strategies. From social media to targeted ads, we ensure your brand reaches the right audience."
  },
  {
    title: "Website Audit",
    description:
      "Uncover hidden issues with a comprehensive website audit. We identify performance, usability, and SEO gaps to optimize your site's efficiency."
  },
  {
    title: "Cyber Security",
    description:
      "Protect your digital assets with robust cybersecurity solutions. We safeguard your business against threats and ensure data integrity."
  },
  {
    title: "Hosting and Administration",
    description:
      "Reliable hosting and seamless administration services for uninterrupted website performance with secure hosting and 24/7 support."
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly with regular updates, bug fixes, and performance monitoring."
  },
  {
    title: "Annual Maintenance Services",
    description:
      "Comprehensive annual maintenance packages including updates, security checks, and backups."
  },
  {
    title: "Website Design & Development",
    description:
      "Transform your ideas into reality with stunning and user-friendly website designs tailored to your business goals."
  },
  {
    title: "Performance Optimization",
    description:
      "Maximize your website's speed and efficiency with advanced performance optimization services."
  },
  {
    title: "API Integration",
    description:
      "Streamline operations with seamless API integrations to enhance functionality and automate workflows."
  },
  {
    title: "Payment Gateway Integrations",
    description:
      "Secure and hassle-free payment gateway integration enabling smooth and reliable transactions."
  },
  {
    title: "Website Migrations",
    description:
      "Switch platforms effortlessly with expert website migration ensuring zero downtime and data integrity."
  },
  {
    title: "SEO",
    description:
      "Climb search engine rankings with expert SEO strategies that drive organic traffic and business growth."
  }
];

export default function Services() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto relative">

      <h2 className="section-heading">
        Our Services
      </h2>

 <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto scroll-smooth px-10 pb-6 hide-scrollbar"
>

        {services.map((service, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >

            <h3 className="text-xl font-semibold mb-4 text-white">
              {service.title}
            </h3>

            <p className="text-gray-200 text-sm leading-relaxed">
              {service.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}