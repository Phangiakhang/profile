'use client';

import React, { useState, useEffect } from 'react';
import {
  Trophy,
  GraduationCap,
  Calendar,
  Sparkles,
  Clock,
  Check,
  Copy,
  Flame,
  ArrowUpRight,
  Target,
  BookOpen,
} from 'lucide-react';
import { GOALS } from '@/lib/profile-data';
import { calculateDetailedCountdown, CountdownTime } from '@/lib/profile-logic';

interface CountdownBlockProps {
  label: string;
  value: number;
  highlightColor?: 'amber' | 'cyan';
  mounted?: boolean;
}

function DigitBox({ label, value, highlightColor = 'amber', mounted = true }: CountdownBlockProps) {
  const formatted = mounted ? String(value).padStart(2, '0') : '--';
  const isAmber = highlightColor === 'amber';

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-22 rounded-xl flex items-center justify-center font-mono font-black text-2xl sm:text-3xl md:text-4xl tracking-tight shadow-inner border backdrop-blur-md transition-all ${
          isAmber
            ? 'bg-amber-950/70 border-amber-500/40 text-amber-300 shadow-amber-950/50'
            : 'bg-cyan-950/70 border-cyan-500/40 text-cyan-300 shadow-cyan-950/50'
        }`}
      >
        {/* Subtle horizontal flip divider line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-px h-px bg-white/10 pointer-events-none" />
        <span className="tabular-nums z-10">
          {formatted}
        </span>
      </div>
      <span
        className={`mt-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider ${
          isAmber ? 'text-amber-200/80 dark:text-amber-300/80' : 'text-cyan-200/80 dark:text-cyan-300/80'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function GoalsSection() {
  const HSGQG_DATE_STR = '2026-12-25T08:00:00+07:00';
  const THPT_DATE_STR = '2027-06-25T08:00:00+07:00';

  const [mounted, setMounted] = useState(false);
  const [hsgqgTime, setHsgqgTime] = useState<CountdownTime>(() =>
    calculateDetailedCountdown(HSGQG_DATE_STR)
  );
  const [thptTime, setThptTime] = useState<CountdownTime>(() =>
    calculateDetailedCountdown(THPT_DATE_STR)
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setHsgqgTime(calculateDetailedCountdown(HSGQG_DATE_STR));
    setThptTime(calculateDetailedCountdown(THPT_DATE_STR));

    const timer = setInterval(() => {
      setHsgqgTime(calculateDetailedCountdown(HSGQG_DATE_STR));
      setThptTime(calculateDetailedCountdown(THPT_DATE_STR));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyDate = (title: string, dateStr: string, key: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(`${title}: ${dateStr}`);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <section id="goals" className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
            07. MỤC TIÊU & ĐỒNG HỒ ĐẾM NGƯỢC THỜI GIAN THỰC
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Tâm Điểm Tập Trung & Chinh Phục Đỉnh Cao
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Phan Gia Khang dành trọn nhiệt huyết cho hai cột mốc học thuật quan trọng nhất: Kỳ thi Chọn Học sinh Giỏi Quốc Gia (HSGQG 2026) và Kỳ thi Tốt nghiệp THPT 2027.
          </p>
        </div>

        {/* Visual Countdown Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: HSGQG 2026 */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-linear-to-b from-slate-900 via-amber-950/40 to-slate-950 text-white border border-amber-500/40 shadow-xl shadow-amber-950/30 overflow-hidden flex flex-col justify-between">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Card Header & Badge */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  MỤC TIÊU QUỐC GIA 2026
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyDate('Kỳ thi HSG Quốc Gia (HSGQG)', '25/12/2026', 'hsgqg')}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-300/80 hover:text-amber-200 transition-colors px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20"
                  title="Sao chép ngày thi"
                >
                  {copiedKey === 'hsgqg' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>25/12/2026</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Kỳ Thi Chọn HSG Quốc Gia (HSGQG)
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-200/90 mt-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Ngày thi chính thức: <strong>Thứ Sáu, ngày 25/12/2026</strong></span>
                  </p>
                </div>
              </div>

              {/* Live Visual Countdown Blocks */}
              <div className="my-6 p-4 sm:p-6 rounded-2xl bg-black/40 border border-amber-500/30 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-mono text-amber-300/80 mb-4 px-1">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    ĐỒNG HỒ ĐẾM NGƯỢC THỜI GIAN THỰC
                  </span>
                  <span className="text-[11px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/30">
                    LIVE
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-4 justify-items-center">
                  <DigitBox label="Ngày" value={hsgqgTime.days} highlightColor="amber" mounted={mounted} />
                  <DigitBox label="Giờ" value={hsgqgTime.hours} highlightColor="amber" mounted={mounted} />
                  <DigitBox label="Phút" value={hsgqgTime.minutes} highlightColor="amber" mounted={mounted} />
                  <DigitBox label="Giây" value={hsgqgTime.seconds} highlightColor="amber" mounted={mounted} />
                </div>
              </div>
            </div>

            {/* Target Details & Strategy */}
            <div className="border-t border-amber-500/20 pt-4 mt-2">
              <div className="text-xs font-semibold text-amber-200 mb-2 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Chiến lược rèn luyện trọng tâm:
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Nâng cao subtasks:</strong> Mục tiêu bứt phá từ 13.5 lên 25+ điểm.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Chuyên đề then chốt:</strong> Heavy-Light Decomposition, Centroid Decomposition, DP Convex Hull Trick, Max Flow & Min Cut.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Kỷ luật thi đấu:</strong> Rèn luyện giải đề các năm và đề thi dự bị theo thời gian thi thực tế 180 phút/buổi.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: THPT Graduation Exam 2027 */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-linear-to-b from-slate-900 via-cyan-950/40 to-slate-950 text-white border border-cyan-500/40 shadow-xl shadow-cyan-950/30 overflow-hidden flex flex-col justify-between">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Card Header & Badge */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  MỤC TIÊU ĐẠI HỌC 2027
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyDate('Kỳ thi Tốt nghiệp THPT 2027', '25/06/2027', 'thpt')}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-300/80 hover:text-cyan-200 transition-colors px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20"
                  title="Sao chép ngày thi"
                >
                  {copiedKey === 'thpt' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>25/06/2027</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Kỳ Thi Tốt Nghiệp THPT 2027
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-200/90 mt-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Dự kiến: <strong>Tháng 6/2027 (Kỳ thi Quốc Gia)</strong></span>
                  </p>
                </div>
              </div>

              {/* Live Visual Countdown Blocks */}
              <div className="my-6 p-4 sm:p-6 rounded-2xl bg-black/40 border border-cyan-500/30 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-300/80 mb-4 px-1">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    ĐỒNG HỒ ĐẾM NGƯỢC THỜI GIAN THỰC
                  </span>
                  <span className="text-[11px] bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-400/30">
                    LIVE
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-4 justify-items-center">
                  <DigitBox label="Ngày" value={thptTime.days} highlightColor="cyan" mounted={mounted} />
                  <DigitBox label="Giờ" value={thptTime.hours} highlightColor="cyan" mounted={mounted} />
                  <DigitBox label="Phút" value={thptTime.minutes} highlightColor="cyan" mounted={mounted} />
                  <DigitBox label="Giây" value={thptTime.seconds} highlightColor="cyan" mounted={mounted} />
                </div>
              </div>
            </div>

            {/* Target Details & Strategy */}
            <div className="border-t border-cyan-500/20 pt-4 mt-2">
              <div className="text-xs font-semibold text-cyan-200 mb-2 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                Định hướng tuyển sinh & Nguyện vọng:
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Tổ hợp xét tuyển:</strong> Khối A00 (Toán, Lý, Hóa) hoặc A01 (Toán, Lý, Anh) cùng giải HSG Quốc Gia môn Tin học.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Nguyện vọng ưu tiên:</strong> Ngành Khoa học Máy tính / Kỹ thuật Phần mềm tại các trường đại học công nghệ hàng đầu (ĐHQG TP.HCM, Bách Khoa, KHTN).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Kế hoạch dài hạn:</strong> Đội tuyển lập trình thi đấu ICPC cấp Đại học và nghiên cứu giải thuật chuyên sâu.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Goals Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOALS.map((goal) => (
            <div
              key={goal.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <span className="text-blue-600 dark:text-cyan-400 font-semibold uppercase">
                    {goal.category}
                  </span>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-200/50 dark:border-amber-800/50">
                    {goal.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {goal.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {goal.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                  <span>Mức độ sẵn sàng & kế hoạch</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    {goal.progress}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
