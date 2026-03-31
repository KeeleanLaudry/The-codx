import bgImage from "../assets/rejuvenation-procedures-300x113.jpg";
import ContactSection from "../Contact/contactForm";
import BeautyHeroSection from "../Industries/HeroBanner";
import BrandsGrid from "../Home/logos";
import PortalCard from "../Industries/Portalcard";
import Health from "../assets/health care.png";
import WebDevelopmentPhases from '../web-development/WebDevelopmentPhases ';
import Services from "../Industries/services";
import FeaturesSection from "../Industries/Features";
import Features from "../Industries/WeCanDevelop";
import Servicessection from "../about/services"
 
import { Layout, Calendar, Users, Settings, Grid } from "lucide-react";
function Healthcare() {
 const healthcareFeaturesProps = [
    "Service Filtering & Doctor Recommendations",
    "Location Integration & Maps",
    "Appointment Tracking & Reminders",
    "Dynamic Pricing & Insurance Integration",
    "Patient Analytics & Segmentation",
    "Email & SMS Automation",
    "Telemedicine & Virtual Consultation Tools",
    "Membership & Insurance Management Systems",
    "Patient Progress Tracking & Reports",
 ];
  return (
    <div>
    <BeautyHeroSection
      title={[
        "Healthcare",
"Marketing & Website Solutions"
]}
      description="Transforming healthcare services with innovative websites, digital platforms, and marketing strategies that put patients first "
    //   backgroundImage={bgImage}
      cards={[
        "Expertise in Healthcare Marketing",
        "Tailored Solutions for Hospitals & Clinics",
        "Continuous Support for Sustainable Growth"
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
            title: "25+ Healthcare Projects",
            description: "With over 25 successful projects, we know how to build trust, attract patients, and enhance healthcare experiences"
          },
          {
            title: "Support Beyond Launch",
            description: "We ensure your digital platforms continue to grow with patient needs through ongoing optimization and support"
          },
          {
            title: "Bespoke Healthcare Solutions",
            description: "From hospital websites to clinic booking systems, we design platforms that reflect your care values while offering seamless experiences. "
          },
          {
            title: "14 Days to Kickstart Your Store",
            description: "Go digital in two weeks — get your healthcare platform live quickly and start connecting with patients right away"
          }
        ]}
    />
 <FeaturesSection
      items={[
        {
          title: "Hospital & Clinic Showcase Websites:",
          description:
            "Visually engaging, user-friendly platforms to highlight treatments, doctors, and services, making it easier for patients to book and engage.",
          icon: <Layout size={22} />
        },
        {
          title: "Patient Relationship Management Tools:",
          description:
            "CRM systems designed to manage patient data, strengthen relationships, and improve follow-ups.",
          icon: <Calendar size={22} />
        },
        {
          title: "Personalized Digital Solutions:",
          description:
            "From telemedicine apps to IoT-integrated health trackers, we create innovative tools for personalized care.",
          icon: <Users size={22} />
        },
        {
          title: "Appointment & Scheduling Systems:",
          description:
            "Tailored booking platforms that simplify patient scheduling and improve operational efficiency.",
          icon: <Settings size={22} />
        },
        {
          title: "Healthcare Project Management Tools:",
          description:
            "Streamline workflows with platforms built for hospitals, clinics, and wellness centers.",
          icon: <Grid size={22} />
        }
      ]}
    />
  <WebDevelopmentPhases
  phaseTitle="Healthcare Development Process: Phases"
  phaseDescription="Our development team is experenced in healthcare in industry standerd and compliance. we divide the process into four phases : "
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

    <div className='section-heading max-w-5xl mx-auto px-5 py-5'>
Healthcare Released Projects
          </div>

      <div className=" top-24">
    <PortalCard
      description="Take a look at our projects and the impact we create."
      image={Health}
      reverse
    />
  </div>
      <Features
  title="Business Consultancy Features We Can Develop"
  features={healthcareFeaturesProps }
  customText="Your Custom Requirement"
/>

<Servicessection />

<div className="py-5">
    <BrandsGrid/>

</div> 
    <ContactSection/>
    </div> 
  );
}
 
export default Healthcare;