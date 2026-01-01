
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { APP_LOGO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });
  const location = useLocation();

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Notícias', path: '/noticias' },
    { label: 'Programas', path: '/programas' },
    { label: 'Em Direto', path: '/direto' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {APP_LOGO}
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-tua-gradient bg-clip-text text-transparent leading-tight">Tua TV</span>
              <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">A Tua Televisão</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-tua-pink ${
                  location.pathname === item.path ? 'text-tua-pink' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
              )}
            </button>
            <Link
              to="/login"
              className="bg-tua-gradient text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-tua-red/20 hover:scale-105 transition-transform"
            >
              Login
            </Link>
            <button
              className="md:hidden p-2 text-slate-600 dark:text-slate-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 animate-in fade-in slide-in-from-top-4">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 dark:text-slate-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-100 dark:bg-slate-900 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                {APP_LOGO}
                <span className="text-xl font-bold bg-tua-gradient bg-clip-text text-transparent">Tua TV</span>
              </Link>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                A Tua Televisão de Moçambique. Levando o melhor da informação, entretenimento e cultura até si, em todos os cantos da pérola do Índico.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-800 dark:text-slate-100">Links Rápidos</h4>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li><Link to="/noticias" className="hover:text-tua-pink">Últimas Notícias</Link></li>
                <li><Link to="/programas" className="hover:text-tua-pink">Programação</Link></li>
                <li><Link to="/direto" className="hover:text-tua-pink">Em Direto</Link></li>
                <li><Link to="/sobre" className="hover:text-tua-pink">Sobre Nós</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-800 dark:text-slate-100">Categorias</h4>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li className="hover:text-tua-pink cursor-pointer">Moçambique</li>
                <li className="hover:text-tua-pink cursor-pointer">Economia</li>
                <li className="hover:text-tua-pink cursor-pointer">Desporto</li>
                <li className="hover:text-tua-pink cursor-pointer">Entretenimento</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-800 dark:text-slate-100">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-tua-gradient hover:text-white transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-tua-gradient hover:text-white transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.353 2.612 6.766 6.97 6.967 1.28.057 1.688.072 4.948.072s3.668-.015 4.948-.072c4.351-.2 6.764-2.612 6.967-6.97.058-1.28.073-1.687.073-4.947s-.015-3.667-.072-4.947c-.2-4.353-2.612-6.765-6.967-6.967C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} Tua TV de Moz. Todos os direitos reservados. Design moderno inspirado na excelência.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
