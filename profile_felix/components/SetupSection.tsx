'use client';

import React from 'react';
import Image from 'next/image';
import { Settings } from 'lucide-react';
import { SETUP_TOOLS, PROFILE_INFO } from '@/lib/profile-data';

export default function SetupSection() {
  return (
    <section id="setup" className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 mb-2">
            04. GÓC HỌC TẬP & CÔNG CỤ YÊU THÍCH
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Môi Trường Lập Trình & Hệ Sinh Thái Của Felix
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Không gian lập trình được tinh chỉnh tối ưu cho việc giải quyết các bài toán thuật toán và sáng tạo ấn phẩm đồ họa học đường.
          </p>
        </div>

        {/* 2-Column Split: Image & Setup Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Authentic Workspace Image */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-900 mb-6">
              <Image
                src={PROFILE_INFO.workspaceUrl}
                alt="Góc học tập và lập trình của Phan Gia Khang (Felix)"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white text-xs font-mono">
                  <div className="font-semibold text-cyan-300">Felix Study Desk · Night Owl Aesthetic</div>
                  <div className="text-slate-300 text-[11px]">VS Code · Victor Mono · Polygon · Canva</div>
                </div>
              </div>
            </div>

            {/* Quick config note */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
              <div className="text-xs font-mono font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5" />
                EDITOR & FONT SPECS
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                VS Code sử dụng chủ đề <strong className="text-slate-900 dark:text-slate-100">Night Owl</strong> dịu mắt cho các buổi luyện code ban đêm, kết hợp phông chữ <strong className="text-slate-900 dark:text-slate-100">Victor Mono</strong> hỗ trợ font ligatures và phong cách chữ nghiêng thanh thoát.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Setup Categories */}
          <div className="lg:col-span-7 space-y-6">
            {SETUP_TOOLS.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80"
              >
                <h3 className="text-sm font-mono font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="text-[11px] text-slate-400 font-normal">3 công cụ chọn lọc</span>
                </h3>

                <div className="space-y-3">
                  {group.items.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                          <span>{tool.name}</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          {tool.detail}
                        </div>
                      </div>

                      <span className="self-start sm:self-center text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-cyan-300 font-medium whitespace-nowrap">
                        {tool.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
