
import React from 'react';

const Live: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 overflow-hidden bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-10">
          <div className="aspect-video bg-black rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative group border-4 border-white/5" data-aos="zoom-in" data-aos-duration="1200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-6 text-white" data-aos="fade-up" data-aos-delay="800">
                <button className="w-24 h-24 bg-tua-gradient rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </button>
                <p className="font-black tracking-[0.4em] uppercase text-xs">Clique para Iniciar Transmissão 4K</p>
              </div>
            </div>
            {/* Live Indicator overlay */}
            <div className="absolute top-8 left-8 flex items-center gap-4 bg-red-600 px-6 py-2.5 rounded-2xl text-white font-black text-xs shadow-2xl" data-aos="fade-right" data-aos-delay="1000">
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping" />
              EM DIRETO
            </div>
            <div className="absolute bottom-8 left-8 text-white text-[10px] font-black uppercase tracking-widest bg-black/50 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10" data-aos="fade-up" data-aos-delay="1200">
              4.2k pessoas assistindo agora
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-12 md:p-16 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-2xl space-y-8" data-aos="fade-up" data-aos-delay="400">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-tua-pink font-black text-xs uppercase tracking-[0.4em]" data-aos="fade-right" data-aos-delay="500">
                <span className="w-12 h-0.5 bg-tua-pink rounded-full" />
                Programa Especial
              </div>
              <h1 className="text-4xl md:text-5xl font-black dark:text-white tracking-tighter leading-tight" data-aos="fade-up" data-aos-delay="600">Especial Eleições: Debates e Resultados em Tempo Real</h1>
              <p className="text-slate-500 dark:text-slate-400 text-xl font-medium leading-relaxed" data-aos="fade-up" data-aos-delay="700">Acompanhe em directo a cobertura mais completa sobre o cenário político actual de Moçambique, com analistas e convidados exclusivos em estúdio.</p>
            </div>
            <div className="flex gap-8 pt-6 border-t border-slate-100 dark:border-slate-800" data-aos="fade-up" data-aos-delay="800">
              <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                Partilhar
              </button>
              <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                Gostar
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-10" data-aos="fade-left" data-aos-delay="300">
          <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-2xl flex flex-col h-[700px] lg:h-full">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h2 className="font-black dark:text-white uppercase tracking-widest text-sm">Chat em Direto</h2>
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
            </div>
            <div className="flex-grow p-8 space-y-6 overflow-y-auto no-scrollbar">
              {[
                { user: 'Sérgio', msg: 'Melhor cobertura do país!' },
                { user: 'Maria', msg: 'Boa noite de Maputo. Imagem top!' },
                { user: 'João', msg: 'A imagem está fantástica em 4K.' },
                { user: 'Equipa Tua TV', msg: 'Sejam bem-vindos ao nosso chat interactivo!', official: true },
              ].map((c, i) => (
                <div key={i} className="flex gap-4" data-aos="fade-right" data-aos-delay={i * 100 + 400}>
                  <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center font-black text-xs shadow-lg ${c.official ? 'bg-tua-gradient text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                    {c.user[0]}
                  </div>
                  <div className="space-y-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${c.official ? 'text-tua-pink' : 'text-slate-400'}`}>{c.user}</span>
                    <p className="text-sm dark:text-slate-300 font-medium leading-relaxed">{c.msg}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Diga algo à equipa..." 
                  className="w-full pl-6 pr-14 py-5 bg-white dark:bg-slate-900 rounded-3xl text-sm font-bold outline-none border-2 border-transparent focus:border-tua-pink/20 transition-all dark:text-white shadow-sm"
                />
                <button className="absolute right-3 top-3 p-3 text-tua-pink bg-tua-pink/5 rounded-2xl hover:bg-tua-pink hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Live;
