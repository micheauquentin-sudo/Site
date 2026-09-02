import React, { useState } from 'react';
import { X, Lock, Mail, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [storeName, setStoreName] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignedIn(true);
    setTimeout(() => {
      onClose();
      setSignedIn(false);
      const el = document.getElementById('suivi');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFF6E0] border-3 border-[#21173A] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-cartoon-xl relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 text-[#21173A] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="font-display font-black text-2xl text-[#21173A]">
            LastChance<span className="text-[#FF3D85]">.</span>
          </span>
          <h3 className="font-display font-black text-xl text-[#21173A] mt-2">
            {mode === 'login' ? 'Connexion Espace Commerçant' : 'Créer un compte commerçant'}
          </h3>
          <p className="text-xs font-semibold text-[#43355f] mt-1">
            {mode === 'login'
              ? 'Accédez à votre tableau de bord et terminal de caisse'
              : 'Commencez vos 7 jours d’essai sans carte'}
          </p>
        </div>

        {signedIn ? (
          <div className="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-2xl text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
            <div className="font-display font-black text-lg text-emerald-900">
              Connexion réussie !
            </div>
            <p className="text-xs font-semibold text-emerald-800 mt-1">
              Redirection vers le suivi de caisse...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {mode === 'register' && (
              <div className="relative">
                <Store className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="Nom de l’établissement (ex: Chez Momo)"
                  className="w-full pl-10 pr-3 py-3 bg-white border-2 border-[#21173A] rounded-xl font-bold text-xs sm:text-sm text-[#21173A] focus:outline-none focus:ring-2 focus:ring-[#FF3D85]"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email de contact"
                className="w-full pl-10 pr-3 py-3 bg-white border-2 border-[#21173A] rounded-xl font-bold text-xs sm:text-sm text-[#21173A] focus:outline-none focus:ring-2 focus:ring-[#FF3D85]"
              />
            </div>

            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                className="w-full pl-10 pr-3 py-3 bg-white border-2 border-[#21173A] rounded-xl font-bold text-xs sm:text-sm text-[#21173A] focus:outline-none focus:ring-2 focus:ring-[#FF3D85]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3.5 bg-[#FFC93C] text-[#21173A] border-2 border-[#21173A] rounded-full font-display font-black text-base shadow-cartoon hover:-translate-y-0.5 active:translate-y-0.5 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{mode === 'login' ? 'Se connecter' : 'Créer l’espace'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-3 text-center text-xs font-bold text-[#21173A]">
              {mode === 'login' ? (
                <span>
                  Pas encore de compte ?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('register')}
                    className="text-[#FF3D85] underline cursor-pointer"
                  >
                    Créer un essai 7 jours
                  </button>
                </span>
              ) : (
                <span>
                  Déjà un compte ?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-[#FF3D85] underline cursor-pointer"
                  >
                    Se connecter
                  </button>
                </span>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
