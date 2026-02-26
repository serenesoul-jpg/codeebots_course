# CodeeBot 视频课程中心部署指南

本项目支持多种部署方式，您可以根据实际需求选择最适合的方案。

## 方案一：使用 Vercel 部署（推荐）

这是最简单、最快捷的方式，且完全免费（个人版）。由于项目基于 Next.js 开发，Vercel 提供了原生的最佳支持。

### 步骤：

1.  访问 [Vercel](https://vercel.com/) 并注册/登录账号。
2.  点击 "Add New..." -> "Project"。
3.  选择 "Import Git Repository"，连接您的 GitHub 账号并导入 `codeebot-video-course` 仓库。
4.  Vercel 会自动检测到这是 Next.js 项目，配置通常无需修改。
5.  点击 "Deploy"。
6.  等待几分钟，部署完成后您将获得一个 `https://your-project.vercel.app` 的公网访问地址。

### 优势：
*   零配置，自动构建。
*   全球 CDN 加速。
*   自动配置 HTTPS。
*   Git 推送自动重新部署。

---

## 方案二：使用 Docker 部署（适合自建服务器）

如果您拥有自己的云服务器（如阿里云 ECS、腾讯云 CVM），可以使用 Docker 容器化部署，方便管理和迁移。

### 前置条件：
*   服务器已安装 Docker 和 Docker Compose。

### 步骤：

1.  在项目根目录构建 Docker 镜像：
    ```bash
    docker build -t codeebot-course .
    ```

2.  运行容器：
    ```bash
    docker run -d -p 3000:3000 --name codeebot-web codeebot-course
    ```

3.  访问服务器 IP 的 3000 端口（如 `http://your-server-ip:3000`）。建议配合 Nginx 反向代理配置域名和 HTTPS。

### 优势：
*   环境一致性，避免“在我电脑上能跑”的问题。
*   易于扩展和编排。
*   数据和应用隔离。

---

## 方案三：传统 Node.js 服务器部署

如果您不想使用 Docker，也可以直接在服务器上运行 Node.js 环境。

### 步骤：

1.  在服务器上安装 Node.js (v18+) 和 pnpm。
2.  拉取代码并安装依赖：
    ```bash
    git clone <your-repo-url>
    cd codeebot-video-course
    pnpm install
    ```
3.  构建项目：
    ```bash
    pnpm build
    ```
4.  启动服务（推荐使用 PM2 进程管理工具）：
    ```bash
    npm install -g pm2
    pm2 start npm --name "codeebot-web" -- start
    ```

### 优势：
*   资源占用相对较少（相比 Docker）。
*   直接控制运行环境。

---

## 环境变量配置

如果项目后续集成了数据库或第三方 API，请在部署平台的设置中（如 Vercel 的 Environment Variables 或 Docker 的 `-e` 参数）配置相应的环境变量。

目前版本 (v1.1) 为纯前端静态展示与模拟数据，**无需额外配置环境变量**。
