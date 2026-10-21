'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, BookOpen, Layers, X, FileCode } from 'lucide-react';
import { PROJECTS, PROFILE_INFO } from '@/lib/profile-data';
import { filterProjects, ProjectItem } from '@/lib/profile-logic';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'polygon-dmoj' | 'github-repo' | 'docs-articles'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filterProjects(PROJECTS, selectedCategory);

  const categories = [
    { key: 'all', label: 'Tất cả dự án' },
    { key: 'polygon-dmoj', label: 'Sáng tác Đề thi (Polygon)' },
    { key: 'github-repo', label: 'GitHub Repositories' },
    { key: 'docs-articles', label: 'Chuyên đề & Tài liệu' },
  ] as const;

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 mb-2">
              05. DỰ ÁN & SÁNG TÁC ĐỀ BÀI
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Sáng Tác Bộ Đề & Đóng Góp Mã Nguồn Mở
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Các bộ đề thuật toán sáng tác trên hệ thống Polygon (Codeforces) và kho lưu trữ C++ snippets phục vụ cộng đồng học sinh chuyên Tin.
            </p>
          </div>

          {/* Category Filter buttons */}
          <div
            className="flex items-center gap-1 p-1 bg-slate-200/60 dark:bg-slate-900 rounded-lg border border-slate-300/60 dark:border-slate-800 text-xs overflow-x-auto"
            role="group"
            aria-label="Lọc dự án"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-cyan-400 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <span className="text-blue-600 dark:text-cyan-400 font-semibold uppercase">
                    {project.category === 'polygon-dmoj' ? 'Polygon Setter' : project.category === 'github-repo' ? 'GitHub Repo' : 'Chuyên đề'}
                  </span>
                  {project.stats && <span>{project.stats}</span>}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">
                  {project.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="text-slate-700 dark:text-slate-300">#{tag}</span>
                      {idx < project.tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Xem chi tiết dự án
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Mở GitHub Repo"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                aria-label="Đóng chi tiết"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase font-semibold mb-1">
                DỰ ÁN & ĐÓNG GÓP
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {activeModalProject.title}
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{activeModalProject.description}</p>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 font-mono text-xs">
                  <div className="text-slate-500 mb-1.5">Công nghệ & Nền tảng:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950"
                    >
                      <Github className="w-4 h-4" />
                      Mở GitHub
                    </a>
                  )}
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
