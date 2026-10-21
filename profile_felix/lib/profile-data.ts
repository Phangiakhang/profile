import {
  Achievement,
  AlgorithmTopic,
  ProjectItem,
} from './profile-logic';

export interface PostItem {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: 'Kỷ niệm học đường' | 'Kinh nghiệm CP' | 'Thiết kế Canva & Tản văn' | 'Tản văn';
  summary: string;
  content: string;
}

export const PROFILE_INFO = {
  name: 'Phan Gia Khang',
  nickname: 'Felix',
  dob: '30/11/2009',
  role: 'Học sinh Lớp 12A10 · Lập trình viên Thi đấu',
  school: 'Trường THPT Cái Nước',
  classRoom: 'Lớp 12A10',
  address: 'Ấp Phong Lưu, xã Tân Hưng, tỉnh Cà Mau',
  location: 'Cà Mau, Việt Nam',
  email: 'giakhangcn09@gmail.com',
  phoneZalo: '+84 948 556 404',
  quote: 'Chúa cho tôi 2 tay để code, không phải để níu kéo người con gái không thuộc về mình.',
  shortBio:
    'Mình là Phan Gia Khang, học sinh lớp 12A10 tại Trường THPT Cái Nước, Tỉnh Cà Mau. Hành trình lập trình của mình bắt đầu từ các kỳ thi học sinh giỏi THCS, rèn luyện qua các kỳ thi Tin học trẻ, giải Casio và từng bước chinh phục các sân chơi thuật toán lớn hơn. Từ những giải thưởng cấp huyện 20/20 điểm tuyệt đối năm 2023 đến giải Nhất cấp tỉnh, Huy Chương Bạc Olympic 30/4 năm 2025 và dấu mốc đạt Giải Khuyến khích Kỳ thi Chọn Học sinh Giỏi Quốc Gia (HSGQG 2026) cùng vị trí Top 1 HSG Cấp Tỉnh Vòng 2 (25.93/40), mình luôn tâm niệm rằng: lập trình thi đấu là bài học về tính kiên định, sự tỉ mỉ trong từng trường hợp biên và niềm đam mê sáng tạo không ngừng.',
  avatarUrl: '/images/student_coder_avatar_1792491157941.jpg',
  workspaceUrl: '/images/developer_workspace_setup_1792491158982.jpg',
  creativeUrl: '/images/contest_night_creative_1792491159158.jpg',
  socialLinks: {
    github: 'https://github.com/Phangiakhang',
    codeforces: 'https://codeforces.com/profile/giakhang141',
    vnoi: 'https://oj.vnoi.info/user/PhanGiaKhang',
    hackerrank: 'https://www.hackerrank.com/profile/giakhangnt',
    facebook: 'https://www.facebook.com/phan.gia.khang.139097',
    zalo: 'https://zalo.me/0948556404',
    tiktok: 'https://www.tiktok.com/@gkhang.24',
    email: 'mailto:giakhangcn09@gmail.com',
  },
};

/**
 * Danh sách 22 cột mốc thành tích chính xác từ bảng tổng hợp của Phan Gia Khang
 * Sắp xếp theo thứ tự thời gian mới nhất (2026) đến các năm trước (2023)
 */
