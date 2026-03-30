import bgImage from "../assets/rejuvenation-procedures-300x113.jpg";
import ContactSection from "../Contact/contactForm";
import BeautyHeroSection from "../Industries/HeroBanner";
import BrandsGrid from "../Home/logos";
import PortalCard from "../Industries/Portalcard";
import eccomerce from "../assets/ecommerce.png"
import WebDevelopmentPhases from '../web-development/WebDevelopmentPhases ';
import Services from "../Industries/services";
import FeaturesSection from "../Industries/Features";
import Features from "../Industries/WeCanDevelop"
import { Layout, Calendar, Users, Settings, Grid } from "lucide-react";
function Eccomerce() {
   const ecommerceFeaturesProps  = [
    "Advanced Search & Product Filtering",
    "Location Integration & Delivery Tracking",
    "Cart Abandonment Tracking & Reminders",
    "Dynamic Pricing & Promotions",
    "Customer Analytics & Segmentation",
    "Email & SMS Marketing Automation",
    "Virtual Try-On & AR Shopping Tools",
    "Membership & Subscription Management",
    "Loyalty Programs & Rewards Systems",
];
  return (
    <div>
       <BeautyHeroSection
      title={[
        "Ecommerce",
"Marketing & Website Solutions"
]}
      description="Unlocking Growth for Beauty & Wellness Brands with Effective Web and Marketing Solutions"
    //   backgroundImage={bgImage}
      cards={[
        "Expertise in Ecommerce Marketing",
        "Tailored Solutions for Your Online Store",
        "Continuous Support for Scalability"
      ]}
    />
          <Services
      title="Our Ecommerce Services Include:"
      services={[
          {
          title: "Website Design & Development",
          image: "https://i.pinimg.com/736x/57/5b/b9/575bb90f1bc6f04ee939dad3c03b08e1.jpg"
        },
        {
          title: "Social Media Marketing",
          image: "https://i.pinimg.com/736x/6d/e2/4a/6de24a69b5a28dae70b8b76352fb7945.jpg"
        },
        {
          title: "SEO & Patient Lead Generation",
          image: "https://i.pinimg.com/736x/6e/a8/41/6ea841d6f850df8dc47b6eb2f352c412.jpg"
        },
        {
          title: "Mobile-Friendly Patient Portals",
          image: "https://i.pinimg.com/1200x/e6/4e/51/e64e5154d08b6fccb696332c0cd2762e.jpg"
        },
        {
          title: "Healthcare Advertising & Influencer Marketing",
          image: "https://i.pinimg.com/736x/ad/8e/37/ad8e378eb81d42ff08fb1cfa48c8064e.jpg"
        },
        {
          title: "Analytics & Reporting",
          image: "https://i.pinimg.com/736x/79/d0/91/79d091f10757ec31230b5005fb55352f.jpg"
        }
      ]}
     highlights={[
          {
            title: "50+ Ecommerce Campaigns",
            description: "With over 50 successful campaigns, we know how to drive traffic, increase conversions, and turn browsers into loyal buyers"
          },
          {
            title: "Support Beyond Launch",
            description: "We don’t just build your store — we help you sustain and scale it with ongoing optimization and growth strategies"
          },
          {
            title: "Bespoke Digital Solutions",
            description: "Custom-built platforms that reflect your brand identity while delivering seamless shopping experiences"
          },
          {
            title: "14 Days to Kickstart Your Store",
            description: "Go digital in just two weeks — launch your ecommerce presence fast and start generating sales quickly"
          }
        ]}
    />
 <FeaturesSection
      items={[
        {
          title: "Product Showcase Stores:",
          description:
            "Visually appealing and intuitive platforms to highlight products, collections, and offers, making shopping simple and engaging.",
          icon: <Layout size={22} />
        },
        {
          title: "Order & Inventory Management Systems:",
          description:
            "Tailored systems that simplify order processing, inventory tracking, and overall operational efficiency.",
          icon: <Calendar size={22} />
        },
        {
          title: "Customer Relationship Tools:",
          description:
            "CRM integrations that build stronger connections, foster loyalty, and drive repeat purchases.",
          icon: <Users size={22} />
        },
        {
          title: "Project Management for Ecommerce Operations:",
          description:
            "Streamline workflows with tools designed for online retailers, logistics, and fulfilment teams.",
          icon: <Settings size={22} />
        },
        {
          title: "Personalized Shopping Experiences:",
          description:
            "From AI-driven product recommendations to virtual try-ons, we deliver innovation that enhances the customer journey.",
          icon: <Grid size={22} />
        }
      ]}
    />
  <WebDevelopmentPhases
  phaseTitle="Eccomerce Development Process: Phases"
  phaseDescription="Our development team is fluent in Eccomerce platform and industry standerd we divide into four phases :"
  phasesData={[
    {
      id: 1,
      title: "Discovery Phase",
      description: "We dive deep into your requirements, goals, and target audience. This foundational step ensures alignment and a clear roadmap for success.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
           color: "#FF7F50"
    },
    {
      id: 2,
      title: "UI/UX Design Phase",
      description: "Crafting intuitive and engaging experiences. Our designers create wireframes and high-fidelity prototypes that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       color: "#FAD5A5"
    },
    {
      id: 3,
      title: "Development Phase",
      description: "Secure and scalable coding practices. Our engineers build robust healthcare web solutions with a focus on performance and compliance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#e1a57d"

    },
    {
      id: 4,
      title: "Testing and Deployment Phase",
      description: "Rigorous quality assurance and seamless deployment. We ensure your application is reliable, secure, and ready for users, followed by ongoing support.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
             color: "#FBCEB1"

    }
  ]}
  />

    <div className='section-heading max-w-5xl mx-auto'>
Ecommerce Released Projects
          </div>

      <div className=" top-24">
    <PortalCard
      description="Take a look at our projects and the impact we create."
      image={eccomerce}
      reverse
    />
  </div>
      <Features
  title="Business Consultancy Features We Can Develop"
  features={ecommerceFeaturesProps }
  customText="Your Custom Requirement"
/>

 <BrandsGrid/>
    <ContactSection/>
    </div> 
  );
}


export default Eccomerce;