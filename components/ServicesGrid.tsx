
import React from 'react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      num: "01",
      title: "Social Media Marketing",
      points: [
        "Facilizes sed odic morbid quiz.",
        "Design nexus et malasada",
        "Artistic mind will be great",
        "Roadmap for business agency"
      ]
    },
    {
        num: "02",
        title: "TikTok Ads Manager",
        points: [
          "Facilizes sed odic morbid quiz.",
          "Design nexus et malasada",
          "Artistic mind will be great",
          "Roadmap for business agency"
        ]
      },
      {
        num: "03",
        title: "Website Development",
        points: [
          "Facilizes sed odic morbid quiz.",
          "Design nexus et malasada",
          "Artistic mind will be great",
          "Roadmap for business agency"
        ]
      },
      {
        num: "04",
        title: "Shopify Store Development",
        points: [
          "Facilizes sed odic morbid quiz.",
          "Design nexus et malasada",
          "Artistic mind will be great",
          "Roadmap for business agency"
        ]
      }
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-anton text-[#020330] uppercase">Where Creativity Meets Digital Innovation</h2>
          <p className="text-[#7b3ff3] font-bold tracking-widest text-sm uppercase">Our Services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <span className="text-4xl font-anton text-gray-200 group-hover:text-[#7b3ff3] transition-colors">{s.num}</span>
              <h3 className="text-xl font-anton text-[#020330] mt-4 mb-6 uppercase leading-tight">{s.title}</h3>
              <ul className="space-y-3 mb-8">
                {s.points.map((p, idx) => (
                  <li key={idx} className="flex items-center text-gray-500 text-sm">
                    <span className="w-1.5 h-1.5 bg-[#7b3ff3] rounded-full mr-2"></span> {p}
                  </li>
                ))}
              </ul>
              <div className="flex justify-end">
                <button className="text-gray-400 group-hover:text-[#7b3ff3] text-2xl transition-colors">↗</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
