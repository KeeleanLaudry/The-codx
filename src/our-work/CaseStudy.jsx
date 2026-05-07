import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCaseStudyByIdQuery } from "../Api/BrandApi";
import {
  ArrowLeft, Calendar, Heart, Share2, Briefcase, Tag, MapPin, Mail, Globe,
  Star, CheckCircle, Sparkles, TrendingUp, Target, Lightbulb, Shield, Zap,
  HeartHandshake, MessageSquare, BookOpen, Users, Award, Facebook, Twitter,
  Linkedin, Link2, ArrowRight, Eye, Clock, ChevronRight, Quote, BarChart3,
  Rocket, Gem, ThumbsUp, Crown, LayoutGrid,
} from "lucide-react";

/* ─── Animated Counter ─────────────────────────────────────── */
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 2000;
    const step = value / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count}{suffix}</span>;
};

/* ─── Decorative Circle Ornament ────────────────────────────── */
const CircleOrn = ({ size = 120, opacity = 0.18, className = "" }) => (
  <div
    className={`rounded-full border-2 pointer-events-none ${className}`}
    style={{ width: size, height: size, borderColor: `rgba(234,222,207,${opacity})` }}
  />
);

/* ─── Section Label ─────────────────────────────────────────── */
const SectionLabel = ({ children }) => (
  <span
    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase mb-3"
    style={{ color: "#2ABFBF" }}
  >
    <span className="w-5 h-px bg-current inline-block" />
    {children}
  </span>
);

/* ─── Pill Badge ─────────────────────────────────────────────── */
const Pill = ({ children, dark = false }) => (
  <span
    className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
    style={dark
      ? { background: "rgba(234,222,207,0.15)", color: "#F7F3EE", border: "1px solid rgba(234,222,207,0.25)" }
      : { background: "rgba(42,191,191,0.1)", color: "#2ABFBF", border: "1px solid rgba(42,191,191,0.25)" }
    }
  >
    {children}
  </span>
);

/* ─── Challenge Item ─────────────────────────────────────────── */
const ChallengeItem = ({ text, variant = "customer" }) => {
  const colors = variant === "customer"
    ? { dot: "#F87171", ring: "rgba(248,113,113,0.15)" }
    : { dot: "#60A5FA", ring: "rgba(96,165,250,0.15)" };
  return (
    <div className="flex items-start gap-4 py-3 group">
      <div className="mt-1.5 shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{ background: colors.ring }}>
        <div className="w-2 h-2 rounded-full" style={{ background: colors.dot }} />
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(13,31,60,0.72)" }}>{text}</p>
    </div>
  );
};

