import React, { useEffect, useRef, useState } from "react";

const blogs = [
  {
    title: "How Custom Software Solutions Simplify Business Operations",
    excerpt:
      "Off-the-shelf software can only take you so far. As your business grows, generic tools start showing their limits — discover how custom solutions unlock true efficiency.",
    category: "Software",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Why Your Website Is Your Strongest Marketing Tool",
    excerpt:
      "Did you know it takes only 0.05 seconds for users to form an opinion about your website? Your digital storefront is working 24/7 — make sure it converts.",
    category: "Marketing",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title:
      "The Future of Business Is Digital — Here's How CODX Helps You Stay Ahead",
    excerpt:
      "The digital world is evolving at lightning speed. Businesses that adapt will lead; those that don't will be left behind. Here's your roadmap to staying competitive.",
    category: "Digital",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
];

/* ─── EMBER PARTICLE ─────────────────────────────────────── */
function spawnEmber(x, y) {
  const em = document.createElement("div");
  const size = Math.random() * 5 + 2;
  const hue = 15 + Math.random() * 20;
  const vx = (Math.random() - 0.5) * 40;
  const vy = -(Math.random() * 40 + 20);

  Object.assign(em.style, {
    position: "fixed",
    width: size + "px",
    height: size + "px",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9997,
    left: x + "px",
    top: y + "px",
    transform: "translate(-50%,-50%)",
    background: `hsl(${hue},100%,60%)`,
    boxShadow: `0 0 ${size * 2}px hsl(${hue},100%,65%)`,
    opacity: 0.9,
  });
  document.body.appendChild(em);

  let op = 0.9;
  let px = x,
    py = y,
    gravity = 0;

  function tick() {
    gravity += 1.5;
    px += vx * 0.04;
    py += vy * 0.04 + gravity * 0.04;
    op -= 0.06;
    em.style.left = px + "px";
    em.style.top = py + "px";
    em.style.opacity = op;
    em.style.transform = `translate(-50%,-50%) scale(${op * 0.8})`;
    if (op > 0) requestAnimationFrame(tick);
    else em.remove();
  }
  requestAnimationFrame(tick);
}

/* ─── BLOG CARD ──────────────────────────────────────────── */
function BlogCard({ blog, index }) {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  /* Scroll reveal */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), index * 130);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  /* 3-D tilt */
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    card.style.transition =
      "transform 0.12s ease,border-color 0.3s ease,box-shadow 0.4s ease";
    card.style.transform = `rotateX(${-dy * 9}deg) rotateY(${dx * 9}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition =
      "transform 0.7s cubic-bezier(0.16,1,0.3,1),border-color 0.3s ease,box-shadow 0.4s ease";
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={wrapRef}
      style={{
        perspective: 1000,
        opacity: revealed ? 1 : 0,
        transform: revealed
          ? "translateY(0) rotateX(0deg)"
          : "translateY(60px) rotateX(8deg)",
        transition:
          "opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          borderRadius: 18,
          overflow: "hidden",
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.06)",
          transformStyle: "preserve-3d",
          willChange: "transform",
          cursor: "none",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "border-color 0.3s ease, box-shadow 0.4s ease",
        }}
        className="blog-card"
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: 220,
            flexShrink: 0,
          }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
            }}
            className="blog-card-img"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top,#111 0%,transparent 55%)",
            }}
          />
          {/* Badge floats on Z */}
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              background: "rgba(234,88,12,0.12)",
              border: "1px solid rgba(234,88,12,0.35)",
              borderRadius: 999,
              padding: "4px 13px",
              color: "#f97316",
              fontSize: 10.5,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              backdropFilter: "blur(10px)",
              transform: "translateZ(35px)",
              transition: "background 0.3s ease",
              zIndex: 2,
            }}
            className="blog-badge"
          >
            {blog.category}
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "24px 26px 28px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            transform: "translateZ(10px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 24,
                height: 2,
                borderRadius: 2,
                background: "linear-gradient(90deg,#ea580c,#f97316)",
              }}
            />
            <span style={{ color: "#444", fontSize: 12, fontWeight: 400 }}>
              {blog.readTime}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#fff",
              fontSize: 17,
              fontWeight: 600,
              lineHeight: 1.5,
              marginBottom: 12,
              flex: 1,
              transition: "color 0.3s ease",
            }}
            className="blog-title"
          >
            {blog.title}
          </h3>

          <p
            style={{
              color: "#555",
              fontSize: 13.5,
              lineHeight: 1.8,
              marginBottom: 22,
              fontWeight: 300,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.excerpt}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <span
              style={{
                color: "#666",
                fontSize: 12.5,
                fontWeight: 500,
                letterSpacing: "0.04em",
                transition: "color 0.3s ease",
              }}
              className="blog-cta-text"
            >
              Read More
            </span>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}
              className="blog-cta-circle"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{
                  transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}
                className="blog-arrow"
              >
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="#ea580c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN SECTION ───────────────────────────────────────── */
export default function BlogSection() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const emberTimer = useRef(0);
  const rafRef = useRef(null);

  /* Custom cursor + ember trail */
  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      mousePos.current = { x, y };
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      // ember throttle
      if (Date.now() - emberTimer.current > 35) {
        emberTimer.current = Date.now();
        spawnEmber(x, y);
      }
    };
    document.addEventListener("mousemove", onMove);

    // Lag ring
    function animRing() {
      const { x: mx, y: my } = mousePos.current;
      ringPos.current.x += (mx - ringPos.current.x) * 0.12;
      ringPos.current.y += (my - ringPos.current.y) * 0.12;
      ring.style.left = ringPos.current.x + "px";
      ring.style.top = ringPos.current.y + "px";
      rafRef.current = requestAnimationFrame(animRing);
    }
    animRing();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,500&family=Syne:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        body { cursor: none !important; }

        #codx-cursor {
          position: fixed; width: 10px; height: 10px;
          background: #ea580c; border-radius: 50%;
          pointer-events: none; z-index: 9999;
          transform: translate(-50%,-50%);
          transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
        }
        #codx-ring {
          position: fixed; width: 36px; height: 36px;
          border: 1.5px solid rgba(234,88,12,0.5); border-radius: 50%;
          pointer-events: none; z-index: 9998;
          transform: translate(-50%,-50%);
          transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
        }

        /* Card hover styles */
        .blog-card:hover { border-color: rgba(234,88,12,0.3) !important; box-shadow: 0 0 50px rgba(234,88,12,0.12), 0 20px 60px rgba(0,0,0,0.5) !important; }
        .blog-card:hover .blog-card-img { transform: scale(1.06) !important; }
        .blog-card:hover .blog-badge { background: rgba(234,88,12,0.22) !important; }
        .blog-card:hover .blog-title { color: #f5d7c0 !important; }
        .blog-card:hover .blog-cta-text { color: #f97316 !important; }
        .blog-card:hover .blog-cta-circle { border-color: #ea580c !important; background: rgba(234,88,12,0.12) !important; transform: translateX(4px) !important; }
        .blog-card:hover .blog-arrow { transform: translate(2px,-2px) !important; }

        /* Cursor expand on hover targets */
        .blog-card:hover ~ #codx-cursor,
        .codx-hoverable:hover ~ #codx-cursor { width: 14px !important; height: 14px !important; }

        /* Shimmer sweep */
        .blog-card::after {
          content: '';
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.025) 50%, transparent 60%);
          opacity: 0; transform: translateX(-100%);
          transition: opacity 0.3s ease;
        }
        .blog-card:hover::after {
          opacity: 1;
          animation: shimmerSweep 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(150%); }
        }

        /* Ambient blob */
        @keyframes drift1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,20px) scale(1.08)} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-25px) scale(0.95)} }

        /* Heading anims */
        @keyframes fadeUp {
          0%{opacity:0;transform:translateY(24px)}
          100%{opacity:1;transform:translateY(0)}
        }
        @keyframes barIn {
          to{opacity:1;transform:scaleX(1)}
        }
        @keyframes scanBar {
          0%{transform:translateX(-100%)}
          100%{transform:translateX(400%)}
        }

        .view-all-btn { cursor: none !important; }
        .view-all-btn:hover { color: #fff !important; border-color: transparent !important; box-shadow: 0 0 40px rgba(234,88,12,0.35) !important; background: linear-gradient(135deg,#ea580c,#f97316) !important; }
      `}</style>

      {/* Custom cursor */}
      <div
        id="codx-cursor"
        ref={cursorRef}
        style={{
          position: "fixed",
          width: 10,
          height: 10,
          background: "#ea580c",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%,-50%)",
        }}
      />
      <div
        id="codx-ring"
        ref={ringRef}
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          border: "1.5px solid rgba(234,88,12,0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%,-50%)",
        }}
      />

      <section
        style={{
          background: "#090909",
          padding: "110px 0 130px",
          fontFamily: "'Syne', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Noise texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.25,
          }}
        />

        {/* Ambient blobs */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-8%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(234,88,12,0.07) 0%,transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            animation: "drift1 12s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-5%",
            left: "-10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(249,115,22,0.05) 0%,transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            animation: "drift2 16s ease-in-out infinite",
          }}
        />

        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 48px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 22,
                opacity: 0,
                transform: "translateY(24px)",
                animation:
                  "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 1,
                  background: "linear-gradient(90deg,transparent,#ea580c)",
                }}
              />
              <span
                style={{
                  color: "#ea580c",
                  fontSize: 11,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Latest Insights
              </span>
              <div
                style={{
                  width: 44,
                  height: 1,
                  background: "linear-gradient(90deg,#ea580c,transparent)",
                }}
              />
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(38px,5.5vw,62px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.1,
                margin: 0,
                opacity: 0,
                transform: "translateY(50px)",
                animation:
                  "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.35s forwards",
              }}
            >
              Our{" "}
              <em
                style={{
                  fontStyle: "italic",
                  WebkitTextStroke: "1px #ea580c",
                  color: "transparent",
                }}
              >
                Blogs
              </em>
            </h2>

            <div
              style={{
                margin: "18px auto 0",
                height: 2,
                width: 56,
                background: "linear-gradient(90deg,#ea580c,#f97316)",
                borderRadius: 2,
                opacity: 0,
                transform: "scaleX(0)",
                transformOrigin: "center",
                animation:
                  "barIn 0.7s cubic-bezier(0.16,1,0.3,1) 0.6s forwards",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)",
                  animation: "scanBar 2.5s ease-in-out 1.5s infinite",
                }}
              />
            </div>
          </div>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 26,
            }}
          >
            {blogs.map((blog, i) => (
              <BlogCard key={i} blog={blog} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <button
              className="view-all-btn"
              style={{
                background: "transparent",
                border: "1px solid rgba(234,88,12,0.35)",
                color: "#f97316",
                padding: "14px 44px",
                borderRadius: 999,
                fontSize: 13.5,
                fontWeight: 500,
                letterSpacing: "0.06em",
                fontFamily: "'Syne', sans-serif",
                transition: "all 0.35s ease",
              }}
            >
              View All Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
