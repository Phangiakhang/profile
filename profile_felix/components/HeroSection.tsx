'use client';

import React, { useState } from 'react';
import { ArrowRight, Terminal, Copy, Check, ExternalLink, Quote } from 'lucide-react';
import { PROFILE_INFO } from '@/lib/profile-data';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'template' | 'profile'>('template');
  const [copied, setCopied] = useState(false);

  const cppTemplateCode = `#include <bits/stdc++.h>
// #define FILE
using namespace std;

// Phan Gia Khang (Felix) - CP Template
// Lớp 12A10 · THPT Cái Nước, Cà Mau
#define __giakhangdt__ signed main()
#define faster ios_base::sync_with_stdio(false); cin.tie(nullptr); cout.tie(nullptr)
#define endl "\\n"

void solve() {
    // "Chúa cho tôi 2 tay để code..."
    // Chinh phục thử thách thuật toán
    cout << "Felix - THPT Cai Nuoc, Ca Mau" << "\\n";
}

__giakhangdt__ {
    faster;
    #ifdef FILE
        freopen("filename.inp", "r", stdin);
        freopen("filename.out", "w", stdout);
    #endif

    int t; cin >> t;
    while (t --> 0) solve();

    return 0;
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(cppTemplateCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main 2-column Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Clean Kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-blue-600 dark:text-cyan-400">
                <span>{PROFILE_INFO.classRoom}</span>
                <span aria-hidden="true">·</span>
                <span>{PROFILE_INFO.school}</span>
                <span aria-hidden="true">·</span>
                <span>Cà Mau</span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-balance leading-tight">
                Chinh Phục Thuật Toán & Xây Dựng Tương Lai
              </h1>

              {/* Lead Copy */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Xin chào, mình là <span className="font-semibold text-slate-900 dark:text-cyan-300">{PROFILE_INFO.name}</span>. 
                Học sinh lớp 12A10 Trường THPT Cái Nước (Cà Mau), đam mê nghiên cứu cấu trúc dữ liệu, lập trình thi đấu giải thuật và phát triển phần mềm.
              </p>

              {/* Personal Quote Box */}
              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-slate-900/90 border border-blue-200/70 dark:border-cyan-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-3">
                <Quote className="w-5 h-5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono text-blue-800 dark:text-cyan-400 font-semibold mb-0.5">
                    QUOTE CÁ NHÂN
                  </div>
                  <p className="font-medium italic leading-relaxed text-slate-800 dark:text-slate-100">
                    &ldquo;{PROFILE_INFO.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* School & Target marker */}
              <div className="p-3.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-3 font-mono">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0" />
                <span>
                  Địa chỉ: {PROFILE_INFO.address}
                </span>
              </div>
            </div>

            {/* Action Buttons & Social quick links */}
            <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-4">
              <a
                href="#achievements"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                Xem 22 Cột Mốc Thành Tích
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Liên hệ kết nối
              </a>

              <a
                href={PROFILE_INFO.socialLinks.codeforces}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                title="Hồ sơ Codeforces giakhang141 (Không hiển thị rating)"
              >
                <span>Codeforces</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={PROFILE_INFO.socialLinks.vnoi}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                title="Hồ sơ VNOI PhanGiaKhang"
              >
                <span>VNOI</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={PROFILE_INFO.socialLinks.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                title="Hồ sơ HackerRank giakhangnt"
              >
                <span>HackerRank</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Code Terminal / Hồ Sơ Thi Đấu (KHÔNG HIỂN THỊ RATING) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 shadow-lg overflow-hidden flex flex-col font-mono text-xs">
              {/* Terminal Title Bar */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-cyan-400 text-[11px] font-semibold">felix.cpp</span>
                </div>

                {/* Tab switchers */}
                <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-md">
                  <button
                    onClick={() => setActiveTab('template')}
                    className={`px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                      activeTab === 'template' ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    felix.cpp
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                      activeTab === 'profile' ? 'bg-cyan-500 text-slate-950 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Dấu Ấn Thi Đấu
                  </button>
                </div>
              </div>

              {/* Card Body */}
              {activeTab === 'template' ? (
                <div className="p-4 flex-1 flex flex-col justify-between overflow-x-auto">
                  <pre className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                    <code>{cppTemplateCode}</code>
                  </pre>
                  <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      g++ -O2 -std=c++17 -Wall felix.cpp
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      aria-label="Sao chép template C++ felix.cpp"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Sao chép template</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3 font-sans">
                  <div>
                    <div className="text-xs font-mono text-cyan-400 mb-1">DẤU ẤN TIÊU BIỂU</div>
                    <div className="text-sm font-semibold text-white">Thành tích thi đấu của Phan Gia Khang</div>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">HSG Tỉnh Vòng 2 (2026):</span>
                      <span className="text-cyan-400 font-bold">Top 1 Thủ khoa (25.93/40)</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">HSG Quốc Gia (HSGQG):</span>
                      <span className="text-amber-400 font-bold">Giải Khuyến Khích</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">Olympic 30/4 Miền Nam:</span>
                      <span className="text-blue-400 font-bold">Huy Chương Bạc (Top 42)</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">Điểm tuyệt đối cấp Huyện/Tỉnh:</span>
                      <span className="text-emerald-400 font-bold">20/20 Điểm</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800 font-mono">
                    <span>Đại diện: <strong className="text-white">THPT Cái Nước</strong></span>
                    <span className="text-cyan-400">Cà Mau</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-width KPI strip below Hero Split (KHÔNG HIỂN THỊ RATING) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
            <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600 dark:text-cyan-400">
              Top 1 Cà Mau
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
              Thủ khoa HSG Vòng 2
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Điểm số: 25.93 / 40
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
            <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600 dark:text-cyan-400">
              HSGQG 2026
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
              Giải Khuyến Khích Quốc Gia
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Kỳ thi HSG Quốc Gia Môn Tin
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
            <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600 dark:text-cyan-400">
              HCB Olympic
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
              Olympic 30/4 Miền Nam
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Top 42 Thí sinh xuất sắc
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
            <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600 dark:text-cyan-400">
              22 Cột Mốc
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
              Hành trình 2023 - 2026
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Cấp Huyện, Tỉnh & Quốc Gia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
