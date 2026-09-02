import React, { useState } from 'react';
import { Shield, Smartphone, Sliders, FileSpreadsheet, WifiOff, Users, Printer, CheckCircle, AlertCircle, Search } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const [testCode, setTestCode] = useState('');
  const [testStatus, setTestStatus] = useState<'idle' | 'valid' | 'used' | 'invalid'>('idle');

  const handleValidateCode = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = testCode.trim().toUpperCase();
    if (!clean) return;

    if (clean.includes('GAIN') || clean.includes('20') || clean.includes('CAFE')) {
      setTestStatus('valid');
    } else if (clean.includes('EXPIRE') || clean.includes('OLD')) {
      setTestStatus('used');
    } else {
      setTestStatus('invalid');
    }
  };

  const tools = [
    {
      icon: <Smartphone className="w-6 h-6 text-[#FF3D85]" />,
      title: 'Validation instantanée',
      description: 'Validez les gains en scannant le smartphone du client avec n’importe quel téléphone ou en tapant 4 caractères.',
      badge: '1 seconde',
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: 'Double validation anti-triche',
      description: 'Un code ne peut jamais être validé deux fois, même en cas de capture d’écran partagée entre amis.',
      badge: 'Sécurisé',
    },
    {
      icon: <Sliders className="w-6 h-6 text-indigo-600" />,
      title: 'Limitation par client',
      description: '1 partie par jour, par ticket de caisse ou par heure. Vous définissez la fréquence autorisée.',
      badge: 'Paramétrable',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-amber-500" />,
      title: 'Gestion des stocks en temps réel',
      description: 'Fixez un plafond strict par jour (ex : 5 desserts, 20 cafés). Dès que le quota est atteint, le lot disparaît.',
      badge: 'Automatique',
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-emerald-600" />,
      title: 'Export comptable 1-clic',
      description: 'Téléchargez vos rapports CSV / Excel certifiés pour justifier les remises offertes auprès de votre comptable.',
      badge: 'Comptabilité',
    },
    {
      icon: <WifiOff className="w-6 h-6 text-purple-600" />,
      title: 'Résilience hors-ligne',
      description: 'En cas de panne temporaire du réseau dans votre sous-sol, les codes sont mis en file d’attente sans blocage.',
      badge: 'Fiabilité',
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: 'Multi-serveurs & Équipes',
      description: 'Créez des accès simplifiés pour votre équipe sans mot de passe complexe, avec historique des validations par serveur.',
      badge: 'Équipe',
    },
    {
      icon: <Printer className="w-6 h-6 text-pink-600" />,
      title: 'Chevalets de table prêts à imprimer',
      description: 'Générez des affiches de comptoir et chevalets de table en PDF haute définition au format de votre choix.',
      badge: 'Inclus',
    },
  ];

  return (
    <section
      id="outils"
      className="relative z-10 py-16 sm:py-24 px-4 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest text-[#1f6b46] uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>CÔTÉ COMPTOIR</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1c2a20] leading-[1.05] tracking-tight text-balance">
          Tout ce qu’il faut pour que ça tourne tout seul.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#33473a] font-semibold leading-relaxed">
          Pensé pour le coup de feu du midi : zéro formation requise pour le personnel, aucun temps perdu en caisse.
        </p>
      </div>

      {/* Interactive Terminal Bar */}
      <div className="max-w-2xl mx-auto mb-12 bg-white/80 backdrop-blur-md border-2 border-[#21173A] rounded-2xl p-4 sm:p-5 shadow-cartoon">
        <div className="text-xs font-black text-[#21173A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Search className="w-4 h-4 text-[#FF3D85]" />
          <span>Testez le terminal de validation de caisse :</span>
        </div>
        <form onSubmit={handleValidateCode} className="flex flex-col sm:flex-row gap-2.5">
          <input
            type="text"
            value={testCode}
            onChange={(e) => {
              setTestCode(e.target.value);
              setTestStatus('idle');
            }}
            placeholder="Ex : GAIN-20P-ABCD ou scannez"
            className="flex-1 bg-[#FFF6E0] border-2 border-[#21173A] rounded-xl px-4 py-2.5 font-mono font-bold text-sm text-[#21173A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF3D85]"
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#FFC93C] text-[#21173A] border-2 border-[#21173A] rounded-xl font-display font-extrabold text-sm shadow-cartoon-sm hover:-translate-y-0.5 active:translate-y-0.5 transition cursor-pointer"
          >
            Valider le lot
          </button>
        </form>

        {testStatus === 'valid' && (
          <div className="mt-3 p-3 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Code valide : Lot attribué (-20% sur l'addition). Statut mis à jour à REMIS instantanément.</span>
          </div>
        )}
        {testStatus === 'used' && (
          <div className="mt-3 p-3 bg-amber-50 border border-amber-300 rounded-xl flex items-center gap-2 text-xs font-bold text-amber-800 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Alerte anti-triche : Ce code a déjà été validé à 12h42 sur la Caisse 1.</span>
          </div>
        )}
        {testStatus === 'invalid' && (
          <div className="mt-3 p-3 bg-rose-50 border border-rose-300 rounded-xl flex items-center gap-2 text-xs font-bold text-rose-800 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>Code introuvable. Vérifiez la saisie ou invitez le client à faire un tirage.</span>
          </div>
        )}
      </div>

      {/* Grid of 8 Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tools.map((t, idx) => (
          <div
            key={idx}
            className="bg-white/70 backdrop-blur-md border-2 border-[#21173A]/15 rounded-2xl p-5 flex flex-col justify-between hover:bg-white hover:border-[#21173A] hover:-translate-y-1 hover:shadow-cartoon transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-[#FFF6E0] border border-[#21173A]/20">
                  {t.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                  {t.badge}
                </span>
              </div>
              <h3 className="font-display font-extrabold text-base text-[#21173A] leading-tight mb-2">
                {t.title}
              </h3>
              <p className="text-xs font-semibold text-[#43355f] leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
