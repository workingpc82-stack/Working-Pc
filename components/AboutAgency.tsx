
import React from 'react';

const AboutAgency: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Profile Picture Container */}
        <div className="relative group order-2 lg:order-1">
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-50 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-50 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
              alt="Muhammad Owais Profile" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
              <p className="text-[#020330] font-bold text-sm uppercase tracking-wider">Founder & CEO</p>
              <p className="text-[#7b3ff3] font-dancing text-xl">Muhammad Owais</p>
            </div>
          </div>
          
          {/* Floating Experience Badge */}
          <div className="absolute -top-4 -right-4 bg-[#7b3ff3] text-white p-4 rounded-2xl shadow-2xl rotate-12 z-20 hidden md:block">
            <p className="font-anton text-2xl leading-none">2+</p>
            <p className="text-[10px] font-bold uppercase tracking-tighter">Years Exp.</p>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="inline-block px-4 py-1 bg-purple-50 text-[#7b3ff3] rounded-full text-xs font-bold tracking-widest uppercase">
            Since 2023
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-anton text-[#020330] uppercase leading-tight">
            Advoque Social Media <br />
            <span className="text-[#7b3ff3]">Marketing Agency</span>
          </h2>

          <h3 className="text-xl font-bold text-gray-800 leading-relaxed max-w-xl">
            Shaping digital landscapes, helping businesses thrive in the ever-evolving realm of social media.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                <span className="text-teal-600 font-bold">01</span>
              </div>
              <p className="text-sm leading-relaxed">
                We analyze your target audience, competition, and industry trends to ensure your social media efforts are strategically aligned.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-bold">02</span>
              </div>
              <p className="text-sm leading-relaxed">
                We actively nurture your social media community, responding to comments, messages, and feedback promptly.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button className="bg-[#7b3ff3] hover:bg-[#6d28d9] text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center shadow-lg shadow-purple-100 transform hover:-translate-y-1">
              LET'S TALK <span className="ml-2">↗</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAgency;
