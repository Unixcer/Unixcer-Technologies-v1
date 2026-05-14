// src/pages/Careers.jsx
import { companyData } from '../data/data';
import { Send } from 'lucide-react';

export default function Careers() {
  const hasCareers = companyData.careers && companyData.careers.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-[70vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1b3d] mb-4">Join the Collective</h1>
        <p className="text-gray-500 font-medium">Build scalable solutions with the power of data and AI.</p>
      </div>
      
      {!hasCareers ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
           <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
             <Send size={24} />
           </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No Open Roles Currently</h3>
          <p className="text-gray-500">We are not actively hiring at this moment, but we are always looking for great talent. <br/> Feel free to drop your resume via WhatsApp.</p>
          <a href={companyData.contact.whatsappLink} target="_blank" rel="noreferrer" className="inline-block mt-6 text-blue-600 font-bold hover:underline">Connect on WhatsApp &rarr;</a>
        </div>
      ) : (
        <div className="space-y-6">
          {companyData.careers.map((job, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-lg transition-shadow">
              {/* ... (Job mapping logic) ... */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}