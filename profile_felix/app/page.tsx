'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import SkillsSection from '@/components/SkillsSection';
import SetupSection from '@/components/SetupSection';
import ProjectsSection from '@/components/ProjectsSection';
import CreativeSection from '@/components/CreativeSection';
import GoalsSection from '@/components/GoalsSection';
import AIAssistantWidget from '@/components/AIAssistantWidget';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ThemeMode, resolveEffectiveTheme } from '@/lib/profile-logic';

export default function HomePage() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem('khang_theme_mode') as ThemeMode) || 'dark';
    setTheme(stored);
    applyTheme(stored);
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effective = resolveEffectiveTheme(mode, prefersDark);

    if (effective === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleThemeChange = (newMode: ThemeMode) => {
    setTheme(newMode);
    localStorage.setItem('khang_theme_mode', newMode);
    applyTheme(newMode);
  };

  // Listen to system changes if in system mode
  useEffect(() => {
    if (theme !== 'system') return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme('system');
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] dark:bg-[#011627] dark:text-[#f8fafc] transition-colors duration-200">
      {/* 01. Header & Theme Switcher */}
      <Navbar theme={theme} onThemeChange={handleThemeChange} />

      <main className="flex-1">
        {/* 02. Hero Section */}
        <HeroSection />

        {/* 03. About Me */}
        <AboutSection />

        {/* 04. Timeline & Achievements */}
        <TimelineSection />

        {/* 05. Skills & Algorithms */}
        <SkillsSection />

        {/* 06. My Setup & Tech Stack */}
        <SetupSection />

        {/* 07. Projects & Problem Design */}
        <ProjectsSection />

        {/* 08. Creative Corner */}
        <CreativeSection />

        {/* 09. Current Focus & Future Goals */}
        <GoalsSection />

        {/* 11. Contact & Social Links */}
        <ContactSection />
      </main>

      {/* 10. AI Assistant Widget (Floating) */}
      <AIAssistantWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
