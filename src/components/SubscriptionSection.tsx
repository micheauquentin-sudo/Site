import React from 'react';
import { CreditCard, Ban, Calendar, Server, ShieldCheck, Lock, Receipt, RefreshCw } from 'lucide-react';

export const SubscriptionSection: React.FC = () => {
  const securityPillars = [
    {
      icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
      title: 'Paiement sécurisé via Stripe',
      description: 'Vos coordonnées bancaires sont chiffrées selon les standards bancaires les plus élevés (PCI-DSS niveau 1).',
    },
    {
      icon: <Ban className="w-5 h-5 text-rose-600" />,
      title: 'Résiliation libre en 1 clic',
      description: 'Aucun engagement de durée, aucun préavis contraignant. Vous gérez votre formule en totale autonomie.',
    },
    {
      icon: <Calendar className="w-5 h-5 text-amber-600" />,
      title: '14 jours de grâce technique',
      description: 'En cas de changement de carte ou de refus temporaire, vos bornes de jeu continuent de tourner pour vos clients.',
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-600" />,
      title: 'Hébergé en Union Européenne',
      description: 'Données stockées sur des serveurs sécurisés situés à Paris et Francfort, en conformité totale avec le RGPD.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      title: 'Protection Cloudflare Turnstile',
      description: 'Détection invisible des bots et fermes de clics pour empêcher tout abus sur vos stocks de cadeaux.',
    },
    {
      icon: <Lock className="w-5 h-5 text-blue-600" />,
      title: 'Tirages aléatoires scellés',
      description: 'Les probabilités sont calculées exclusivement sur nos serveurs : aucune triche côté client possible.',
    },
    {
      icon: <Receipt className="w-5 h-5 text-[#FF3D85]" />,
      title: 'Factures pro avec TVA déductible',
      description: 'Génération automatique de factures françaises conformes pour votre expert-comptable chaque mois.',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-teal-600" />,
      title: 'Sauvegarde redondante 24h/24',
      description: 'Vos historiques de validation, vos stocks et vos statistiques sont répliqués en temps réel.',
    },
  ];

  return (
    <section className="relative z-10 py-16 sm:py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest text-[#1f6b46] uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>ABONNEMENT, CONTRAT &amp; SÉCURITÉ</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1c2a20] leading-[1.05] tracking-tight text-balance">
          Zéro mauvaise surprise. Zéro petites lignes.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#33473a] font-semibold leading-relaxed">
          Nous travaillons avec des commerçants indépendants qui ont besoin d'outils fiables, carrés et sans tracas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {securityPillars.map((p, idx) => (
          <div
            key={idx}
            className="p-4 bg-white/70 backdrop-blur-sm border-2 border-[#21173A]/15 rounded-2xl flex flex-col gap-2 hover:bg-white transition-all shadow-sm"
          >
            <div className="p-2 w-fit rounded-xl bg-[#FFF6E0] border border-[#21173A]/15">
              {p.icon}
            </div>
            <h3 className="font-display font-bold text-sm text-[#21173A] leading-tight">
              {p.title}
            </h3>
            <p className="text-xs font-semibold text-[#43355f] leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
