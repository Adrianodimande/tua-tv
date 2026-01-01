
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_NEWS, MOCK_PROGRAMS } from '../constants';
import { Badge, Button, SectionTitle, Card } from '../components/ui';
import { CMSForm } from '../components/dashboard/CMSForm';

type CMSSection = 'overview' | 'news' | 'programs' | 'reports' | 'categories' | 'users' | 'settings';

const MOCK_CATEGORIES = [
  { id: '1', name: 'Economia', status: 'Ativo', count: 124, percentage: 45 },
  { id: '2', name: 'Desporto', status: 'Ativo', count: 85, percentage: 30 },
  { id: '3', name: 'Cultura', status: 'Ativo', count: 62, percentage: 15 },
  { id: '4', name: 'Nacional', status: 'Ativo', count: 210, percentage: 10 },
];

const MOCK_USERS = [
  { id: '1', name: 'Emídio Bento', email: 'emidio@tuatv.co.mz', role: 'Super Admin', status: 'Ativo', image: 'https://i.pravatar.cc/100?u=1' },
  { id: '2', name: 'Sara Matsinhe', email: 'sara.m@tuatv.co.mz', role: 'Editora de Programas', status: 'Ativo', image: 'https://i.pravatar.cc/100?u=2' },
  { id: '3', name: 'Júlio Bento', email: 'julio.b@tuatv.co.mz', role: 'Jornalista Sénior', status: 'Ativo', image: 'https://i.pravatar.cc/100?u=3' },
  { id: '4', name: 'Paula Langa', email: 'paula.l@tuatv.co.mz', role: 'Técnica de Transmissão', status: 'Inativo', image: 'https://i.pravatar.cc/100?u=4' },
  { id: '5', name: 'Sérgio Matsinhe', email: 'sergio.m@tuatv.co.mz', role: 'Editor de Vídeo', status: 'Ativo', image: 'https://i.pravatar.cc/100?u=5' },
];

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<CMSSection>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState<CMSSection | null>(null);

  const sidebarItems = [
    { id: 'overview', label: 'Painel Geral', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    )},
    { id: 'news', label: 'Notícias', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v4a2 2 0 002 2h4" /></svg>
    )},
    { id: 'reports', label: 'Reportagens', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    )},
    { id: 'programs', label: 'Programação', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    )},
    { id: 'categories', label: 'Categorias', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
    )},
    { id: 'users', label: 'Usuários', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )},
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div 
        className="bg-tua-gradient p-10 rounded-[2.5rem] text-white shadow-2xl shadow-tua-red/20 relative overflow-hidden"
        data-aos="fade-down"
      >
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2 text-white">Bom dia, Redação Tua TV! 🇲🇿</h2>
          <p className="text-white/80 font-medium">Temos <span className="text-white font-bold underline">14 notícias</span> publicadas hoje.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Notícias', value: '1,284', icon: '📰', color: 'border-tua-red', detail: 'Acervo total' },
          { label: 'Publicado Hoje', value: '14', icon: '✨', color: 'border-tua-pink', detail: 'Últimas 24h' },
          { label: 'Reportagens', value: '86', icon: '🎥', color: 'border-tua-purple', detail: 'Produções especiais' },
          { label: 'Utilizadores', value: MOCK_USERS.length.toString(), icon: '👥', color: 'border-blue-500', detail: 'Equipa ativa' },
        ].map((stat, i) => (
          <Card 
            key={i} 
            className={`p-8 border-t-4 ${stat.color} hover:scale-[1.02] transition-all`}
            {...{ "data-aos": "flip-up", "data-aos-delay": i * 100 }}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-4xl font-black dark:text-white tracking-tighter">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-8" data-aos="fade-up">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black dark:text-white">Conteúdo Recente (Hoje)</h3>
          </div>
          <div className="space-y-5">
            {MOCK_NEWS.map((news, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-2xl transition-all cursor-pointer">
                <img src={news.image} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-grow min-w-0">
                  <h4 className="text-sm font-black dark:text-white truncate">{news.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 space-y-8" data-aos="fade-left">
          <h3 className="text-lg font-black dark:text-white">Foco Editorial</h3>
          <div className="space-y-6">
            {MOCK_CATEGORIES.map((cat, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-black">
                  <span className="dark:text-slate-300 uppercase tracking-tighter">{cat.name}</span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-tua-gradient rounded-full transition-all duration-1000" 
                    style={{ width: `${cat.percentage}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const renderContentTable = (title: string, data: any[], type: CMSSection) => (
    <div className="space-y-6">
      <div className="flex justify-between items-center" data-aos="fade-right">
        <h2 className="text-2xl font-black dark:text-white">{title}</h2>
        <Button onClick={() => setShowForm(type)} className="shadow-xl">
          Novo Conteúdo
        </Button>
      </div>

      <Card data-aos="fade-up">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                <th className="px-8 py-5">Identificação</th>
                <th className="px-8 py-5">Metadados</th>
                <th className="px-8 py-5">Estado</th>
                <th className="px-8 py-5 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              {data.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700">
                        <img src={item.image || `https://i.pravatar.cc/100?u=${idx}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <p className="text-sm font-black dark:text-slate-200">{item.title || item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase">
                    {type === 'users' ? item.email : item.date || 'Auto-Publish'}
                  </td>
                  <td className="px-8 py-6">
                    <Badge variant={item.status === 'Inativo' ? 'outline' : 'success'}>
                      {item.status || 'Publicado'}
                    </Badge>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2 justify-end">
                      <button className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-tua-pink">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.535 3.535L7 21H3v-4L15.232 5.232z" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      <aside className={`
        fixed lg:relative z-50 w-72 h-screen bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border-r border-slate-200/50 dark:border-slate-800/50 
        transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-center gap-4 mb-14 group cursor-pointer">
            <div className="w-11 h-11 rounded-[1.25rem] bg-tua-gradient flex items-center justify-center text-white font-black text-xl shadow-2xl group-hover:rotate-12 transition-transform">
              T
            </div>
            <div>
              <div className="font-black dark:text-white leading-tight text-lg">TUA CMS</div>
              <div className="text-[9px] font-black text-tua-pink uppercase tracking-[0.3em]">Redação Moz</div>
            </div>
          </div>

          <nav className="flex-grow space-y-1.5 overflow-y-auto no-scrollbar">
            {sidebarItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id as CMSSection);
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm transition-all relative group
                  ${activeSection === item.id 
                    ? 'bg-tua-gradient text-white shadow-xl shadow-tua-red/20' 
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 dark:text-slate-400'}
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-8 mt-8 border-t border-slate-200/50 dark:border-slate-800/50">
            <Link to="/" className="w-full flex items-center justify-center gap-2 py-4 bg-slate-100 dark:bg-slate-800/50 rounded-2xl font-black text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
              Voltar ao Site
            </Link>
          </div>
        </div>
      </aside>

      <div className="flex-grow flex flex-col h-screen overflow-hidden">
        <header className="h-24 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 px-8 flex items-center justify-between flex-shrink-0 z-40">
          <button className="lg:hidden p-3 bg-white dark:bg-slate-900 rounded-xl" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
          <h1 className="text-lg font-black dark:text-white uppercase tracking-tighter hidden sm:block">Painel de Gestão</h1>
          <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden border-2 border-white dark:border-slate-700">
            <img src="https://i.pravatar.cc/100?u=admin" className="w-full h-full object-cover" />
          </div>
        </header>

        <main className="flex-grow overflow-y-auto p-8 lg:p-12 custom-scrollbar bg-slate-50/50 dark:bg-slate-950/20">
          <div className="max-w-7xl mx-auto">
            {activeSection === 'overview' && renderOverview()}
            {activeSection === 'news' && renderContentTable('Gestão de Conteúdos', MOCK_NEWS, 'news')}
            {activeSection === 'programs' && renderContentTable('Grelha de Transmissão', MOCK_PROGRAMS, 'programs')}
            {activeSection === 'reports' && renderContentTable('Arquivo de Reportagens', [...MOCK_NEWS].reverse(), 'reports')}
            {activeSection === 'categories' && renderContentTable('Taxonomia de Canais', MOCK_CATEGORIES, 'categories')}
            {activeSection === 'users' && renderContentTable('Gestão de Usuários', MOCK_USERS, 'users')}
          </div>
        </main>
      </div>

      {showForm && (
        <CMSForm 
          type={showForm} 
          categories={MOCK_CATEGORIES} 
          onClose={() => setShowForm(null)} 
        />
      )}
    </div>
  );
};

export default Dashboard;
