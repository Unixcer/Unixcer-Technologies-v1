import { companyData } from '../data/data';
import { MapPin, Phone, Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1b3d] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <h3 className="font-bold text-xl mb-4 text-blue-400">IDEAS ENGINEERED.<br/><span className="text-purple-400">SOLUTIONS DELIVERED.</span></h3>
             <p className="text-sm text-gray-300">Impact that Scales...</p>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="text-blue-500 shrink-0" />
            <div>
              <h4 className="font-bold text-sm mb-1">ADDRESS</h4>
              <p className="text-xs text-gray-400">{companyData.contact.address}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3">
               <Phone className="text-blue-500 shrink-0" />
               <div>
                 <h4 className="font-bold text-sm mb-1">CONTACT</h4>
                 <p className="text-xs text-gray-400">{companyData.contact.phone1}</p>
                 <p className="text-xs text-gray-400">{companyData.contact.phone2}</p>
               </div>
             </div>
             {/* <div className="flex items-center gap-3">
               <Globe className="text-blue-500 shrink-0" />
               <div>
                 <h4 className="font-bold text-sm mb-1">WEBSITE</h4>
                 <p className="text-xs text-gray-400">{companyData.contact.website}</p>
               </div>
             </div> */}
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-blue-500 shrink-0" />
            <div>
              <h4 className="font-bold text-sm mb-1">EMAIL</h4>
              <p className="text-xs text-gray-400">{companyData.contact.email}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Unixcer Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}