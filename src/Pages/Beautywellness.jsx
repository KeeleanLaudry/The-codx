import bgImage from "../assets/rejuvenation-procedures-300x113.jpg";
import ContactSection from "../Contact/contactForm";
import BeautyHeroSection from "../Industries/HeroBanner";
import BrandsGrid from "../Home/logos";
import PortalCard from "../Home/card";
import rejuvenation from "../assets/rejuvenation-procedures-300x113.jpg";
import WebDevelopmentPhases from '../web-development/WebDevelopmentPhases ';
import Services from "../Industries/services";
import FeaturesSection from "../Industries/Features";
import Features from "../Industries/WeCanDevelop";
import ScrollCards from "../Industries/Scrollablecard"
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
      title="Our Services for Healthcare Include:"
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
          title: "SEO & Patient Lead Generation",
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
  phaseTitle="Healthcare Development Process: Phases"
  phaseDescription="Our development team is experienced in healthcare industries standerds and compliance we divide the process into four phases"
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
  title="Beauty & Wellness Features We Can Develop"
  features={featuresData}
  customText="Your Custom Requirement"
/>
<ScrollCards items={scrollCardsData} />
    <BrandsGrid/>
    <ContactSection/>
    </div>
  );
}

export default BeautyPage;