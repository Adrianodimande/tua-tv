
import React from 'react';

// --- Badge Component ---
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'danger';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-tua-red text-white',
    secondary: 'bg-tua-pink/10 text-tua-pink',
    outline: 'border border-slate-200 dark:border-slate-800 text-slate-500',
    success: 'bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-500',
    danger: 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-500',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// --- Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'gradient', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const variants = {
    gradient: 'bg-tua-gradient text-white shadow-lg shadow-tua-red/20 hover:scale-[1.02]',
    outline: 'border-2 border-slate-200 dark:border-slate-700 hover:border-tua-pink transition-colors dark:text-white',
    ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400',
    dark: 'bg-slate-900 dark:bg-white text-white dark:text-slate-900',
  };
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-10 py-4 text-base font-bold',
  };
  return (
    <button 
      className={`rounded-2xl font-bold transition-all active:scale-95 disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// --- Section Title Component ---
export const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-black dark:text-white mb-3">
      {title}
    </h2>
    <div className={`h-1.5 w-20 bg-tua-gradient rounded-full mb-4 ${centered ? 'mx-auto' : ''}`} />
    {subtitle && <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{subtitle}</p>}
  </div>
);

// --- Card Component ---
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

// --- Form Components ---
export const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 px-1">
    {children}
  </label>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input 
    {...props} 
    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-tua-pink/30 rounded-2xl outline-none transition-all dark:text-white"
  />
);

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ children, ...props }) => (
  <select 
    {...props} 
    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-tua-pink/30 rounded-2xl outline-none transition-all dark:text-white appearance-none"
  >
    {children}
  </select>
);
