
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-4 lg:px-12 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://advoquemedia.com/wp-content/uploads/2025/10/Untitled-design-29.png.webp" alt="Advoque Media Logo" className="h-10 lg:h-12" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8">
        <a href="#" className="text-purple-600 font-semibold text-sm hover:text-purple-800 transition-colors">HOME</a>
        <a href="#" className="text-gray-700 font-semibold text-sm hover:text-purple-600 transition-colors uppercase">Tiktok Ads Manager</a>
        <div className="relative group">
            <button className="text-gray-700 font-semibold text-sm flex items-center hover:text-purple-600 transition-colors uppercase">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
        </div>
        <div className="relative group">
            <button className="text-gray-700 font-semibold text-sm flex items-center hover:text-purple-600 transition-colors uppercase">
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
        </div>
        <a href="#" className="text-gray-700 font-semibold text-sm hover:text-purple-600 transition-colors">CONTACT US</a>
      </div>

      <div className="hidden lg:block">
        <a href="https://wa.me/923117232640" className="bg-[#020330] text-white px-6 py-3 rounded text-sm font-bold flex items-center hover:bg-black transition-all">
          Book an Appointment <span className="ml-2">↗</span>
        </a>
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col p-4 space-y-4 lg:hidden shadow-lg">
          <a href="#" className="text-purple-600 font-semibold">HOME</a>
          <a href="#" className="text-gray-700 font-semibold">TIKTOK ADS MANAGER</a>
          <a href="#" className="text-gray-700 font-semibold">SERVICES</a>
          <a href="#" className="text-gray-700 font-semibold">ABOUT US</a>
          <a href="#" className="text-gray-700 font-semibold">CONTACT US</a>
          <a href="https://wa.me/923117232640" className="bg-[#020330] text-white px-6 py-3 rounded text-center font-bold">Book an Appointment</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
