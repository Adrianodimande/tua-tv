
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <section className="bg-slate-900 text-white py-32 relative" data-aos="zoom-out">
        <div className="container mx-auto px-6 text-center relative z-10" data-aos="fade-down" data-aos-delay="300">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">Entre em Contacto</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">Estamos aqui para o ouvir. Quer seja para sugerir uma pauta, enviar feedback ou anunciar a sua marca.</p>
        </div>
        <div className="absolute inset-0 bg-tua-gradient opacity-10 blur-[150px] -z-0" />
      </section>

      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16" data-aos="fade-right">
            <div>
              <h2 className="text-5xl font-black mb-12 dark:text-white tracking-tighter" data-aos="fade-right" data-aos-delay="200">Informações de Contacto</h2>
              <div className="space-y-10">
                <div className="flex gap-8 items-start group" data-aos="fade-up" data-aos-delay="300">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-tua-red/10 flex items-center justify-center text-tua-red flex-shrink-0 group-hover:bg-tua-red group-hover:text-white transition-all duration-500 shadow-xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-black dark:text-white tracking-tighter mb-2">Nossa Sede</h4>
                    <p className="text-slate-500 text-lg font-medium">Av. Marginal, Edifício Horizonte, Maputo, Moçambique</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start group" data-aos="fade-up" data-aos-delay="400">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-tua-pink/10 flex items-center justify-center text-tua-pink flex-shrink-0 group-hover:bg-tua-pink group-hover:text-white transition-all duration-500 shadow-xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-black dark:text-white tracking-tighter mb-2">Email Directo</h4>
                    <p className="text-slate-500 text-lg font-medium">geral@tuatv.co.mz<br/>comercial@tuatv.co.mz</p>
                  </div>
                </div>

                <div className="flex gap-8 items-start group" data-aos="fade-up" data-aos-delay="500">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-tua-purple/10 flex items-center justify-center text-tua-purple flex-shrink-0 group-hover:bg-tua-purple group-hover:text-white transition-all duration-500 shadow-xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-black dark:text-white tracking-tighter mb-2">Linha de Apoio</h4>
                    <p className="text-slate-500 text-lg font-medium">+258 84 123 4567<br/>+258 21 000 000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-[4rem] bg-slate-200 dark:bg-slate-900 border border-white/10 flex flex-col items-center justify-center text-slate-400 group overflow-hidden relative shadow-2xl" data-aos="zoom-in" data-aos-delay="600">
              <div className="absolute inset-0 bg-tua-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
              <svg className="w-16 h-16 mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
              <span className="font-black uppercase tracking-[0.4em] text-[10px] group-hover:scale-110 transition-transform duration-500">Mapa de Localização</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-slate-900 p-12 lg:p-20 rounded-[4.5rem] shadow-2xl border border-slate-100 dark:border-slate-800" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-4xl font-black mb-10 dark:text-white tracking-tighter">Envie uma Mensagem</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div data-aos="fade-up" data-aos-delay="500">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 px-1">Nome Completo</label>
                  <input type="text" className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl outline-none border-2 border-transparent focus:border-tua-pink/20 transition-all dark:text-white font-bold" placeholder="João Exemplo" />
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 px-1">Email Activo</label>
                  <input type="email" className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl outline-none border-2 border-transparent focus:border-tua-pink/20 transition-all dark:text-white font-bold" placeholder="joao@email.com" />
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="700">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 px-1">Motivo do Contacto</label>
                <select className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl outline-none border-2 border-transparent focus:border-tua-pink/20 transition-all dark:text-white font-bold appearance-none">
                  <option>Geral / Feedback</option>
                  <option>Publicidade e Parcerias</option>
                  <option>Sugestão de Reportagem</option>
                  <option>Carreiras e Estágios</option>
                </select>
              </div>
              <div data-aos="fade-up" data-aos-delay="800">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 px-1">Sua Mensagem</label>
                <textarea rows={5} className="w-full px-8 py-5 bg-slate-50 dark:bg-slate-800 rounded-3xl outline-none border-2 border-transparent focus:border-tua-pink/20 transition-all dark:text-white font-bold" placeholder="Como podemos ajudar hoje?"></textarea>
              </div>
              <button className="w-full bg-tua-gradient text-white py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-tua-red/30 hover:scale-[1.02] active:scale-[0.98] transition-all" data-aos="zoom-in" data-aos-delay="900">
                Enviar Agora
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