export const ACHIEVEMENTS: Achievement[] = [
  // --- NĂM 2026 ---
  {
    id: 'ach-22-top1-v2-2026',
    date: '03/08/2026',
    examDate: '26/07/2026',
    resultDate: '03/08/2026',
    year: '2026',
    grade: 'Lớp 11',
    level: 'Tỉnh',
    contestType: 'Lập trình / Giải thuật',
    title: 'Kỳ thi HSG Tỉnh Vòng 2 (Chọn đội tuyển quốc gia) năm học 2026–2027',
    category: 'hsg',
    award: 'Top 1 (Thủ khoa)',
    score: '25.93 / 40',
    sbd: '5013',
    description:
      'Thi ngày 26/07/2026 (SBD: 5013). Đạt kết quả xuất sắc Top 1 Thủ khoa toàn tỉnh Cà Mau với số điểm 25.93/40, tiếp tục dẫn đầu đội tuyển dự thi Quốc Gia.',
    highlight: true,
  },
  {
    id: 'ach-21-tht-tinh-2026',
    date: '27/05/2026',
    examDate: '27/05/2026',
    year: '2026',
    grade: 'Lớp 11',
    level: 'Tỉnh',
    contestType: 'Lập trình / Giải thuật',
    title: 'Hội thi Tin học trẻ Vòng Tỉnh năm 2026',
    category: 'tinhoc-tre',
    award: 'Giải Ba',
    description:
      'Thi đấu lập trình giải thuật với các bài toán đồ thị và cấu trúc dữ liệu nâng cao dành cho học sinh THPT toàn tỉnh Cà Mau.',
    highlight: false,
  },
  {
    id: 'ach-20-hsg-v1-2026',
    date: '18/03/2026',
    examDate: '08/03/2026',
    resultDate: '18/03/2026',
    year: '2026',
    grade: 'Lớp 11',
    level: 'Tỉnh',
    contestType: 'Lập trình / Giải thuật',
    title: 'Kỳ thi HSG Tỉnh Vòng 1 năm học 2025–2026',
    category: 'hsg',
    award: 'Giải Nhì',
    score: '16.2 / 20',
    sbd: '5037',
    description:
      'Thi ngày 08/03/2026 (SBD: 5037). Hoàn thành tối ưu các bài toán thuật toán và cấu trúc dữ liệu với điểm số 16.2/20, đạt Giải Nhì cấp tỉnh.',
    highlight: true,
  },
  {
    id: 'ach-19-hsgqg-2026',
    date: '19/01/2026',
    examDate: '25/12/2025',
    resultDate: '19/01/2026',
    year: '2026',
    grade: 'Lớp 11',
    level: 'Quốc gia',
    contestType: 'HSG THPT',
    title: 'Kỳ thi HSG Quốc Gia (HSGQG) năm học 2025–2026',
    category: 'hsg',
    award: 'Giải Khuyến khích',
    score: '13.5 / 40',
    sbd: '09.05.03',
    description:
      'Thi đấu chính thức ngày 25/12/2025 (SBD: 09.05.03). Đem về giải thưởng danh giá cấp Quốc gia môn Tin học cho tỉnh Cà Mau và trường THPT Cái Nước.',
    highlight: true,
  },

  // --- NĂM 2025 ---
  {
    id: 'ach-18-hsg-v2-2025',
    date: '07/10/2025',
    examDate: '28/09/2025',
    resultDate: '07/10/2025',
    year: '2025',
    grade: 'Lớp 11',
    level: 'Tỉnh',
    contestType: 'HSG THPT',
    title: 'Kỳ thi HSG Tỉnh Vòng 2 (Chọn đội tuyển quốc gia) năm học 2025–2026',
    category: 'hsg',
    award: 'Top 10',
    score: '6.7 / 40',
    sbd: '5009',
    description:
      'Thi ngày 28/09/2025 (SBD: 5009). Xuất sắc đạt Top 10 toàn tỉnh và chính thức đậu Đội tuyển dự thi HSG Quốc Gia môn Tin học.',
    highlight: true,
  },
  {
    id: 'ach-17-tht-tinh-c2-2025',
    date: '27/05/2025',
    examDate: '27/05/2025',
    year: '2025',
    grade: 'Lớp 10',
    level: 'Tỉnh',
    contestType: 'THT Bảng C2',
    title: 'Hội thi Tin học trẻ Vòng Tỉnh năm 2025',
    category: 'tinhoc-tre',
    award: 'Giải Ba',
    description:
      'Thi đấu Bảng C2 cấp tỉnh, giải quyết các dạng toán thuật toán nâng cao và xử lý xâu chuỗi.',
    highlight: false,
  },
  {
    id: 'ach-16-hsg-tinh-ba-2025',
    date: '25/04/2025',
    examDate: '20/04/2025',
    resultDate: '25/04/2025',
    year: '2025',
    grade: 'Lớp 10',
    level: 'Tỉnh',
    contestType: 'HSG THPT',
    title: 'Kỳ thi HSG Vòng Tỉnh năm học 2024–2025',
    category: 'hsg',
    award: 'Giải Ba',
    description:
      'Thi ngày 20/04/2025 tại Hội đồng thi cấp tỉnh, đạt Giải Ba môn Tin học khối THPT khi đang là học sinh lớp 10.',
    highlight: false,
  },
  {
    id: 'ach-15-olympic304-2025',
    date: '06/04/2025',
    examDate: '05/04/2025',
    resultDate: '06/04/2025',
    year: '2025',
    grade: 'Lớp 10',
    level: 'Miền Nam',
    contestType: 'Lập trình / Giải thuật',
    title: 'Kỳ thi Olympic Truyền thống 30/4 năm 2025',
    category: 'olympic',
    award: 'Huy chương Bạc',
    score: '8.88 / 20',
    sbd: '105068',
    description:
      'Thi đấu ngày 05/04/2025 (SBD: 105068). Tranh tài cùng các học sinh chuyên Tin xuất sắc nhất khu vực phía Nam, xuất sắc đạt Huy chương Bạc với vị trí Top 42.',
    highlight: true,
  },

  // --- NĂM 2024 ---
  {
    id: 'ach-14-hsg-truong-2024',
    date: '26/10/2024',
    examDate: '26/10/2024',
    year: '2024',
    grade: 'Lớp 10',
    level: 'Trường',
    contestType: 'HSG THPT',
    title: 'Kỳ thi HSG Vòng Trường năm học 2024–2025',
    category: 'hsg',
    award: 'Đạt vòng trường',
    description:
      'Khởi đầu lớp 10 THPT Cái Nước, dẫn đầu đội tuyển trường và được chọn bồi dưỡng đội tuyển HSG cấp tỉnh.',
    highlight: false,
  },
  {
    id: 'ach-13-tht-kv-top63-2024',
    date: '06/07/2024',
    examDate: '06/07/2024',
    year: '2024',
    grade: 'Lớp 9',
    level: 'Khu vực',
    contestType: 'THT Bảng B',
    title: 'Hội thi Tin học trẻ KV Miền Nam năm 2024',
    category: 'tinhoc-tre',
    award: 'Top 63 Khu vực',
    description:
      'Tranh tài Bảng B cấp khu vực miền Nam với các bài toán cấu trúc dữ liệu và giải thuật.',
    highlight: false,
  },
  {
    id: 'ach-12-tht-sokhao-2024',
    date: '09/06/2024',
    examDate: '09/06/2024',
    year: '2024',
    grade: 'Lớp 9',
    level: 'Khu vực',
    contestType: 'THT Bảng B',
    title: 'Sơ khảo Tin học trẻ KV Miền Nam năm 2024',
    category: 'tinhoc-tre',
    award: 'Vào vòng trong',
    description:
      'Vượt qua vòng sơ khảo trực tuyến khu vực miền Nam Bảng B với thành tích xuất sắc để tiến vào vòng chung kết khu vực.',
    highlight: false,
  },
  {
    id: 'ach-11-khkt-huyen-2024',
    date: '23/05/2024',
    examDate: '23/05/2024',
    year: '2024',
    grade: 'Lớp 9',
    level: 'Huyện',
    contestType: 'Khoa học kỹ thuật',
    title: 'Cuộc thi KHKT Cấp Huyện năm 2024',
    category: 'casio-khkt',
    award: 'Giải Khuyến khích',
    description:
      'Nghiên cứu ứng dụng công nghệ và lập trình phục vụ đời sống học đường và khoa học kỹ thuật.',
    highlight: false,
  },
  {
    id: 'ach-10-hsg-tinh-thcs-2024',
    date: '15/04/2024',
    examDate: '31/03/2024',
    resultDate: '15/04/2024',
    year: '2024',
    grade: 'Lớp 9',
    level: 'Tỉnh',
    contestType: 'HSG THCS',
    title: 'Kỳ thi HSG Vòng Tỉnh năm học 2023–2024 (THCS)',
    category: 'hsg',
    award: 'Giải Nhì',
    score: '19 / 20',
    description:
      'Thi ngày 31/03/2024, kết quả công bố ngày 15/04/2024. Đạt số điểm gần như tuyệt đối 19/20, giành Giải Nhì cấp tỉnh môn Tin học THCS.',
    highlight: true,
  },
  {
    id: 'ach-09-casio-tinh-2024',
    date: '03/04/2024',
    examDate: '30/03/2024',
    resultDate: '03/04/2024',
    year: '2024',
    grade: 'Lớp 9',
    level: 'Tỉnh',
    contestType: 'Giải Toán Casio',
    title: 'Kỳ thi Casio Vòng Tỉnh năm học 2023–2024',
    category: 'casio-khkt',
    award: 'Giải Ba',
    description:
      'Thi ngày 30/03/2024, kết quả ngày 03/04/2024. Đạt Giải Ba cấp tỉnh môn Giải toán trên máy tính cầm tay Casio.',
    highlight: false,
  },
  {
    id: 'ach-08-hsg-huyen-2024',
    date: '15/02/2024',
    examDate: 'Tháng 01-02/2024',
    year: '2024',
    grade: 'Lớp 9',
    level: 'Huyện',
    contestType: 'HSG THCS',
    title: 'Kỳ thi HSG Vòng Huyện năm học 2023–2024',
    category: 'hsg',
    award: 'Giải Nhất (20/20)',
    score: '20 / 20 Điểm Tuyệt Đối',
    description:
      'Đạt điểm số tuyệt đối 20/20, giành Giải Nhất cấp huyện năm thứ hai liên tiếp tại huyện Cái Nước.',
    highlight: true,
  },
  {
    id: 'ach-07-casio-huyen-2024',
    date: '15/02/2024',
    examDate: '15/02/2024',
    year: '2024',
    grade: 'Lớp 9',
    level: 'Huyện',
    contestType: 'Giải Toán Casio',
    title: 'Kỳ thi Casio Vòng Huyện năm học 2023–2024',
    category: 'casio-khkt',
    award: 'Giải Ba',
    description:
      'Tham gia thi đấu giải toán nhanh trên máy tính cầm tay Casio vòng huyện ngày 15/02/2024, đạt Giải Ba.',
    highlight: false,
  },

  // --- NĂM 2023 ---
  {
    id: 'ach-06-casio-truong-2023',
    date: '27/12/2023',
    examDate: '27/12/2023',
    year: '2023',
    grade: 'Lớp 9',
    level: 'Trường',
    contestType: 'Giải Toán Casio',
    title: 'Kỳ thi Casio Vòng Trường năm 2023',
    category: 'casio-khkt',
    award: 'Đạt vòng trường',
    score: '10 / 20',
    description:
      'Đạt điểm số tốt vòng trường và đại diện trường THCS tham gia thi đấu giải Casio vòng huyện.',
    highlight: false,
  },
  {
    id: 'ach-05-tht-kv-2023',
    date: '07/07/2023',
    examDate: '24/06/2023',
    resultDate: '07/07/2023',
    year: '2023',
    grade: 'Lớp 8',
    level: 'Khu vực',
    contestType: 'THT Bảng B',
    title: 'Hội thi Tin học trẻ KV Miền Nam Năm 2023',
    category: 'tinhoc-tre',
    award: 'Top 73 Khu vực',
    score: '80 / 300',
    description:
      'Thi đấu ngày 24/06/2023, kết quả chính thức ngày 07/07/2023. Đạt 80/300 điểm, xếp hạng Top 73 khu vực miền Nam.',
    highlight: false,
  },
  {
    id: 'ach-04-tht-tinh-nhat-2023',
    date: '23/05/2023',
    examDate: '23/05/2023',
    year: '2023',
    grade: 'Lớp 8',
    level: 'Tỉnh',
    contestType: 'THT Bảng B',
    title: 'Hội thi Tin học trẻ Vòng Tỉnh Năm 2023',
    category: 'tinhoc-tre',
    award: 'Giải Nhất (20/20)',
    score: '20 / 20 Điểm Tuyệt Đối',
    sbd: '56',
    description:
      'Thi ngày 23/05/2023 (SBD: 56). Hoàn thành trọn vẹn toàn bộ các testcase, đạt điểm tuyệt đối 20/20 và giành Giải Nhất cấp tỉnh Bảng B.',
    highlight: true,
  },
  {
    id: 'ach-03-tht-huyen-2023',
    date: '09/04/2023',
    examDate: '09/04/2023',
    year: '2023',
    grade: 'Lớp 8',
    level: 'Huyện',
    contestType: 'THT Bảng B',
    title: 'Hội thi Tin học trẻ Vòng Huyện năm 2023',
    category: 'tinhoc-tre',
    award: 'Giải Nhất (20/20)',
    score: '20 / 20 Điểm Tuyệt Đối',
    description:
      'Đạt điểm số tối đa 20/20 ngay trong lần đầu tham dự Tin học trẻ cấp huyện, xuất sắc giành Giải Nhất.',
    highlight: true,
  },
  {
    id: 'ach-02-hsg-tinh-kk-2023',
    date: '10/04/2023',
    examDate: '02/04/2023',
    resultDate: '10/04/2023',
    year: '2023',
    grade: 'Lớp 8',
    level: 'Tỉnh',
    contestType: 'HSG THCS',
    title: 'Kỳ thi HSG Vòng Tỉnh năm học 2022–2023',
    category: 'hsg',
    award: 'Giải Khuyến khích',
    score: '11.63 / 20',
    description:
      'Thi ngày 02/04/2023, kết quả ngày 10/04/2023. Đạt 11.63/20 điểm, giành Giải Khuyến khích HSG cấp tỉnh khi mới học lớp 8.',
    highlight: false,
  },
  {
    id: 'ach-01-hsg-huyen-2023',
    date: '09/03/2023',
    examDate: '05/03/2023',
    resultDate: '09/03/2023',
    year: '2023',
    grade: 'Lớp 8',
    level: 'Huyện',
    contestType: 'HSG THCS',
    title: 'Kỳ thi HSG Vòng Huyện năm học 2022–2023',
    category: 'hsg',
    award: 'Giải Nhất (20/20)',
    score: '20 / 20 Điểm Tuyệt Đối',
    sbd: '254',
    description:
      'Thi ngày 05/03/2023 (SBD: 254), kết quả công bố ngày 09/03/2023. Cột mốc khởi đầu đáng nhớ: đạt 20/20 điểm tuyệt đối, giành Giải Nhất huyện Cái Nước.',
    highlight: true,
  },
];

