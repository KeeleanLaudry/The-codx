import { useGetBlogsQuery } from "../Api/blogApi";
import BlogCard from "./blogCard";
import { Loader2 } from "lucide-react";

export default function AllBlogs() {
  const { data = [], isLoading, error } = useGetBlogsQuery();

  const publishedBlogs =
    data?.filter(
      (b) => !b.status || b.status.toLowerCase() === "published"
    ) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-cyan-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error loading blogs</p>
      </div>
    );
  }

  return (
    <section
      className="py-20"
      style={{ backgroundColor: "#F7F3EE" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="section-heading">
            All Blogs
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedBlogs.map((blog, index) => (
            <BlogCard
              key={blog._id || blog.id || blog.slug}
              blog={blog}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}