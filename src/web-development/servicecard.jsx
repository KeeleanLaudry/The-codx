import React, { useEffect, useRef } from "react";

export default function Services({ services, title = "Our Services" }) {

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
    <div className="max-w-5xl mx-auto relative px-4 ">

      <h2 className="section-heading pb-5">
        {title}
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

            <p className="text-gray-200 text-base leading-relaxed">
              {service.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}