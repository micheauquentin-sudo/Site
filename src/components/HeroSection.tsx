import React from 'react';
import { Sparkles, ArrowRight, Play, QrCode } from 'lucide-react';

interface HeroSectionProps {
  onStartDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartDemo }) => {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-36 pb-20 overflow-hidden"
    >
      {/* Decorative Twinkles */}
      <div className="absolute left-[12%] top-[24%] w-3.5 h-3.5 rounded-full bg-white animate-twinkle pointer-events-none" />
      <div
        className="absolute right-[15%] top-[19%] w-3 h-3 rounded-full bg-white animate-twinkle pointer-events-none"
        style={{ animationDelay: '0.6s' }}
      />
      <div
        className="absolute left-[22%] bottom-[26%] w-2.5 h-2.5 rounded-full bg-[#FFC93C] animate-twinkle pointer-events-none"
        style={{ animationDelay: '1.2s' }}
      />
      <div
        className="absolute right-[25%] bottom-[22%] w-2.5 h-2.5 rounded-full bg-[#FF3D85] animate-twinkle pointer-events-none"
        style={{ animationDelay: '1.8s' }}
      />

      {/* Floating Bobbing Badges / Stickers (from Claude Design) */}
      <div className="hidden lg:block absolute left-[3%] top-[28%] animate-bob pointer-events-none">
        <div className="bg-white border-3 border-[#21173A] rounded-2xl px-5 py-3 font-display font-extrabold text-2xl text-[#21173A] shadow-cartoon transform -rotate-6">
          -20&nbsp;%
        </div>
      </div>

      <div className="hidden lg:block absolute right-[3%] top-[30%] animate-bob-r pointer-events-none">
        <div className="bg-[#FF3D85] border-3 border-[#21173A] rounded-2xl px-5 py-2.5 font-display font-extrabold text-xl text-white shadow-cartoon transform rotate-6">
          Café offert ☕
        </div>
      </div>

      <div className="hidden lg:block absolute left-[5%] bottom-[26%] animate-bob-r pointer-events-none">
        <div className="bg-[#FFC93C] border-3 border-[#21173A] rounded-2xl px-4 py-2 font-display font-extrabold text-lg text-[#21173A] shadow-cartoon transform rotate-3">
          Dessert 🍰
        </div>
      </div>

      <div className="hidden lg:block absolute right-[5%] bottom-[28%] animate-bob pointer-events-none">
        <div className="bg-white border-3 border-[#21173A] rounded-2xl px-4 py-2 font-display font-extrabold text-lg text-[#21173A] shadow-cartoon transform -rotate-3">
          Boisson 🍹
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white border-3 border-[#21173A] rounded-full px-5 py-2 font-black text-xs sm:text-sm tracking-widest text-[#21173A] shadow-cartoon">
          <span className="w-3 h-3 rounded-full bg-[#FF3D85] animate-ping" />
          <span>SCAN &amp; JOUE</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.96] text-[#21173A] drop-shadow-sm text-balance">
          La chance fait{' '}
          <span className="relative inline-block">
            <span className="absolute -left-2 -right-2 bottom-1 sm:bottom-2 h-[22%] bg-[#FFC93C] rounded-lg -z-10" />
            revenir
          </span>{' '}
          vos clients
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl font-semibold text-[#2d2249] leading-relaxed text-pretty">
          Un QR code sur le comptoir, dix façons de jouer, une caisse qui valide les gains en un geste.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="#essai"
            className="inline-flex items-center gap-2 px-8 py-4 sm:py-4.5 bg-[#FFC93C] text-[#21173A] border-3 border-[#21173A] rounded-full font-display font-extrabold text-lg sm:text-xl shadow-cartoon-lg hover:-translate-y-1 hover:shadow-cartoon-xl active:translate-y-0.5 active:shadow-cartoon-sm transition-all duration-150 cursor-pointer"
          >
            <span>Essayer 7 jours</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#demo"
            onClick={onStartDemo}
            className="inline-flex items-center gap-2 px-8 py-4 sm:py-4.5 bg-white text-[#21173A] border-3 border-[#21173A] rounded-full font-display font-bold text-lg sm:text-xl shadow-cartoon-lg hover:-translate-y-1 hover:shadow-cartoon-xl active:translate-y-0.5 active:shadow-cartoon-sm transition-all duration-150 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-[#FF3D85] text-[#FF3D85]" />
            <span>Voir la démo</span>
          </a>
        </div>

        {/* Confidence Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-4 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 bg-white/85 border border-[#21173A]/20 rounded-full px-4 py-2 font-bold text-xs sm:text-sm text-[#21173A] shadow-sm">
            <span className="text-emerald-600 font-extrabold">✓</span> Prêt en 10 min
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/85 border border-[#21173A]/20 rounded-full px-4 py-2 font-bold text-xs sm:text-sm text-[#21173A] shadow-sm">
            <span className="text-emerald-600 font-extrabold">✓</span> Sans compte client
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/85 border border-[#21173A]/20 rounded-full px-4 py-2 font-bold text-xs sm:text-sm text-[#21173A] shadow-sm">
            <span className="text-emerald-600 font-extrabold">✓</span> Conforme RGPD
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/85 border border-[#21173A]/20 rounded-full px-4 py-2 font-bold text-xs sm:text-sm text-[#21173A] shadow-sm">
            <span className="text-emerald-600 font-extrabold">✓</span> Sans engagement
          </span>
        </div>
      </div>
    </section>
  );
};
