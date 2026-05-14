// src/pages/Projects.jsx
import { companyData } from '../data/data';

export default function Projects() {
  const hasProjects = companyData.projects && companyData.projects.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-[70vh]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1b3d] mb-12 text-center">Our Engineering Portfolio</h1>
      
      {!hasProjects ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Portfolio Updating</h3>
          <p className="text-gray-500">We are currently curating our latest case studies. Please check back soon.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyData.projects.map((project, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold mb-4 w-max uppercase tracking-wider">{project.category}</span>
              <h3 className="text-2xl font-extrabold text-[#0b1b3d] mb-3">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-8 flex-grow font-medium leading-relaxed">{project.desc}</p>
              {/* <a href={project.demoLink} className="text-blue-600 font-bold hover:text-purple-600 transition-colors text-sm inline-flex items-center gap-1 group">
                View Live Demo <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}