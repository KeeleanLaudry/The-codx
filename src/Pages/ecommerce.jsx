import bgImage from "../assets/rejuvenation-procedures-300x113.jpg";
import ContactSection from "../Contact/contactForm";
import BeautyHeroSection from "../Industries/HeroBanner";
import BrandsGrid from "../Home/logos";
import PortalCard from "../Home/card";
import rejuvenation from "../assets/rejuvenation-procedures-300x113.jpg";
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
      title="Ecommerce
Marketing & Website Solutions"
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
          image: "https://images.unsplash.com/photo-1581090700227-1e8b8e0c4a6b"
        },
        {
          title: "Social Media Marketing",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113"
        },
        {
          title: "SEO & Conversion Optimization",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        },
        {
          title: "Mobile-Friendly Stores",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
        },
        {
          title: "Influencer Marketing",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
        },
        {
          title: "Analytics & Reporting",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
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

    <div className='text-white justify-center text-center text-5xl p-5 font-semibold'>
Ecommerce Released Projects
          </div>

      <div className=" top-24">
    <PortalCard
      description="Take a look at our projects and the impact we create."
      image={rejuvenation}
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