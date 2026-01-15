
import React from 'react';

const RatingsSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#fafafa] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center space-x-2 bg-white border border-dashed border-gray-400 px-6 py-2 rounded-full mb-8">
          <span className="font-bold text-sm">"Amazing"</span>
          <img src="https://cdn.shopify.com/s/files/1/0798/4267/2987/files/Revive_39.png?v=1733346031" alt="stars" className="h-4" />
          <span className="text-xs text-gray-500">Rated 4.4/5 on</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" alt="Google" className="h-4" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wider">E-commerce & Marketing</h2>
        <h3 className="text-3xl font-anton text-[#020330] mb-8">🔥 Digital Marketing Services – All in One Place</h3>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-xl font-bold text-gray-800">
            <span className="text-red-600">4.4/5 Star Ratings</span> ⚡ Trusted by 1200+ Clients – Now It’s Your Turn!
          </div>
          <img src="https://advoquemedia.com/wp-content/uploads/2025/10/trustpilot-stars-logo-8C8758535D-seeklogo.com_.webp" alt="Trustpilot" className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
