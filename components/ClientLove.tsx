
import React from 'react';

const ClientLove: React.FC = () => {
  const reviews = [
    { text: "Boosted my sales with Meta ads!", gender: "men", id: 11 },
    { text: "Shopify store looks stunning now!", gender: "women", id: 12 },
    { text: "Professional team, amazing support!", gender: "men", id: 13 },
    { text: "TikTok ads results were fantastic!", gender: "women", id: 14 },
    { text: "Great experience with WordPress design!", gender: "men", id: 15 },
    { text: "Advoque grew our brand fast!", gender: "women", id: 16 },
    { text: "Superb results from TikTok campaigns!", gender: "men", id: 17 },
    { text: "Outstanding Meta Ads management!", gender: "women", id: 18 }
  ];

  return (
    <section className="py-24 bg-[#f8f4f1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Our clients <span className="font-dancing text-4xl text-green-600 block sm:inline">love</span> Advoque Media
        </h2>
      </div>

      {/* Row 1 */}
      <div className="flex space-x-8 animate-marquee mb-8">
        {[...reviews, ...reviews].map((rev, i) => (
          <div key={i} className="flex-shrink-0 bg-white rounded-full px-6 py-3 shadow-md flex items-center space-x-4 min-w-[300px]">
            <img src={`https://randomuser.me/api/portraits/${rev.gender}/${rev.id}.jpg`} alt="user" className="w-10 h-10 rounded-full border-2 border-green-500" />
            <p className="font-medium text-gray-700">{rev.text}</p>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex space-x-8 animate-marquee-reverse">
        {[...reviews.reverse(), ...reviews].map((rev, i) => (
          <div key={i} className="flex-shrink-0 bg-white rounded-full px-6 py-3 shadow-md flex items-center space-x-4 min-w-[300px]">
            <img src={`https://randomuser.me/api/portraits/${rev.gender}/${rev.id}.jpg`} alt="user" className="w-10 h-10 rounded-full border-2 border-green-500" />
            <p className="font-medium text-gray-700">{rev.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLove;
