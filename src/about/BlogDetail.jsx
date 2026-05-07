// src/pages/BlogDetail.jsx
import { useParams } from "react-router-dom";
import { useGetBlogBySlugQuery } from "../Api/blogApi";
import { useEffect } from "react";
import "../index.css";

export default function BlogDetail() {
  const { slug } = useParams();
  const { data, isLoading, error } = useGetBlogBySlugQuery(slug);
  const blog = data?.blog || data;

  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (isLoading)
    return (
      <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#2ABFBF] border-t-[#0D1F3C] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#0D1F3C] font-medium">Loading masterpiece...</p>
        </div>
      </div>
    );

  if (error || !blog)
    return (
      <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-[#0D1F3C] mb-2">Blog not found</h2>
          <p className="text-[#4a5a72]">The article you're looking for doesn't exist or has been moved.</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F7F3EE] ">
      <div className="relative overflow-hidden pt-20">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2ABFBF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0D1F3C]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-8 relative">
          <div className="bg-gradient-to-br from-[#0D1F3C] to-[#1a2d4e] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10">

              
              <h1 className="font-serif text-3xl md:text-5xl lg:text-4xl font-bold text-white leading-tight mb-6 tracking-tight">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 border-t border-white/10 pt-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#2ABFBF]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#2ABFBF] text-xs font-bold">A</span>
                  </div>
                  <span className="font-medium text-white/70">Admin</span>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* ── Content with Premium Typography ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Decorative top bar */}
          <div className="h-1.5 bg-gradient-to-r from-[#2ABFBF] via-[#0D1F3C] to-[#2ABFBF]"></div>
          
          <div className="px-6 md:px-10 py-8 md:py-12">
            <div
              className="prose prose-lg prose-headings:font-serif prose-headings:text-[#0D1F3C] prose-p:text-[#2c3a4b] prose-p:leading-relaxed prose-strong:text-[#0D1F3C] prose-a:text-[#2ABFBF] prose-a:no-underline hover:prose-a:underline prose-ul:text-[#2c3a4b] prose-li:marker:text-[#2ABFBF] max-w-none
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-[#2ABFBF] prose-h2:pl-4
              prose-h3:text-xl prose-h3:text-[#0D1F3C] prose-h3:font-semibold
              prose-blockquote:border-l-[#2ABFBF] prose-blockquote:bg-[#F7F3EE] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-xl
              prose-img:rounded-xl prose-img:shadow-md prose-img:my-6
              code:bg-[#EDE7DF] code:px-1.5 code:py-0.5 code:rounded-md code:text-[#0D1F3C]
              "
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}