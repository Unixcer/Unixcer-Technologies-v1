// src/pages/Founders.jsx
import { companyData } from '../data/data';

export default function Founders() {
  if (!companyData.founders || companyData.founders.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-[70vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1b3d] mb-4">Meet the Leadership</h1>
        <p className="text-gray-500 font-medium">The engineering minds behind the scalable solutions.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        {companyData.founders.map((founder, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
            {/* Decorative background element */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold text-[#0b1b3d] mb-1">{founder.name}</h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold uppercase tracking-wide text-sm mb-6">{founder.role}</p>
              
              <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Core Tech Stack</h4>
                <p className="text-lg font-bold text-gray-800 leading-snug">{founder.coreSkills}</p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Additional Expertise</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">{founder.otherSkills}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}