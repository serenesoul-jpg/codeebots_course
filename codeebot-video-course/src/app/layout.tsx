import type { Metadata } from "next";
import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeeBot 学习中心 - 你的第一堂AI课",
  description: "CodeeBot 视频课程中心，提供最前沿的 AI 机器人编程教程。Snap, Code, Play - 开启你的 AI 创造之旅。",
  keywords: ["CodeeBot", "AI编程", "机器人教育", "少儿编程", "Python", "Blockly", "人工智能"],
  openGraph: {
    title: "CodeeBot 学习中心 - 你的第一堂AI课",
    description: "CodeeBot 视频课程中心，提供最前沿的 AI 机器人编程教程。",
    type: "website",
    locale: "zh_CN",
    siteName: "CodeeBot Learning Center",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
