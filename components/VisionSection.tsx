
import React from 'react';

const VisionSection: React.FC = () => {
  const stats = [
    { name: "Facebook Marketing", percentage: 82 },
    { name: "WordPress Website", percentage: 94 },
    { name: "Shopify Store Designing", percentage: 74 }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <img src="https://advoquemedia.com/wp-content/uploads/2025/10/Untitled-design-1.png" alt="Devices Showcasing Work" className="w-full rounded-2xl shadow-2xl" />
        </div>
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-anton text-[#020330] uppercase">Our Vision:</h2>
          <p className="text-gray-600 text-lg">
            Our vision is to be the driving force behind businesses’ success in the digital age, where social media is not just a platform but a powerful tool for growth and engagement.
          </p>
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between font-bold text-gray-800 uppercase text-sm">
                  <span>{stat.name}</span>
                  <span>{stat.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#7b3ff3] h-full transition-all duration-1000 ease-out" 
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 283.5 27.8" className="relative block w-full h-[60px]" preserveAspectRatio="none">
          <path d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7 s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7 c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z" fill="#f3f4f6"></path>
        </svg>
      </div>
    </section>
  );
};

export default VisionSection;
