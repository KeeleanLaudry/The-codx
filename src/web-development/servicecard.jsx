import React, { useEffect, useRef } from "react";

export default function Services({ services, title = "Our Services" }) {

  const scrollRef = useRef(null);

 useEffect(() => {
  const container = scrollRef.current;
  let animationFrame;
  let isTouching = false;

  const scroll = () => {
    if (!isTouching && container) {
      container.scrollLeft += 0.5;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }
    }
    animationFrame = requestAnimationFrame(scroll);
  };

  const handleTouchStart = () => (isTouching = true);
  const handleTouchEnd = () => (isTouching = false);

  container.addEventListener("touchstart", handleTouchStart);
  container.addEventListener("touchend", handleTouchEnd);

  animationFrame = requestAnimationFrame(scroll);

  return () => {
    cancelAnimationFrame(animationFrame);
    container.removeEventListener("touchstart", handleTouchStart);
    container.removeEventListener("touchend", handleTouchEnd);
  };
}, []);
  return (
    <div className="max-w-5xl mx-auto relative px-4 ">

      <h2 className="section-heading pb-5">
        {title}
      </h2>

      <div
        ref={scrollRef}
       className="flex gap-6 overflow-x-auto scroll-smooth px-4 pb-6 hide-scrollbar touch-pan-x"
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