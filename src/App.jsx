import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurWork from "./Pages/our-work";
import "./App.css";
import Webdevelopment from "./Pages/web-development";
import Mobileappdevelopment from "./Pages/mobile-app-development";
import Ecomerce from "./Pages/ecommercewebsite";
import Uiux from "./Pages/ui-ux-design";
import SocialMarketingSection from "./Pages/Socialmediamarketing";
import DigitalMarketingSection from "./Pages/digital-marketing";
import DigitalBrandingSection from "./Pages/digital-branding";
import AdsSection from "./Pages/ads";
import Videoproductionsection from "./Pages/video-production"
import Erpsection from "./Pages/erp-solutions";
import Itresourcesection from "./Pages/it-resources";
import BeautyHeroSection from "./Pages/Beautywellness";
import Ecommerce from "./Pages/ecommerce";
import RealEstate from "./Pages/realestate";
import BusinessConsultancy from "./Pages/businessconsultancy";
import Healthcare from "./Pages/healthcare";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="our-work" element={<OurWork />} />
       <Route path="web-development" element={<Webdevelopment />} />
       <Route path="mobile-app-development" element={<Mobileappdevelopment />} />
       <Route path="ecommerce-website" element={<Ecomerce/>}/>
        <Route path="ui-ux-design" element={<Uiux/>}/>
         <Route path="social-media-marketing" element={<SocialMarketingSection/>}/>
        <Route path="digital-marketing" element={<DigitalMarketingSection/>}/>
        <Route path="digital-branding" element={<DigitalBrandingSection/>}/>
        <Route path="ads" element={<AdsSection/>}/>
        <Route path="video-production" element={<Videoproductionsection/>}/>
        <Route path="erp-solutions" element={<Erpsection/>}/>
         <Route path="it-resources" element={<Itresourcesection/>}/>
         <Route path="beauty-wellness" element={<BeautyHeroSection/>}/>
          <Route path="ecommerce" element={<Ecommerce/>}/>
          <Route path="real-estate" element={<RealEstate/>}/>
           <Route path="business-consultancy" element={<BusinessConsultancy/>}/>
             <Route path="healthcare" element={<Healthcare/>}/>
      </Route>
    </Routes>
  );
}

export default App;