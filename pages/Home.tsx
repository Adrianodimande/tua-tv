
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_NEWS, MOCK_PROGRAMS, FEATURED_PROGRAMS } from '../constants';
import { Button, SectionTitle, Card, Badge } from '../components/ui';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_PROGRAMS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[700px] bg-slate-950 -mt-16 overflow-hidden">
        {FEATURED_PROGRAMS.map((prog, index) => (
          <div
            key={prog.id}
            className={`absolute inset-0 transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1) ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${prog.color} opacity-20`} />
            <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
            
            <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center relative z-20">
              <div 
                className={`w-full md:w-[60%] lg:w-1/2 mt-20 md:mt-0 space-y-8 text-center md:text-left transition-all duration-700 delay-300 ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
              >
                <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-3xl border border-white/10 p-1.5 pr-8 rounded-full text-white shadow-2xl">
                  <div className="w-8 h-8 rounded-full bg-tua-red flex items-center justify-center">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                  </div>
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase">{prog.day} às {prog.time}</span>
                </div>
                
                <h1 className="text-6xl sm:text-7xl lg:text-[8.5rem] font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
                  <span className="block mb-2">{prog.name.split(' ')[0]}</span>
                  <span className="bg-tua-gradient bg-clip-text text-transparent italic inline-block">
                    {prog.name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed font-medium">
                  {prog.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-5 pt-4 items-center justify-center md:justify-start">
                  <Link to="/direto" className="w-full sm:w-auto">
                    <Button variant="gradient" className="w-full px-10 h-16 text-lg rounded-2xl">Assistir em Direto</Button>
                  </Link>
                  <Link to="/programas" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full h-16 px-10 text-lg bg-white/5 backdrop-blur-xl text-white border-white/10 hover:bg-white/20 rounded-2xl">Ver Programação</Button>
                  </Link>
                </div>
              </div>

              <div className={`w-full md:w-[40%] lg:w-1/2 h-full flex items-end justify-center md:justify-end transition-all duration-700 delay-200 ${
                index === currentSlide ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'
              }`}>
                <div className="relative h-[85%] w-full flex items-end overflow-visible">
                  <img src={prog.presenterImage} className="w-auto h-full max-h-[90%] object-contain z-10 drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]" alt={prog.presenterName} />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-20" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- NEWS SECTION --- */}
      <section className="container mx-auto px-6 overflow-hidden">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6" data-aos="fade-up">
          <SectionTitle title="Destaques da Redação" subtitle="As notícias mais relevantes do momento em Moçambique e no Mundo." />
          <Link to="/noticias" className="mb-12 font-black text-tua-pink hover:translate-x-2 transition-all text-xs uppercase tracking-widest items-center gap-2 flex" data-aos="fade-left">
            Ver Todo o Portal <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {MOCK_NEWS.map((news, idx) => (
            <Card key={news.id} className="group hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl dark:bg-slate-900" {...{ "data-aos": "fade-up", "data-aos-delay": idx * 80 }}>
              <div className="relative h-64 overflow-hidden" data-aos="zoom-in" data-aos-delay={idx * 80 + 100}>
                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                <Badge className="absolute top-6 left-6 shadow-xl" variant="primary">{news.category}</Badge>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest" data-aos="fade-right" data-aos-delay={idx * 80 + 150}>
                  <span className="text-tua-pink">{news.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <span>Por {news.author}</span>
                </div>
                <h3 className="text-2xl font-black dark:text-white group-hover:text-tua-pink transition-colors leading-tight tracking-tight" data-aos="fade-up" data-aos-delay={idx * 80 + 200}>
                  {news.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed font-medium" data-aos="fade-up" data-aos-delay={idx * 80 + 250}>
                  {news.excerpt}
                </p>
                <div className="pt-2" data-aos="fade-up" data-aos-delay={idx * 80 + 300}>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-tua-pink transition-colors flex items-center gap-2">
                    Continuar a ler <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* --- LIVE STREAM PROMO --- */}
      <section className="container mx-auto px-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-tua-gradient rounded-[3.5rem] p-12 md:p-20 text-white flex flex-col justify-between relative overflow-hidden group" data-aos="fade-right">
            <div className="relative z-10" data-aos="fade-down" data-aos-delay="150">
               <div className="flex items-center gap-3 mb-8">
                 <Badge variant="danger" className="bg-white text-tua-red animate-pulse px-6 py-2 text-xs">Live Stream</Badge>
                 <span className="text-xs font-black tracking-widest uppercase text-white/70">Multidevice 4K</span>
               </div>
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Toda a nossa programação, na palma da sua mão.</h2>
               <p className="text-white/80 text-lg max-w-xl font-medium leading-relaxed">Assista ao vivo aos seus programas favoritos através do nosso portal ou aplicações móveis. A Tua TV segue consigo em qualquer lugar.</p>
            </div>
            <div className="relative z-10 pt-12 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="300">
               <Button variant="dark" size="lg" className="rounded-2xl px-12 h-16 shadow-2xl">Aceder ao Direto</Button>
            </div>
            <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-white/20 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-[2s]" />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 gap-8">
             <Card className="p-10 flex flex-col items-center justify-center text-center group bg-white dark:bg-slate-900" data-aos="fade-left" data-aos-delay="100">
               <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-4xl mb-6 group-hover:bg-tua-pink group-hover:text-white transition-all duration-500" data-aos="zoom-in">📻</div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Canal Audio</p>
               <h4 className="text-3xl font-black dark:text-white tracking-tighter">Rádio Tua 98.4 FM</h4>
             </Card>
             <Card className="p-10 flex flex-col items-center justify-center text-center group bg-white dark:bg-slate-900" data-aos="fade-left" data-aos-delay="200">
               <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-4xl mb-6 group-hover:bg-tua-purple group-hover:text-white transition-all duration-500" data-aos="zoom-in">📱</div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">App Store / Google Play</p>
               <h4 className="text-3xl font-black dark:text-white tracking-tighter">+500k Downloads</h4>
             </Card>
          </div>
        </div>
      </section>

      {/* --- PROGRAMS GRID SECTION --- */}
      <section className="bg-slate-900 py-32 relative overflow-hidden rounded-[4rem] md:rounded-[6rem] mx-4 border border-white/5" data-aos="zoom-in-up">
        <div className="container mx-auto px-6 relative z-10">
          <div data-aos="fade-down">
            <SectionTitle title="Sintonize Connosco" subtitle="Uma grelha rica e diversificada, pensada no orgulho moçambicano." centered />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_PROGRAMS.map((prog, idx) => (
              <div key={prog.id} className="relative aspect-[3/4] rounded-[3rem] overflow-hidden group border border-white/10 bg-slate-800 shadow-2xl transition-all hover:border-tua-pink/50" {...{ "data-aos": "fade-up", "data-aos-delay": idx * 60 }}>
                <img src={prog.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={prog.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8 lg:p-10">
                  <span className="text-tua-pink font-black text-[10px] uppercase tracking-[0.4em] mb-3">{prog.time} • {prog.day}</span>
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tighter leading-none">{prog.name}</h3>
                  <p className="text-slate-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="container mx-auto px-6" data-aos="fade-up">
        <Card className="bg-white dark:bg-slate-900 p-12 md:p-24 border-2 border-slate-100 dark:border-slate-800 shadow-2xl text-center relative overflow-hidden rounded-[4rem]">
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter dark:text-white" data-aos="fade-down" data-aos-delay="100">Não perca o rasto da atualidade.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">Junte-se a milhares de moçambicanos e receba os destaques da Tua TV, entrevistas exclusivas e a grelha de programação no seu inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="zoom-in" data-aos-delay="300">
              <input type="email" placeholder="Introduza o seu melhor email" className="bg-slate-50 dark:bg-slate-800 border-2 border-transparent dark:border-slate-700 rounded-3xl px-10 py-6 outline-none focus:border-tua-pink transition-all w-full sm:max-w-lg font-bold dark:text-white text-lg" />
              <Button variant="gradient" className="w-full sm:w-auto h-[76px] px-12 rounded-3xl text-lg hover:scale-105">Subscrever Grátis</Button>
            </form>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;