export const ALGORITHM_TOPICS: AlgorithmTopic[] = [
  {
    id: 'algo-segtree',
    name: 'Segment Tree (Cây Phân Đoạn) & Lazy Propagation',
    category: 'ds',
    difficulty: 'Nâng cao',
    complexity: 'O(log N) truy vấn & cập nhật',
    description:
      'Thế mạnh cốt lõi: Cây phân đoạn quản lý thông tin đoạn, cập nhật đoạn thông qua kỹ thuật truyền lười (Lazy Propagation) và Segment Tree động/Persistent.',
    codeSnippet: `// Segment Tree with Lazy Propagation (Template của Felix)
struct SegmentTree {
    int n;
    vector<long long> tree, lazy;
    SegmentTree(int n) : n(n), tree(4 * n, 0), lazy(4 * n, 0) {}

    void push(int node, int l, int r) {
        if (!lazy[node]) return;
        tree[node] += lazy[node] * (r - l + 1);
        if (l != r) {
            lazy[2 * node] += lazy[node];
            lazy[2 * node + 1] += lazy[node];
        }
        lazy[node] = 0;
    }

    void update(int node, int l, int r, int ql, int qr, long long val) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = (l + r) / 2;
        update(2 * node, l, mid, ql, qr, val);
        update(2 * node + 1, mid + 1, r, ql, qr, val);
        tree[node] = tree[2 * node] + tree[2 * node + 1];
    }

    long long query(int node, int l, int r, int ql, int qr) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = (l + r) / 2;
        return query(2 * node, l, mid, ql, qr) + query(2 * node + 1, mid + 1, r, ql, qr);
    }
};`,
  },
  {
    id: 'algo-dsu',
    name: 'Disjoint Set Union (DSU) & Rollback',
    category: 'ds',
    difficulty: 'Cơ bản',
    complexity: 'O(α(N)) gần như hằng số O(1)',
    description:
      'Cấu trúc dữ liệu các tập hợp rời nhau với kỹ thuật nén đường đi (Path Compression) và gộp theo kích thước (Union by Size), hỗ trợ kiểm tra liên thông đồ thị và thuật toán Kruskal.',
    codeSnippet: `// Disjoint Set Union (DSU) Template
struct DSU {
    vector<int> parent, sz;
    DSU(int n) {
        parent.resize(n + 1);
        iota(parent.begin(), parent.end(), 0);
        sz.assign(n + 1, 1);
    }

    int find(int u) {
        return (u == parent[u]) ? u : (parent[u] = find(parent[u]));
    }

    bool unite(int u, int v) {
        u = find(u);
        v = find(v);
        if (u == v) return false;
        if (sz[u] < sz[v]) swap(u, v);
        parent[v] = u;
        sz[u] += sz[v];
        return true;
    }

    bool same(int u, int v) {
        return find(u) == find(v);
    }
};`,
  },
  {
    id: 'algo-hashing',
    name: 'String Hashing (Băm Chuỗi Đa Thức)',
    category: 'math_string',
    difficulty: 'Nâng cao',
    complexity: 'O(N) tiền xử lý, O(1) so sánh chuỗi con',
    description:
      'Băm chuỗi đa thức với 2 cơ số modulo lớn (1e9+7 và 1e9+9) giúp so khớp và so sánh hai đoạn chuỗi bất kỳ trong O(1) mà không gặp va chạm hash.',
    codeSnippet: `// Double String Hashing Template
struct StringHash {
    const long long MOD1 = 1e9 + 7, MOD2 = 1e9 + 9;
    const long long BASE = 311;
    vector<long long> h1, h2, p1, p2;

    void build(const string &s) {
        int n = s.size();
        h1.assign(n + 1, 0); h2.assign(n + 1, 0);
        p1.assign(n + 1, 1); p2.assign(n + 1, 1);
        for (int i = 0; i < n; ++i) {
            h1[i + 1] = (h1[i] * BASE + s[i]) % MOD1;
            h2[i + 1] = (h2[i] * BASE + s[i]) % MOD2;
            p1[i + 1] = (p1[i] * BASE) % MOD1;
            p2[i + 1] = (p2[i] * BASE) % MOD2;
        }
    }

    pair<long long, long long> get(int l, int r) {
        long long v1 = (h1[r + 1] - h1[l] * p1[r - l + 1]) % MOD1;
        if (v1 < 0) v1 += MOD1;
        long long v2 = (h2[r + 1] - h2[l] * p2[r - l + 1]) % MOD2;
        if (v2 < 0) v2 += MOD2;
        return {v1, v2};
    }
};`,
  },
  {
    id: 'algo-dp',
    name: 'Quy Hoạch Động (Dynamic Programming) & Đồ Thị',
    category: 'dp',
    difficulty: 'Chuyên sâu',
    complexity: 'O(V + E) hoặc O(N * W)',
    description:
      'Phương pháp giải quyết các bài toán tối ưu hoá: DP Knapsack, DP Bitmask, DP trên cây (Tree DP), kết hợp các thuật toán đồ thị như Dijkstra, Tarjan và Cầu/Khớp.',
    codeSnippet: `// Bitmask DP Example - Traveling Salesperson Problem (TSP)
int memo[1 << 16][16];
int cost[16][16], N;

int solveTSP(int mask, int u) {
    if (mask == (1 << N) - 1) return cost[u][0]; // tro ve goc
    if (memo[mask][u] != -1) return memo[mask][u];

    int ans = 1e9;
    for (int v = 0; v < N; ++v) {
        if (!(mask & (1 << v))) {
            ans = min(ans, cost[u][v] + solveTSP(mask | (1 << v), v));
        }
    }
    return memo[mask][u] = ans;
} `,
  },
];

