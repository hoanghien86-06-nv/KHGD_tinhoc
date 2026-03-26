
import React from 'react';
import { Lesson } from '../types';

interface GradeCardProps {
  gradeLabel: string;
  lesson: Lesson | string;
  accentColor: string;
}

export const GradeCard: React.FC<GradeCardProps> = ({ gradeLabel, lesson, accentColor }) => {
  const isPlainString = typeof lesson === 'string';

  return (
    <div className={`bg-white rounded-2xl shadow-sm border-l-4 ${accentColor} p-6 transition-all hover:shadow-md`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
          Khối {gradeLabel}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${accentColor.replace('border-l-', 'bg-')}`}>
          {gradeLabel}
        </div>
      </div>

      {isPlainString ? (
        <div className="text-xl font-bold text-slate-800 leading-relaxed">
          {lesson}
        </div>
      ) : (
        <div>
          <div className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 mb-3">
            CĐ{lesson.topicCode}
          </div>
          <h4 className="text-xl font-bold text-slate-800 leading-tight">
            {lesson.lessonNumber}. {lesson.title}
          </h4>
          <p className="mt-3 text-sm text-slate-500 italic">
            Mã định danh: CĐ{lesson.topicCode}- {lesson.lessonNumber}. {lesson.title}
          </p>
        </div>
      )}
    </div>
  );
};
