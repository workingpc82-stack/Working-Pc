
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-24 bg-gradient-to-b from-[#f8f9ff] to-white overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        {/* 1. The Information (About Me Section - Top Position) */}
        <div className="mb-16">
          <h1 className="flex flex-col items-center mb-8">
            <span className="text-5xl md:text-7xl lg:text-8xl font-anton tracking-tight text-[#020330] leading-none uppercase">
              I'M MUHAMMAD
            </span>
            <span className="text-5xl md:text-7xl lg:text-8xl font-anton tracking-tight text-[#7b3ff3] leading-none uppercase">
              OWAIS
            </span>
          </h1>
          
          <div className="mb-10 max-w-xl mx-auto">
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
              Shopify Store Designer, Web Developer, and Digital Marketer since 2023. 
              Helping brands transform their digital presence with creative excellence.
            </p>
          </div>

          <div className="relative group inline-block">
            <button className="bg-gradient-to-r from-[#8b5cf6] to-[#7b3ff3] hover:from-[#7b3ff3] hover:to-[#6d28d9] text-white px-12 py-4 rounded-xl font-bold transition-all flex items-center shadow-[0_10px_30px_-10px_rgba(123,63,243,0.5)] transform hover:-translate-y-1 text-lg">
              About Me <span className="ml-2">↗</span>
            </button>
            <div className="absolute -inset-1 bg-[#7b3ff3] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          </div>
        </div>

        {/* 2. The Image Section (Bottom Position) */}
        <div className="relative w-full max-w-3xl lg:max-w-4xl">
          {/* Soft Glow behind the image */}
          <div className="absolute -inset-10 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
          
          <img 
            src="https://advoquemedia.com/wp-content/uploads/2025/10/Untitled-design-1.png" 
            alt="Muhammad Owais Banner" 
            className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] transform transition-transform duration-500 hover:scale-[1.01]"
          />
          
          {/* Floating decoration */}
          <div className="absolute top-1/4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-bounce z-20 hidden md:flex">
            <span className="text-2xl">🔥</span>
          </div>
          <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-[#7b3ff3] rounded-full shadow-lg flex items-center justify-center animate-pulse z-20 hidden md:flex">
            <span className="text-white text-xl">✓</span>
          </div>
        </div>

      </div>

      {/* Decorative background shape divider */}
      <div className="shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
