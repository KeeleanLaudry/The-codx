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

      // How far we've scrolled into the section
      const scrolled = -rect.top;
      const scrollable = sectionHeight - windowHeight;
      const raw = scrolled / scrollable;
      const clamped = Math.max(0, Math.min(1, raw));

      setProgress(clamped);

      // Each card occupies equal portion
      const cardProgress = clamped * (testimonials.length - 1);
      const idx = Math.min(Math.round(cardProgress), testimonials.length - 1);
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Per-card local progress (0→1 as this card transitions out)
  const cardProgress = progress * (testimonials.length - 1);

  // Color palette
  const colors = {
    cream: "#F7F3EE",
    parchment: "#EDE7DF",
    navy: "#0D1F3C",
    teal: "#2ABFBF",
    circleBg: "#EADECF",
  };

  return (
    <>
      <style>{`

        
        .blob-shape {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        .card-blob {
          clip-path: polygon(
            50% 0%, 63% 5%, 74% 3%, 83% 10%, 90% 20%,
            97% 30%, 100% 42%, 97% 55%, 92% 65%, 85% 74%,
            75% 82%, 64% 88%, 50% 92%, 36% 88%, 25% 82%,
            15% 74%, 8% 65%, 3% 55%, 0% 42%, 3% 30%,
            10% 20%, 17% 10%, 26% 3%, 37% 5%
          );
        }
        .progress-dot {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glow-effect {
          background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(42, 191, 191, 0.08) 0%, transparent 70%);
        }
        
        @media (max-width: 768px) {
          .testi-card {
            width: 85vw !important;
            max-width: 340px !important;
          }
          .testi-card-blob {
            width: 90vw !important;
            max-width: 360px !important;
            height: 90vw !important;
            max-height: 360px !important;
          }
        }
      `}</style>

      {/* Tall section to drive scroll - responsive height */}
      <div
        ref={sectionRef}
        className="testi-section relative"
        style={{ height: `${testimonials.length * 80 + 80}vh` }}
      >
        {/* Sticky viewport */}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen flex items-center overflow-hidden"
          style={{ background: colors.cream }}
        >
          {/* Background ambient glow with teal accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(42, 191, 191, 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
              <div>
                <div
                  className="section-heading"
                >
                  Our Clients  And Testimonials
                  
                  
                </div>
              </div>

              <p className="section-desc font-semibold">
                Listen to what one of our clients have to say about making us
                their digital marketing partner. At CODX, we embrace better,
                and we're at our proudest when we help other companies and
                organizations embrace better, too.
              </p>
            </div>

            <div 
              className="relative flex items-center justify-center" 
              style={{ height: "auto", minHeight: 420 }}
            >
              {testimonials.map((t, i) => {
                // How far this card has been "consumed" by scroll
                const localP = Math.max(0, Math.min(1, cardProgress - i));
                // Cards behind active: fanned out slightly
                const isBehind = i > activeIndex;
                const isActive = i === activeIndex;
                const isPast = i < activeIndex;

                // Responsive stacking offset
                const getResponsiveOffset = () => {
                  if (typeof window !== 'undefined' && window.innerWidth < 768) {
                    return 12; // Smaller offset on mobile
                  }
                  return 18;
                };
                
                const behindOffset = isBehind ? (i - activeIndex) * getResponsiveOffset() : 0;
                const behindScale = isBehind ? Math.max(0.85, 1 - (i - activeIndex) * 0.05) : 1;
                const behindRotate = isBehind ? Math.min(8, (i - activeIndex) * 3) : 0;

                // Responsive slide distance
                const getSlideDistance = () => {
                  if (typeof window !== 'undefined' && window.innerWidth < 768) {
                    return -60; // Smaller slide on mobile
                  }
                  return -120;
                };
                
                const pastX = isPast ? getSlideDistance() : 0;
                const pastOpacity = isPast ? 0 : 1;

                // Active card: start sliding left as localP increases past 0
                const activeSlide = isActive ? localP * getSlideDistance() : 0;
                const activeOpacity = isActive ? 1 - localP * 1.5 : 1;
                const activeRotate = isActive ? localP * -5 : 0;

                const translateX = isPast
                  ? pastX
                  : isActive
                  ? activeSlide
                  : behindOffset;

                const translateY = isBehind ? behindOffset * -0.5 : 0;
                const scale = isBehind ? behindScale : 1;
                const rotate = isActive
                  ? activeRotate
                  : isBehind
                  ? behindRotate
                  : 0;
                const opacity = isPast ? pastOpacity : isActive ? Math.max(0, activeOpacity) : 1;
                const zIndex = testimonials.length - i;

                // Responsive card width
                const getCardWidth = () => {
                  if (typeof window !== 'undefined' && window.innerWidth < 640) {
                    return 300;
                  }
                  if (typeof window !== 'undefined' && window.innerWidth < 768) {
                    return 340;
                  }
                  return 420;
                };

                const cardWidth = getCardWidth();

                return (
                  <div
                    key={i}
                    className="absolute testi-card"
                    style={{
                      width: cardWidth,
                      maxWidth: "calc(100vw - 32px)",
                      zIndex,
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                      opacity,
                      transition: "transform 0.05s linear, opacity 0.05s linear",
                      willChange: "transform, opacity",
                    }}
                  >
                    {/* Circle blob behind card */}
                    <div
                      className="absolute testi-card-blob"
                      style={{
                        width: cardWidth + 20,
                        height: cardWidth + 20,
                        maxWidth: "calc(100vw - 12px)",
                        maxHeight: "calc(100vw - 12px)",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: colors.circleBg,
                        borderRadius: "40% 60% 45% 55% / 50% 40% 60% 50%",
                        zIndex: -1,
                        opacity: isActive ? 0.8 : Math.max(0.3, 0.5 - (i - activeIndex) * 0.1),
                        transition: "opacity 0.2s ease",
                      }}
                    />

                    {/* Card */}
                    <div
                      className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl"
                      style={{
                        minHeight: "auto",
                        background: "white",
                        border: "1px solid rgba(13, 31, 60, 0.08)",
                        boxShadow: "0 20px 35px -12px rgba(13, 31, 60, 0.12)",
                      }}
                    >
                      {/* Quote mark with teal accent */}
                      <div
                        className="mb-2 sm:mb-3 lg:mb-4"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "48px",
                          lineHeight: 1,
                          marginTop: -12,
                          color: colors.teal,
                          opacity: 0.3,
                        }}
                      >
                        "
                      </div>

                      <p
                        className="section-subtitle mb-10"
                        style={{ color: colors.navy + "dd", fontWeight: 400, lineHeight: 1.6 }}
                      >
                        {t.text.length > 120 && window.innerWidth < 768 
                          ? t.text.substring(0, 120) + "..." 
                          : t.text}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div
                          className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
                          style={{
                            background: `linear-gradient(135deg, ${colors.teal}, ${colors.teal}dd)`,
                          }}
                        >
                          {t.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="section-desc font-semibold truncate" style={{ color: colors.navy }}>
                            {t.name}
                          </p>
                          <p className="text-xs truncate" style={{ color: colors.navy + "99" }}>
                            {t.role}
                          </p>
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