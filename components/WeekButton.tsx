
import React from 'react';

interface WeekButtonProps {
  week: number;
  isActive: boolean;
  onClick: () => void;
}

export const WeekButton: React.FC<WeekButtonProps> = ({ week, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex-shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center transition-all duration-200
        ${isActive 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
          : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'}
      `}
    >
      <span className="text-[10px] uppercase font-bold tracking-wider leading-none mb-1">Tuần</span>
      <span className="text-lg font-bold leading-none">{week}</span>
    </button>
  );
};
