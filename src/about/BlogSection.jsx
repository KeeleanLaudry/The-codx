import { useState } from "react";
import { useGetBlogsQuery } from "../Api/blogApi";
import BlogCard from "./blogCard";
import { ChevronRight, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function BlogSection() {
  const { data = [], isLoading, error } = useGetBlogsQuery();
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  // Filter only published blogs
  const publishedBlogs = data?.filter(
    (b) => !b.status || b.status.toLowerCase() === "published"
  ) || [];
  
  // Show first 3 blogs if not showing all
  const displayedBlogs = showAll ? publishedBlogs : publishedBlogs.slice(0, 3);
  const hasMoreBlogs = publishedBlogs.length > 3;
  
  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="text-center">
          <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin" style={{ color: "#2ABFBF" }} />
          <p style={{ color: "#0D1F3C" }} className="opacity-60">Loading amazing stories...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#EADECF" }}>
            <span className="text-3xl">😢</span>
          </div>
          <p style={{ color: "#0D1F3C" }} className="opacity-60 mb-2">Unable to load blogs</p>
          <button 
            onClick={() => window.location.reload()}
            className="hover:underline"
            style={{ color: "#2ABFBF" }}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }
  
  if (publishedBlogs.length === 0) {
    return (
      <div className="min-h-[400px] flex items-center justify-center" style={{ backgroundColor: "#F7F3EE" }}>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#EADECF" }}>
            <span className="text-3xl">📝</span>
          </div>
          <p style={{ color: "#0D1F3C" }} className="opacity-60">No blogs published yet</p>
          <p className="text-sm mt-2" style={{ color: "#0D1F3C", opacity: 0.4 }}>Check back soon for amazing content!</p>
        </div>
      </div>
    );
  }
  
  return (
    <section style={{ backgroundColor: "#F7F3EE" }} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 ">
        
        {/* Section Header */}
        <div className=" mb-12">
          <h2 className="section-heading" >
            Latest Insights & Stories
          </h2>
        </div>
        
        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map((blog, index) => (
            <BlogCard
              key={blog._id || blog.id || blog.slug}
              blog={blog}
              index={index}
            />
          ))}
        </div>
        
        {/* Load More Button */}
        {hasMoreBlogs && (
          <div className="text-center mt-12">
            {!showAll ? (
              <button
                onClick={() => navigate("/blogs")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ backgroundColor: "#0D1F3C", color: "white" }}
              >
                <span>Load More Articles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                style={{ backgroundColor: "#EADECF", color: "#0D1F3C" }}
              >
                <span>Show Less</span>
                <ChevronRight className="w-4 h-4 rotate-90 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            )}
          </div>
        )}
        
      </div>
    </section>
  );
}