// BlogDetail.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogPosts = {
  0: {
    id: 0,
    title: "How Custom Software Solutions Simplify Business Operations",
    excerpt: "Off-the-shelf software can only take you so far. As your business grows, generic tools start showing their limits — discover how custom solutions unlock true efficiency.",
    category: "Software",
    readTime: "5 min read",
    date: "October 27, 2025",
    author: "admin",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    content: `
      <p>Off-the-shelf software can only take you so far. As your business grows, you need tools that adapt to your specific needs — not the other way around. CODX Software specializes in building custom software solutions that help businesses automate, innovate, and dominate.</p>

      <h2>Why Custom Software Beats Generic Tools</h2>
      <p>Generic platforms often come with unnecessary features — or lack the ones you actually need. Custom software, on the other hand, is built to fit your workflow like a glove.</p>
      
      <p>Key benefits include:</p>
      <ul>
        <li>Automation of repetitive tasks</li>
        <li>Seamless data integration across departments</li>
        <li>Enhanced productivity and accuracy</li>
        <li>Scalability as your business expands</li>
      </ul>

      <h2>CODX Software Development Process</h2>
      <p>Our approach is collaborative, transparent, and results-oriented:</p>
      <ol>
        <li>Consultation & Requirement Analysis</li>
        <li>UI/UX Design & Prototyping</li>
        <li>Development & Testing</li>
        <li>Deployment & Ongoing Support</li>
      </ol>
      <p>From CRMs and ERPs to e-commerce platforms and AI-based tools — we develop systems that simplify complex operations.</p>

      <h2>Industries We Serve</h2>
      <p>CODX has built tailored solutions for:</p>
      <ul>
        <li>Real estate and construction firms</li>
        <li>Retail and e-commerce brands</li>
        <li>Logistics and supply chain companies</li>
        <li>Healthcare and service industries</li>
      </ul>
      <p>Each solution is crafted to solve real business problems efficiently.</p>

      <h2>Conclusion</h2>
      <p>Custom software isn't an expense — it's an investment in growth. Partner with CODX Software to build systems that empower your team, streamline your operations, and future-proof your business.</p>
      
      <p><strong>💡 Let's build your next big innovation together.</strong></p>
    `,
  },
  1: {
    id: 1,
    title: "Why Your Website Is Your Strongest Marketing Tool",
    excerpt: "Did you know it takes only 0.05 seconds for users to form an opinion about your website? Your digital storefront is working 24/7 — make sure it converts.",
    category: "Marketing",
    readTime: "4 min read",
    date: "October 25, 2025",
    author: "admin",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
   content: `
  <p>Did you know it takes only <strong>0.05 seconds</strong> for users to form an opinion about your website? In the digital age, your website is your brand’s first impression — and possibly your last if it doesn’t deliver.</p>

  <p>At CODX Software, we create websites that don’t just look good — they perform. Our design philosophy is simple: <strong>every pixel should have a purpose.</strong></p>

  <h2>Your Website: The Heart of Your Marketing Ecosystem</h2>

  <p>Your website connects every part of your digital marketing strategy — from SEO and social media to email campaigns and paid ads. It’s where visitors turn into customers.</p>

  <p>A well-designed website can:</p>

  <ul>
    <li>Build trust and credibility</li>
    <li>Improve SEO rankings</li>
    <li>Increase conversions and sales</li>
    <li>Strengthen your brand identity</li>
  </ul>

  <p>If your website isn’t performing these functions, you’re losing valuable leads daily.</p>

  <h2>The CODX Approach to Web Development</h2>

  <p>Our team blends technical expertise with marketing insight to create high-performing websites built for success.</p>

  <p>We focus on:</p>

  <ul>
    <li><strong>User Experience (UX):</strong> Smooth navigation and intuitive layouts</li>
    <li><strong>Responsive Design:</strong> Perfect across desktop, mobile, and tablets</li>
    <li><strong>SEO Optimization:</strong> Built to be discovered on Google</li>
    <li><strong>Speed & Security:</strong> Because slow or unsafe websites kill conversions</li>
  </ul>

  <h2>Case in Point: Data-Driven Web Design</h2>

  <p>We use heatmaps, analytics, and A/B testing to understand user behaviour. This ensures every design decision — from button placement to colour contrast — supports your conversion goals.</p>

  <h2>Conclusion</h2>

  <p>Your website is more than your online address — it’s your <strong>digital headquarters.</strong></p>

  <p>Invest in a platform that works 24/7 to promote your brand, convert leads, and grow revenue.</p>

  <p><strong>🚀 Upgrade your website today with CODX Software — where creativity meets performance.</strong></p>
`
  },
  2: {
    id: 2,
    title: "The Future of Business Is Digital — Here's How CODX Helps You Stay Ahead",
    excerpt: "The digital world is evolving at lightning speed. Businesses that adapt will lead; those that don't will be left behind. Here's your roadmap to staying competitive.",
    category: "Digital",
    readTime: "6 min read",
    date: "October 22, 2025",
    author: "admin",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
  content: `
  <p>The digital world is evolving at lightning speed. Businesses that fail to adapt risk becoming invisible in a marketplace driven by clicks, code, and customer experiences. That’s where CODX Software comes in — your partner in creating digital-first strategies that transform your brand into a market leader.</p>

  <p>At CODX Software, we merge creativity with technology — offering development, marketing, and automation solutions that make your brand not just relevant, but remarkable.</p>

  <h2>Why Digital Transformation Matters More Than Ever</h2>

  <p>From e-commerce to education, every industry is moving online. The pandemic accelerated digital transformation by nearly a decade, forcing even traditional businesses to modernize their processes.</p>

  <p>A strong digital presence is no longer optional. It’s the foundation of growth.</p>

  <ul>
    <li>Custom software & app development</li>
    <li>Strategic digital marketing (SEO, PPC, SMM)</li>
    <li>Brand identity design & storytelling</li>
    <li>Data-driven analytics for growth tracking</li>
  </ul>

  <h2>How CODX Bridges Creativity and Technology</h2>

  <p>Many agencies focus solely on aesthetics or code. CODX Software focuses on impact — combining both sides for real business results.</p>

  <ol>
    <li>Research & Strategy</li>
    <li>Design & Development</li>
    <li>Marketing & Growth</li>
    <li>Optimization & Reporting</li>
  </ol>

  <h2>Digital Growth That Delivers Results</h2>

  <ul>
    <li>Increase website traffic by up to 300%</li>
    <li>Improve conversion rates by 40%+</li>
    <li>Enhance brand visibility across platforms</li>
  </ul>

  <h2>Conclusion</h2>

  <p>Digital transformation is the difference between surviving and thriving in 2025 and beyond.</p>

  <p><strong>👉 Contact us today to build your future-ready business strategy.</strong></p>
`
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#0D1F3C] mb-5 text-2xl font-semibold">
            Blog post not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-[#2ABFBF] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#239b9b] transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      
      {/* HERO */}
      <div className="relative h-[40vh] min-h-[250px] md:h-[60vh] md:min-h-[400px] overflow-hidden rounded-2xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
      </div>

      {/* TITLE */}
      <div className="max-w-4xl mx-auto px-6 mt-10">
        <h1 className="section-heading">
          {blog.title}
        </h1>

        <div className="flex flex-wrap gap-4 mt-4 text-sm text-[#6B5E4E]">
          <span>📅 {blog.date}</span>
          <span>👤 {blog.author}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div
          className="
            text-[#4A3E2C] leading-8 text-[16px]

            [&>p]:mb-5
            [&>h2]:text-[#0D1F3C]
            [&>h2]:text-2xl
            [&>h2]:font-semibold
            [&>h2]:mt-10
            [&>h2]:mb-4

            [&>ul]:list-disc
            [&>ul]:pl-6
            [&>ul]:mb-6

            [&>ol]:list-decimal
            [&>ol]:pl-6
            [&>ol]:mb-6

            [&>li]:mb-2


          "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}