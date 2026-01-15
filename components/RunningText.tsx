
import React from 'react';

const RunningText: React.FC = () => {
  const items = [
    "SHOPIFY STORE",
    "WORDPRESS WEBSITE",
    "TIKTOK MARKETING",
    "FACEBOOK MARKETING",
    "TIKTOK ADS MANAGER"
  ];

  return (
    <div className="bg-[#7b3ff3] py-8 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee pause-hover items-center">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center text-white font-anton text-2xl md:text-4xl mx-12 uppercase">
            <span className="mr-4">⚡</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningText;
