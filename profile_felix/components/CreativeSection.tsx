'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { POSTS, PROFILE_INFO, PostItem } from '@/lib/profile-data';

export default function CreativeSection() {
  const [activePost, setActivePost] = useState<PostItem | null>(null);

  return (
    <section id="creative" className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 mb-2">
            06. GÓC SÁNG TẠO & VIẾT LÁCH
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Tản Văn Học Đường & Thiết Kế Đồ Họa
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Lưu giữ những xúc cảm chân thật tuổi học trò dưới mái trường THPT Cái Nước, tản văn chia sẻ và niềm đam mê thiết kế Canva.
          </p>
        </div>

        {/* 2-Column Split: Editorial Image & Articles List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Atmospheric photo */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-900 mb-6">
              <Image
                src={PROFILE_INFO.creativeUrl}
                alt="Đêm học tập và sáng tạo của Phan Gia Khang"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white text-xs font-mono">
                  <div className="font-semibold text-cyan-300">Late Night Creative & Code Session</div>
                  <div className="text-slate-300 text-[11px]">Bản thảo thuật toán · Cà Mau, 2026</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
              <div className="text-xs font-mono font-semibold text-blue-600 dark:text-cyan-400 mb-1">
                LỜI TỰ SỰ CỦA FELIX
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed font-sans">
                &ldquo;Đôi bàn tay gõ phím không chỉ để giải những bài toán trên giấy thi, mà là để xây dựng tương lai và khẳng định chính mình.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Articles */}
          <div className="lg:col-span-7 space-y-4">
            {POSTS.map((post) => (
              <div
                key={post.id}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                    <span className="text-blue-600 dark:text-cyan-400 font-semibold">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActivePost(post)}
                    className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1.5 cursor-pointer"
                  >
                    Đọc toàn bộ bài viết
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">By Felix</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="post-reader-title"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
              <div>
                <div className="text-xs font-mono text-blue-600 dark:text-cyan-400">
                  {activePost.category} · {activePost.date} · {activePost.readTime}
                </div>
                <h3 id="post-reader-title" className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  {activePost.title}
                </h3>
              </div>
              <button
                onClick={() => setActivePost(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Đóng bài viết"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
              <div className="whitespace-pre-line">
                {activePost.content}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-mono">Tác giả: {PROFILE_INFO.name} ({PROFILE_INFO.nickname})</span>
              <button
                onClick={() => setActivePost(null)}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 text-white font-medium transition-colors"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
