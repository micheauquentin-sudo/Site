import React, { useState } from 'react';
import { GameItem } from '../types';
import { Sparkles, Dices, Gift, HelpCircle, Trophy, Zap, KeyRound, Award, X } from 'lucide-react';

const GAMES: GameItem[] = [
  {
    id: 'roue',
    icon: '🎡',
    title: 'Roue de la fortune',
    description: 'La classique incontournable : un geste simple, un suspense de 3 secondes et un gain immédiat.',
    badge: 'Plus joué',
    tag: 'Populaire',
  },
  {
    id: 'gratter',
    icon: '🪙',
    title: 'Carte à gratter',
    description: 'Le geste tactile gratifiant : le client frotte l’écran avec son doigt pour révéler le lot caché.',
    badge: 'Tactile',
    tag: 'Fidélité',
  },
  {
    id: 'slot',
    icon: '🎰',
    title: 'Machine à sous',
    description: 'Trois rouleaux rétro, l’effet casino revisité pour les restaurants festifs et bars.',
    badge: 'Ambiance',
    tag: 'Casino',
  },
  {
    id: 'coffre',
    icon: '🔐',
    title: 'Coffre-fort mystère',
    description: 'Le client choisit une clé ou tape une combinaison pour déverrouiller le trésor.',
    badge: 'Suspense',
    tag: 'Événement',
  },
  {
    id: 'pileface',
    icon: '🟡',
    title: 'Pile ou Face',
    description: 'Ultra-rapide, 2 secondes chrono. Idéal pour les boulangeries et pauses café du matin.',
    badge: 'Éclair',
    tag: 'Express',
  },
  {
    id: 'boites',
    icon: '📦',
    title: 'Les 3 Boîtes cadeaux',
    description: 'Trois paquets cadeaux alignés. Le client en choisit un pour découvrir sa surprise.',
    badge: 'Choix',
    tag: 'Cadeau',
  },
  {
    id: 'quiz',
    icon: '💡',
    title: 'Quiz du jour',
    description: 'Une question rapide sur votre quartier ou votre menu pour tester et amuser les habitués.',
    badge: 'Culture',
    tag: 'Social',
  },
  {
    id: 'des',
    icon: '🎲',
    title: 'Dé magique',
    description: 'Lancez un dé à 6 faces. Obtenez le chiffre fétiche pour débloquer la récompense.',
    badge: 'Hasard',
    tag: 'Fun',
  },
  {
    id: 'ticket-or',
    icon: '✨',
    title: 'Ticket Doré',
    description: 'Inspiré de Willy Wonka : un tirage rare hebdomadaire ou mensuel pour marquer les esprits.',
    badge: 'Jackpot',
    tag: 'Prestige',
  },
  {
    id: 'flash',
    icon: '⚡',
    title: 'Flash Gagnant',
    description: 'Une jauge rapide oscillante : appuyez au bon moment pour stopper l’aiguille dans le vert.',
    badge: 'Réflexe',
    tag: 'Rythme',
  },
];

export const GamesSection: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('Tous');

  const categories = ['Tous', 'Populaire', 'Express', 'Événement'];

  const filteredGames = activeTab === 'Tous' 
    ? GAMES 
    : GAMES.filter(g => g.tag === activeTab || (activeTab === 'Express' && ['Éclair', 'Tactile'].includes(g.badge || '')));

  return (
    <section
      id="jeux"
      className="relative z-10 py-16 sm:py-24 px-4 max-w-6xl mx-auto"
    >
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest text-[#1f6b46] uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>DIX FAÇONS DE FAIRE JOUER</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1c2a20] leading-[1.05] tracking-tight text-balance">
          Dix mécaniques, zéro ennui.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#33473a] font-semibold leading-relaxed">
          Chaque commerce a sa clientèle. Alternez les jeux au fil des saisons, des événements ou laissez la plateforme choisir au hasard.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 rounded-full font-extrabold text-xs sm:text-sm border-2 transition-all cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#FFC93C] border-[#21173A] text-[#21173A] shadow-cartoon-sm'
                  : 'bg-white/60 border-[#21173A]/20 text-[#21173A]/80 hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 10 Games */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => setSelectedGame(game)}
            className="group bg-white/75 backdrop-blur-md border-2 border-[#21173A]/20 rounded-2xl p-5 flex flex-col justify-between hover:bg-white hover:border-[#21173A] hover:-translate-y-1 hover:shadow-cartoon transition-all duration-200 cursor-pointer"
          >
            <div>
              {/* Header with Icon and Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl filter group-hover:scale-110 transition-transform">
                  {game.icon}
                </span>
                {game.badge && (
                  <span className="text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FF3D85]/10 text-[#FF3D85] border border-[#FF3D85]/30">
                    {game.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-lg text-[#21173A] leading-snug group-hover:text-[#FF3D85] transition-colors">
                {game.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs font-semibold text-[#43355f] leading-relaxed line-clamp-3">
                {game.description}
              </p>
            </div>

            {/* Action text */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-extrabold text-[#21173A]/70 group-hover:text-[#FF3D85]">
              <span>Tester la démo</span>
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Game Details Modal */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FFF6E0] border-3 border-[#21173A] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedGame(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 text-[#21173A] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{selectedGame.icon}</span>
              <div>
                <span className="text-[11px] font-black uppercase text-[#FF3D85] tracking-wider">
                  {selectedGame.tag}
                </span>
                <h3 className="font-display font-black text-2xl text-[#21173A]">
                  {selectedGame.title}
                </h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#21173A] leading-relaxed mb-6">
              {selectedGame.description}
            </p>

            <div className="bg-white rounded-2xl p-4 border-2 border-[#21173A] shadow-cartoon-sm mb-6 flex flex-col gap-2">
              <div className="text-xs font-extrabold text-[#21173A] uppercase tracking-wide">
                ⚙️ Paramètres disponibles pour ce jeu :
              </div>
              <ul className="text-xs font-semibold text-gray-700 space-y-1 list-disc list-inside">
                <li>Probabilité d'attribution ajustable au dixième de %</li>
                <li>Stocks journaliers ou hebdomadaires stricts</li>
                <li>Horaires d'activation (ex. heureux midi, soirées)</li>
                <li>Personnalisation graphique totale</li>
              </ul>
            </div>

            <button
              onClick={() => setSelectedGame(null)}
              className="w-full py-3 bg-[#FFC93C] text-[#21173A] border-2 border-[#21173A] rounded-full font-display font-black text-base shadow-cartoon hover:-translate-y-0.5 transition cursor-pointer"
            >
              Fermer l'aperçu
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
