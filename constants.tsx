
import React from 'react';
import { NewsItem, Program, UserRole } from './types';

export interface FeaturedProgram extends Program {
  presenterName: string;
  presenterImage: string;
  color: string;
}

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Crescimento Económico em Moçambique Supera Expectativas',
    excerpt: 'O Banco de Moçambique anunciou hoje dados positivos sobre o crescimento do PIB nacional no último trimestre...',
    category: 'Economia',
    date: '20 Mai 2024',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
    author: 'Equipa Tua TV'
  },
  {
    id: '2',
    title: 'Festival de Marrabenta Atrai Milhares em Maputo',
    excerpt: 'A capital moçambicana vibrou com os ritmos tradicionais no festival que celebrou a cultura local...',
    category: 'Cultura',
    date: '19 Mai 2024',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    author: 'Júlio Bento'
  },
  {
    id: '3',
    title: 'Mambas Preparam-se para o Próximo Desafio Internacional',
    excerpt: 'A selecção nacional de futebol iniciou hoje os treinos intensivos para o jogo de qualificação...',
    category: 'Desporto',
    date: '18 Mai 2024',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    author: 'Sérgio Matsinhe'
  }
];

export const MOCK_PROGRAMS: Program[] = [
  { id: '1', name: 'Manhã de Sucesso', time: '07:00', description: 'O seu despertar com energia e informação de qualidade para começar bem o dia.', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=400', day: 'Segunda - Sexta' },
  { id: '2', name: 'Jornal da Noite', time: '20:00', description: 'As notícias que marcam o dia em Moçambique e no mundo com análise profunda.', image: 'https://images.unsplash.com/photo-1495024441819-2701d185672d?auto=format&fit=crop&q=80&w=400', day: 'Diário' },
  { id: '3', name: 'Tua Música', time: '15:00', description: 'O top das músicas mais batidas em solo nacional e entrevistas exclusivas.', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400', day: 'Sábado' },
  { id: '4', name: 'Debate Aberto', time: '21:30', description: 'Análise profunda dos temas actuais da sociedade com os melhores especialistas.', image: 'https://images.unsplash.com/photo-1541872703-74c5e443d1fe?auto=format&fit=crop&q=80&w=400', day: 'Quinta' }
];

export const FEATURED_PROGRAMS: FeaturedProgram[] = [
  {
    ...MOCK_PROGRAMS[0],
    presenterName: 'Sara Matsinhe',
    presenterImage: 'https://i.ibb.co/L5wHk7V/presenter1.png', // Usando URLs que simulam recortes
    color: 'from-rose-600 to-pink-500'
  },
  {
    ...MOCK_PROGRAMS[1],
    presenterName: 'Emídio Bento',
    presenterImage: 'https://i.ibb.co/xL85BvP/presenter2.png',
    color: 'from-blue-700 to-indigo-600'
  },
  {
    ...MOCK_PROGRAMS[2],
    presenterName: 'Sérgio Matsinhe',
    presenterImage: 'https://i.ibb.co/PZ9959V/presenter3.png',
    color: 'from-purple-700 to-violet-600'
  }
];

export const APP_LOGO = (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#e11d48' }} />
        <stop offset="50%" style={{ stopColor: '#db2777' }} />
        <stop offset="100%" style={{ stopColor: '#7c3aed' }} />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="white" stroke="url(#logoGrad)" strokeWidth="8" />
    <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="url(#logoGrad)" />
    <circle cx="50" cy="50" r="15" fill="white" />
  </svg>
);
