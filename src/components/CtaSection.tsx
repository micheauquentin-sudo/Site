import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CtaSection: React.FC = () => {
  const [storeName, setStoreName] = useState('');
  const [email, setEmail] = useState('');
  const [storeType, setStoreType] = useState('Restaurant / Bar');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName || !email) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#FFC93C', '#FF3D85', '#21173A', '#FFF6E0'],
    });
  };

  return (
    <section id="essai" className="relative z-10 pt-16 pb-12 px-4 max-w-5xl mx-auto">
      {/* Big Final Callout Card */}
      <div className="bg-white/90 backdrop-blur-xl border-3 border-[#21173A] rounded-[36px] p-8 sm:p-14 shadow-cartoon-xl text-center relative overflow-hidden mb-16">
        {/* Background glow badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFC93C] border-2 border-[#21173A] rounded-full px-5 py-2 font-display font-black text-xs sm:text-sm tracking-wider uppercase text-[#21173A] shadow-cartoon-sm mb-6">
          <Sparkles className="w-4 h-4 text-[#FF3D85]" />
          <span>ESSAI GRATUIT 7 JOURS</span>
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#21173A] leading-[1.05] tracking-tight max-w-3xl mx-auto text-balance">
          Posez un QR code. Laissez la chance travailler.
        </h2>

        <p className="mt-4 text-base sm:text-xl font-semibold text-[#43355f] max-w-xl mx-auto leading-relaxed">
          Activez votre premier jeu en 10 minutes. Aucune carte bancaire requise pour démarrer l'essai.
        </p>

        {/* Form or Success State */}
        {submitted ? (
          <div className="mt-8 max-w-md mx-auto p-6 bg-emerald-50 border-2 border-emerald-500 rounded-2xl text-center animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-display font-black text-xl text-emerald-900 mb-1">
              Votre espace {storeName} est prêt !
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-emerald-800">
              Un lien d'accès immédiat a été envoyé à <strong>{email}</strong>. Téléchargez dès maintenant votre premier chevalet QR code.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs font-bold text-emerald-700 underline cursor-pointer"
            >
              Créer un autre établissement
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col gap-3">
            <div className="relative">
              <Building2 className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                placeholder="Nom de votre établissement (ex : Chez Momo)"
                className="w-full pl-12 pr-4 py-3.5 bg-[#FFF6E0] border-2 border-[#21173A] rounded-2xl font-bold text-sm text-[#21173A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF3D85]"
              />
            </div>

            <div className="relative">
              <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email professionnelle"
                className="w-full pl-12 pr-4 py-3.5 bg-[#FFF6E0] border-2 border-[#21173A] rounded-2xl font-bold text-sm text-[#21173A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF3D85]"
              />
            </div>

            <select
              value={storeType}
              onChange={(e) => setStoreType(e.target.value)}
              className="w-full px-4 py-3.5 bg-[#FFF6E0] border-2 border-[#21173A] rounded-2xl font-bold text-sm text-[#21173A] focus:outline-none focus:ring-2 focus:ring-[#FF3D85]"
            >
              <option value="Restaurant / Bar">Restaurant / Bar / Brasserie</option>
              <option value="Boulangerie / Pâtisserie">Boulangerie / Pâtisserie / Traiteur</option>
              <option value="Coffee Shop / Salon de thé">Coffee Shop / Salon de thé</option>
              <option value="Boutique / Prêt-à-porter">Boutique de détail / Commerce de proximité</option>
              <option value="Autre">Autre activité</option>
            </select>

            <button
              type="submit"
              className="mt-2 w-full py-4 bg-[#FF3D85] text-white border-3 border-[#21173A] rounded-full font-display font-black text-lg shadow-cartoon hover:-translate-y-0.5 hover:shadow-cartoon-lg active:translate-y-0.5 active:shadow-cartoon-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Démarrer l'essai 7 jours sans carte</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs font-extrabold text-[#21173A]/70">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Sans engagement
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Sans carte bancaire
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Installation en 10 minutes
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t border-[#21173A]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-[#21173A]/80">
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-lg text-[#21173A]">
            LastChance<span className="text-[#FF3D85]">.</span>
          </span>
          <span>— La chance fait revenir vos clients.</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="hover:text-[#FF3D85] transition">Mentions légales</a>
          <a href="#" className="hover:text-[#FF3D85] transition">CGV</a>
          <a href="#" className="hover:text-[#FF3D85] transition">Confidentialité RGPD</a>
          <a href="#" className="hover:text-[#FF3D85] transition">Contact support</a>
        </div>

        <div className="text-gray-500 text-[11px]">
          🇪🇺 Serveurs en Union Européenne • © {new Date().getFullYear()} LastChance
        </div>
      </footer>
    </section>
  );
};
