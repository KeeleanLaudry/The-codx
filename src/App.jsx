import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurWork from "./Pages/our-work";
import Webdevelopment from "./Pages/web-development";
import Mobileappdevelopment from "./Pages/mobile-app-development";
import Ecomerce from "./Pages/ecommercewebsite";
import Uiux from "./Pages/ui-ux-design";
import SocialMarketingSection from "./Pages/Socialmediamarketing";
import DigitalMarketingSection from "./Pages/digital-marketing";
import DigitalBrandingSection from "./Pages/digital-branding";
import AdsSection from "./Pages/ads";
import Videoproductionsection from "./Pages/video-production";
import Erpsection from "./Pages/erp-solutions";
import Itresourcesection from "./Pages/it-resources";
import BeautyHeroSection from "./Pages/Beautywellness";
import Ecommerce from "./Pages/ecommerce";
import RealEstate from "./Pages/realestate";
import BusinessConsultancy from "./Pages/businessconsultancy";
import Healthcare from "./Pages/healthcare";
import BlogSection from "./about/BlogSection";
import Blogdetail from "./about/BlogDetail";
import ContactPage from "./ContactUs/Contactus";
import TermsAndConditions from "./Home/Term-and-condition";
import PrivacyPolicy from "./Home/PrivacyPolicy";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./Home/Loader"; // ✅ correct

function App() {
  const [loading, setLoading] = useState(true);

  // auto hide loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
 
     <HelmetProvider>
      {/* 🔥 Loader */}
      {loading && <Loader />}

      {/* 🔥 Main App */}
      <div
        className={`transition-all duration-700 ${
          loading ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<ContactPage />} />
            <Route path="our-work" element={<OurWork />} />

            <Route path="web-development" element={<Webdevelopment />} />
            <Route path="mobile-app-development" element={<Mobileappdevelopment />} />
            <Route path="ecommerce-website" element={<Ecomerce />} />
            <Route path="ui-ux-design" element={<Uiux />} />

            <Route path="social-media-marketing" element={<SocialMarketingSection />} />
            <Route path="digital-marketing" element={<DigitalMarketingSection />} />
            <Route path="digital-branding" element={<DigitalBrandingSection />} />

            <Route path="blogs" element={<BlogSection />} />
            <Route path="blog/:id" element={<Blogdetail />} />

            <Route path="ads" element={<AdsSection />} />
            <Route path="video-production" element={<Videoproductionsection />} />
            <Route path="erp-solutions" element={<Erpsection />} />
            <Route path="it-resources" element={<Itresourcesection />} />

            <Route path="beauty-wellness" element={<BeautyHeroSection />} />
            <Route path="ecommerce" element={<Ecommerce />} />
            <Route path="real-estate" element={<RealEstate />} />
            <Route path="business-consultancy" element={<BusinessConsultancy />} />
            <Route path="healthcare" element={<Healthcare />} />

            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </div>
      </HelmetProvider>
   
  );
}

export default App;