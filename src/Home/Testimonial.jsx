import React, { useRef, useEffect, useState } from "react";

// Testimonial data - 5 testimonials
const testimonials = [
  {
    id: 1,
    name: "Kostas Karatzas",
    role: "CEO, TechStart",
    content:
      "We have been collaborating with Codx Software the last months and they offering high quality services. They offer tailor-made services based on our needs and they are doing their best to improve our Business. They are the Digital Partner every Business needs.",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    role: "Marketing Director, InnovateLabs",
    content:
      "The team at CODX transformed our digital presence completely. Their strategic approach and creative execution resulted in a 150% increase in engagement. Truly a game-changer for our brand.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Founder, Nexus Solutions",
    content:
      "Working with CODX feels like having an in-house team that actually cares. Their attention to detail and commitment to excellence is unmatched. I highly recommend them to any business looking to scale.",
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: "CTO, CloudScale",
    content:
      "From strategy to implementation, CODX delivered beyond expectations. Their technical expertise combined with creative marketing strategies gave us a competitive edge we desperately needed.",
  },
  {
    id: 5,
    name: "Michael Anderson",
    role: "Product Manager, InnovateHub",
    content:
      "CODX has been instrumental in our digital transformation journey. Their innovative solutions and dedicated support team made all the difference. We've seen remarkable growth since partnering with them.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLastCard, setIsLastCard] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const scrollTimeout = useRef(null);
  const initialScrollY = useRef(0);

  // Card colors based on index (even/odd)
  const getCardColors = (index) => {
    const isEven = index % 2 === 0;
    return {
      cardBg: isEven ? "#EDE7DF" : "#FFFFFF",
      backShape1: isEven ? "#2ABFBF" : "#FF6B6B",
      backShape2: isEven ? "#2ABFBF" : "#FF6B6B",
      accentColor: isEven ? "#2ABFBF" : "#FF6B6B",
      textColor: "#0D1F3C",
    };
  };

  const currentColors = getCardColors(currentIndex);
  const nextColors = getCardColors((currentIndex + 1) % testimonials.length);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current || isAnimating) return;

      // Check if section is in view
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const isInView = sectionRect.top <= 100 && sectionRect.bottom >= 100;
      
      if (!isInView) return;

      // Clear previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (e.deltaY > 0) {
          // Scrolling down
          if (currentIndex < testimonials.length - 1) {
            // Not at last card, show next card
            e.preventDefault();
            setIsAnimating(true);
            setCurrentIndex((prev) => prev + 1);
            setTimeout(() => setIsAnimating(false), 500);
          } else {
            // At last card, allow normal scroll
            setIsLastCard(true);
            // Reset after scrolling past
            setTimeout(() => {
              setIsLastCard(false);
            }, 100);
          }
        } else if (e.deltaY < 0) {
          // Scrolling up
          if (currentIndex > 0) {
            // Not at first card, show previous card
            e.preventDefault();
            setIsAnimating(true);
            setCurrentIndex((prev) => prev - 1);
            setTimeout(() => setIsAnimating(false), 500);
          }
        }
      }, 80);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [currentIndex, isAnimating]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className=" px-6 md:px-16 min-h-screen flex items-center"
      style={{ backgroundColor: "#F7F3EE" }}
    >
      <div ref={containerRef} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "#0D1F3C" }}>
            Our Clients <span style={{ color: currentColors.accentColor }}>And Testimonials</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed max-w-lg" style={{ color: "#0D1F3C" }}>
            Listen to what our clients have to say about making us their
            digital marketing partner. At CODX, we embrace better, and we're at
            our proudest when we help other companies and organizations embrace
            better, too.
          </p>
        </div>

        {/* RIGHT STACKED CARDS */}
        <div className="relative flex justify-center items-center min-h-[500px]">
          
          <div 
            className="absolute w-[320px] h-[320px] rounded-[40px] rotate-12 transition-all duration-500"
            style={{ 
              backgroundColor: currentColors.backShape1,
              opacity: 0.8,
              transform: isAnimating ? "rotate(12deg) scale(0.9)" : "rotate(12deg) scale(1)",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          ></div>
          <div 
            className="absolute w-[320px] h-[320px] rounded-[40px] -rotate-12 transition-all duration-500"
            style={{ 
              backgroundColor: currentColors.backShape2,
              opacity: 0.8,
              transform: isAnimating ? "rotate(-12deg) scale(0.9)" : "rotate(-12deg) scale(1)",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          ></div>

          <div 
            className="absolute w-[280px] h-[280px] rounded-[30px] rotate-6 transition-all duration-500"
            style={{ 
              backgroundColor: "#EDE7DF",
              transform: isAnimating ? "rotate(6deg) scale(0.9)" : "rotate(6deg) scale(1)",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          ></div>
          <div 
            className="absolute w-[280px] h-[280px] rounded-[30px] -rotate-6 transition-all duration-500"
            style={{ 
              backgroundColor: "#EDE7DF",
              transform: isAnimating ? "rotate(-6deg) scale(0.9)" : "rotate(-6deg) scale(1)",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          ></div>

          <div
            key={currentTestimonial.id}
            className="relative rounded-2xl p-8 w-[320px] shadow-xl z-10 transition-all duration-500"
            style={{
              backgroundColor: currentColors.cardBg,
              color: currentColors.textColor,
              transform: isAnimating ? "scale(0.95)" : "scale(1)",
              opacity: isAnimating ? 0 : 1,
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300"
                style={{ backgroundColor: currentColors.accentColor }}
              >
                {currentTestimonial.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold" style={{ color: currentColors.textColor }}>
                  {currentTestimonial.name}
                </h3>
             
              </div>
            </div>

            <p className="leading-relaxed text-base" style={{ color: currentColors.textColor }}>
              "{currentTestimonial.content}"
            </p>

            <div className="mt-4 text-right text-3xl opacity-40" style={{ color: currentColors.accentColor }}>
              ❝
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;