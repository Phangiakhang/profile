import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Phan Gia Khang (Felix) - CP & Developer Profile',
  description:
    'Profile cá nhân của Phan Gia Khang (Felix) - Lớp 12A10 Trường THPT Cái Nước, Cà Mau. Giải Khuyến Khích HSGQG Tin học, Top 1 Vòng 2 Cấp Tỉnh, Huy Chương Bạc Olympic 30/4.',
  openGraph: {
    title: 'Phan Gia Khang (Felix) - CP & Developer Profile',
    description:
      'Profile cá nhân của Phan Gia Khang (Felix) - Lớp 12A10 Trường THPT Cái Nước, Cà Mau. Giải Khuyến Khích HSGQG Tin học, Top 1 Vòng 2 Cấp Tỉnh, Huy Chương Bạc Olympic 30/4.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phan Gia Khang (Felix) - CP & Developer Profile',
    description:
      'Profile cá nhân của Phan Gia Khang (Felix) - Lớp 12A10 Trường THPT Cái Nước, Cà Mau. Giải Khuyến Khích HSGQG Tin học, Top 1 Vòng 2 Cấp Tỉnh, Huy Chương Bạc Olympic 30/4.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('khang_theme_mode');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = stored === 'dark' || (!stored && prefersDark) || (stored === 'system' && prefersDark);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#f8fafc] text-[#0f172a] dark:bg-[#011627] dark:text-[#f8fafc] transition-colors duration-200 font-sans">
        {children}
      </body>
    </html>
  );
}
