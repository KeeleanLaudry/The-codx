import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCaseStudyByIdQuery } from "../Api/BrandApi";
import { 
  ArrowLeft, 
  Calendar, 
  Eye, 
  Heart, 
  Share2,
  Award,
  Briefcase,
  Tag,
  User,
  Clock,
  Sparkles,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Link2
} from "lucide-react";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
const currentUrl = window.location.href;
  const {
    data,
    isLoading,
    error,
  } = useGetCaseStudyByIdQuery(id, {
    skip: !id,
  });

  const caseStudy = data?.data || data;

  if (!id) return <p className="text-center text-red-500 py-20">Invalid ID</p>;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center p-20">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-[#EADECF] border-t-[#2ABFBF] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#0D1F3C]/60 font-medium">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#0D1F3C] mb-2">Error Loading Case Study</h3>
          <p className="text-[#0D1F3C]/60 mb-6">Please try again later</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-2.5 pt-20 bg-[#0D1F3C] text-white rounded-xl hover:bg-[#0D1F3C]/90 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-[#EADECF] rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-10 h-10 text-[#0D1F3C]/30" />
          </div>
          <h3 className="text-xl font-bold text-[#0D1F3C] mb-2">Case Study Not Found</h3>
          <p className="text-[#0D1F3C]/60 mb-6">The case study you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0D1F3C] text-white rounded-xl hover:bg-[#0D1F3C]/90 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-[#F7F3EE]">
      
      {/* Hero Section */}
      <div className="relative  bg-gradient-to-r from-[#0D1F3C] to-[#2ABFBF] overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        {/* Navigation */}
        <div className="relative z-20 px-6 py-6">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back</span>
            </button>

            <div className="flex gap-3">
              <button className="bg-white/10 backdrop-blur-md text-white p-2.5 rounded-full hover:bg-white/20 transition-all group">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white p-2.5 rounded-full hover:bg-white/20 transition-all group">
                <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-16 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Category Badge */}
            {caseStudy.category && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium text-white">{caseStudy.brandId?.category}</span>
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {caseStudy.brandId?.title || "Untitled Case Study"}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              {caseStudy.brandId?.title && (
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{caseStudy.brandId?.title}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{caseStudy.createdAt ? new Date(caseStudy.createdAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : "Recently"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="relative h-16">
          <svg className="absolute bottom-0 w-full h-16 text-[#F7F3EE]" preserveAspectRatio="none" viewBox="0 0 1440 54">
            <path fill="currentColor" d="M0 22L120 16.7C240 11 480 0 720 0C960 0 1200 11 1320 16.7L1440 22V54H0V22Z" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        
    
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#EADECF] overflow-hidden">
              <div className="border-b border-[#EADECF] px-6 py-4 bg-gradient-to-r from-[#F7F3EE] to-white">
                <h2 className="text-xl font-bold text-[#0D1F3C] flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#2ABFBF] rounded-full"></div>
                  Overview
                </h2>
              </div>
              <div className="p-6">
                <p className="text-[#0D1F3C]/70 leading-relaxed whitespace-pre-wrap">
                  {caseStudy.description || "No description provided for this case study."}
                </p>
              </div>
            </div>

            {/* Key Result */}
       {caseStudy.result && (
  <div className="bg-white rounded-2xl shadow-md border border-[#EADECF] overflow-hidden">

    {/* Header */}
    <div className="px-6 py-4 border-b border-[#EADECF] flex items-center gap-3 bg-[#F7F3EE]">
      <div className="w-10 h-10 rounded-xl bg-[#2ABFBF]/10 flex items-center justify-center">
        <Award className="w-5 h-5 text-[#2ABFBF]" />
      </div>
      <h3 className="text-[#0D1F3C] font-semibold text-lg">
        Key Achievements
      </h3>
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">

      {caseStudy.result
        .split(/📊|😊|📉|⏱️/)
        .filter(item => item.trim() !== "")
        .map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F7F3EE] transition-all"
          >
            {/* Bullet Icon */}
            <div className="mt-1">
              <CheckCircle className="w-5 h-5 text-[#2ABFBF]" />
            </div>

            {/* Text */}
            <p className="text-[#0D1F3C]/80 text-sm leading-relaxed">
              {item.trim()}
            </p>
          </div>
        ))}

    </div>
  </div>
)}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            


            {/* Share Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#EADECF] overflow-hidden">
              <div className="bg-[#0D1F3C] px-6 py-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#2ABFBF]" />
                  Share This Story
                </h3>
              </div>
              <div className="p-5">
                <div className="flex justify-center gap-3">
              <button
  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, "_blank")}
  className="w-10 h-10 rounded-full bg-[#F7F3EE] flex items-center justify-center hover:bg-[#2ABFBF] hover:text-white transition-all group"
>
  <Facebook className="w-4 h-4 text-[#0D1F3C] group-hover:text-white" />
</button>
                 <button
  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${currentUrl}`, "_blank")}
  className="w-10 h-10 rounded-full bg-[#F7F3EE] flex items-center justify-center hover:bg-[#2ABFBF] hover:text-white transition-all group"
>
  <Twitter className="w-4 h-4 text-[#0D1F3C] group-hover:text-white" />
</button><button
  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`, "_blank")}
  className="w-10 h-10 rounded-full bg-[#F7F3EE] flex items-center justify-center hover:bg-[#2ABFBF] hover:text-white transition-all group"
>
  <Linkedin className="w-4 h-4 text-[#0D1F3C] group-hover:text-white" />
</button>
              <button
  onClick={() => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link copied!");
  }}
  className="w-10 h-10 rounded-full bg-[#F7F3EE] flex items-center justify-center hover:bg-[#2ABFBF] hover:text-white transition-all group"
>
  <Link2 className="w-4 h-4 text-[#0D1F3C] group-hover:text-white" />
</button>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-[#0D1F3C] to-[#2ABFBF] rounded-2xl p-6 text-center text-white shadow-lg">
              <Sparkles className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <h3 className="text-lg font-bold mb-2">Ready for similar results?</h3>
              <p className="text-white/80 text-sm mb-4">Let's discuss your project</p>
           <button
  onClick={() => navigate("/contact-us")}
  className="inline-flex items-center gap-2 bg-white text-[#0D1F3C] px-5 py-2 rounded-xl font-semibold hover:shadow-lg transition-all"
>
  Contact Us
  <ArrowRight className="w-4 h-4" />
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}