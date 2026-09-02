import React, { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WheelSection } from './components/WheelSection';
import { VitrineSection } from './components/VitrineSection';
import { GamesSection } from './components/GamesSection';
import { ToolsSection } from './components/ToolsSection';
import { DashboardSection } from './components/DashboardSection';
import { PricingSection } from './components/PricingSection';
import { SubscriptionSection } from './components/SubscriptionSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { AuthModal } from './components/AuthModal';

export function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-[#FFC93C] selection:text-[#21173A]">
      {/* Scroll-driven Video Background:
          Remains immobile at the start, then descends and scrubs along with scroll */}
      <BackgroundVideo />

      {/* Main App Content */}
      <div className="relative z-10 flex flex-col">
        {/* Fixed Pill Navbar */}
        <Navbar onOpenAuth={handleOpenAuth} />

        {/* 01 Hero Section (Sky World) */}
        <HeroSection onStartDemo={scrollToDemo} />

        {/* 02 Interactive Wheel Section (Descending through clouds) */}
        <WheelSection />

        {/* 03 Custom Brand Vitrine Showcase (Bamboo Valley) */}
        <VitrineSection />

        {/* 04 Ten Games Showcase (Bamboo Meadow) */}
        <GamesSection />

        {/* 05 Counter & Cashier Tools (Meadow & Ground level) */}
        <ToolsSection />

        {/* 06 Live Analytics & Redemption Terminal */}
        <DashboardSection />

        {/* 07 Transparent Pricing Tiers */}
        <PricingSection />

        {/* 08 Subscription & Security Guarantees */}
        <SubscriptionSection />

        {/* 09 FAQ Accordion (Approaching Grotto) */}
        <FaqSection />

        {/* 10 Final CTA Lead Form & Footer (Crystal Cave & Temple) */}
        <CtaSection />
      </div>

      {/* Merchant Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
}

export default App;
