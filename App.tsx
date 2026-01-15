
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RunningText from './components/RunningText';
import AboutAgency from './components/AboutAgency';
import RatingsSection from './components/RatingsSection';
import VisionSection from './components/VisionSection';
import ServicesGrid from './components/ServicesGrid';
import Portfolio from './components/Portfolio';
import ClientLove from './components/ClientLove';
import FeedbackCarousel from './components/FeedbackCarousel';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <RunningText />
      <AboutAgency />
      <RatingsSection />
      <VisionSection />
      <ServicesGrid />
      <Portfolio />
      <ClientLove />
      <FeedbackCarousel />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
