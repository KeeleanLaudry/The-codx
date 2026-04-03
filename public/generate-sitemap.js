import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const routes = [
  "/",
  "/about",
  "/contact-us",
  "/our-work",

  "/web-development",
  "/mobile-app-development",
  "/ecommerce-website",
  "/ui-ux-design",

  "/social-media-marketing",
  "/digital-marketing",
  "/digital-branding",

  "/ads",
  "/video-production",
  "/erp-solutions",
  "/it-resources",

  "/beauty-wellness",
  "/ecommerce",
  "/real-estate",
  "/business-consultancy",
  "/healthcare",

  "/blogs",
];

const links = routes.map((route) => ({
  url: route,
  changefreq: "weekly",
  priority: route === "/" ? 1.0 : 0.8,
}));

const sitemap = new SitemapStream({
  hostname: "https://thecodx.com",
});

const writeStream = createWriteStream("./public/sitemap.xml");

const run = async () => {
  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  writeStream.write(data.toString());

  console.log("✅  Sitemap generated!");
};

run();