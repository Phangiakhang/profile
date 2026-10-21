import test from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveEffectiveTheme,
  filterAchievementsByYear,
  filterAchievementsByCategory,
  filterProjects,
  searchAlgorithms,
  calculateDaysRemaining,
  calculateDetailedCountdown,
  queryKnowledgeBase,
  type Achievement,
  type ProjectItem,
  type AlgorithmTopic,
} from './profile-logic.ts';

test('resolveEffectiveTheme handles light, dark and system preferences', () => {
  assert.equal(resolveEffectiveTheme('light', true), 'light');
  assert.equal(resolveEffectiveTheme('dark', false), 'dark');
  assert.equal(resolveEffectiveTheme('system', true), 'dark');
  assert.equal(resolveEffectiveTheme('system', false), 'light');
});

test('filterAchievementsByYear filters by year accurately', () => {
  const dummy: Achievement[] = [
    {
      id: '1',
      date: '19/01/2026',
      year: '2026',
      title: 'HSGQG',
      category: 'hsg',
      award: 'Giải KK',
      description: '',
    },
    {
      id: '2',
      date: '06/04/2025',
      year: '2025',
      title: 'Olympic 30/4',
      category: 'olympic',
      award: 'HCB',
      description: '',
    },
  ];

  assert.equal(filterAchievementsByYear(dummy, 'all').length, 2);
  assert.equal(filterAchievementsByYear(dummy, '2026').length, 1);
  assert.equal(filterAchievementsByYear(dummy, '2026')[0].id, '1');
  assert.equal(filterAchievementsByYear(dummy, '2024').length, 0);
});

test('filterAchievementsByCategory filters by category properly', () => {
  const dummy: Achievement[] = [
    {
      id: '1',
      date: '19/01/2026',
      year: '2026',
      title: 'HSGQG',
      category: 'hsg',
      award: 'Giải KK',
      description: '',
    },
    {
      id: '2',
      date: '23/05/2024',
      year: '2024',
      title: 'KHKT',
      category: 'casio-khkt',
      award: 'Giải KK',
      description: '',
    },
  ];

  assert.equal(filterAchievementsByCategory(dummy, 'all').length, 2);
  assert.equal(filterAchievementsByCategory(dummy, 'hsg').length, 1);
  assert.equal(filterAchievementsByCategory(dummy, 'casio-khkt').length, 1);
});

test('filterProjects filters properly', () => {
  const dummy: ProjectItem[] = [
    {
      id: 'p1',
      title: 'Polygon Problem Setter',
      category: 'polygon-dmoj',
      description: '',
      tags: ['Polygon'],
    },
    {
      id: 'p2',
      title: 'Algorithm Repo',
      category: 'github-repo',
      description: '',
      tags: ['C++'],
    },
  ];

  assert.equal(filterProjects(dummy, 'all').length, 2);
  assert.equal(filterProjects(dummy, 'polygon-dmoj').length, 1);
  assert.equal(filterProjects(dummy, 'polygon-dmoj')[0].title, 'Polygon Problem Setter');
});

test('searchAlgorithms finds matching topics', () => {
  const topics: AlgorithmTopic[] = [
    {
      id: 'seg-tree',
      name: 'Segment Tree (Cây phân đoạn)',
      category: 'ds',
      difficulty: 'Nâng cao',
      complexity: 'O(log N)',
      description: 'Cây phân đoạn quản lý và truy vấn đoạn',
      codeSnippet: '// C++ segment tree',
    },
    {
      id: 'dsu',
      name: 'Disjoint Set Union (DSU)',
      category: 'ds',
      difficulty: 'Cơ bản',
      complexity: 'O(alpha(N))',
      description: 'Cấu trúc các tập hợp rời nhau',
      codeSnippet: '// DSU',
    },
  ];

  const res1 = searchAlgorithms(topics, 'segment');
  assert.equal(res1.length, 1);
  assert.equal(res1[0].id, 'seg-tree');

  const res2 = searchAlgorithms(topics, 'dsu');
  assert.equal(res2.length, 1);
  assert.equal(res2[0].id, 'dsu');
});

test('queryKnowledgeBase answers known queries for Felix', () => {
  assert.ok(queryKnowledgeBase('Thành tích của Khang').includes('HSG'));
  assert.ok(queryKnowledgeBase('Quote của Felix').includes('code'));
  assert.ok(queryKnowledgeBase('Khang học trường nào').includes('Cái Nước'));
});

test('calculateDaysRemaining computes correct days', () => {
  const baseDate = new Date('2026-10-20T00:00:00Z');
  const futureDate = '2026-12-25T00:00:00Z';
  const remaining = calculateDaysRemaining(futureDate, baseDate);
  assert.equal(remaining, 66);
});

test('calculateDetailedCountdown computes breakdown of days, hours, minutes, seconds', () => {
  const baseDate = new Date('2026-10-20T10:00:00Z');
  const futureDate = '2026-10-22T14:30:15Z';
  const cd = calculateDetailedCountdown(futureDate, baseDate);
  assert.equal(cd.isCompleted, false);
  assert.equal(cd.days, 2);
  assert.equal(cd.hours, 4);
  assert.equal(cd.minutes, 30);
  assert.equal(cd.seconds, 15);

  const pastDate = '2025-01-01T00:00:00Z';
  const cdPast = calculateDetailedCountdown(pastDate, baseDate);
  assert.equal(cdPast.isCompleted, true);
  assert.equal(cdPast.days, 0);
});


