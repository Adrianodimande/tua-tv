
import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// @ts-ignore
const AOS = (window as any).AOS;

// Lazy loading components for performance
const Home = lazy(() => import('./pages/Home'));
const News = lazy(() => import('./pages/News'));
const Programs = lazy(() => import('./pages/Programs'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Live = lazy(() => import('./pages/Live'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-slate-950">
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 border-4 border-slate-200 dark:border-slate-800 rounded-full" />
      <div className="absolute inset-0 border-4 border-t-tua-pink rounded-full animate-spin" />
    </div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    if (AOS) {
      AOS.init({
        duration: 600, // Reduzido de 1000 para 600 para ser mais rápido
        once: true,
        easing: 'ease-out-quart', // Easing mais responsivo
        offset: 50, // Inicia a animação um pouco antes
        delay: 0,
      });
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Admin Routes - No Layout */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />

          {/* Public Routes with Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/noticias" element={<Layout><News /></Layout>} />
          <Route path="/programas" element={<Layout><Programs /></Layout>} />
          <Route path="/direto" element={<Layout><Live /></Layout>} />
          <Route path="/sobre" element={<Layout><About /></Layout>} />
          <Route path="/contacto" element={<Layout><Contact /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