export const SETUP_TOOLS = [
  {
    category: 'Trình Soạn Thảo (Code Editor)',
    items: [
      {
        name: 'Visual Studio Code',
        detail: 'Theme: Night Owl · Font: Victor Mono (Hỗ trợ code ligatures trực quan)',
        badge: 'Chính',
      },
      {
        name: 'Code Runner & C/C++ Compile Run',
        detail: 'Phím tắt biên dịch và thực thi nhanh với GCC C++17 trong tích tắc.',
        badge: 'Extension',
      },
      {
        name: 'Git Graph & GitLens',
        detail: 'Trực quan hóa nhánh mã nguồn, lịch sử commit các bài toán contest.',
        badge: 'Extension',
      },
    ],
  },
  {
    category: 'Hệ Sinh Thái & Công Cụ Học Thuật',
    items: [
      {
        name: 'Polygon (Codeforces System)',
        detail: 'Nền tảng sáng tác bộ đề chuẩn quốc tế, viết test generator và validator.',
        badge: 'Problem Setter',
      },
      {
        name: 'Git & GitHub Workflow',
        detail: 'Quản lý mã nguồn thi đấu, snippets và lưu trữ kho bài tập giải thuật.',
        badge: 'GitHub',
      },
      {
        name: 'LaTeX & Overleaf',
        detail: 'Soạn thảo công thức toán học, tài liệu giải thuật chuẩn mực bài bản.',
        badge: 'Học thuật',
      },
      {
        name: 'Markdown & VitePress',
        detail: 'Ghi chú kiến thức thuật toán và xây dựng tài liệu ôn luyện cá nhân.',
        badge: 'Ghi chú',
      },
    ],
  },
  {
    category: 'Sáng Tạo Đồ Họa & Viết Lách',
    items: [
      {
        name: 'Canva Pro Designer',
        detail: 'Thiết kế ấn phẩm truyền thông, banner/poster sáng tạo cho các sự kiện trường.',
        badge: 'Đồ họa',
      },
      {
        name: 'Sổ tay thuật toán & Bút Gel',
        detail: 'Vẽ đồ thị, phân tích trường hợp biên trước khi bắt đầu viết mã.',
        badge: 'Tư duy',
      },
      {
        name: 'Lo-fi Music & Focus Timer',
        detail: 'Không gian tĩnh lặng cho các buổi giải contest marathon 3-5 tiếng.',
        badge: 'Tập trung',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-polygon-setter',
    title: 'Sáng tác Bộ đề Thuật toán trên Polygon (Codeforces)',
    category: 'polygon-dmoj',
    description:
      'Thiết kế và sáng tác các bài toán thuật toán hoàn chỉnh: đề bài chi tiết, solution chuẩn C++, validator kiểm tra dữ liệu vào nghiêm ngặt và test generator sinh các trường hợp biên ngặt nghèo.',
    tags: ['Polygon', 'Codeforces', 'Test Generator', 'Validator', 'C++17'],
    stats: 'Bộ đề thi thử chọn lọc',
  },
  {
    id: 'proj-github-algo',
    title: 'Kho lưu trữ C++ Snippets & Templates CP',
    category: 'github-repo',
    description:
      'Repository mã nguồn mở lưu trữ toàn bộ các template thuật toán tối ưu (Segment Tree, DSU, Hashing, Graph, Math) sẵn sàng cho các kỳ thi HSG và contest trực tuyến.',
    tags: ['C++17', 'Competitive Programming', 'GitHub', 'Open Source'],
    githubUrl: 'https://github.com/Phangiakhang',
    stats: 'Mã nguồn mở trên GitHub',
  },
  {
    id: 'proj-deep-docs',
    title: 'Tuyển tập Chuyên đề & Phân tích Thuật toán Chuyên sâu',
    category: 'docs-articles',
    description:
      'Chuỗi bài viết và tài liệu ghi chú phân tích cách tiếp cận các bài toán khó: kỹ thuật chia để trị trên cây, băm chuỗi đa thức và cách tối ưu bộ nhớ trong contest.',
    tags: ['LaTeX', 'Markdown', 'Chuyên đề HSG', 'Tối ưu hóa'],
    stats: 'Tài liệu ôn luyện HSGQG',
  },
];

export const POSTS: PostItem[] = [
  {
    id: 'post-quote',
    title: 'Về câu quote: "Chúa cho tôi 2 tay để code..."',
    date: 'Tháng 10, 2026',
    readTime: '3 phút đọc',
    category: 'Tản văn',
    summary:
      'Suy nghĩ chân thật của một nam sinh lớp 12 chuyên tâm vào từng dòng lệnh, tìm thấy niềm vui và sự tự do trong thế giới thuật toán.',
    content: `"Chúa cho tôi 2 tay để code, không phải để níu kéo người con gái không thuộc về mình."

Câu nói nghe có vẻ hài hước nhưng lại là lời nhắc nhở chân thành với chính bản thân mình. Tuổi 17-18 có biết bao xao động, nhưng khi ngồi trước màn hình với một bài toán hóc búa, mình nhận ra điều đáng trân trọng nhất là sự tập trung và mục tiêu mình theo đuổi. 

Đôi bàn tay gõ phím không chỉ để hoàn thành bài thi, mà là để xây dựng tương lai, chinh phục từng giới hạn mới và khẳng định năng lực của bản thân.`,
  },
  {
    id: 'post-cainuoc',
    title: 'Mái trường THPT Cái Nước và những ngày ôn luyện HSGQG',
    date: 'Tháng 08, 2026',
    readTime: '5 phút đọc',
    category: 'Kỷ niệm học đường',
    summary:
      'Hành trình từ ngôi trường Cái Nước vùng đất Cà Mau đến kỳ thi Học sinh Giỏi Quốc Gia, với sự đồng hành của thầy cô và bạn bè lớp 12A10.',
    content: `Trường THPT Cái Nước ở huyện Cái Nước, tỉnh Cà Mau - nơi mình đã gắn bó suốt những năm tháng thanh xuân cấp ba.

Từ những ngày đầu bỡ ngỡ bước vào phòng máy tính, cho đến khi đại diện trường và tỉnh đi thi HSG Quốc Gia, mỗi góc lớp 12A10, mỗi hành lang rợp bóng cây đều ghi dấu những kỷ niệm không thể nào quên.

Giải Khuyến Khích Quốc Gia năm 2026 và Top 1 Vòng 2 Cấp Tỉnh vừa qua không chỉ là nỗ lực của riêng mình, mà còn là niềm tự hào gửi gắm tới thầy cô và mái trường thân yêu nơi mảnh đất cực Nam Tổ quốc.`,
  },
  {
    id: 'post-canva-creative',
    title: 'Khi dân lập trình bén duyên cùng thiết kế Canva',
    date: 'Tháng 06, 2026',
    readTime: '4 phút đọc',
    category: 'Thiết kế Canva & Tản văn',
    summary:
      'Sự giao thoa thú vị giữa tư duy logic chặt chẽ của C++ và óc thẩm mỹ linh hoạt khi thiết kế poster, banner sự kiện.',
    content: `Nhiều người nghĩ dân chuyên Tin và thi thuật toán chỉ biết những dòng code khô khan và màn hình terminal đen trắng. Nhưng với mình, thiết kế đồ họa trên Canva là một không gian sáng tạo vô cùng thư giãn.

Tư duy thuật toán giúp mình sắp xếp bố cục (layout) cân đối, phân cấp thị giác (hierarchy) rõ ràng, trong khi thiết kế màu sắc giúp mình nuôi dưỡng cảm xúc thẩm mỹ. Sự kết hợp này giúp mình tự tay hoàn thiện những ấn phẩm cá nhân và hỗ trợ các hoạt động của trường lớp một cách trọn vẹn nhất.`,
  },
];

export const GOALS = [
  {
    title: 'Kỳ thi Chọn Học sinh Giỏi Quốc Gia (HSGQG)',
    targetDate: '2026-12-25T00:00:00Z',
    category: 'Trọng tâm số một',
    badge: 'Ngày 25/12/2026',
    description:
      'Tập trung toàn lực ôn luyện các chuyên đề giải thuật nâng cao, cấu trúc dữ liệu chuyên sâu và chiến thuật contest để giành giải cao trong kỳ thi HSGQG năm học 2026–2027.',
    progress: 95,
  },
  {
    title: 'Kỳ thi Tốt nghiệp THPT Quốc Gia 2027',
    targetDate: '2027-06-25T00:00:00Z',
    category: 'Tốt nghiệp & Tuyển sinh',
    badge: 'Tháng 6/2027',
    description:
      'Ôn tập toàn diện các môn văn hóa, đạt kết quả xuất sắc để xét tuyển thẳng và xét tuyển vào khoa Công nghệ thông tin / Khoa học máy tính tại trường Đại học hàng đầu.',
    progress: 85,
  },
  {
    title: 'Bước vào Giảng đường Đại học ngành CNTT / Khoa học Máy tính',
    targetDate: '2027-09-01T00:00:00Z',
    category: 'Tương lai đại học',
    badge: 'Đại học hàng đầu',
    description:
      'Trở thành sinh viên ngành Công nghệ thông tin / Khoa học máy tính, rèn luyện kỹ năng kỹ sư và tham gia đấu trường lập trình sinh viên ICPC Châu Á.',
    progress: 70,
  },
  {
    title: 'Nghiên cứu Thuật toán Nâng cao & Phát triển Phần mềm',
    targetDate: '2028-06-01T00:00:00Z',
    category: 'Tầm nhìn Kỹ sư',
    badge: 'Kỹ sư công nghệ',
    description:
      'Xây dựng các sản phẩm thực tế phục vụ cộng đồng, sáng tác bộ đề trên hệ thống Polygon và đóng góp cho hệ sinh thái công nghệ mở.',
    progress: 50,
  },
];
