// src/pages/Founders.jsx
import { companyData } from '../data/data';

export default function Founders() {
  // Remove Saiprasad / Gortyal card
  const founders = companyData.founders?.filter(
    (founder) =>
      !founder.name.toLowerCase().includes('saiprasad') &&
      !founder.name.toLowerCase().includes('gortyal')
  );

  if (!founders || founders.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-100/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-extrabold tracking-[0.2em] uppercase shadow-sm mb-5">
            Leadership
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-[#0b1b3d] mb-4">
            Meet The Founder
          </h1>

          <p className="max-w-xl mx-auto text-gray-500 text-base leading-relaxed">
            Engineering scalable systems and modern AI-powered experiences.
          </p>
        </div>

        {/* Founder Card */}
        <div className="flex justify-center">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="group relative w-full max-w-2xl rounded-[32px] border border-white/50 bg-white/70 backdrop-blur-xl p-8 md:p-10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)] transition-all duration-500 hover:-translate-y-2"
            >

              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-[32px] p-[1px] bg-gradient-to-br from-blue-200/40 via-purple-200/30 to-cyan-200/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Decorative Orb */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700"></div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-700"></div>

              <div className="relative z-10">

                {/* Role */}
                <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-blue-600 mb-4">
                  {founder.role
                    .replace(' & FULL STACK DEVELOPER', '')
                    .replace('FULL STACK DEVELOPER', '')
                    .trim()}
                </p>

                {/* Name */}
                <h2 className="text-3xl md:text-4xl font-black text-[#0b1b3d] mb-6">
                  {founder.name}
                </h2>

                {/* Accent Line */}
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-8"></div>

                {/* Core Skills */}
                <div className="mb-8">
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.25em] mb-3">
                    Core Tech Stack
                  </h4>

                  <p className="text-lg font-bold text-gray-800 leading-relaxed">
                    {founder.coreSkills}
                  </p>
                </div>

                {/* Additional Expertise */}
                <div>
                  <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.25em] mb-3">
                    Additional Expertise
                  </h4>

                  <p className="text-gray-500 text-base leading-relaxed font-medium">
                    {founder.otherSkills}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}