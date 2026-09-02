import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { PricingPlan } from '../types';

export const PricingSection: React.FC = () => {
  const [annual, setAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: PricingPlan[] = [
    {
      id: 'core',
      name: 'Core',
      price: annual ? 24 : 29,
      period: 'mois',
      tagline: 'Pour démarrer la fidélisation ludique en douceur.',
      features: [
        '1 établissement',
        '1 jeu actif au choix (ex. Roue)',
        'Scans & tirages illimités',
        'Validation caisse sans matériel requis',
        'Chevalets de table PDF à imprimer',
        'Support email réactif',
      ],
      ctaLabel: 'Démarrer avec Core',
    },
    {
      id: 'engagement',
      name: 'Engagement',
      price: annual ? 48 : 59,
      period: 'mois',
      tagline: 'Pour booster les retours de clients réguliers.',
      features: [
        '1 établissement',
        '3 jeux actifs en simultané',
        'Personnalisation complète de la vitrine',
        'Gestion des quotas & stocks automatiques',
        'Export comptable certifié 1-clic',
        'Horaires d’activation (midi / soir)',
      ],
      ctaLabel: 'Choisir Engagement',
    },
    {
      id: 'live',
      name: 'Live',
      price: annual ? 72 : 89,
      featured: true,
      period: 'mois',
      tagline: 'La formule plébiscitée par les brasseries et restaurants.',
      features: [
        'Jusqu’à 3 caisses ou 2 adresses',
        'Les 10 jeux en accès illimité',
        'Mode événementiel (Jackpot Ticket Doré)',
        'Comptes serveurs & suivi d’équipe',
        'Campagnes SMS & relances gagnants',
        'Support prioritaire WhatsApp 7j/7',
      ],
      ctaLabel: 'Tester Live 7 jours',
    },
    {
      id: 'full',
      name: 'Full Réseau',
      price: annual ? 104 : 129,
      period: 'mois',
      tagline: 'Pour les groupes, franchises et établissements à fort volume.',
      features: [
        'Multi-établissements illimité',
        'Création de jeux sur-mesure par nos graphistes',
        'Pack de 50 chevalets rigides livrés imprimés',
        'Intégration API caisse personnalisée',
        'Account manager dédié',
      ],
      ctaLabel: 'Contacter l’équipe',
    },
  ];

  return (
    <section
      id="tarifs"
      className="relative z-10 py-16 sm:py-24 px-4 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest text-[#1f6b46] uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>TARIFS TRANSPARENTS</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1c2a20] leading-[1.05] tracking-tight text-balance">
          Un abonnement simple, rentabilisé dès le premier samedi.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#33473a] font-semibold leading-relaxed">
          Sans commission sur vos ventes. Sans engagement de durée. 7 jours d'essai gratuit sans carte bancaire requise.
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md p-1.5 rounded-full border-2 border-[#21173A]/20 mt-6 shadow-sm">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              !annual ? 'bg-[#21173A] text-white shadow-sm' : 'text-[#21173A] hover:text-[#FF3D85]'
            }`}
          >
            Facturation mensuelle
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer ${
              annual ? 'bg-[#21173A] text-white shadow-sm' : 'text-[#21173A] hover:text-[#FF3D85]'
            }`}
          >
            <span>Annuel</span>
            <span className="bg-[#FFC93C] text-[#21173A] text-[10px] font-black px-1.5 py-0.5 rounded-full">
              -20 %
            </span>
          </button>
        </div>
      </div>

      {/* 4 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {plans.map((p) => {
          const isFeatured = p.featured;
          return (
            <div
              key={p.id}
              className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-200 ${
                isFeatured
                  ? 'bg-white border-3 border-[#21173A] shadow-cartoon-xl -translate-y-2'
                  : 'bg-white/75 backdrop-blur-md border-2 border-[#21173A]/20 shadow-md hover:bg-white hover:border-[#21173A] hover:shadow-cartoon'
              }`}
            >
              {isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF3D85] text-white font-display font-black text-xs uppercase px-4 py-1 rounded-full border-2 border-[#21173A] shadow-cartoon-sm">
                  ★ Plus populaire
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-extrabold text-2xl text-[#21173A]">
                    {p.name}
                  </h3>
                </div>

                <p className="text-xs font-semibold text-[#43355f] min-h-[34px] leading-relaxed">
                  {p.tagline}
                </p>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-gray-100 flex items-baseline gap-1">
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#21173A]">
                    {p.price}&nbsp;€
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    / {p.period} HT
                  </span>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 mb-8 text-xs font-semibold text-gray-700">
                  {p.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-700" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#essai"
                className={`w-full py-3 px-4 rounded-full font-display font-black text-sm text-center border-2 border-[#21173A] shadow-cartoon-sm hover:-translate-y-0.5 active:translate-y-0.5 transition cursor-pointer ${
                  isFeatured
                    ? 'bg-[#FFC93C] text-[#21173A]'
                    : 'bg-white text-[#21173A] hover:bg-amber-50'
                }`}
              >
                {p.ctaLabel}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
