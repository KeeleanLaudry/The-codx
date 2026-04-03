const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// 👉 your website URLs (React routes)
const links = [
  { url: "/", priority: 1.0 },
  { url: "/about", priority: 0.8 },
  { url: "/contact-us", priority: 0.7 },
  { url: "/our-work", priority: 0.8 },

  { url: "/web-development", priority: 0.9 },
  { url: "/mobile-app-development", priority: 0.9 },
  { url: "/ecommerce-website", priority: 0.8 },
  { url: "/ui-ux-design", priority: 0.8 },

  { url: "/digital-marketing", priority: 0.9 },
  { url: "/social-media-marketing", priority: 0.9 },
  { url: "/digital-branding", priority: 0.8 },

  { url: "/blogs", priority: 0.6 },
];

// 👉 domain
const sitemap = new SitemapStream({
  hostname: "https://thecodx.com",
});

// 👉 output file
const writeStream = createWriteStream("./public/sitemap.xml");

(async () => {
  links.forEach(link => sitemap.write(link));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  writeStream.write(data.toString());

  console.log("✅ Sitemap generated!");
})();