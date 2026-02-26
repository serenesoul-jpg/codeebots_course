# CodeeBot 视频课程中心 (CodeeBot Video Course Center)

CodeeBot 视频课程中心是一个现代化的响应式 Web 应用，旨在为用户提供最前沿的 AI 机器人编程教程。项目采用 Next.js (App Router) 构建，集成了 CodeeBot 品牌元素与 Datawhale 的极简 UI 风格。

## 🚀 功能特性 (v1.1)

- **现代 UI 设计**: 采用玻璃拟态 (Glassmorphism) 头部、卡片悬浮效果和流畅的过渡动画。
- **完全响应式**: 完美适配桌面端和移动端，包含移动端折叠菜单 (Hamburger Menu)。
- **暗黑模式**: 支持日/夜间模式切换，自动跟随系统设置，全站组件深度适配。
- **视频学习**: 集成视频播放模态框，包含加载状态 (Loading Spinner) 和沉浸式播放体验。
- **极致体验**: 使用 Next.js 图片优化、骨架屏加载 (Skeleton Loading) 和代码分割。
- **SEO 友好**: 完整的 Metadata 配置和 Open Graph 标签支持，利于搜索引擎收录和社交分享。

## 🛠️ 技术栈

- **核心框架**: [Next.js 14 (App Router)](https://nextjs.org/) + [React 18](https://react.dev/)
- **编程语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式方案**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **图标库**: [Lucide React](https://lucide.dev/)
- **主题管理**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📦 快速开始

### 1. 环境准备

确保您的本地环境已安装 Node.js (推荐 v18+) 和 pnpm。

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 即可查看效果。

### 4. 构建生产版本

```bash
pnpm build
pnpm start
```

## 📂 项目结构

```
src/
├── app/
│   ├── layout.tsx    # 全局布局 (包含 ThemeProvider, SEO Metadata)
│   ├── page.tsx      # 首页入口
│   └── globals.css   # 全局样式 (Tailwind 指令)
├── components/       # UI 组件
│   ├── Header.tsx    # 顶部导航 (含移动端菜单、主题切换)
│   ├── Hero.tsx      # 主视觉区域
│   ├── CourseCard.tsx# 课程卡片 (含骨架屏)
│   ├── VideoModal.tsx# 视频播放弹窗
│   └── ...
├── data/             # 静态模拟数据
├── types/            # TypeScript 类型定义
└── lib/              # 工具函数
```

## 🎨 品牌指南

- **主色调**: CodeeBot Blue (`#2b5cff`)
- **设计风格**: 极简、圆角、阴影、微交互
- **Slogan**: "Snap, Code, Play"

## 📝 开发日志

- **v1.0**: 基础页面搭建，包含 Hero 区和课程列表。
- **v1.1**: 新增移动端适配、暗黑模式、加载状态优化及 SEO 配置。
