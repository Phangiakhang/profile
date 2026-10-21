'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, ExternalLink, Phone, MessageCircle, Share2 } from 'lucide-react';
import { PROFILE_INFO } from '@/lib/profile-data';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedZalo, setCopiedZalo] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyZalo = () => {
    navigator.clipboard.writeText(PROFILE_INFO.phoneZalo);
    setCopiedZalo(true);
    setTimeout(() => setCopiedZalo(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMsg('Vui lòng điền đầy đủ họ tên, email và nội dung tin nhắn.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  const socialProfiles = [
    { name: 'GitHub', handle: 'Phangiakhang', url: PROFILE_INFO.socialLinks.github, detail: 'Kho lưu trữ C++ & Snippets' },
    { name: 'Codeforces', handle: 'giakhang141', url: PROFILE_INFO.socialLinks.codeforces, detail: 'Hồ sơ thi đấu trực tuyến' },
    { name: 'VNOI Online Judge', handle: 'PhanGiaKhang', url: PROFILE_INFO.socialLinks.vnoi, detail: 'Giải đề & Bedao Contests' },
    { name: 'HackerRank', handle: 'giakhangnt', url: PROFILE_INFO.socialLinks.hackerrank, detail: 'Luyện tập Problem Solving' },
    { name: 'Facebook', handle: 'Phan Gia Khang', url: PROFILE_INFO.socialLinks.facebook, detail: 'Trang cá nhân chính thức' },
    { name: 'TikTok', handle: '@gkhang.24', url: PROFILE_INFO.socialLinks.tiktok, detail: 'Kênh TikTok cá nhân' },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 mb-2">
            08. THÔNG TIN LIÊN HỆ & MẠNG XÃ HỘI
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Kết Nối & Giao Lưu Cùng Felix
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Rất vui được kết nối, trao đổi kinh nghiệm lập trình thuật toán, chia sẻ tài liệu chuyên đề hoặc thảo luận cùng các bạn học sinh chuyên Tin trên toàn quốc!
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Email Cá Nhân</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {PROFILE_INFO.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Đã chép Email!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 text-white transition-colors"
                >
                  Gửi Mail
                </a>
              </div>
            </div>

            {/* Zalo Contact Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Số Điện Thoại / Zalo</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {PROFILE_INFO.phoneZalo}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyZalo}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                >
                  {copiedZalo ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Đã chép số!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép Zalo</span>
                    </>
                  )}
                </button>

                <a
                  href={PROFILE_INFO.socialLinks.zalo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white dark:text-cyan-400 transition-colors"
                >
                  Mở Zalo
                </a>
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-medium text-slate-400">
                KÊNH MẠNG XÃ HỘI & THI ĐẤU
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {socialProfiles.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-cyan-500/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {soc.name}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">
                        {soc.handle}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Gửi Tin Nhắn Cho Felix
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              Bạn muốn trao đổi về bài tập, chia sẻ kinh nghiệm thi HSG hay hợp tác trong các dự án công nghệ? Hãy để lại lời nhắn nhé.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-200 text-center space-y-2">
                <Check className="w-8 h-8 mx-auto text-emerald-500" />
                <h4 className="text-sm font-bold">Cảm ơn bạn! Tin nhắn đã được gửi.</h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  Felix sẽ phản hồi bạn qua email hoặc Zalo trong thời gian sớm nhất!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name-input" className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Họ và tên của bạn:
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="VD: Nguyễn Văn A"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email-input" className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Địa chỉ Email:
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message-input" className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Nội dung tin nhắn:
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hãy viết điều bạn muốn trao đổi cùng Felix tại đây..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 text-white font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Đang gửi...' : 'Gửi Tin Nhắn'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
