
import React from 'react';

const FeedbackCarousel: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-anton text-[#020330] leading-none uppercase">
            OUR CUSTOMER<br />
            <span className="text-[#7b3ff3]">FEEDBACKS</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our clients’ success is our best reward.
          </p>
          
          <div className="flex gap-4 overflow-x-auto pb-4">
            <img src="https://advoquemedia.com/wp-content/uploads/2025/10/3.png" className="h-40 rounded-lg shadow-lg" alt="feedback" />
            <img src="https://advoquemedia.com/wp-content/uploads/2025/10/4.png" className="h-40 rounded-lg shadow-lg" alt="feedback" />
            <img src="https://advoquemedia.com/wp-content/uploads/2025/10/5.png" className="h-40 rounded-lg shadow-lg" alt="feedback" />
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <img src="https://advoquemedia.com/wp-content/uploads/2025/10/Untitled-design-6.png" alt="Success Screenshots" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default FeedbackCarousel;
