// src/data/data.js
import { assets } from '../assets/assets';

export const companyData = {
  contact: {
    phone1: "+91 91754 82748",
    phone2: "+91 93713 23603",
    whatsappLink: "https://wa.me/919175482748?text=Hello%20Unixcer%20Technologies,%20I%20would%20like%20to%20discuss%20a%20project.",
    email: "unixcertech.in@gmail.com",
    // website: "unixcer-technologies.web.app",
    address: "Unixcer Technologies, Solapur, Maharashtra, India - 413001"
  },
  hero: {
    title: "Engineering the Intelligent Enterprise",
    subtitle: "Unixcer Technologies builds scalable digital solutions that transform businesses, automate operations, and drive growth with the power of data and AI."
  },
  capabilities: [
    { title: "Full-Stack Architecture", desc: "Robust, secure, and highly available microservices and REST APIs.", img: assets.iconStack },
    { title: "Data Analytics", desc: "Transforming raw operational metrics into actionable, visualized insights.", img: assets.iconAnalytics },
    { title: "AI & ML Integration", desc: "Deploying fine-tuned models and logic systems for predictive scaling and automation.", img: assets.iconAI }
  ],
  solutions: [
    { title: "ERP SOLUTIONS", desc: "Custom ERP systems to streamline operations and improve efficiency.", img: assets.imgERP },
    { title: "E-COMMERCE SOLUTIONS", desc: "Powerful, secure, and scalable e-commerce platforms that drive sales and growth.", img: assets.imgEcom },
    { title: "WEBSITE DEVELOPMENT", desc: "Modern, responsive, and SEO-friendly websites that represent your brand and convert visitors.", img: assets.imgWeb }
  ],
  approach: [
    { step: "DISCOVER", desc: "Understand your business & goals" },
    { step: "DESIGN", desc: "Plan, design & architect the right solution" },
    { step: "DEVELOP", desc: "Build with agility and best practices" },
    { step: "DEPLOY", desc: "Deliver, deploy & ensure smooth transition" },
    { step: "SUPPORT", desc: "Continuous support & evolution" }
  ],
  founders: [
    { 
      name: "Murlikrishna Naral", 
      role: "Founder & Full Stack Developer", 
      coreSkills: "Java SpringBoot • React • MERN • AI/ML",
      otherSkills: "Python Full Stack, DevOps, GenAI, Agentic AI, Numpy, Pandas, Flask, Django, Data Science, Scalable Architecture..."
    },
    { 
      name: "Saiprasad Gortyal", 
      role: "Co-Founder & Full Stack Developer", 
      coreSkills: "Python Django • React • AI/ML • GenAI",
      otherSkills: "Java Full Stack, Numpy, Pandas, PowerBI, Tableau, Adv Excel Data Analytics, Data Science, MLOps..."
    }
  ],
  projects: [
    { title: "EzTurn", category: "Queue Management", desc: "Smart queue management system using predictive analytics to reduce physical wait times.", demoLink: "#" },
    { title: "DigiU", category: "AI / ML", desc: "Human Digital Twins: An AI-Driven Framework utilizing fine-tuned LLMs.", demoLink: "#" },
    { title: "ShareMyRide (SMR)", category: "Web App", desc: "MERN stack-based ride-sharing platform with Google Maps routing integration.", demoLink: "#" }
  ],
  // careers: [] // Left empty to trigger the conditional render logic
};