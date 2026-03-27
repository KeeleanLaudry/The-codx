import bgImage from "../assets/rejuvenation-procedures-300x113.jpg";
import ContactSection from "../Contact/contactForm";
import BeautyHeroSection from "../Industries/HeroBanner";
import BrandsGrid from "../Home/logos";
import PortalCard from "../Industries/Portalcard";
import BeautyWellness from "../assets/beauty & welness.png"
import WebDevelopmentPhases from '../web-development/WebDevelopmentPhases ';
import Services from "../Industries/services";
import FeaturesSection from "../Industries/Features";
import Features from "../Industries/WeCanDevelop";
import Servicessection from "../about/services"

import { Layout, Calendar, Users, Settings, Grid } from "lucide-react";

function BeautyPage() {
  const featuresData = [
  "Service Filtering & Recommendations",
  "Location Integration",
  "Appointment Tracking & Reminders",
  "Dynamic Pricing & Promotions",
  "Customer Analytics & Segmentation",
  "Email Marketing Automation",
  "Virtual Consultation Tools",
  "Membership and Insurance Management Systems",
  "Client Progress Tracking",
];
const scrollCardsData = [
  {
    title: "Digital Marketing",
    description: "Grow your brand with targeted campaigns and SEO strategies.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48"
  },
  {
    title: "Emerging Tech",
    description: "Explore AI, IoT, and next-gen technologies.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Advertising and Creative",
    description: "Creative campaigns that drive engagement.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    title: "IT Services & Solutions",
    description: "Reliable IT solutions for modern businesses.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Development",
    description: "Custom web and app development services.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  },
];
  return (
   <div>
    <BeautyHeroSection
      title="Beauty & Wellness Marketing & Website Solutions"
      description="Unlocking Growth for Beauty & Wellness Brands with Effective Web and Marketing Solutions"
    //   backgroundImage={bgImage}
      cards={[
        "Expertise in Beauty & Wellness Marketing",
        "Tailored Solutions for Your Business",
        "Continuous Support for Growth"
      ]}
    />
    <Services
      title="Our Services for Beauty & Wellness Include:"
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
            title: "20+ Beauty & Wellness Campaigns",
            description: "With over 20+ successful campaigns, we know how to attract clients and convert inquiries into loyal patrons for your business "
          },
          {
            title: "Support Beyond Launch",
            description: "Our team offers consistent support to help you sustain and grow your online presence in the competitive beauty and wellness market"
          },
          {
            title: "Bespoke Digital Solutions",
            description: "We create platforms that reflect your brand’s essence while delivering exceptional user experiences"
          },
          {
            title: "14 Days to Kickstart Your Project",
            description: "Go Digital in Two Weeks. Get your online presence up and running quickly, attracting clients in no time"
          }
        ]}
    />
 <FeaturesSection
      items={[
        {
          title: "Salon and Clinic Showcase Platforms:",
          description:
            "We design visually appealing and intuitive platforms to showcase your services, treatments, and packages, making it easier for clients to book and engage with your brand.",
          icon: <Layout size={22} />
        },
        {
          title: "Appointment and Booking Systems:",
          description:
            "Our tailored appointment booking systems simplify scheduling, improve client management, and enhance operational efficiency.",
          icon: <Calendar size={22} />
        },
        {
          title: "Customer Relationship Tools:",
          description:
            "We provide CRM tools that help beauty and wellness brands build lasting client relationships, foster loyalty, and drive repeat appointments.",
          icon: <Users size={22} />
        },
        {
          title: "Project Management for Wellness Operations:",
          description:
            "Streamline your workflows with customized project management tools designed to enhance operational efficiency for salons and clinics.",
          icon: <Settings size={22} />
        },
        {
          title: "Personalized Digital Solutions:",
          description:
            "From IoT-integrated wellness apps to virtual consultations, we create innovative tools for personalized beauty and wellness experiences.",
          icon: <Grid size={22} />
        }
      ]}
    />
  <WebDevelopmentPhases
  phaseTitle="Beauty & Wellness Development Process: Phases"
  phaseDescription="Our development team is fluent in Beauty & wellness industry and its standerd. with divided into four phases  "
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
Beauty & Wellness Released Projects
          </div>

      <div className=" top-24">
    <PortalCard
      description="Take a look at our projects and the impact we create."
      image={BeautyWellness}
      reverse
    />
  </div>

<Features
  title="Beauty & Wellness Features We Can Develop"
  features={featuresData}
  customText="Your Custom Requirement"
/>
<Servicessection />
    <BrandsGrid/>
    <ContactSection/>
    </div>
  );
}

export default BeautyPage;