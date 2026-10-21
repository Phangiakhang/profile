'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Laptop, Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { ThemeMode, resolveEffectiveTheme } from '@/lib/profile-logic';
import { PROFILE_INFO } from '@/lib/profile-data';

interface NavbarProps {
  theme: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
}

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Về tôi', href: '#about' },
    { name: 'Thành tích', href: '#achievements' },
    { name: 'Thuật toán', href: '#algorithms' },
    { name: 'Setup', href: '#setup' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Viết lách', href: '#creative' },
    { name: 'Mục tiêu', href: '#goals' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#f8fafc]/90 dark:bg-[#011627]/90 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-xs'
          : 'bg-[#f8fafc] dark:bg-[#011627] border-slate-200/60 dark:border-slate-800/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2 whitespace-nowrap shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          aria-label="Về đầu trang Gia Khang"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 dark:bg-cyan-500 flex items-center justify-center text-white dark:text-slate-950 font-mono font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
            &gt;_
          </div>
          <span className="font-mono text-base tracking-normal">
            {PROFILE_INFO.name} <span className="text-xs text-blue-600 dark:text-cyan-400 font-normal">({PROFILE_INFO.nickname})</span>
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300"
          aria-label="Điều hướng chính"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + Theme Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Theme switcher toggle */}
          <div
            className="flex items-center p-1 rounded-lg bg-slate-200/70 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700/60 text-xs"
            role="group"
            aria-label="Chuyển đổi giao diện Sáng / Tối / Hệ thống"
          >
            <button
              onClick={() => onThemeChange('light')}
              className={`p-1.5 rounded-md transition-all ${
                theme === 'light'
                  ? 'bg-white text-blue-600 shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
              title="Chế độ Sáng"
              aria-label="Chế độ Sáng"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onThemeChange('dark')}
              className={`p-1.5 rounded-md transition-all ${
                theme === 'dark'
                  ? 'bg-cyan-500/20 text-cyan-400 shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
              title="Chế độ Tối (Night Owl)"
              aria-label="Chế độ Tối"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onThemeChange('system')}
              className={`p-1.5 rounded-md transition-all ${
                theme === 'system'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-cyan-300 shadow-xs font-semibold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
              title="Chế độ Hệ thống"
              aria-label="Chế độ Hệ thống"
            >
              <Laptop className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            Liên hệ
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-[#f8fafc] dark:bg-[#011627] px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-cyan-500 dark:text-slate-950 rounded-lg shadow-xs"
            >
              Gửi tin nhắn cho Khang
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
