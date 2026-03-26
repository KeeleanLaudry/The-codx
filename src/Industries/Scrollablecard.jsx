import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ScrollCards = ({ items = [] }) => {
  const scrollRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 200; // approx width

  const scrollToIndex = (index) => {
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(activeIndex + 1, items.length - 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // detect center card
  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className=" py-16 px-6 relative">

      {/* PREV BUTTON */}
      {activeIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* NEXT BUTTON */}
      {activeIndex < items.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <div className="flex gap-6 w-max px-[25%]">

          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`relative min-w-[180px] h-[300px] rounded-2xl overflow-hidden transition-all duration-500
                ${isActive ? "scale-110 z-10" : "scale-90 opacity-60 blur-[2px]"}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* TEXT */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-semibold">
                    {item.title}
                  </h3>

                  {isActive && (
                    <p className="text-sm mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
};

export default ScrollCards;