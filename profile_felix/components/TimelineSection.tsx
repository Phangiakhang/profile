'use client';

import React, { useState } from 'react';
import { Award, Calendar, Trophy, Check, Filter, Bookmark, Sparkles, MapPin } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/profile-data';
import { filterAchievementsByYear, filterAchievementsByCategory, Achievement } from '@/lib/profile-logic';

export default function TimelineSection() {
  const [selectedYear, setSelectedYear] = useState<'all' | '2026' | '2025' | '2024' | '2023'>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hsg' | 'tinhoc-tre' | 'olympic' | 'casio-khkt'>('all');

  let filteredItems = filterAchievementsByYear(ACHIEVEMENTS, selectedYear);
  filteredItems = filterAchievementsByCategory(filteredItems, selectedCategory);

  const yearFilters = [
    { key: 'all', label: 'Tất cả (22 cột mốc)' },
    { key: '2026', label: '2026 (HSGQG & Top 1)' },
    { key: '2025', label: '2025 (Olympic 30/4)' },
    { key: '2024', label: '2024' },
    { key: '2023', label: '2023' },
  ] as const;

  const categoryFilters = [
    { key: 'all', label: 'Tất cả lĩnh vực' },
    { key: 'hsg', label: 'Kỳ thi HSG' },
    { key: 'tinhoc-tre', label: 'Tin học trẻ' },
    { key: 'olympic', label: 'Olympic 30/4' },
    { key: 'casio-khkt', label: 'Casio & KHKT' },
  ] as const;

  return (
    <section id="achievements" className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 mb-2">
            02. CHUỖI TIMELINE THÀNH TÍCH (2023 - 2026)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Dấu Ấn & Cột Mốc Thi Đấu Của Phan Gia Khang
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
            Bảng tổng hợp chi tiết 22 kỳ thi và giải thưởng qua các năm học từ cấp huyện, cấp tỉnh đến cấp Quốc gia và các kỳ thi Olympic khu vực miền Nam.
          </p>
        </div>

        {/* Dual Filter Bars */}
        <div className="space-y-3 mb-10 p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
          {/* Year Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
            <span className="font-mono text-slate-500 dark:text-slate-400 font-semibold min-w-24">
              Theo năm học:
            </span>
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Lọc theo năm">
              {yearFilters.map((y) => (
                <button
                  key={y.key}
                  onClick={() => setSelectedYear(y.key)}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors text-xs cursor-pointer ${
                    selectedYear === y.key
                      ? 'bg-blue-600 text-white dark:bg-cyan-500 dark:text-slate-950 font-semibold shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {y.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="font-mono text-slate-500 dark:text-slate-400 font-semibold min-w-24">
              Theo lĩnh vực:
            </span>
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Lọc theo thể loại">
              {categoryFilters.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setSelectedCategory(c.key)}
                  className={`px-3 py-1 font-medium rounded-md transition-colors text-xs cursor-pointer ${
                    selectedCategory === c.key
                      ? 'bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900 font-semibold shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-6 pl-6 sm:pl-8">
          {filteredItems.map((item: Achievement, index: number) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                  item.highlight
                    ? 'bg-blue-600 dark:bg-cyan-400 border-white dark:border-[#011627] ring-4 ring-blue-100 dark:ring-cyan-950'
                    : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-[#011627]'
                }`}
              />

              {/* Item Card */}
              <div
                className={`p-5 sm:p-6 rounded-xl border transition-all ${
                  item.highlight
                    ? 'bg-white dark:bg-slate-900/90 border-blue-200 dark:border-cyan-500/40 shadow-xs'
                    : 'bg-white/80 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Header tags: Grade, Contest Type, Level, Date */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5 font-mono">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Grade Badge */}
                    {item.grade && (
                      <span className="px-2 py-0.5 rounded-md bg-blue-100/80 dark:bg-blue-950 text-blue-800 dark:text-cyan-300 font-semibold text-[11px]">
                        {item.grade}
                      </span>
                    )}

                    {/* Level */}
                    {item.level && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]">
                        {item.level}
                      </span>
                    )}

                    {/* Contest type */}
                    {item.contestType && (
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                        {item.contestType}
                      </span>
                    )}

                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-200">
                      {item.examDate ? `Thi: ${item.examDate}` : item.date}
                    </span>
                  </div>

                  {/* Award Tag */}
                  <div className="flex items-center gap-2">
                    {item.award && (
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          item.highlight
                            ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/60'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        ★ {item.award}
                      </span>
                    )}
                  </div>
                </div>

                {/* Contest Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Score, SBD, and Result date strip */}
                <div className="flex flex-wrap items-center gap-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  {item.score && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Điểm số:</span>
                      <strong className="text-blue-600 dark:text-cyan-400 font-bold">{item.score}</strong>
                    </div>
                  )}

                  {item.sbd && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">SBD:</span>
                      <strong className="text-slate-700 dark:text-slate-200">{item.sbd}</strong>
                    </div>
                  )}

                  {item.resultDate && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Ngày ra kết quả:</span>
                      <span className="text-slate-600 dark:text-slate-300">{item.resultDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
