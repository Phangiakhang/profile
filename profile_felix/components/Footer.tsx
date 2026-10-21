'use client';

import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PROFILE_INFO } from '@/lib/profile-data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-100/80 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono">
          <Terminal className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
          <span>
            {PROFILE_INFO.name} ({PROFILE_INFO.nickname}) · {PROFILE_INFO.classRoom} - {PROFILE_INFO.school}
          </span>
        </div>

        <div className="text-center sm:text-right flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Phan Gia Khang. Mọi quyền được bảo lưu.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            title="Lên đầu trang"
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
