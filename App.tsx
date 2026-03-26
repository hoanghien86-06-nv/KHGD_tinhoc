
import React, { useState } from 'react';
import { CURRICULUM_DATA } from './constants';
import { Lesson } from './types';

const App: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const currentData = CURRICULUM_DATA.find(d => d.week === selectedWeek);

  const formatLessonText = (lesson: Lesson | string) => {
    if (typeof lesson === 'string') return lesson;
    return `CĐ${lesson.topicCode}- ${lesson.lessonNumber}. ${lesson.title}`;
  };

  const handleCopy = () => {
    if (!currentData) return;
    // Tạo chuỗi có tab (\t) để Excel hiểu là chuyển cột khi Paste
    const text = [
      `KHỐI 3\t${formatLessonText(currentData.grade3)}`,
      `KHỐI 4\t${formatLessonText(currentData.grade4)}`,
      `KHỐI 5\t${formatLessonText(currentData.grade5)}`
    ].join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-2">
            Hệ thống Tra cứu & Copy Excel
          </h1>
          <p className="text-slate-500 text-sm">Chọn tuần học để lấy dữ liệu bài dạy nhanh chóng</p>
        </div>

        {/* Dropdown Selector */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row items-center justify-center gap-4">
          <label htmlFor="week-select" className="font-bold text-slate-700">Chọn tuần giảng dạy:</label>
          <div className="relative w-full md:w-64">
            <select
              id="week-select"
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(Number(e.target.value))}
              className="w-full appearance-none bg-slate-50 border-2 border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl font-bold focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
            >
              {CURRICULUM_DATA.map((item) => (
                <option key={item.week} value={item.week}>
                  Tuần học số {item.week}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.707 6.586 4.293 8l5 5z"/>
              </svg>
            </div>
          </div>

          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
              copyStatus === 'copied' 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
            }`}
          >
            {copyStatus === 'copied' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Đã Copy!
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Sao chép cho Excel
              </>
            )}
          </button>
        </div>

        {/* Result Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-300">
          <div className="bg-slate-50 border-b border-slate-300 px-6 py-3 flex justify-between items-center">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Kết quả tuần {selectedWeek}</span>
            <span className="text-[10px] text-slate-400 font-medium italic">Click vào ô để bôi đen nhanh</span>
          </div>
          
          <table className="w-full border-collapse">
            <tbody>
              {[
                { label: "KHỐI 3", content: currentData?.grade3 },
                { label: "KHỐI 4", content: currentData?.grade4 },
                { label: "KHỐI 5", content: currentData?.grade5 }
              ].map((row, idx) => (
                <tr key={idx} className="group">
                  <td className="w-32 py-4 px-6 border border-slate-300 font-bold text-slate-700 bg-slate-50 text-center uppercase text-sm">
                    {row.label}
                  </td>
                  <td className="py-4 px-6 border border-slate-300 text-slate-800 font-medium select-all hover:bg-blue-50 transition-colors">
                    {row.content ? formatLessonText(row.content) : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pro Tip */}
        <div className="mt-8 flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
          <div className="text-amber-500 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-amber-800 font-medium">
              Mẹo: Khi bạn nhấn "Sao chép cho Excel", ứng dụng sẽ tự động tách cột. Bạn chỉ cần vào Excel, chọn ô đầu tiên và nhấn <kbd className="px-1 py-0.5 bg-white border border-amber-200 rounded text-xs font-bold">Ctrl + V</kbd>.
            </p>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Data Standardized for Educators</p>
      </footer>
    </div>
  );
};

export default App;
