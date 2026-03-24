import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    { key: "web", label: "Web Platforms" },
    { key: "database", label: "Database" },
    { key: "cloud", label: "Cloud & DevOps" }
  ];

  const technologies = [
    // Web Platforms
    { name: "React js", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.Js", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Typescript", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Html5", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Javascript", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "GraphQL", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Apollo", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apollographql/apollographql-original.svg" },
    { name: "MaterialUI", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "Rest API", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Node.js", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Flask", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Fast API", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "NestJS", category: "web", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
    
    // Database
    { name: "MongoDB", category: "database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", category: "database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", category: "database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Redis", category: "database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Elasticsearch", category: "database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    { name: "Firebase", category: "database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    
    // Cloud & DevOps
    { name: "AWS", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Jenkins", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Azure", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Heroku", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
    { name: "Nginx", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "Gradle", category: "cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg" }
  ];

  const filteredTech = technologies.filter(t => t.category === activeTab);

  return (
    <section className="px-6 relative overflow-hidden">
   
     

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="hero-gradient text-4xl md:text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technologies We Use
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
  <div className="w-full max-w-7xl bg-[#90550c]  rounded-full shadow-lg flex flex-wrap justify-center gap-5">

            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                        ? "bg-[#C97A1B] text-white shadow-md"
              : "text-gray-300 hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredTech.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative mb-3">
<div className="w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center p-4 group-hover:bg-[#C97A1B]/10 transition">                   <img
  src={tech.logo}
  alt={tech.name}
  className="w-12 h-12 object-contain opacity-90 group-hover:opacity-100"

                     
                    />
                  </div>
                </div>
                
<p className="text-white text-sm font-semibold mt-2">                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      
      </div>
    </section>
  );
};

export default TechnologiesSection;