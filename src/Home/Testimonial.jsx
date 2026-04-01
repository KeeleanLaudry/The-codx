import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Kostas Karatzas",
    role: "CEO, KK Ventures",
    text: "We have been collaborating with Codx Software the last months and they offering high quality services. They offer tailor-made services based on our needs and they are doing their best to improve our Business. They are the Digital Partner every Business needs.",
    initials: "KK",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Studio",
    text: "CODX transformed our entire digital presence from the ground up. Their team understood our vision instantly and delivered beyond what we imagined. The attention to detail and commitment to quality is unmatched in the region.",
    initials: "SM",
  },
  {
    name: "Ahmed Al Rashid",
    role: "Director, Horizon Group",
    text: "Working with CODX has been a game-changer for our business. Their expertise in digital marketing and web development helped us triple our online leads within just three months of launching.",
    initials: "AR",
  },
  {
    name: "Priya Nair",
    role: "CMO, NovaTech",
    text: "The team at CODX is exceptional — responsive, creative, and deeply professional. They built our e-commerce platform from scratch and the results speak for themselves. Revenue up 180% in the first quarter.",
    initials: "PN",
  },
  {
    name: "James Whitfield",
    role: "Managing Partner, Whitfield & Co",
    text: "I've worked with many agencies globally but CODX stands out for their genuine commitment to client success. They don't just deliver projects — they become true partners in your growth journey.",
    initials: "JW",
  },
];

// Each card now gets 100vh (one full screen scroll) instead of 150vh
const VH_PER_CARD = 100;

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrolled = -rect.top;
      const scrollable = sectionHeight - windowHeight;
      const raw = scrolled / scrollable;
      const clamped = Math.max(0, Math.min(1, raw));

      setProgress(clamped);

      const cardProgress = clamped * (testimonials.length - 1);
      const idx = Math.min(Math.floor(cardProgress), testimonials.length - 1);
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardProgress = progress * (testimonials.length - 1);

  return (
    <>
      
      {/* 
        Total height = (cards - 1) * VH_PER_CARD + 100vh
        The extra 100vh is for the sticky viewport itself.
        With VH_PER_CARD = 100, each card advances on one full viewport of scroll.
      */}
      <div
        ref={sectionRef}
        className="testi-section relative"
        style={{ height: `${(testimonials.length - 1) * VH_PER_CARD + 100}vh` }}
      >
        {/* Sticky viewport */}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen flex items-center overflow-hidden"
          style={{ background: "#F7F3EE" }}
        >
          {/* Background ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(42,191,191,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="w-full max-w-7xl mx-auto px-10 flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT — Static text */}
            <div className="space-y-8">
              <div>
             
                <h2 className="section-heading"
                    style={{ color: "#0D1F3C" }}>
                  our clients and testimonials
                  <br />
                 
                </h2>
              </div>

              <p
                className="section-desc"
              >
                Listen to what one of our clients have to say about making us
                their digital marketing partner. At CODX, we embrace better, and
                we're at our proudest when we help other companies and
                organizations embrace better, too.
              </p>

         
              
            </div>

            {/* RIGHT — Stacked cards */}
            <div
              className="relative flex items-center justify-center"
              style={{ height: 520 }}
            >
              {testimonials.map((t, i) => {
                const localP = Math.max(0, Math.min(1, cardProgress - i));
                const isBehind = i > activeIndex;
                const isActive = i === activeIndex;
                const isPast = i < activeIndex;

                const behindOffset = isBehind ? (i - activeIndex) * 12 : 0;
                const behindScale = isBehind ? 1 - (i - activeIndex) * 0.06 : 1;
                const behindRotate = isBehind ? (i - activeIndex) * 4 : 0;

                const localPclamped = Math.max(
                  0,
                  Math.min(1, cardProgress - i + 1),
                );
                const behindAdvanceX = isBehind
                  ? -(i - activeIndex) * 12 * localPclamped
                  : 0;
                const behindAdvanceScale = isBehind
                  ? (i - activeIndex) * 0.06 * localPclamped
                  : 0;

                const pastX = isPast ? -700 : 0;
                const pastOpacity = isPast ? 0 : 1;

                const activeSlide = isActive ? localP * -600 : 0;
                const activeOpacity = isActive ? 1 - localP * 2.5 : 1;
                const activeRotate = isActive ? localP * -15 : 0;

                const translateX = isPast
                  ? pastX
                  : isActive
                    ? activeSlide
                    : behindOffset + behindAdvanceX;

                const translateY = isBehind
                  ? (behindOffset + behindAdvanceX) * -0.5
                  : 0;
                const scale = isBehind ? behindScale + behindAdvanceScale : 1;
                const rotate = isActive
                  ? activeRotate
                  : isBehind
                    ? behindRotate
                    : 0;
                const opacity = isPast
                  ? pastOpacity
                  : isActive
                    ? Math.max(0, activeOpacity)
                    : 1;
                const zIndex = testimonials.length - i;

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                     width: window.innerWidth < 768 ? 350 : 420,
                      zIndex,
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                      opacity,
                      transition: "none",
                      willChange: "transform, opacity",
                    }}
                  >
                    {/* Teal blob behind card */}
                    <div
                      className="absolute"
                      style={{
                        width: 440,
                        height: 440,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "#EADECF",
                        borderRadius: "30% 70% 55% 45% / 45% 35% 65% 55%",
                        zIndex: -1,
                        opacity: isActive ? 1 : 0.6 - (i - activeIndex) * 0.15,
                      }}
                    />

                    {/* Card */}
                    <div
                      className="relative rounded-3xl p-8 shadow-2xl"
                      style={{ 
                        minHeight: 340,
                        background: "white",
                      }}
                    >
                      {/* Quote mark */}
                      <div
                        className="mb-4"
                        style={{
                          fontSize: 72,
                          lineHeight: 1,
                          marginTop: -16,
                          color: "#2ABFBF",
                          opacity: 0.5,
                        }}
                      >
                        "
                      </div>

                      <p
                        className="text-gray-700 leading-relaxed mb-8 text-base"
                        style={{ fontWeight: 300 }}
                      >
                        {t.text}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                          style={{
                            background: "linear-gradient(135deg, #2ABFBF, #1f9e9e)",
                          }}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-base"
                             style={{ color: "#0D1F3C" }}>
                            {t.name}
                          </p>
                          <p className="text-gray-500 text-sm">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}