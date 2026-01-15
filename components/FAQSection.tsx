
import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services does Advoque Media offer?",
      a: "We provide Shopify store design, WordPress website development, Facebook Ads management, and TikTok Ads marketing services to help businesses grow online."
    },
    {
      q: "How long does it take to build a Shopify store?",
      a: "Usually, a complete Shopify store takes around 7 to 10 business days, depending on your design requirements and number of products."
    },
    {
      q: "Do you create custom WordPress websites?",
      a: "Yes! We design and develop fully custom WordPress websites tailored to your business goals, with SEO-friendly structure and responsive design."
    },
    {
      q: "Can you manage my Facebook and TikTok Ads campaigns?",
      a: "Absolutely. We help you create, manage, and optimize ad campaigns on both platforms to boost traffic, sales, and brand awareness."
    },
    {
      q: "What do I need to get started with TikTok or Facebook Ads?",
      a: "You’ll just need your ad account access, target audience details, and budget. Our team will handle everything else — from creative design to campaign setup."
    }
  ];

  return (
    <section className="py-24 bg-white px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-anton text-[#020330] uppercase relative z-10">Frequently Asked Questions</h2>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-anton text-gray-50 uppercase z-0 opacity-50 hidden md:block">FAQs</span>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-[#7b3ff3]' : 'text-gray-700'}`}>
                  {i + 1}. {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#7b3ff3] text-white rotate-180' : 'bg-purple-100 text-[#7b3ff3]'}`}>
                  {openIndex === i ? '−' : '+'}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-[#020330] rounded-3xl p-12 text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-anton text-white uppercase tracking-tighter">LET'S TALK WITH US</h2>
            <a href="https://wa.me/923117232640" className="bg-[#7b3ff3] hover:bg-purple-700 text-white px-10 py-4 rounded-md font-bold transition-all inline-flex items-center shadow-2xl">
              CONTACT NOW <span className="ml-2">↗</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
