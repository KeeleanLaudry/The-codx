import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formatDate = (dateString) => {
  if (!dateString) return "Recent";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
};

export default function BlogCard({ blog, index }) {
  const navigate = useNavigate();

  const slug =
    blog.slug ||
    blog.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const readingTime = blog.content
    ? Math.ceil(blog.content.split(/\s+/).length / 200)
    : 3;

  const description =
    blog.description?.length > 120
      ? blog.description.substring(0, 120) + "...":"";

  return (
    <article
      onClick={() => navigate(`/blog/${slug}`)}
      className="group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ background: "#fff", borderColor: "#EADECF" }}
    >
      {/* IMAGE */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: "#EADECF" }}
      >
        {blog.coverImage ? (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* placeholder book icon using EADECF circle bg */
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "#EADECF" }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="#0D1F3C" strokeWidth="1.2" opacity="0.4">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>
        )}

        {/* Category badge */}
        {blog.category && (
          <span
            className="absolute top-3 left-3 text-white text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: "#2ABFBF" }}
          >
            {blog.category}
          </span>
        )}
      </div>

      {/* BODY */}
      <div className="p-5">
        {/* Meta */}
        <div className="flex gap-4 mb-3">
          <span className="flex items-center gap-1 text-xs" style={{ color: "#0D1F3C", opacity: 0.55 }}>
            <Calendar size={13} />
            {formatDate(blog.createdAt)}
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: "#0D1F3C", opacity: 0.55 }}>
            <Clock size={13} />
            {readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[16px] font-medium leading-snug line-clamp-2 mb-2 group-hover:text-[#2ABFBF] transition-colors"
          style={{ color: "#0D1F3C" }}
        >
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-xs line-clamp-3 mb-4" style={{ color: "#0D1F3C", opacity: 0.6, lineHeight: 1.6 }}>
          {description}
        </p>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "0.5px solid #EADECF" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#2ABFBF" }}
            >
              <User size={16} color="white" />
            </div>
            <div>
              <p className="text-sm font-medium m-0" style={{ color: "#0D1F3C" }}>
                {blog.author || "admin"}
              </p>
              <p className="text-xs m-0" style={{ color: "#0D1F3C", opacity: 0.45 }}>
                Author
              </p>
            </div>
          </div>

          <span
            className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all"
            style={{ color: "#2ABFBF" }}
          >
            Read more
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </article>
  );
}