/* ─── Result Card ────────────────────────────────────────────── */
const ResultCard = ({ result, index }) => {
  const isMetric = /\d+%|\d+x|\d+\.?\d*[kK]/.test(result);
  if (isMetric) {
    return (
      <div
        className="relative overflow-hidden rounded-2xl flex flex-col items-center justify-center p-8 text-center group hover:-translate-y-1 transition-transform duration-300"
        style={{ background: "#0D1F3C", border: "1px solid rgba(234,222,207,0.12)" }}
      >
        {/* Decorative circles */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full"
          style={{ border: "1px solid rgba(42,191,191,0.2)" }} />
        <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full"
          style={{ border: "1px solid rgba(42,191,191,0.1)" }} />
        <TrendingUp className="w-6 h-6 mb-3" style={{ color: "#2ABFBF" }} />
        <p className="text-4xl font-black mb-2" style={{ color: "#2ABFBF", fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>{result}</p>
        <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(247,243,238,0.45)" }}>improvement</p>
      </div>
    );
  }
  return (
    <div
      className="flex items-start gap-3 p-4 rounded-xl"
      style={{ background: "rgba(42,191,191,0.05)", border: "1px solid rgba(42,191,191,0.12)" }}
    >
      <ThumbsUp className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#2ABFBF" }} />
      <p className="text-sm leading-relaxed" style={{ color: "rgba(13,31,60,0.72)" }}>{result}</p>
    </div>
  );
};

/* ─── Main Export ────────────────────────────────────────────── */
export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const { data, isLoading, error } = useGetCaseStudyByIdQuery(id, { skip: !id });
  const cs = data?.data || data;

  if (isLoading) return <LoadingSkeleton />;
  if (error) return <ErrorState onBack={() => navigate(-1)} />;
  if (!cs) return <NotFoundState onBack={() => navigate(-1)} />;

  const brand = cs.brandId || {};

  const shareLinks = [
    { icon: Facebook, label: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}` },
    { icon: Twitter, label: "Twitter", url: `https://twitter.com/intent/tweet?url=${currentUrl}` },
    { icon: Linkedin, label: "LinkedIn", url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}` },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#F7F3EE" }}>

      {/* ══════════════════════════════════════════════════════════
          HERO — Editorial split with ornamental circles
      ══════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #EDE7DF 0%, #F7F3EE 40%, #e8e0d5 100%)", minHeight: "82vh" }}>

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(13,31,60,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Navy gradient left wash */}
        <div className="absolute inset-y-0 left-0 w-1/2 opacity-[0.06]"
          style={{ background: "linear-gradient(to right, #0D1F3C, transparent)" }} />

    <div className="absolute right-48 top-1/2 -translate-y-1/2 hidden lg:block overflow-visible">
  {[280, 380, 480, 580].map((s, i) => (
    <div
      key={i}
      className="absolute rounded-full"
      style={{
        width: s,
        height: s,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: `1.5px solid rgba(13,31,60,${0.1 - i * 0.02})`,
      }}
    />
  ))}

  {/* Hero image */}
  {cs.heroImage && (
    <div
      className="absolute rounded-full overflow-hidden shadow-2xl"
      style={{
        width: 280,
        height: 280,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "3px solid rgba(42,191,191,0.5)",
        background: "#fff",
      }}
    >
      <img
        src={cs.heroImage}
        alt={cs.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  )}
</div>

  

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-14 flex flex-col justify-center" style={{ minHeight: "82vh" }}>
          <div className="max-w-4xl pt-24 pb-20">

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {cs.category && <Pill>{cs.category}</Pill>}
              {cs.featured && (
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(13,31,60,0.08)", color: "#0D1F3C", border: "1px solid rgba(13,31,60,0.15)" }}>
                  <Crown className="w-3 h-3" style={{ color: "#2ABFBF" }} /> Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-black leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#0D1F3C", fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: "-0.02em" }}>
              {cs.title}
            </h1>

            {/* Divider with teal */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "#2ABFBF" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "#2ABFBF" }} />
            </div>

            {/* Short desc */}
            {cs.shortDescription && (
              <p className="text-lg leading-relaxed" style={{ color: "rgba(13,31,60,0.62)", maxWidth: "600px" }}>
                {cs.shortDescription}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap gap-6 mt-8">
              {brand.title && (
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" style={{ color: "#2ABFBF" }} />
                  <span className="text-sm font-semibold" style={{ color: "rgba(13,31,60,0.75)" }}>{brand.title}</span>
                </div>
              )}
              {cs.createdAt && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" style={{ color: "#2ABFBF" }} />
                  <span className="text-sm" style={{ color: "rgba(13,31,60,0.55)" }}>
                    {new Date(cs.createdAt).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" style={{ color: "#2ABFBF" }} />
                <span className="text-sm" style={{ color: "rgba(13,31,60,0.55)" }}>
                  <AnimatedCounter value={cs.viewCount || 0} /> views
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 64L1440 64L1440 32C1080 64 720 0 360 32L0 32L0 64Z" fill="#F7F3EE" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-14 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ──────────── LEFT: Main content ──────────── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Client info */}
            {(cs.client?.location || cs.client?.email || cs.client?.websiteUrl) && (
              <section>
                <SectionLabel>Client</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cs.client?.location && (
                    <div className="rounded-xl p-4 flex items-center gap-3"
                      style={{ background: "#fff", border: "1.5px solid #EADECF" }}>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(42,191,191,0.1)" }}>
                        <MapPin className="w-4 h-4" style={{ color: "#2ABFBF" }} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "rgba(13,31,60,0.4)" }}>Location</p>
                        <p className="text-sm font-semibold" style={{ color: "#0D1F3C" }}>{cs.client.location}</p>
                      </div>
                    </div>
                  )}
                  {cs.client?.email && (
                    <div className="rounded-xl p-4 flex items-center gap-3"
                      style={{ background: "#fff", border: "1.5px solid #EADECF" }}>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(42,191,191,0.1)" }}>
                        <Mail className="w-4 h-4" style={{ color: "#2ABFBF" }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "rgba(13,31,60,0.4)" }}>Email</p>
                        <a href={`mailto:${cs.client.email}`} className="text-sm font-semibold truncate block hover:underline" style={{ color: "#2ABFBF" }}>{cs.client.email}</a>
                      </div>
                    </div>
                  )}
                  {cs.client?.websiteUrl && (
                    <div className="rounded-xl p-4 flex items-center gap-3"
                      style={{ background: "#fff", border: "1.5px solid #EADECF" }}>
                      <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(42,191,191,0.1)" }}>
                        <Globe className="w-4 h-4" style={{ color: "#2ABFBF" }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: "rgba(13,31,60,0.4)" }}>Website</p>
                        <a href={cs.client.websiteUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold truncate block hover:underline" style={{ color: "#2ABFBF" }}>{cs.client.websiteUrl.replace(/^https?:\/\//, "")}</a>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Overview */}
            {cs.overview && (
              <section>
                <SectionLabel>Project Overview</SectionLabel>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                    style={{ background: "linear-gradient(to bottom, #2ABFBF, rgba(42,191,191,0))" }} />
                  <p className="text-lg leading-relaxed italic" style={{ color: "rgba(13,31,60,0.75)", fontFamily: "'Georgia', serif" }}>
                    "{cs.overview}"
                  </p>
                </div>
              </section>
            )}

            {/* Challenges */}
            {(cs.customerchallenges?.length > 0 || cs.vendorChallenges?.length > 0) && (
              <section>
                <SectionLabel>The Challenge</SectionLabel>
                <div className="rounded-2xl overflow-hidden" style={{ border: "1.5px solid #EADECF" }}>
                  {cs.customerchallenges?.length > 0 && (
                    <div className="p-6" style={{ background: "#fff" }}>
                      <div className="flex items-center gap-2 mb-4">
                        <Users className="w-4 h-4" style={{ color: "#2ABFBF" }} />
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#2ABFBF" }}>Customer Perspective</span>
                      </div>
                      <div className="divide-y" style={{ borderColor: "rgba(234,222,207,0.5)" }}>
                        {cs.customerchallenges.map((c, i) => <ChallengeItem key={i} text={c} variant="customer" />)}
                      </div>
                    </div>
                  )}
                  {cs.vendorChallenges?.length > 0 && (
                    <div className="p-6" style={{ background: "#EDE7DF" }}>
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="w-4 h-4" style={{ color: "#0D1F3C" }} />
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#0D1F3C" }}>Our Perspective</span>
                      </div>
                      <div className="divide-y" style={{ borderColor: "rgba(13,31,60,0.08)" }}>
                        {cs.vendorChallenges.map((c, i) => <ChallengeItem key={i} text={c} variant="vendor" />)}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Solutions */}
            {cs.solutions?.length > 0 && (
              <section>
                <SectionLabel>Our Solution</SectionLabel>
                <div className="space-y-3">
                  {cs.solutions.map((sol, i) => (
                    <div key={i}
                      className="flex items-start gap-4 p-5 rounded-xl group hover:-translate-y-0.5 transition-transform duration-200"
                      style={{ background: "#fff", border: "1.5px solid #EADECF" }}>
                      {/* Step number */}
                      <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: "#0D1F3C", color: "#F7F3EE" }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm leading-relaxed pt-1" style={{ color: "rgba(13,31,60,0.75)" }}>{sol}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results */}
            {cs.results?.length > 0 && (
              <section>
                <SectionLabel>Measurable Results</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cs.results.map((r, i) => <ResultCard key={i} result={r} index={i} />)}
                </div>
              </section>
            )}

            {/* Key Highlights */}
            {cs.keyHighlight?.length > 0 && (
              <section>
                <SectionLabel>Key Highlights</SectionLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cs.keyHighlight.map((h, i) => (
                    <div key={i}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ background: "#fff", border: "1.5px solid #EADECF", borderLeft: "3px solid #2ABFBF" }}>
                      <Gem className="w-4 h-4 shrink-0" style={{ color: "#2ABFBF" }} />
                      <p className="text-sm font-medium" style={{ color: "#0D1F3C" }}>{h}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Vendor side quote */}
            {cs.vendorside && (
              <section>
                <SectionLabel>Vendor Perspective</SectionLabel>
                <div className="relative rounded-2xl p-8 overflow-hidden"
                  style={{ background: "#0D1F3C" }}>
                  {/* Ornamental circles */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full" style={{ border: "1px solid rgba(234,222,207,0.12)" }} />
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full" style={{ border: "1px solid rgba(234,222,207,0.07)" }} />
                  <Quote className="w-8 h-8 mb-4" style={{ color: "rgba(42,191,191,0.4)" }} />
                  <p className="text-lg leading-relaxed italic" style={{ color: "rgba(247,243,238,0.82)", fontFamily: "'Georgia', serif" }}>
                    {cs.vendorside}
                  </p>
                </div>
              </section>
            )}
          </div>

          {/* ──────────── RIGHT: Sidebar ──────────── */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">

            {/* Brand card */}
            {brand.title && (
              <div className="rounded-2xl overflow-hidden relative"
                style={{ background: "#fff", border: "1.5px solid #EADECF" }}>
                {/* Header strip */}
                <div className="relative h-20 flex items-end justify-center pb-0" style={{ background: "#EDE7DF" }}>
                  {/* Ornamental ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full" style={{ border: "1px solid #EADECF" }} />
                    <div className="absolute w-32 h-32 rounded-full" style={{ border: "1px solid rgba(234,222,207,0.5)" }} />
                  </div>
                  {/* Logo / avatar sits on the border */}
                  <div className="relative -mb-8 w-16 h-16 rounded-2xl overflow-hidden shadow-lg z-10"
                    style={{ border: "3px solid #fff", background: "rgba(42,191,191,0.1)" }}>
                    {brand.logo
                      ? <img src={brand.logo} alt={brand.title} className="w-full h-full object-contain p-1" />
                      : <div className="w-full h-full flex items-center justify-center"><Briefcase className="w-7 h-7" style={{ color: "#2ABFBF" }} /></div>
                    }
                  </div>
                </div>

                <div className="pt-10 pb-6 px-6 text-center">
                  <h3 className="text-lg font-bold mb-1" style={{ color: "#0D1F3C" }}>{brand.title}</h3>
                  {brand.category && <Pill>{brand.category}</Pill>}
                  {brand.description && (
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(13,31,60,0.55)" }}>{brand.description}</p>
                  )}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="space-y-3">
              <button
                onClick={() => navigate("/contact-us")}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 group"
                style={{ background: "#0D1F3C", color: "#F7F3EE" }}>
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              {cs.client?.websiteUrl && (
                <a href={cs.client.websiteUrl} target="_blank" rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 group"
                  style={{ background: "transparent", color: "#0D1F3C", border: "1.5px solid #EADECF" }}>
                  <Globe className="w-4 h-4" style={{ color: "#2ABFBF" }} />
                  Visit Client Website
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1 opacity-50" />
                </a>
              )}
            </div>

            {/* Share */}
            <div className="rounded-2xl p-5" style={{ background: "#fff", border: "1.5px solid #EADECF" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(13,31,60,0.45)" }}>Share</p>
              <div className="flex gap-3 justify-center">
                {shareLinks.map(({ icon: Icon, label, url }, i) => (
                  <button key={i} onClick={() => window.open(url, "_blank")}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "#EDE7DF", border: "1px solid #EADECF" }}
                    aria-label={`Share on ${label}`}>
                    <Icon className="w-4 h-4" style={{ color: "#0D1F3C" }} />
                  </button>
                ))}
                <button
                  onClick={() => { navigator.clipboard?.writeText(currentUrl); }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#EDE7DF", border: "1px solid #EADECF" }}
                  aria-label="Copy link">
                  <Link2 className="w-4 h-4" style={{ color: "#0D1F3C" }} />
                </button>
              </div>
            </div>

            {/* Services */}
            {cs.serviceType?.length > 0 && (
              <div className="rounded-2xl p-5" style={{ background: "#fff", border: "1.5px solid #EADECF" }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(13,31,60,0.45)" }}>Services</p>
                <div className="flex flex-wrap gap-2">
                  {cs.serviceType.map((s, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: "#EDE7DF", color: "rgba(13,31,60,0.7)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          CTA FOOTER BANNER
      ══════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ background: "#EDE7DF" }}>
        {/* Ornamental circles */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2">
          {[100, 160, 220].map((s, i) => (
            <div key={i} className="absolute rounded-full" style={{
              width: s, height: s,
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              border: `1px solid rgba(13,31,60,${0.08 - i * 0.02})`,
            }} />
          ))}
        </div>
        <div className="absolute -right-16 top-1/2 -translate-y-1/2">
          {[120, 180, 240].map((s, i) => (
            <div key={i} className="absolute rounded-full" style={{
              width: s, height: s,
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              border: `1px solid rgba(42,191,191,${0.15 - i * 0.04})`,
            }} />
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto text-center py-20 px-6">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(13,31,60,0.08)" }}>
            <Rocket className="w-6 h-6" style={{ color: "#0D1F3C" }} />
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#0D1F3C", fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
            Ready to achieve<br />
            <span style={{ color: "#2ABFBF" }}>similar results?</span>
          </h2>
          <p className="mb-10 text-lg" style={{ color: "rgba(13,31,60,0.6)", maxWidth: "480px", margin: "0 auto 2.5rem" }}>
            Let's collaborate and transform your business challenges into success stories.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 group"
            style={{ background: "#0D1F3C", color: "#F7F3EE" }}>
            Start Your Journey
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Loading Skeleton ──────────────────────────────────────── */
const LoadingSkeleton = () => (
  <div className="min-h-screen" style={{ background: "#F7F3EE" }}>
    <div className="h-[60vh] animate-pulse" style={{ background: "#0D1F3C" }} />
    <div className="max-w-6xl mx-auto px-6 -mt-4 grid grid-cols-4 gap-4">
      {[1,2,3,4].map(i => (
        <div key={i} className="h-24 rounded-2xl animate-pulse" style={{ background: "#EDE7DF" }} />
      ))}
    </div>
  </div>
);

/* ─── Error State ─────────────────────────────────────────────── */
const ErrorState = ({ onBack }) => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: "#F7F3EE" }}>
    <div className="text-center max-w-md px-6">
      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "#EDE7DF" }}>
        <svg className="w-10 h-10" style={{ color: "rgba(13,31,60,0.3)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold mb-2" style={{ color: "#0D1F3C", fontFamily: "'Georgia', serif" }}>Something went wrong</h3>
      <p className="mb-6 text-sm" style={{ color: "rgba(13,31,60,0.55)" }}>Unable to load this case study. Please try again later.</p>
      <button onClick={onBack} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold" style={{ background: "#0D1F3C", color: "#F7F3EE" }}>
        <ArrowLeft className="w-4 h-4" /> Go Back
      </button>
    </div>
  </div>
);

/* ─── Not Found State ─────────────────────────────────────────── */
const NotFoundState = ({ onBack }) => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: "#F7F3EE" }}>
    <div className="text-center max-w-md px-6">
      <Briefcase className="w-20 h-20 mx-auto mb-6 opacity-20" style={{ color: "#0D1F3C" }} />
      <h3 className="text-2xl font-bold mb-2" style={{ color: "#0D1F3C", fontFamily: "'Georgia', serif" }}>Case Study Not Found</h3>
      <p className="mb-6 text-sm" style={{ color: "rgba(13,31,60,0.55)" }}>This case study doesn't exist or has been removed.</p>
      <button onClick={onBack} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold" style={{ background: "#0D1F3C", color: "#F7F3EE" }}>
        <ArrowLeft className="w-4 h-4" /> Browse Case Studies
      </button>
    </div>
  </div>
);
