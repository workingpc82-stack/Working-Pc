
import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('shopify');

  const shopifyItems = [
    "https://advoquemedia.com/wp-content/uploads/2025/10/screencapture-homedecorstation-shop-2025-10-14-15-28-08-min-68ee26cc9cbae-scaled.webp",
    "https://advoquemedia.com/wp-content/uploads/2025/10/screencapture-topfashiongarment-2025-10-14-15-28-37-min-68ee26cd4df52-scaled.webp",
    "https://advoquemedia.com/wp-content/uploads/2025/10/screencapture-seevonsstore-myshopify-2025-10-14-15-28-56-min-68ee26d22fcb2-scaled.webp"
  ];

  return (
    <section className="py-24 bg-white px-6 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-anton text-[#020330] uppercase mb-4">Our Portfolio</h2>
        <p className="text-gray-600 mb-12">Designing ideas into stunning digital realities.</p>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12 overflow-x-auto pb-4">
          <button 
            onClick={() => setActiveTab('shopify')}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap ${activeTab === 'shopify' ? 'bg-[#7b3ff3] text-white shadow-lg shadow-purple-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            SHOPIFY STORES
          </button>
          <button 
            onClick={() => setActiveTab('wordpress')}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap ${activeTab === 'wordpress' ? 'bg-[#7b3ff3] text-white shadow-lg shadow-purple-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            WORDPRESS WEBSITES
          </button>
          <button 
            onClick={() => setActiveTab('business')}
            className={`px-8 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap ${activeTab === 'business' ? 'bg-[#7b3ff3] text-white shadow-lg shadow-purple-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            BUSINESS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTab === 'shopify' && shopifyItems.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl border-4 border-gray-100 aspect-[3/4]">
              <div className="absolute inset-0 overflow-hidden portfolio-scroll">
                 <img 
                   src={img} 
                   alt={`Work ${i+1}`} 
                   className="w-full transition-transform duration-[10000ms] group-hover:-translate-y-[calc(100%-100%)]"
                   style={{ transform: 'translateY(0%)' }}
                   onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-75%)')}
                   onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0%)')}
                 />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-start translate-y-full group-hover:translate-y-0 transition-transform">
                 <span className="text-white font-bold">Project Preview</span>
                 <span className="text-purple-400 text-xs font-bold uppercase">Web Design</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
