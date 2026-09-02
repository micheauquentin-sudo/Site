import React, { useState } from 'react';
import { Palette, Sparkles, Store, Check, Layers } from 'lucide-react';

interface Preset {
  id: string;
  name: string;
  category: string;
  bgColor: string;
  accentColor: string;
  headerColor: string;
  textColor: string;
  sublabel: string;
  welcome: string;
  prizePreview: string;
  icon: string;
}

const PRESETS: Preset[] = [
  {
    id: 'momo',
    name: 'Chez Momo',
    category: 'Pizzeria & Trattoria',
    bgColor: '#FFF6E0',
    accentColor: '#FF3D85',
    headerColor: '#FFC93C',
    textColor: '#21173A',
    sublabel: 'Fidélité & Régal',
    welcome: 'Bienvenue chez Momo ! Tentez votre chance aujourd’hui.',
    prizePreview: '1 Tiramisu maison offert',
    icon: '🍕',
  },
  {
    id: 'bistrot',
    name: 'Le Bistrot Gourmand',
    category: 'Brasserie Française',
    bgColor: '#F4EFEA',
    accentColor: '#1F6B46',
    headerColor: '#E2D5C3',
    textColor: '#1A2E22',
    sublabel: 'Cuisine de terroir',
    welcome: 'Merci pour votre visite ! Tournez la roue du chef.',
    prizePreview: '1 Café gourmand offert',
    icon: '🍷',
  },
  {
    id: 'burger',
    name: 'Burger & Co',
    category: 'Street Food & Craft Beers',
    bgColor: '#FFF0F5',
    accentColor: '#E63946',
    headerColor: '#FDE2E4',
    textColor: '#2B1115',
    sublabel: 'Le goût du vrai',
    welcome: 'Flash & Win : un burger, un milkshake ou des frites !',
    prizePreview: 'Frites croustillantes offertes',
    icon: '🍔',
  },
  {
    id: 'cafe',
    name: 'Café des Arts',
    category: 'Coffee Shop & Brunch',
    bgColor: '#F3EDF8',
    accentColor: '#6B4A9E',
    headerColor: '#E8DFF5',
    textColor: '#261B3B',
    sublabel: 'Artisan torréfacteur',
    welcome: 'Prenez une pause détente avec notre tirage du jour.',
    prizePreview: '-25 % sur votre prochain latte',
    icon: '☕',
  },
];

export const VitrineSection: React.FC = () => {
  const [activePreset, setActivePreset] = useState<Preset>(PRESETS[0]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="vitrine"
      className="relative z-10 py-16 sm:py-24 px-4 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Explanations */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest text-[#1f6b46] uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>LA VITRINE DU COMMERCE</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1c2a20] leading-[1.05] tracking-tight text-balance">
            Votre enseigne, pas la nôtre.
          </h2>

          <p className="text-base sm:text-lg text-[#33473a] font-semibold leading-relaxed">
            Le joueur voit votre logo, vos couleurs, vos messages. LastChance s'efface totalement derrière votre identité pour renforcer l’attachement à votre marque.
          </p>

          {/* Preset Selector Tabs */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#21173A]/70 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" />
              Choisissez un univers pour tester l’habillage :
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => {
                const isActive = p.id === activePreset.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePreset(p)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full font-bold text-xs sm:text-sm border-2 transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#21173A] shadow-cartoon-sm text-[#21173A] scale-105'
                        : 'bg-white/60 border-[#21173A]/20 text-[#21173A]/80 hover:bg-white/80'
                    }`}
                  >
                    <span>{p.icon}</span>
                    <span>{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3 Guarantees */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-[#21173A]/15 text-sm font-bold text-[#21173A]">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>Logo &amp; nom de votre établissement en grand</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-[#21173A]/15 text-sm font-bold text-[#21173A]">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>Palette de couleurs, polices et bannière personnalisées</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-[#21173A]/15 text-sm font-bold text-[#21173A]">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>Messages d'accueil, félicitations et conditions sur-mesure</span>
            </div>
          </div>
        </div>

        {/* Right Phone Mockup with 3D Tilt */}
        <div className="lg:col-span-6 flex justify-center">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-[290px] sm:w-[340px] rounded-[36px] p-3.5 border-4 border-[#21173A] bg-[#21173A] shadow-2xl transition-transform duration-150 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            }}
          >
            {/* Screen Notch */}
            <div className="w-full flex justify-center pb-2">
              <div className="w-24 h-4 bg-black/40 rounded-full" />
            </div>

            {/* Inner App Canvas */}
            <div
              className="w-full rounded-[26px] p-5 flex flex-col gap-4 border-2 border-black/10 transition-colors duration-300 min-h-[480px] select-none"
              style={{ backgroundColor: activePreset.bgColor }}
            >
              {/* Custom Store Header */}
              <div
                className="rounded-2xl p-4 border-2 border-[#21173A] flex items-center gap-3 shadow-cartoon-sm"
                style={{ backgroundColor: activePreset.headerColor }}
              >
                <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#21173A] flex items-center justify-center text-2xl shadow-sm">
                  {activePreset.icon}
                </div>
                <div>
                  <h3 className="font-display font-black text-xl text-[#21173A] leading-tight">
                    {activePreset.name}
                  </h3>
                  <p className="text-xs font-extrabold text-[#21173A]/80">
                    {activePreset.category}
                  </p>
                </div>
              </div>

              {/* Store Welcome Notice */}
              <div className="bg-white/80 rounded-xl p-3 border border-[#21173A]/20 text-xs font-semibold text-[#21173A] leading-snug">
                {activePreset.welcome}
              </div>

              {/* Game Card Preview */}
              <div className="flex-1 bg-white rounded-2xl border-2 border-[#21173A] p-4 flex flex-col items-center justify-center gap-3 shadow-cartoon-sm text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl border-2 border-[#21173A] shadow-sm animate-bounce"
                  style={{ backgroundColor: activePreset.headerColor }}
                >
                  🎁
                </div>
                <div className="font-display font-black text-base text-[#21173A]">
                  Tirage au sort en cours
                </div>
                <div
                  className="px-3 py-1.5 rounded-full font-extrabold text-xs border text-white shadow-sm"
                  style={{ backgroundColor: activePreset.accentColor, borderColor: '#21173A' }}
                >
                  {activePreset.prizePreview}
                </div>
                <div className="text-[11px] font-bold text-gray-500">
                  Un seul jeu par ticket de caisse
                </div>
              </div>

              {/* Simulated Customer Footer */}
              <div className="text-center text-[10px] font-bold text-[#21173A]/50">
                Propulsé en toute discrétion • Conforme RGPD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
