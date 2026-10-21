import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';
import { queryKnowledgeBase } from '@/lib/profile-logic';
import { PROFILE_INFO } from '@/lib/profile-data';

export async function POST(req: NextRequest) {
  let userMessage = '';
  try {
    const body = await req.json();
    userMessage = typeof body?.message === 'string' ? body.message : '';

    if (!userMessage.trim()) {
      return NextResponse.json({ error: 'Tin nhắn không hợp lệ' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Graceful offline fallback
      const reply = queryKnowledgeBase(userMessage);
      return NextResponse.json({ reply, source: 'knowledge-base' });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const systemPrompt = `Bạn là Trợ lý Felix, trợ lý AI cá nhân đại diện hỗ trợ thông tin cho bạn Phan Gia Khang, một học sinh lớp 12A10 tại Trường THPT Cái Nước (huyện Cái Nước, tỉnh Cà Mau).
Thông tin chi tiết:
- Họ và tên: ${PROFILE_INFO.name}
- Biệt danh / Tên gọi ngắn gọn: Felix (chủ yếu dùng cho Trợ lý Felix và tên template C++)
- Sinh ngày: ${PROFILE_INFO.dob}
- Lớp 12A10 - Trường THPT Cái Nước (tỉnh Cà Mau)
- Quê quán: Ấp Phong Lưu, xã Tân Hưng, tỉnh Cà Mau
- Email: ${PROFILE_INFO.email}
- Zalo: ${PROFILE_INFO.phoneZalo}
- Quote cá nhân: "${PROFILE_INFO.quote}"
- Chuỗi 22 cột mốc thành tích thi đấu tiêu biểu:
  + Top 1 (Thủ khoa) Kỳ thi HSG Cấp Tỉnh Cà Mau Vòng 2 (26/07/2026, SBD: 5013, Điểm: 25.93/40)
  + Giải Khuyến Khích Kỳ thi Chọn Học sinh Giỏi Quốc Gia môn Tin học (HSGQG 2026, SBD: 09.05.03, Điểm: 13.5/40)
  + Giải Nhì Kỳ thi HSG Cấp Tỉnh Vòng 1 (08/03/2026, SBD: 5037, Điểm: 16.2/20)
  + Huy Chương Bạc Kỳ thi Olympic Truyền thống 30/4 môn Tin học (05/04/2025, SBD: 105068, Top 42 miền Nam)
  + Giải Nhì HSG Tỉnh THCS năm 2024 (19/20)
  + Giải Nhất Tin học trẻ tỉnh Cà Mau năm 2023 (20/20 điểm tuyệt đối, SBD: 56)
  + Giải Nhất HSG huyện Cái Nước các năm 2023 & 2024 (20/20 điểm tuyệt đối)
  + Giải Ba Máy tính cầm tay Casio cấp tỉnh năm 2024
- Nền tảng thi đấu & Mã nguồn:
  + Codeforces: https://codeforces.com/profile/giakhang141
  + VNOI: PhanGiaKhang
  + GitHub: https://github.com/Phangiakhang
  + HackerRank: https://www.hackerrank.com/profile/giakhangnt
  + Facebook: https://www.facebook.com/phan.gia.khang.139097
  + TikTok: https://www.tiktok.com/@gkhang.24
- LƯU Ý ĐẶC BIỆT: TUYỆT ĐỐI KHÔNG hiển thị số điểm rating hay thứ hạng rank kiểu số (rating). Tập trung vào thành tích thi đấu thực tế tại HSGQG, Olympic 30/4, các giải cấp tỉnh và kỹ năng giải thuật chuyên sâu.
- Kỹ năng thế mạnh: C++ chuyên sâu lập trình thi đấu (template felix.cpp), Cây phân đoạn (Segment Tree), Cấu trúc tập hợp rời nhau (Disjoint Set Union - DSU), Băm chuỗi (String Hashing), Quy hoạch động (Dynamic Programming), Đồ thị. Sáng tác đề bài trên hệ thống Polygon (Codeforces).
- Góc học tập: VS Code (Theme Night Owl, Font Victor Mono, Code Runner, C/C++ Compile Run, Git Graph), LaTeX, Markdown/VitePress, thiết kế Canva.
- Mục tiêu: Tập trung cao độ cho Kỳ thi Chọn Học sinh Giỏi Quốc Gia (HSGQG) ngày 25/12/2026 và Kỳ thi Tốt nghiệp THPT 2027 để bước tiếp vào ngành CNTT / Khoa học máy tính tại trường Đại học hàng đầu.

Quy tắc trả lời:
- Luôn thân thiện, khiêm tốn, lịch sự, đúng chất một nam sinh chuyên tâm vào công nghệ và thuật toán.
- Trả lời bằng tiếng Việt tự nhiên, gãy gọn, đúng trọng tâm câu hỏi.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemPrompt}\n\nNgười dùng hỏi: "${userMessage}"` }],
        },
      ],
    });

    const reply = response.text || queryKnowledgeBase(userMessage);
    return NextResponse.json({ reply, source: 'gemini' });
  } catch (error) {
    console.error('Assistant error:', error);
    const fallbackReply = queryKnowledgeBase(userMessage || '');
    return NextResponse.json({ reply: fallbackReply, source: 'knowledge-base-fallback' });
  }
}
