import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Gift, ArrowUpRight, Download, CheckCircle, Clock } from 'lucide-react';
import { ValidationRecord } from '../types';

const INITIAL_RECORDS: ValidationRecord[] = [
  { code: 'GAIN-20P-8A3F', client: 'Table 4', prize: '-20 % sur l’addition', status: 'REDEEMED', timestamp: 'Il y a 3 min' },
  { code: 'GAIN-CAFE-19B2', client: 'Comptoir', prize: '1 Café offert', status: 'REDEEMED', timestamp: 'Il y a 12 min' },
  { code: 'GAIN-DESS-77C1', client: 'Table 12', prize: '1 Tiramisu maison', status: 'PENDING', timestamp: 'Il y a 25 min' },
  { code: 'GAIN-10P-55D9', client: 'Terrasse 2', prize: '-10 % sur l’addition', status: 'REDEEMED', timestamp: 'Il y a 41 min' },
  { code: 'GAIN-DRINK-94E3', client: 'Table 7', prize: '1 Boisson offerte', status: 'PENDING', timestamp: 'Il y a 1h' },
];

export const DashboardSection: React.FC = () => {
  const [records, setRecords] = useState<ValidationRecord[]>(INITIAL_RECORDS);

  const handleSimulateNewScan = () => {
    const prizes = ['1 Café offert', '-20 % sur l’addition', '1 Dessert du jour', '1 Cookie artisanal'];
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    const randomTable = `Table ${Math.floor(Math.random() * 18) + 1}`;
    const randomCode = `GAIN-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const newRecord: ValidationRecord = {
      code: randomCode,
      client: randomTable,
      prize: randomPrize,
      status: 'PENDING',
      timestamp: 'À l’instant',
    };

    setRecords([newRecord, ...records.slice(0, 5)]);
  };

  const markRedeemed = (code: string) => {
    setRecords(records.map(r => r.code === code ? { ...r, status: 'REDEEMED' } : r));
  };

  return (
    <section
      id="suivi"
      className="relative z-10 py-16 sm:py-24 px-4 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest text-[#1f6b46] uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>LE SUIVI DU COMMERCE</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1c2a20] leading-[1.05] tracking-tight text-balance">
          La caisse sait ce qui se passe. Vous aussi.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#33473a] font-semibold leading-relaxed">
          Suivez l’engagement de vos clients en direct, le taux de retour et le retour sur investissement précis de vos opérations.
        </p>
      </div>

      {/* Main Dashboard Card */}
      <div className="bg-white/85 backdrop-blur-xl border-3 border-[#21173A] rounded-3xl p-6 sm:p-8 shadow-cartoon-xl">
        {/* Top KPI Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#FFF6E0] border-2 border-[#21173A] rounded-2xl p-4 shadow-cartoon-sm">
            <div className="flex items-center justify-between text-xs font-black text-[#21173A]/70 uppercase mb-1">
              <span>Scans QR Code</span>
              <BarChart3 className="w-4 h-4 text-[#FF3D85]" />
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#21173A]">
              1 248
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 mt-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+24 % vs mois dernier</span>
            </div>
          </div>

          <div className="bg-[#FFF6E0] border-2 border-[#21173A] rounded-2xl p-4 shadow-cartoon-sm">
            <div className="flex items-center justify-between text-xs font-black text-[#21173A]/70 uppercase mb-1">
              <span>Parties jouées</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#21173A]">
              932
            </div>
            <div className="text-[11px] font-bold text-[#21173A]/70 mt-1">
              74,6 % de conversion
            </div>
          </div>

          <div className="bg-[#FFF6E0] border-2 border-[#21173A] rounded-2xl p-4 shadow-cartoon-sm">
            <div className="flex items-center justify-between text-xs font-black text-[#21173A]/70 uppercase mb-1">
              <span>Lots remis en caisse</span>
              <Gift className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#21173A]">
              214
            </div>
            <div className="text-[11px] font-bold text-emerald-700 mt-1">
              214 clients revenus
            </div>
          </div>

          <div className="bg-[#FFF6E0] border-2 border-[#21173A] rounded-2xl p-4 shadow-cartoon-sm">
            <div className="flex items-center justify-between text-xs font-black text-[#21173A]/70 uppercase mb-1">
              <span>Budget cadeaux</span>
              <span className="text-xs font-bold text-[#FF3D85]">62 %</span>
            </div>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#21173A]">
              186 € / 300 €
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#FF3D85] h-full w-[62%]" />
            </div>
          </div>
        </div>

        {/* Live Feed Header & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#21173A]/10">
          <div>
            <h3 className="font-display font-black text-xl text-[#21173A]">
              Flux des gains en direct (Caisse principale)
            </h3>
            <p className="text-xs font-semibold text-gray-500">
              Mise à jour instantanée dès qu'un client gagne ou valide son ticket
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulateNewScan}
              className="px-3.5 py-1.5 bg-[#FFC93C] text-[#21173A] border-2 border-[#21173A] rounded-xl font-bold text-xs shadow-cartoon-sm hover:-translate-y-0.5 active:translate-y-0.5 transition cursor-pointer"
            >
              + Simuler un gain client
            </button>
            <button
              onClick={() => alert('Export comptable au format CSV généré')}
              className="p-1.5 bg-white text-[#21173A] border-2 border-[#21173A] rounded-xl hover:bg-gray-100 transition cursor-pointer"
              title="Télécharger l'export comptable"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Records Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#21173A]/20 text-xs font-black text-[#21173A]/60 uppercase tracking-wider">
                <th className="pb-3 pl-2">Code Unique</th>
                <th className="pb-3">Provenance</th>
                <th className="pb-3">Lot Attribué</th>
                <th className="pb-3">Heure</th>
                <th className="pb-3">Statut Caisse</th>
                <th className="pb-3 text-right pr-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-semibold">
              {records.map((r, i) => (
                <tr key={i} className="hover:bg-amber-50/50 transition-colors">
                  <td className="py-3 pl-2 font-mono font-bold text-xs text-[#21173A]">
                    {r.code}
                  </td>
                  <td className="py-3 text-xs text-gray-700">
                    {r.client}
                  </td>
                  <td className="py-3 text-xs font-bold text-[#21173A]">
                    {r.prize}
                  </td>
                  <td className="py-3 text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    {r.timestamp}
                  </td>
                  <td className="py-3">
                    {r.status === 'REDEEMED' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <CheckCircle className="w-3 h-3 text-emerald-700" />
                        REMIS
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-100 text-amber-900 border border-amber-300 animate-pulse">
                        EN ATTENTE
                      </span>
                    )}
                  </td>
                  <td className="py-3 text-right pr-2">
                    {r.status === 'PENDING' ? (
                      <button
                        onClick={() => markRedeemed(r.code)}
                        className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-sm cursor-pointer"
                      >
                        Valider
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400">Archivé</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
