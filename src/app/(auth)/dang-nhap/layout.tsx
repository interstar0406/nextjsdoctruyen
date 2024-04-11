import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from "next/font/google";
import "@/app/globals.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Đăng nhập - Đọc truyện Online",
  description: "Đọc miễn phí truyện",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vn-VI">
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
