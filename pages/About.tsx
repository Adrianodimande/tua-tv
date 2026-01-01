
import React from 'react';
import { APP_LOGO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pb-20 overflow-hidden bg-white dark:bg-slate-950">
      <section className="relative py-40 bg-slate-50 dark:bg-slate-950" data-aos="zoom-out">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-12 scale-[2]" data-aos="zoom-in" data-aos-duration="1500">{APP_LOGO}</div>
          <h1 className="text-7xl md:text-[9rem] font-black mb-8 dark:text-white tracking-tighter leading-none" data-aos="fade-down" data-aos-delay="300">Tua TV de Moz</h1>
          <p className="text-3xl md:text-4xl font-medium text-tua-pink italic max-w-4xl mx-auto leading-tight" data-aos="fade-up" data-aos-delay="600">"Levando Moçambique ao Mundo e o Mundo a Moçambique"</p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-tua-gradient opacity-5 blur-[120px] -z-10" />
      </section>

      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10" data-aos="fade-right">
            <div className="space-y-4">
              <span className="text-tua-pink font-black uppercase tracking-[0.4em] text-xs">A nossa génese</span>
              <h2 className="text-5xl md:text-6xl font-black dark:text-white tracking-tighter leading-none">Nossa História</h2>
              <div className="w-24 h-2 bg-tua-gradient rounded-full" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-medium" data-aos="fade-up" data-aos-delay="200">
              A Tua TV nasceu em 2024 com a missão audaciosa de redefinir o panorama televisivo em Moçambique. Numa era de rápida transformação digital, surgimos como o elo entre a tradição e a modernidade.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-medium" data-aos="fade-up" data-aos-delay="400">
              Com sede em Maputo, a nossa rede estende-se de Pemba a Ponta do Ouro, garantindo que cada voz seja ouvida e cada imagem seja vista com a maior clareza.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="300">
            <img src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=400" className="rounded-[3rem] shadow-2xl mt-16" alt="Studio" data-aos="zoom-in" data-aos-delay="500" />
            <img src="https://images.unsplash.com/photo-1524178232363-1fb28f74b083?auto=format&fit=crop&q=80&w=400" className="rounded-[3rem] shadow-2xl" alt="Broadcasting" data-aos="zoom-in" data-aos-delay="700" />
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-32 rounded-[5rem] mx-6" data-aos="zoom-in-up">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] space-y-6 transition-transform hover:scale-105" data-aos="flip-left" data-aos-delay="100">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-3xl font-black text-white tracking-tighter">Missão</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">Informar, educar e entreter o povo moçambicano com excelência e integridade absoluta.</p>
            </div>
            <div className="p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] space-y-6 transition-transform hover:scale-105" data-aos="flip-left" data-aos-delay="300">
              <div className="text-6xl mb-4">👁️</div>
              <h3 className="text-3xl font-black text-white tracking-tighter">Visão</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">Ser a estação de televisão de referência e a mais assistida na África Austral até 2030.</p>
            </div>
            <div className="p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] space-y-6 transition-transform hover:scale-105" data-aos="flip-left" data-aos-delay="500">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-3xl font-black text-white tracking-tighter">Valores</h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">Transparência, Criatividade, Respeito à Diversidade e Qualidade Técnica de nível Mundial.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-40">
        <div className="text-center mb-24" data-aos="fade-down">
          <span className="text-tua-pink font-black uppercase tracking-[0.4em] text-xs">Os rostos da Tua TV</span>
          <h2 className="text-5xl md:text-6xl font-black dark:text-white tracking-tighter mt-4">Equipa de Liderança</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: 'Emídio Bento', role: 'Director Executivo', img: 'https://i.pravatar.cc/150?u=1' },
            { name: 'Sara Matsinhe', role: 'Directora de Programas', img: 'https://i.pravatar.cc/150?u=2' },
            { name: 'Júlio Cossa', role: 'Chefe de Redacção', img: 'https://i.pravatar.cc/150?u=3' },
            { name: 'Paula Langa', role: 'Directora Técnica', img: 'https://i.pravatar.cc/150?u=4' },
          ].map((member, i) => (
            <div key={i} className="text-center group" {...{ "data-aos": "fade-up", "data-aos-delay": i * 150 }}>
              <div className="w-48 h-48 mx-auto rounded-[3rem] overflow-hidden mb-8 border-4 border-slate-50 dark:border-slate-800 shadow-2xl group-hover:border-tua-pink transition-all duration-700" data-aos="zoom-in" data-aos-delay={i * 150 + 200}>
                <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
              </div>
              <h4 className="text-2xl font-black dark:text-white tracking-tighter mb-2" data-aos="fade-up" data-aos-delay={i * 150 + 300}>{member.name}</h4>
              <p className="text-xs font-black text-tua-pink uppercase tracking-widest" data-aos="fade-up" data-aos-delay={i * 150 + 400}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
