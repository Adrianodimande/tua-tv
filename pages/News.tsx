
import React from 'react';
import { MOCK_NEWS } from '../constants';
import { Badge } from '../components/ui';

const News: React.FC = () => {
  const categories = ['Todos', 'Moçambique', 'Economia', 'Desporto', 'Cultura', 'Tecnologia'];

  return (
    <div className="pb-20 bg-slate-50 dark:bg-slate-950">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden" data-aos="zoom-out">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1504711432869-efd597cdd04d?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="News background" />
        </div>
        <div className="container mx-auto px-6 relative z-10" data-aos="fade-down" data-aos-delay="300">
          <h1 className="text-6xl font-black mb-6 tracking-tighter">Últimas Notícias</h1>
          <p className="text-slate-300 max-w-2xl text-xl leading-relaxed">Mantenha-se informado com a cobertura mais rigorosa e isenta dos acontecimentos que marcam Moçambique e o mundo.</p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="container mx-auto px-6 -mt-10 relative z-20" data-aos="fade-up" data-aos-delay="600">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-wrap gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat, i) => (
            <button key={i} className={`px-8 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap ${i === 0 ? 'bg-tua-gradient text-white shadow-lg' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`} data-aos="fade-right" data-aos-delay={i * 100 + 700}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="container mx-auto px-6 mt-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-slate-900 rounded-[3.5rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800" data-aos="fade-up">
          <div className="h-[450px] overflow-hidden" data-aos="fade-right" data-aos-delay="200">
            <img src={MOCK_NEWS[0].image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Featured News" />
          </div>
          <div className="p-10 lg:p-16 space-y-6" data-aos="fade-left" data-aos-delay="400">
            <Badge variant="primary" className="px-4 py-2">DESTAQUE PRINCIPAL</Badge>
            <h2 className="text-4xl font-black dark:text-white leading-tight tracking-tight">{MOCK_NEWS[0].title}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{MOCK_NEWS[0].excerpt}</p>
            <div className="pt-6 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tua-gradient p-0.5"><div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center font-black text-xs text-tua-pink">TV</div></div>
                <span className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">{MOCK_NEWS[0].author}</span>
              </div>
              <span className="w-1 h-1 bg-slate-300 rounded-full" />
              <span className="font-bold">{MOCK_NEWS[0].date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[...MOCK_NEWS, ...MOCK_NEWS].map((news, i) => (
            <article key={i} className="group cursor-pointer" {...{ "data-aos": "fade-up", "data-aos-delay": (i % 3) * 150 }}>
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-6 shadow-lg" data-aos="zoom-in" data-aos-delay={(i % 3) * 150 + 200}>
                <img src={news.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={news.title} />
                <div className="absolute top-6 left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-4 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-tua-pink shadow-xl">
                  {news.category}
                </div>
              </div>
              <div className="px-2 space-y-3">
                <h3 className="text-2xl font-black mb-3 group-hover:text-tua-pink transition-colors dark:text-white leading-tight tracking-tighter" data-aos="fade-up" data-aos-delay={(i % 3) * 150 + 300}>{news.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4" data-aos="fade-up" data-aos-delay={(i % 3) * 150 + 400}>{news.excerpt}</p>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]" data-aos="fade-up" data-aos-delay={(i % 3) * 150 + 500}>{news.date}</div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-24 flex justify-center gap-3" data-aos="fade-up">
          <button className="w-12 h-12 rounded-2xl bg-tua-gradient text-white flex items-center justify-center font-black shadow-lg shadow-tua-red/20 scale-110">1</button>
          <button className="w-12 h-12 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-tua-pink flex items-center justify-center font-black dark:text-white transition-all">2</button>
          <button className="w-12 h-12 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-tua-pink flex items-center justify-center font-black dark:text-white transition-all">3</button>
        </div>
      </section>
    </div>
  );
};

export default News;
