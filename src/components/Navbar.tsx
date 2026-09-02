import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAuth?: (mode: 'login' | 'register') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['vitrine', 'jeux', 'suivi', 'outils', 'tarifs'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
      else if (window.scrollY < 300) setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <nav
        className={`w-full max-w-6xl pointer-events-auto flex items-center justify-between gap-4 py-2.5 px-4 sm:px-6 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md border-2 border-[#21173A]/20 shadow-lg'
            : 'bg-white/70 backdrop-blur-md border-2 border-[#21173A]/15 shadow-md'
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          className="font-display font-extrabold text-2xl text-[#21173A] tracking-tight flex items-center gap-1 group"
        >
          <span>LastChance</span>
          <span className="text-[#FF3D85] group-hover:scale-125 transition-transform duration-200">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#vitrine"
            className={`font-bold text-sm transition-colors duration-150 ${
              activeSection === 'vitrine' ? 'text-[#FF3D85]' : 'text-[#21173A] hover:text-[#FF3D85]'
            }`}
          >
            La vitrine
          </a>
          <a
            href="#jeux"
            className={`font-bold text-sm transition-colors duration-150 ${
              activeSection === 'jeux' ? 'text-[#FF3D85]' : 'text-[#21173A] hover:text-[#FF3D85]'
            }`}
          >
            Les jeux
          </a>
          <a
            href="#suivi"
            className={`font-bold text-sm transition-colors duration-150 ${
              activeSection === 'suivi' ? 'text-[#FF3D85]' : 'text-[#21173A] hover:text-[#FF3D85]'
            }`}
          >
            Le suivi
          </a>
          <a
            href="#outils"
            className={`font-bold text-sm transition-colors duration-150 ${
              activeSection === 'outils' ? 'text-[#FF3D85]' : 'text-[#21173A] hover:text-[#FF3D85]'
            }`}
          >
            Outils
          </a>
          <a
            href="#tarifs"
            className={`font-bold text-sm transition-colors duration-150 ${
              activeSection === 'tarifs' ? 'text-[#FF3D85]' : 'text-[#21173A] hover:text-[#FF3D85]'
            }`}
          >
            Tarifs
          </a>
        </div>

        {/* Right CTA / Auth */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenAuth ? onOpenAuth('login') : (window.location.hash = 'connexion')}
            className="font-extrabold text-sm text-[#21173A] hover:text-[#FF3D85] transition-colors px-2 py-1 cursor-pointer"
          >
            Connexion
          </button>
          <a
            href="#essai"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FFC93C] border-2 border-[#21173A] rounded-full font-display font-extrabold text-sm sm:text-base text-[#21173A] shadow-cartoon hover:-translate-y-0.5 hover:shadow-cartoon-lg active:translate-y-0.5 active:shadow-cartoon-sm transition-all duration-150 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#21173A]" />
            <span>Essai gratuit</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-black/5 text-[#21173A] cursor-pointer"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 pointer-events-auto bg-white/95 backdrop-blur-xl border-2 border-[#21173A] rounded-3xl p-6 shadow-2xl flex flex-col gap-4 text-center md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <a
            href="#vitrine"
            onClick={() => setMobileMenuOpen(false)}
            className="font-display font-extrabold text-lg text-[#21173A] hover:text-[#FF3D85] py-1"
          >
            La vitrine
          </a>
          <a
            href="#jeux"
            onClick={() => setMobileMenuOpen(false)}
            className="font-display font-extrabold text-lg text-[#21173A] hover:text-[#FF3D85] py-1"
          >
            Les jeux
          </a>
          <a
            href="#suivi"
            onClick={() => setMobileMenuOpen(false)}
            className="font-display font-extrabold text-lg text-[#21173A] hover:text-[#FF3D85] py-1"
          >
            Le suivi & Caisse
          </a>
          <a
            href="#outils"
            onClick={() => setMobileMenuOpen(false)}
            className="font-display font-extrabold text-lg text-[#21173A] hover:text-[#FF3D85] py-1"
          >
            Outils de comptoir
          </a>
          <a
            href="#tarifs"
            onClick={() => setMobileMenuOpen(false)}
            className="font-display font-extrabold text-lg text-[#21173A] hover:text-[#FF3D85] py-1"
          >
            Tarifs
          </a>
          <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAuth) onOpenAuth('login');
              }}
              className="font-extrabold text-base text-[#21173A] py-2"
            >
              Connexion
            </button>
            <a
              href="#essai"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 bg-[#FFC93C] border-2 border-[#21173A] rounded-full font-display font-extrabold text-lg text-[#21173A] shadow-cartoon"
            >
              Essai gratuit 7 jours
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
