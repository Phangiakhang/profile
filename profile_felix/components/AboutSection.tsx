'use client';

import React from 'react';
import Image from 'next/image';
import { Compass, Award, School, MapPin, Calendar, User } from 'lucide-react';
import { PROFILE_INFO } from '@/lib/profile-data';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 mb-2">
            01. GIỚI THIỆU BẢN THÂN
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Hành Trình Thuật Toán & Phương Châm Học Tập
          </h2>
        </div>

        {/* 2-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authentic Student Coder Photo with clean styling */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-900">
              <Image
                src={PROFILE_INFO.avatarUrl}
                alt="Chân dung Phan Gia Khang - Học sinh Lớp 12A10 THPT Cái Nước"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white text-xs font-mono">
                  <div className="font-semibold text-sm text-cyan-300">
                    {PROFILE_INFO.name}
                  </div>
                  <div className="text-slate-300">
                    {PROFILE_INFO.classRoom} · {PROFILE_INFO.school}
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5">
                    {PROFILE_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Mình là <strong>Phan Gia Khang</strong>, học sinh lớp 12A10 tại <strong>Trường THPT Cái Nước</strong>, Tỉnh Cà Mau. Hành trình lập trình của mình bắt đầu từ các kỳ thi học sinh giỏi THCS, rèn luyện qua các kỳ thi Tin học trẻ, giải Casio và từng bước chinh phục các sân chơi thuật toán lớn hơn.
              </p>
              <p>
                Từ những giải thưởng cấp huyện 20/20 điểm tuyệt đối năm 2023 đến giải Nhất cấp tỉnh, Huy Chương Bạc Olympic 30/4 năm 2025 và dấu mốc đạt <strong>Giải Khuyến khích Kỳ thi Chọn Học sinh Giỏi Quốc Gia (HSGQG 2026)</strong> cùng vị trí <strong>Top 1 HSG Cấp Tỉnh Vòng 2 (25.93/40)</strong>, mình luôn tâm niệm rằng: lập trình thi đấu là bài học về tính kiên định, sự tỉ mỉ trong từng trường hợp biên và niềm đam mê sáng tạo không ngừng.
              </p>
            </div>

            {/* Core Learning Philosophy Box */}
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-slate-900/90 border border-blue-200/60 dark:border-cyan-500/30">
              <div className="text-xs font-mono font-semibold text-blue-800 dark:text-cyan-300 mb-1 flex items-center gap-2">
                <Compass className="w-4 h-4" />
                TRIẾT LÝ & QUOTE
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 italic">
                &ldquo;{PROFILE_INFO.quote}&rdquo;
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                <span className="text-slate-400 block text-[11px]">Họ và tên:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {PROFILE_INFO.name}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                <span className="text-slate-400 block text-[11px]">Ngày sinh:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {PROFILE_INFO.dob}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                <span className="text-slate-400 block text-[11px]">Lớp & Trường:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {PROFILE_INFO.classRoom} · {PROFILE_INFO.school}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                <span className="text-slate-400 block text-[11px]">Quê quán:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {PROFILE_INFO.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
