export type ThemeMode = 'light' | 'dark' | 'system';

export interface Achievement {
  id: string;
  date: string;
  examDate?: string;
  resultDate?: string;
  year: '2023' | '2024' | '2025' | '2026';
  grade?: string;
  level?: string;
  title: string;
  contestType?: string;
  category: 'hsg' | 'tinhoc-tre' | 'casio-khkt' | 'olympic';
  award: string;
  score?: string;
  sbd?: string;
  description: string;
  highlight?: boolean;
}

export interface AlgorithmTopic {
  id: string;
  name: string;
  category: 'ds' | 'dp' | 'graph' | 'math_string';
  difficulty: 'Cơ bản' | 'Nâng cao' | 'Chuyên sâu';
  complexity: string;
  description: string;
  codeSnippet: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'polygon-dmoj' | 'github-repo' | 'docs-articles';
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  stats?: string;
}

/**
 * Resolves the effective theme ('light' or 'dark') based on user choice and system preference.
 */
export function resolveEffectiveTheme(
  userChoice: ThemeMode,
  systemPrefersDark: boolean
): 'light' | 'dark' {
  if (userChoice === 'system') {
    return systemPrefersDark ? 'dark' : 'light';
  }
  return userChoice;
}

/**
 * Filters achievements by year or category.
 */
export function filterAchievementsByYear(
  achievements: Achievement[],
  year: 'all' | '2026' | '2025' | '2024' | '2023'
): Achievement[] {
  if (year === 'all') return achievements;
  return achievements.filter((a) => a.year === year);
}

/**
 * Filters achievements by category.
 */
export function filterAchievementsByCategory(
  achievements: Achievement[],
  category: 'all' | 'hsg' | 'tinhoc-tre' | 'casio-khkt' | 'olympic'
): Achievement[] {
  if (category === 'all') return achievements;
  return achievements.filter((a) => a.category === category);
}

/**
 * Filters projects by category.
 */
export function filterProjects(
  projects: ProjectItem[],
  category: 'all' | 'polygon-dmoj' | 'github-repo' | 'docs-articles'
): ProjectItem[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

/**
 * Searches algorithm topics by query string across name, category, and complexity.
 */
export function searchAlgorithms(
  algorithms: AlgorithmTopic[],
  query: string
): AlgorithmTopic[] {
  const q = query.trim().toLowerCase();
  if (!q) return algorithms;
  return algorithms.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.complexity.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  );
}

/**
 * Calculates remaining days until a target milestone timestamp.
 */
export function calculateDaysRemaining(targetDate: string, now: Date = new Date()): number {
  const target = new Date(targetDate).getTime();
  const diff = target - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
  totalSeconds: number;
}

/**
 * Calculates detailed countdown time (days, hours, minutes, seconds) until target date.
 */
export function calculateDetailedCountdown(targetDate: string, now: Date = new Date()): CountdownTime {
  const target = new Date(targetDate).getTime();
  const diff = target - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true, totalSeconds: 0 };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  return {
    days,
    hours,
    minutes,
    seconds,
    isCompleted: false,
    totalSeconds,
  };
}

/**
 * Answers questions locally using structured knowledge base for Phan Gia Khang (Felix).
 */
export function queryKnowledgeBase(query: string): string {
  const q = query.toLowerCase().trim();

  if (
    q.includes('thành tích') ||
    q.includes('giải thưởng') ||
    q.includes('hsg') ||
    q.includes('hsgqg') ||
    q.includes('quốc gia') ||
    q.includes('huy chương')
  ) {
    return 'Phan Gia Khang sở hữu chuỗi 22 cột mốc thành tích ấn tượng: Giải Khuyến Khích HSG Quốc Gia (HSGQG 2026, 13.5/40), Top 1 HSG Cấp Tỉnh Cà Mau Vòng 2 (25.93/40, Thủ khoa), Huy Chương Bạc Olympic 30/4 (2025, Top 42 miền Nam), Giải Nhì HSG Tỉnh (2024 & 2026), và nhiều giải Nhất Tin học trẻ cấp huyện và cấp tỉnh với điểm tuyệt đối 20/20!';
  }

  if (q.includes('quote') || q.includes('châm ngôn') || q.includes('câu nói')) {
    return 'Quote cá nhân của Phan Gia Khang: "Chúa cho tôi 2 tay để code, không phải để níu kéo người con gái không thuộc về mình."';
  }

  if (q.includes('trường') || q.includes('lớp') || q.includes('ở đâu') || q.includes('quê') || q.includes('cà mau')) {
    return 'Phan Gia Khang hiện là học sinh Lớp 12A10 - Trường THPT Cái Nước (huyện Cái Nước, tỉnh Cà Mau). Quê quán tại Ấp Phong Lưu, xã Tân Hưng, tỉnh Cà Mau.';
  }

  if (q.includes('codeforces') || q.includes('vnoi') || q.includes('github') || q.includes('hackerrank')) {
    return 'Hồ sơ CP của Phan Gia Khang: Codeforces (giakhang141), VNOI (PhanGiaKhang), GitHub (Phangiakhang), HackerRank (giakhangnt). Khang tập trung rèn luyện giải thuật chuyên sâu và sáng tác bộ đề trên Polygon mà không đặt nặng điểm số rating.';
  }

  if (q.includes('setup') || q.includes('công cụ') || q.includes('font') || q.includes('vs code')) {
    return 'Góc học tập của Phan Gia Khang: VS Code (Theme Night Owl, phông chữ Victor Mono), các extensions Code Runner, C/C++ Compile Run, Git Graph, kết hợp Git/GitHub, LaTeX, Markdown, VitePress và hệ thống Polygon.';
  }

  if (q.includes('liên hệ') || q.includes('email') || q.includes('zalo') || q.includes('facebook') || q.includes('tiktok')) {
    return 'Bạn có thể kết nối với Phan Gia Khang qua Email: giakhangcn09@gmail.com, Zalo: +84 948 556 404, Facebook: phan.gia.khang.139097 hoặc TikTok: @gkhang.24!';
  }

  if (q.includes('mục tiêu') || q.includes('ước mơ') || q.includes('đại học') || q.includes('kế hoạch')) {
    return 'Mục tiêu trọng tâm của Phan Gia Khang: Tập trung cao độ cho Kỳ thi Chọn Học sinh Giỏi Quốc Gia (HSGQG) ngày 25/12/2026 và Kỳ thi Tốt nghiệp THPT 2027 để bước tiếp vào ngành CNTT / Khoa học máy tính tại trường Đại học hàng đầu!';
  }

  return 'Chào bạn! Mình là Trợ lý Felix, đại diện hỗ trợ thông tin cho Phan Gia Khang (Lớp 12A10 THPT Cái Nước, Cà Mau). Bạn có thể hỏi mình về bảng 22 thành tích thi đấu, template C++ felix.cpp, thế mạnh thuật toán (Segment Tree, DSU, DP) hay các liên kết mạng xã hội của Khang nhé!';
}
