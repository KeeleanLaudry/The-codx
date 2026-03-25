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
function RealEstate() {
   const realEstateFeaturesProps  = [
   "Property Search & Advanced Filtering",
    "Location Maps & Integration",
    "Virtual Tours & 3D Walkthroughs",
    "Dynamic Pricing & Promotions",
    "Lead Tracking & Segmentation",
    "Email & SMS Marketing Automation",
    "Mortgage & EMI Calculators",
    "Membership & Agent Management Systems",
    "Investor Dashboard & Reports",
 ];
  return (
    <div>
    <BeautyHeroSection
      title="Real Estate
Marketing & Website Solutions"
      description="Unlocking growth for real estate companies with powerful websites and digital marketing solutions"
    //   backgroundImage={bgImage}
      cards={[
        "Expertise in Real Estate Marketing",
        "Tailored Solutions for Agencies & Developers",
        "Continuous Support for Growth"
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
          title: "SEO & Lead Generation",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        },
        {
          title: "Mobile-Friendly Property Portals",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
        },
        {
          title: "Paid Ads & Influencer Marketing",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
        },
        {
          title: "Analytics & Reporting",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        }
      ]}
     highlights={[
          {
            title: "30+ Real Estate Campaigns",
            description: "With over 30 successful campaigns, we know how to generate leads, showcase properties, and convert interest into sales"
          },
          {
            title: "Support Beyond Launch",
            description: "Our team offers ongoing support to ensure your portal or property brand continues to grow in a competitive market"
          },
          {
            title: "Bespoke Digital Solutions",
            description: "We build platforms that reflect your brand’s credibility while offering seamless user experiences for buyers and investors"
          },
          {
            title: "14 Days to Kickstart Your Project",
            description: "Launch your real estate website in just two weeks and start attracting inquiries faster"
          }
        ]}
    />
 <FeaturesSection
      items={[
        {
          title: "Property Showcase Portals:",
          description:
            "Visually engaging websites to highlight listings, communities, and projects, making it easier for buyers to explore and inquire.",
          icon: <Layout size={22} />
        },
        {
          title: "Appointment & Booking Systems:",
          description:
            "Streamlined scheduling for property viewings, consultations, and virtual tours.",
          icon: <Calendar size={22} />
        },
        {
          title: "Lead Management & CRM Tools:",
          description:
            "Track, nurture, and convert leads into clients with smart CRM integrations tailored for real estate.",
          icon: <Users size={22} />
        },
        {
          title: "Project Management for Developers:",
          description:
            "Tools designed to manage real estate projects, sales pipelines, and team efficiency.",
          icon: <Settings size={22} />
        },
        {
          title: "Personalized Digital Solutions:",
          description:
            "From 3D property tours to virtual consultations, we create innovative tools that elevate the property buying experience.",
          icon: <Grid size={22} />
        }
      ]}
    />
  <WebDevelopmentPhases
  phaseTitle="Real Estate Development Process: Phases"
  phaseDescription="Our development team understands real estate market needs & standerds . we divide the process into four phases : "
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
Real Estate Released Projects
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
  features={realEstateFeaturesProps  }
  customText="Your Custom Requirement"
/>

 <BrandsGrid/>
    <ContactSection/>
    </div> 
  );
}

export default RealEstate;