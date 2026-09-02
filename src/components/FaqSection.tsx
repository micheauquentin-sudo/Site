import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: 'Est-ce que mes clients doivent télécharger une application mobile ?',
    answer:
      'Non, absolument pas. C’est l’une de nos grandes forces : le client scanne simplement le QR code avec l’appareil photo de son smartphone, et le jeu s’ouvre directement dans son navigateur (Safari, Chrome). Zéro installation, zéro mot de passe, zéro friction.',
  },
  {
    id: 2,
    question: 'Comment l’équipe en salle ou en caisse valide-t-elle les cadeaux gagnés ?',
    answer:
      'En une seconde chrono : le gagnant présente son écran avec son code unique certifié (ex : GAIN-20P-8A3F). Votre serveur ou caissier peut soit scanner ce code avec son smartphone de service, soit simplement taper les 4 derniers caractères sur l’interface caisse LastChance. Le code est instantanément marqué comme consommé.',
  },
  {
    id: 3,
    question: 'Un client malin peut-il tricher ou vider tous nos cadeaux ?',
    answer:
      'C’est mathématiquement impossible. Les tirages sont calculés et scellés exclusivement sur nos serveurs sécurisés, et non sur le téléphone du joueur. De plus, les règles anti-triche bloquent les tentatives multiples (1 partie par jour ou par ticket) et les quotas quotidiens protègent vos marges.',
  },
  {
    id: 4,
    question: 'Combien de temps prend la mise en place dans mon établissement ?',
    answer:
      'Moins de 10 minutes montre en main. Vous choisissez vos couleurs, saisissez vos lots (ex : 1 café, 1 dessert, -10 %), et téléchargez vos chevalets de table en PDF haute définition prêts à poser sur le comptoir.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative z-10 py-16 sm:py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest text-[#1f6b46] uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>QUESTIONS FRÉQUENTES</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1c2a20] leading-[1.05] tracking-tight text-balance">
          Tout ce que vous voulez savoir.
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`bg-white/80 backdrop-blur-md border-2 border-[#21173A]/20 rounded-2xl overflow-hidden transition-all duration-200 ${
                isOpen ? 'shadow-cartoon-sm border-[#21173A]' : 'hover:border-[#21173A]/40'
              }`}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#21173A] cursor-pointer"
              >
                <span>{faq.question}</span>
                <div
                  className={`w-8 h-8 rounded-full bg-[#FFF6E0] border border-[#21173A]/20 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#FFC93C]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-[#21173A]" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base font-semibold text-[#43355f] leading-relaxed border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-150">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
