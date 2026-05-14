// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';
import { companyData } from '../data/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img src={assets.logo} alt="Unixcer Logo" className="h-12 w-auto " />
            <div>
              <h1 className="font-extrabold text-2xl tracking-tight text-[#0b1b3d]">UNIXCER</h1>
              <p className="text-[10px] tracking-widest text-blue-600 uppercase font-bold">Technologies</p>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">Home</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">Projects</Link>
            <Link to="/founders" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">Founders</Link>
            {/* <Link to="/careers" className="text-gray-700 hover:text-blue-600 font-bold transition-colors">Careers</Link> */}
            <a href={companyData?.contact?.whatsappLink || "#"} target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-blue-700 hover:scale-105 transition-all">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold hover:text-blue-600">Home</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold hover:text-blue-600">Projects</Link>
            <Link to="/founders" onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold hover:text-blue-600">Founders</Link>
            {/* <Link to="/careers" onClick={() => setIsOpen(false)} className="block text-gray-700 font-bold hover:text-blue-600">Careers</Link> */}
            <a href={companyData?.contact?.whatsappLink || "#"} target="_blank" rel="noreferrer" className="bg-blue-600 w-35 text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-blue-700 hover:scale-105 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}