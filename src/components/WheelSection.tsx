import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Copy, Check, Sparkles, ShieldCheck, Sliders, CheckCircle2 } from 'lucide-react';
import { Prize } from '../types';

const WHEEL_PRIZES: Prize[] = [
  { id: '1', label: '-20 %', codePrefix: 'GAIN-20P', color: '#FFC93C', textColor: '#21173A', probability: 0.15 },
  { id: '2', label: 'Dessert', sublabel: 'offert', codePrefix: 'GAIN-DESSERT', color: '#FFF6E0', textColor: '#21173A', probability: 0.15 },
  { id: '3', label: '-10 %', codePrefix: 'GAIN-10P', color: '#FF3D85', textColor: '#FFF6E0', probability: 0.2 },
  { id: '4', label: 'Café', sublabel: 'offert', codePrefix: 'GAIN-CAFE', color: '#FFF6E0', textColor: '#21173A', probability: 0.2 },
  { id: '5', label: 'Mystère', codePrefix: 'GAIN-MYST', color: '#FFC93C', textColor: '#21173A', probability: 0.1 },
  { id: '6', label: 'Boisson', sublabel: 'offerte', codePrefix: 'GAIN-DRINK', color: '#FFF6E0', textColor: '#21173A', probability: 0.1 },
  { id: '7', label: '-20 %', codePrefix: 'GAIN-20P2', color: '#FF3D85', textColor: '#FFF6E0', probability: 0.05 },
  { id: '8', label: 'Surprise', codePrefix: 'GAIN-SURP', color: '#FFF6E0', textColor: '#21173A', probability: 0.05 },
];

