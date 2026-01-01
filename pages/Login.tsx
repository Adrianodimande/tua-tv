
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { APP_LOGO } from '../constants';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/admin');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden p-8 md:p-12 border border-slate-100 dark:border-slate-800">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 scale-125">
            {APP_LOGO}
          </div>
          <h1 className="text-3xl font-bold dark:text-white">Aceder ao Painel</h1>
          <p className="text-slate-500 mt-2">Bem-vindo à gestão da Tua TV</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Endereço de Email</label>
            <input 
              type="email" 
              required
              className="w-full px-5 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-tua-pink/50 transition-all dark:text-white"
              placeholder="admin@tuatv.co.mz"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Palavra-passe</label>
              <a href="#" className="text-xs text-tua-pink font-bold hover:underline">Esqueceu?</a>
            </div>
            <input 
              type="password" 
              required
              className="w-full px-5 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-tua-pink/50 transition-all dark:text-white"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-tua-gradient text-white py-4 rounded-2xl font-bold shadow-xl shadow-tua-red/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Iniciar Sessão
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-slate-500 hover:text-tua-pink transition-colors">Voltar para o site público</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
