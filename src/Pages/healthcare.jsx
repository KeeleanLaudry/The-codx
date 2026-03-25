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
      title="Healthcare
Marketing & Website Solutions"
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
          title: "Mobile-Friendly Patient Portals",
          image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
        },
        {
          title: "Healthcare Advertising & Influencer Marketing",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
        },
        {
          title: "Analytics & Reporting",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
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

    <div className='text-white justify-center text-center text-5xl p-5 font-semibold'>
Healthcare Released Projects
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
  features={healthcareFeaturesProps }
  customText="Your Custom Requirement"
/>

 <BrandsGrid/>
    <ContactSection/>
    </div> 
  );
}
 
export default Healthcare;