export const WheelSection: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [wonCode, setWonCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);
    setResultMessage(null);
    setWonCode(null);
    setCopied(false);

    // Pick random prize slice (0 to 7)
    const prizeIndex = Math.floor(Math.random() * WHEEL_PRIZES.length);
    const selectedPrize = WHEEL_PRIZES[prizeIndex];

    // Calculate rotation: 5 full rotations + offset to land accurately on slice
    // Slice angle = 360 / 8 = 45 degrees
    // Needle points at top (270 deg / 0 deg with pointer offset)
    const extraRotations = 5 * 360;
    const sliceDeg = 360 / 8;
    const targetOffset = 360 - (prizeIndex * sliceDeg);
    const newAngle = rotationAngle + extraRotations + (targetOffset - (rotationAngle % 360));

    setRotationAngle(newAngle);

    // Wait for wheel animation to finish (3.6s)
    setTimeout(() => {
      setSpinning(false);
      const randomId = Math.random().toString(36).substring(2, 6).toUpperCase();
      const code = `${selectedPrize.codePrefix}-${randomId}`;
      setWonCode(code);
      setResultMessage(`Félicitations ! Vous avez gagné : ${selectedPrize.label} ${selectedPrize.sublabel || ''}`);

      // Fire celebratory confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFC93C', '#FF3D85', '#FFF6E0', '#21173A'],
      });
    }, 3700);
  };

  const copyCode = () => {
    if (!wonCode) return;
    navigator.clipboard.writeText(wonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="demo"
      className="relative z-10 py-16 sm:py-24 px-4 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Explanations */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest text-[#1f6b46] uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>LA DÉMO, EN VRAI</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1c2a20] leading-[1.05] tracking-tight text-balance">
            Essayez la roue, là, tout de suite.
          </h2>

          <p className="text-base sm:text-lg text-[#33473a] font-semibold leading-relaxed">
            Aucune application : la roue s'ouvre directement dans le navigateur du client, le gain tombe en 3 secondes, et le code de validation est sécurisé.
          </p>

          {/* 3 Step Cards */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-md border-2 border-[#21173A]/15 rounded-2xl shadow-sm hover:bg-white/80 transition-all">
              <span className="w-9 h-9 shrink-0 rounded-full bg-[#FFC93C] border-2 border-[#21173A] flex items-center justify-center font-display font-black text-lg text-[#21173A] shadow-cartoon-sm">
                1
              </span>
              <div>
                <div className="font-bold text-base text-[#21173A] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 inline" />
                  <span>Tirage côté serveur — impossible à truquer</span>
                </div>
                <p className="text-xs sm:text-sm text-[#43355f] font-medium mt-0.5">
                  Les probabilités ne sont jamais exposées dans le navigateur du client.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-md border-2 border-[#21173A]/15 rounded-2xl shadow-sm hover:bg-white/80 transition-all">
              <span className="w-9 h-9 shrink-0 rounded-full bg-[#FFC93C] border-2 border-[#21173A] flex items-center justify-center font-display font-black text-lg text-[#21173A] shadow-cartoon-sm">
                2
              </span>
              <div>
                <div className="font-bold text-base text-[#21173A] flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-indigo-600 inline" />
                  <span>Vous fixez les lots, les stocks, les probabilités</span>
                </div>
                <p className="text-xs sm:text-sm text-[#43355f] font-medium mt-0.5">
                  Quand un lot est épuisé, la roue se rééquilibre automatiquement sans intervention.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-md border-2 border-[#21173A]/15 rounded-2xl shadow-sm hover:bg-white/80 transition-all">
              <span className="w-9 h-9 shrink-0 rounded-full bg-[#FFC93C] border-2 border-[#21173A] flex items-center justify-center font-display font-black text-lg text-[#21173A] shadow-cartoon-sm">
                3
              </span>
              <div>
                <div className="font-bold text-base text-[#21173A] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF3D85] inline" />
                  <span>Le gain se valide en caisse, en une seconde</span>
                </div>
                <p className="text-xs sm:text-sm text-[#43355f] font-medium mt-0.5">
                  Le client présente son code unique sur son écran, l'équipe clique ou scanne.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Wheel */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          {/* Wheel Frame */}
          <div className="relative w-[300px] sm:w-[380px] aspect-square flex items-center justify-center">
            {/* Top Needle Indicator */}
            <div className="absolute left-1/2 -top-4 -translate-x-1/2 z-20 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[30px] border-t-[#21173A] drop-shadow-md" />

            {/* Rotating Conic Wheel */}
            <div
              className="w-full h-full rounded-full border-4 border-[#21173A] shadow-2xl relative overflow-hidden select-none"
              style={{
                background:
                  'conic-gradient(from -22.5deg, #FFC93C 0deg 45deg, #FFF6E0 45deg 90deg, #FF3D85 90deg 135deg, #FFF6E0 135deg 180deg, #FFC93C 180deg 225deg, #FFF6E0 225deg 270deg, #FF3D85 270deg 315deg, #FFF6E0 315deg 360deg)',
                transform: `rotate(${rotationAngle}deg)`,
                transition: spinning ? 'transform 3.6s cubic-bezier(0.12, 0.88, 0.22, 1)' : 'none',
              }}
            >
              {/* Text Slices inside the wheel */}
              {WHEEL_PRIZES.map((item, idx) => {
                const angle = idx * 45;
                return (
                  <div
                    key={item.id}
                    className="absolute inset-0 flex justify-center pointer-events-none"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div
                      className="pt-4 font-display font-black text-sm sm:text-base leading-tight text-center tracking-tight"
                      style={{ color: item.textColor }}
                    >
                      <div>{item.label}</div>
                      {item.sublabel && <div className="text-[11px] opacity-80">{item.sublabel}</div>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Hub Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full bg-[#FFF6E0] border-4 border-[#21173A] flex flex-col items-center justify-center z-10 shadow-md">
              <span className="font-display font-black text-xs sm:text-sm text-[#21173A] text-center leading-none">
                Last<br />Chance.
              </span>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-sm">
            <button
              onClick={handleSpin}
              disabled={spinning}
              className={`w-full py-4 px-8 rounded-full font-display font-black text-lg sm:text-xl text-[#FFF6E0] border-3 border-[#21173A] shadow-cartoon-lg transition-all duration-150 cursor-pointer ${
                spinning
                  ? 'bg-gray-400 opacity-80 cursor-not-allowed'
                  : 'bg-[#FF3D85] hover:-translate-y-1 hover:shadow-cartoon-xl active:translate-y-0.5 active:shadow-cartoon-sm'
              }`}
            >
              {spinning ? 'La roue tourne…' : 'Tourner la roue'}
            </button>

            {/* Result / Voucher Display */}
            {wonCode ? (
              <div className="w-full bg-white/90 backdrop-blur-md border-2 border-[#21173A] rounded-2xl p-4 shadow-cartoon flex flex-col gap-2.5 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between text-xs font-bold text-[#FF3D85]">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Gain Démo
                  </span>
                  <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full text-[11px]">
                    Valable 7 jours
                  </span>
                </div>
                <div className="font-bold text-sm text-[#21173A]">{resultMessage}</div>
                <div className="flex items-center justify-between bg-[#FFF6E0] p-2 rounded-xl border border-[#21173A]/30">
                  <span className="font-mono font-black text-base text-[#21173A] tracking-wider">
                    {wonCode}
                  </span>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1 text-xs font-extrabold bg-[#FFC93C] border border-[#21173A] px-2.5 py-1 rounded-lg hover:bg-amber-300 transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-xs sm:text-sm font-bold text-[#21173A]/80 bg-white/60 px-4 py-1.5 rounded-full border border-[#21173A]/15 text-center">
                Démo — Cliquez pour tester le tirage aléatoire
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
