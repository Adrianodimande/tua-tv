
import React, { useState } from 'react';
import { MOCK_PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  const [activeDay, setActiveDay] = useState('Segunda');

  return (
    <div className="pb-20 bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <section className="relative py-32 bg-slate-900 overflow-hidden" data-aos="zoom-out">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1595603659983-e7180fd97621?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover blur-sm" alt="Studio background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center" data-aos="fade-down">
          <span className="inline-block px-6 py-2 rounded-2xl bg-tua-red/20 text-tua-red text-xs font-black uppercase tracking-[0.3em] mb-6 border border-tua-red/30" data-aos="fade-up" data-aos-delay="200">Grelha de Programação</span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter" data-aos="fade-up" data-aos-delay="400">
            O que dar na <span className="bg-tua-gradient bg-clip-text text-transparent italic">Tua TV</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xl font-medium leading-relaxed" data-aos="fade-up" data-aos-delay="600">
            Explore a diversidade da nossa grelha. Da informação ao puro entretenimento, pensada para todos os moçambicanos.
          </p>
        </div>
      </section>

      {/* Selector */}
      <section className="sticky top-16 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800" data-aos="fade-down" data-aos-delay="800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 md:gap-6 overflow-x-auto py-6 no-scrollbar">
            {days.map((day, idx) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-8 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap ${
                  activeDay === day 
                    ? 'bg-tua-gradient text-white shadow-2xl shadow-tua-red/30 scale-105' 
                    : 'text-slate-500 hover:text-tua-pink dark:text-slate-400'
                }`}
                data-aos="fade-right"
                data-aos-delay={idx * 50 + 900}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="container mx-auto px-6 py-20 overflow-hidden">
        <div className="flex items-center gap-6 mb-12" data-aos="fade-right">
          <div className="h-10 w-2 bg-tua-gradient rounded-full" />
          <h2 className="text-4xl font-black dark:text-white tracking-tighter">Programação de {activeDay}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {MOCK_PROGRAMS.map((prog, i) => (
            <div key={prog.id} className="group relative bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-slate-100 dark:border-slate-800" {...{ "data-aos": "fade-up", "data-aos-delay": i * 100 }}>
              <div className="relative aspect-[16/11] overflow-hidden" data-aos="zoom-in" data-aos-delay={i * 100 + 200}>
                <img src={prog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={prog.name} />
                <div className="absolute top-5 left-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl">
                  <span className="text-sm font-black text-slate-800 dark:text-white tracking-tighter">{prog.time}</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3" data-aos="fade-right" data-aos-delay={i * 100 + 300}>
                  <span className="text-[10px] font-black text-tua-pink uppercase tracking-[0.3em] bg-tua-pink/10 px-3 py-1 rounded-xl">Entretenimento</span>
                </div>
                <h3 className="text-2xl font-black dark:text-white group-hover:text-tua-pink transition-colors tracking-tight leading-tight" data-aos="fade-up" data-aos-delay={i * 100 + 400}>{prog.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay={i * 100 + 500}>{prog.description}</p>
                <div className="pt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800" data-aos="fade-up" data-aos-delay={i * 100 + 600}>
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[9px] font-black">12+</div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[9px] font-black">4K</div>
                  </div>
                  <button className="text-xs font-black text-tua-pink uppercase tracking-widest hover:underline flex items-center gap-2">Detalhes <span>→</span></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PDF Action */}
      <section className="container mx-auto px-6 mt-12 overflow-hidden">
        <div className="bg-white dark:bg-slate-900 p-12 md:p-16 rounded-[4rem] border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl" data-aos="zoom-in">
          <div className="flex items-center gap-8" data-aos="fade-right" data-aos-delay="200">
            <div className="w-20 h-20 rounded-3xl bg-tua-gradient flex items-center justify-center text-white text-4xl shadow-2xl shadow-tua-red/30">📅</div>
            <div>
              <h4 className="text-3xl font-black dark:text-white tracking-tighter mb-2">Quer a grelha completa?</h4>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Descarregue o PDF com a nossa programação mensal detalhada.</p>
            </div>
          </div>
          <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-all shadow-xl" data-aos="fade-left" data-aos-delay="400">Baixar PDF (2.4MB)</button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
