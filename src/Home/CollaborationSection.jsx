import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

const data = [
  {
    title: "Startups",
    desc: "Join our esteemed clients benefiting from tailored tech solutions that drive growth.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800",
    tag: "01",
  },
  {
    title: "Mid-Size Companies",
    desc: "Experience specialized solutions for web and mobile development and scalable systems.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
    tag: "02",
  },
  {
    title: "Enterprises",
    desc: "We provide comprehensive digital solutions aligned with your strategic goals.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    tag: "03",
  },
];

// The floating image that hangs off the right edge
function FloatingImage({ img, cardRef }) {
  const rotateSpring = useSpring(-12, { stiffness: 110, damping: 16 });
  const ySpring = useSpring(0, { stiffness: 110, damping: 18 });
  const lastX = useRef(null);

  React.useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      // Tilt based on horizontal mouse direction
      if (lastX.current !== null) {
        const dx = relX - lastX.current;
        const currentRotate = rotateSpring.get();
        const newRotate = currentRotate + dx * 0.8;
        rotateSpring.set(Math.max(-22, Math.min(4, newRotate)));
      }

      // Vertical float follows mouse Y within card
      const normY = relY / rect.height; // 0..1
      ySpring.set((normY - 0.5) * 55); // -27..+27 px

      lastX.current = relX;
    };

    const onLeave = () => {
      rotateSpring.set(-12); // reset to default tilt
      ySpring.set(0);
      lastX.current = null;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        rotate: rotateSpring,
        y: ySpring,
        transformOrigin: "50% 50%",
      }}
    >
      <img
        src={img}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(140deg, rgba(42,191,191,0.12), transparent 55%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}

function Card({ item, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    // Outer wrapper: overflow visible so image can hang off
    <div style={{ position: "relative", zIndex: hovered ? 10 : index }}>
      <motion.div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{
          position: "relative",
          overflow: "visible",
          borderRadius: 18,
          cursor: "default",
        }}
      >
        {/* Card face — clipped separately */}
        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            background: "#0D1F3C",
            border: "1px solid rgba(42,191,191,0.14)",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "30px 44px",
              gap: 36,
              minHeight: 108,
            }}
          >
            {/* Number */}
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "#2ABFBF",
                opacity: 0.65,
                minWidth: 22,
                flexShrink: 0,
              }}
            >
              {item.tag}
            </span>

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
                fontWeight: 600,
                color: "#fff",
                margin: 0,
                minWidth: 200,

                flexShrink: 0,
                whiteSpace: "normal",
              }}
            >
              {item.title}
            </h3>

            {/* Divider */}
            <div
              style={{
                width: 1,
                alignSelf: "stretch",
                flexShrink: 0,
                background:
                  "linear-gradient(to bottom, transparent, rgba(42,191,191,0.28), transparent)",
              }}
            />
            <p
              style={{
              
                fontSize: 16,
                color: "rgba(237,231,223,0.72)",
                lineHeight: 1.7,
width: 360,
flexShrink: 0,
                margin: 0,
                flex: 1,
              }}
            >
              {item.desc}
            </p>

            {/* Arrow */}
            <motion.div
              animate={{
                borderColor: hovered ? "#2ABFBF" : "rgba(42,191,191,0.2)",
                backgroundColor: hovered
                  ? "rgba(42,191,191,0.1)"
                  : "transparent",
              }}
              transition={{ duration: 0.3 }}
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid rgba(42,191,191,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="#2ABFBF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* Bottom sweep line */}
          <motion.div
            animate={{ width: hovered ? "100%" : "0%" }}
            transition={{ duration: 0.45 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: 2,
              background:
                "linear-gradient(to right, transparent, #2ABFBF, transparent)",
            }}
          />
        </div>

        {/* ─── FLOATING IMAGE ─────────────────────────────────────
            Hangs off the right edge, like in the Colency screenshot.
            Enters with a swing from bottom-right (transformOrigin: left center).
        ──────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="img"
              initial={{
                opacity: 0,
                scale: 0.72,
                rotate: -28,
                x: 40,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -12,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.72,
                rotate: -28,
                x: 40,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              style={{
                position: "absolute",
                right: -115, // hangs off right edge
                top: "50%",
                marginTop: -115, // vertically centered
                width: 230,
                height: 230,
                borderRadius: 14,
                overflow: "hidden",
                boxShadow:
                  "0 24px 70px rgba(0,0,0,0.55), 0 0 0 1.5px rgba(42,191,191,0.22)",
                pointerEvents: "none",
                zIndex: 30,
                transformOrigin: "left center", // swings from the card edge
              }}
            >
              <FloatingImage img={item.img} cardRef={cardRef} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function CollaborationSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@400;500&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <section style={{ background: "#F7F3EE", padding: "20px 0px" }}>
        <div style={{ maxWidth: 1500, margin: "0 auto" }}>
<motion.h2
  initial={{ opacity: 0, y: 36 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.75 }}
  className="section-heading mb-10"
>
  Strong Collaboration With
</motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingRight: 150 }}>
            {data.map((item, i) => (
              <Card key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

