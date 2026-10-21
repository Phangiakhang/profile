'use client';

import React, { useState } from 'react';
import { Search, Code2, Copy, Check, X, Terminal, ExternalLink, Zap, Layers } from 'lucide-react';
import { ALGORITHM_TOPICS, PROFILE_INFO } from '@/lib/profile-data';
import { searchAlgorithms, AlgorithmTopic } from '@/lib/profile-logic';

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlgo, setSelectedAlgo] = useState<AlgorithmTopic | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredAlgos = searchAlgorithms(ALGORITHM_TOPICS, searchQuery);

  const languages = [
    { name: 'C++ (C++17 / STL)', level: 'Chuyên sâu (Ngôn ngữ chính CP & Thi HSG)', percent: 96, color: 'bg-blue-600 dark:bg-cyan-400' },
    { name: 'Python 3', level: 'Tốt (Scripting, Sinh testcase, Polygon CLI)', percent: 84, color: 'bg-emerald-500' },
    { name: 'JavaScript / TypeScript', level: 'Khá (Xây dựng Web UI & Tool hỗ trợ)', percent: 78, color: 'bg-amber-500' },
    { name: 'HTML5 & Modern CSS', level: 'Khá (Giao diện ứng dụng & Web cá nhân)', percent: 75, color: 'bg-purple-500' },
  ];

  const cpPlatforms = [
    {
      name: 'Codeforces',
      handle: 'giakhang141',
      url: PROFILE_INFO.socialLinks.codeforces,
      role: 'Thi đấu trực tuyến Div 2 & Problem Solving',
      tag: 'Thi đấu quốc tế',
    },
    {
      name: 'VNOI Online Judge',
      handle: 'PhanGiaKhang',
      url: PROFILE_INFO.socialLinks.vnoi,
      role: 'Luyện tập đề thi HSG & Bedao Contests',
      tag: 'Cộng đồng Việt Nam',
    },
    {
      name: 'Polygon (Codeforces)',
      handle: 'Felix',
      url: '#',
      role: 'Sáng tác đề thi, viết Validator & Test Generator',
      tag: 'Problem Setter',
    },
    {
      name: 'HackerRank',
      handle: 'giakhangnt',
      url: PROFILE_INFO.socialLinks.hackerrank,
      role: 'Luyện tập cấu trúc dữ liệu và giải thuật',
      tag: 'Kỹ năng nền tảng',
    },
    {
      name: 'GitHub Algorithm Repos',
      handle: 'Phangiakhang',
      url: PROFILE_INFO.socialLinks.github,
      role: 'Kho template C++17, snippets cấu trúc dữ liệu và giải thuật mở',
      tag: 'Mã nguồn mở',
    },
  ];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="algorithms" className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 mb-2">
            03. KỸ NĂNG & THUẬT TOÁN THẾ MẠNH
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Cấu Trúc Dữ Liệu & Giải Thuật Chuyên Sâu
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Tập trung sâu vào các cấu trúc dữ liệu cây phân đoạn (Segment Tree), Disjoint Set Union (DSU), băm chuỗi đa thức và các kỹ thuật quy hoạch động nâng cao.
          </p>
        </div>

        {/* 2-Column Split: Languages & Online Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Languages */}
          <div className="lg:col-span-6 p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              Ngôn Ngữ Lập Trình
            </h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.name}</span>
                    <span className="text-slate-500 dark:text-slate-400">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${lang.color}`}
                      style={{ width: `${lang.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Online Platforms (KHÔNG HIỂN THỊ RATING) */}
          <div className="lg:col-span-6 p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              Nền Tảng Thi Đấu & Sáng Tác Đề Bài
            </h3>
            <div className="space-y-2.5 text-xs font-mono">
              {cpPlatforms.map((plat) => (
                <div
                  key={plat.name}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-slate-100">{plat.name}</span>
                      <span className="text-[10px] text-blue-600 dark:text-cyan-400">@{plat.handle}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {plat.role}
                    </div>
                  </div>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-300 shrink-0">
                    {plat.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Algorithm Knowledge Base with Search */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Thuật Toán Thế Mạnh & Code Mẫu Chuẩn C++
            </h3>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm thuật toán (Segment Tree, DSU...)"
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Algorithms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAlgos.map((algo) => (
              <div
                key={algo.id}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                    <span className="text-blue-600 dark:text-cyan-400 font-semibold uppercase">
                      {algo.category === 'ds' ? 'Cấu trúc dữ liệu' : algo.category === 'dp' ? 'Quy hoạch động' : algo.category === 'graph' ? 'Đồ thị' : 'Xâu & Toán học'}
                    </span>
                    <span>{algo.difficulty}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1.5">
                    {algo.name}
                  </h4>

                  <div className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-2">
                    {algo.complexity}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {algo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedAlgo(algo)}
                    className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Xem C++ Snippet Mẫu
                    <ExternalLink className="w-3 h-3" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">C++17 Template</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Modal Drawer */}
      {selectedAlgo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="algo-dialog-title"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-cyan-400 uppercase">
                  {selectedAlgo.category} · {selectedAlgo.complexity}
                </div>
                <h3 id="algo-dialog-title" className="text-base font-bold text-white">
                  {selectedAlgo.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedAlgo(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Đóng mã nguồn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedAlgo.description}
              </p>

              <div className="relative rounded-lg bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-300 leading-relaxed">
                  <code>{selectedAlgo.codeSnippet}</code>
                </pre>
              </div>
            </div>

            <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">Độ khó: {selectedAlgo.difficulty}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyCode(selectedAlgo.codeSnippet)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Đã chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép Code</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setSelectedAlgo(null)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
