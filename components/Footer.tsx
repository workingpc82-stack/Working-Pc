
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <img src="https://advoquemedia.com/wp-content/uploads/2025/10/Agency-LOGO-.png" alt="Logo" className="h-12" />
          <p className="text-gray-400 text-sm leading-relaxed">
            At <strong>Advoque Media</strong>, we help businesses grow online through powerful digital strategies.
          </p>
          <div className="flex space-x-4">
             {['facebook', 'twitter', 'youtube'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#7b3ff3] transition-colors">
                   <img src={`https://cdn-icons-png.flaticon.com/512/733/733${social === 'facebook' ? '547' : social === 'twitter' ? '577' : '581'}.png`} className="w-5 h-5 invert" alt={social} />
                </a>
             ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-anton uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Payments</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-anton uppercase tracking-widest">Information</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-anton uppercase tracking-widest">Get In Touch</h3>
          <div className="space-y-4 text-gray-400 text-sm">
            <p>Phone: 0311-7232640</p>
            <p>Email: contact@advoquemedia.com</p>
            <p>Address: Chichawatni, Punjab</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase font-bold tracking-widest">
        <p>© 2025 ADVOQUEMEDIA</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">X-TWITTER</a>
          <a href="#" className="hover:text-white">FACEBOOK</a>
          <a href="#" className="hover:text-white">YOUTUBE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
