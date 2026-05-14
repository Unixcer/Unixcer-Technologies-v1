// src/pages/Home.jsx
import { companyData } from '../data/data';
import { assets } from '../assets/assets';
import { Rocket, Search, PenTool, Code, Send, Headphones } from 'lucide-react';

export default function Home() {
  const approachIcons = [Search, PenTool, Code, Send, Headphones];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0b1b3d] leading-tight mb-6">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Intelligent</span> Enterprise
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
            {companyData.hero.subtitle}
          </p>
          <a 
            href={companyData.contact.whatsappLink}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1"
          >
            <Rocket size={20} className="animate-pulse" />
            LET'S BUILD WHAT'S NEXT
          </a>
        </div>
        <div className="relative flex justify-center items-center">
           {/* The actual Glowing Cube Graphic with a subtle bouncing animation */}
           <img 
             src={assets.heroCube} 
             alt="Intelligent Architecture Cube" 
             className="w-full max-w-[500px] object-contain "
           />
        </div>
      </section>

      {/* Core Capabilities with specific PNGs */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-sm font-extrabold tracking-widest text-gray-500 uppercase mb-12">Core Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {companyData.capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg border border-blue-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group cursor-default">
              <div className="h-24 flex items-center justify-center mb-6">
                <img src={cap.img} alt={cap.title} className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-extrabold text-xl mb-3 text-[#0b1b3d]">{cap.title}</h3>
              <p className="text-gray-500 text-sm font-medium">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Solutions with specific PNGs */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-sm font-extrabold tracking-widest text-gray-500 uppercase mb-12">Business Solutions We Build</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {companyData.solutions.map((sol, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col">
              <div className="p-8 pb-4 text-left flex-grow">
                <h3 className="font-extrabold text-xl mb-3 text-blue-700">{sol.title}</h3>
                <p className="text-gray-500 text-sm font-medium">{sol.desc}</p>
              </div>
              <div className="w-full bg-blue-50/50 p-6 flex justify-center items-center mt-auto">
                <img src={sol.img} alt={sol.title} className="w-full max-w-[280px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-sm font-extrabold tracking-widest text-gray-500 uppercase text-center mb-16">Our Approach</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 -z-10 -translate-y-1/2 rounded-full"></div>
          {companyData.approach.map((step, idx) => {
            const Icon = approachIcons[idx];
            const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500', 'bg-[#0b1b3d]'];
            return (
              <div key={idx} className="flex flex-col items-center text-center max-w-[160px] group">
                <div className={`w-20 h-20 ${colors[idx]} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-all duration-300 group-hover:scale-110`}>
                  <Icon size={32} />
                </div>
                <h4 className="font-extrabold text-[15px] text-[#0b1b3d] mb-2">{step.step}</h4>
                <p className="text-xs text-gray-500 font-medium">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}