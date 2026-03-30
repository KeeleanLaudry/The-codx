import bgImage from "../assets/rejuvenation-procedures-300x113.jpg";
import ContactSection from "../Contact/contactForm";
import BeautyHeroSection from "../Industries/HeroBanner";
import BrandsGrid from "../Home/logos";
import PortalCard from "../Industries/Portalcard";
import BusinessConsultancysection from "../assets/business consulatancy.png";
import WebDevelopmentPhases from '../web-development/WebDevelopmentPhases ';
import Services from "../Industries/services";
import FeaturesSection from "../Industries/Features";
import Features from "../Industries/WeCanDevelop"
import { Layout, Calendar, Users, Settings, Grid } from "lucide-react";

function BusinessConsultancy() {
  const businessFeatures = [
   "Performance Tracking & Analytics",
    "Market & Competitor Analysis Tools",
    "Workflow Automation",
    "CRM & Client Portals",
    "Financial Forecasting & Dashboards",
    "Email & Marketing Automation",
    "Knowledge Base & Training Modules",
    "Membership & Subscription Systems",
    "Investor & Stakeholder Reports",
];
  return (
    <div>
      <BeautyHeroSection
      title={[
"Business Consultancy",
"Marketing & Website Solutions"
      ]}
      description="Empowering businesses with tailored strategies, technology, and marketing solutions that drive sustainable growth"
    //   backgroundImage={bgImage}
      cards={[
        "Expertise in Business Consulting",
        "Tailored Strategies for Every Industry",
        "Continuous Support for Long-Term Success"
      ]}
    />
    <Services
      title="Our Services for Business Consultancy Include:"
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
            title: "40+ Successful Consulting Projects",
            description: "With over 40 projects delivered, we know how to solve complex challenges and transform businesses across industries"
          },
          {
            title: "Support Beyond Strategy",
            description: "Support Beyond Strategy We don’t just create plans — we help you implement them and measure results for lasting success"
          },
          {
            title: "Bespoke Business Solutions",
            description: "From startups to enterprises, we design solutions that align with your vision and operational needs"
          },
          {
            title: "14 Days to Kickstart Your Transformation",
            description: "Get your consulting project rolling in just two weeks and start seeing measurable improvements"
          }
        ]}
    />
 <FeaturesSection
      items={[
        {
          title: "Business Performance Dashboards:",
          description:
            "Custom dashboards to track KPIs, financials, and business performance in real time.",
          icon: <Layout size={22} />
        },
        {
          title: "Client Relationship Tools:",
          description:
            "CRM systems designed to strengthen relationships, improve client management, and streamline communication.",
          icon: <Calendar size={22} />
        },
        {
          title: "Personalized Digital Solutions:",
          description:
            "From AI-driven insights to workflow automation, we provide digital tools that enhance efficiency.",
          icon: <Users size={22} />
        },
        {
          title: "Project & Workflow Management:",
          description:
            "Simplify operations with tailored project management platforms for teams and organizations.",
          icon: <Settings size={22} />
        },
        {
          title: "Training & Knowledge Platforms:",
          description:
            "Build learning hubs and e-consultation tools for knowledge sharing, training, and client engagement.",
          icon: <Grid size={22} />
        }
      ]}
    />
  <WebDevelopmentPhases
  phaseTitle="Business Consultancy Development Process: Phases"
  phaseDescription="Our Consultancy framework ensures clarity & measurable outcomes through structured phases : "
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
Business Consultancy Released Projects
          </div>

      <div className=" top-24">
    <PortalCard
      description="Take a look at our projects and the impact we create."
      image={BusinessConsultancysection}
      reverse
    />
  </div>
      <Features
  title="Business Consultancy Features We Can Develop"
  features={businessFeatures}
  customText="Your Custom Requirement"
/>

 <BrandsGrid/>
    <ContactSection/>
    </div> 
  );
}

export default BusinessConsultancy;