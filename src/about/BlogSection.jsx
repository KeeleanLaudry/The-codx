import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const hue = Math.random() > 0.6 ? 180 : 42;
  const saturation = hue === 180 ? 75 : 65;
  const lightness = hue === 180 ? 65 : 75;
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
    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    boxShadow: `0 0 ${size * 2}px hsl(${hue}, ${saturation}%, 70%)`,
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
  const navigate = useNavigate();
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

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
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        revealed
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[60px]"
      }`}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate(`/blog/${index}`)}
        className="relative rounded-2xl overflow-hidden bg-white border border-[#EADECF] cursor-pointer flex flex-col h-full transition-all duration-300 group hover:border-[#2ABFBF] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-[180px] md:h-[220px] flex-shrink-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(247,243,238,0.8)] to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="section-subtitle">
            {blog.title}
          </h3>

          <p className="section-desc pt-5">
            {blog.excerpt}
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[#8A7A66] text-xs font-medium tracking-wide transition-colors duration-300 group-hover:text-[#2ABFBF]">
              Read More
            </span>
            <div className="w-7 h-7 rounded-full border border-[#EADECF] flex items-center justify-center transition-all duration-300 group-hover:border-[#2ABFBF] group-hover:bg-[rgba(42,191,191,0.08)] group-hover:translate-x-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="#2ABFBF"
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

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      mousePos.current = { x, y };
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      if (Date.now() - emberTimer.current > 35) {
        emberTimer.current = Date.now();
        spawnEmber(x, y);
      }
    };
    document.addEventListener("mousemove", onMove);

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
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,500&family=Syne:wght@300;400;500;600&display=swap');
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Shimmer effect */
        .blog-card::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background: linear-gradient(105deg, transparent 40%, rgba(42,191,191,0.08) 50%, transparent 60%);
          opacity: 0;
          transform: translateX(-100%);
          transition: opacity 0.3s ease;
        }
        
        .blog-card:hover::after {
          opacity: 1;
          animation: shimmerSweep 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(150%); }
        }
        
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.08); }
        }
        
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -25px) scale(0.95); }
        }
        
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes barIn {
          to { opacity: 1; transform: scaleX(1); }
        }
        
        @keyframes scanBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>

     
      <section className="relative overflow-hidden ">
    
        

        <div className="max-w-[1240px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="section-heading"
            >
              Our  Blogs
            </h2>

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <BlogCard key={i} blog={blog} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}