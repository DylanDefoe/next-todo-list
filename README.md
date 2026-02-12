# Next.js Todo List

这是一个基于 Next.js 16、TypeScript 和 Ant Design 构建的现代待办事项（Todo List）应用。使用了 Zustand 进行全局状态管理，并结合 Tailwind CSS 进行样式开发。

## ✨ 特性

- **技术栈**: Next.js 16 (App Router), React 19, TypeScript
- **状态管理**: 使用 [Zustand](https://github.com/pmndrs/zustand) 管理全局状态 (Todo & Auth)。
- **UI 组件库**: 集成 [Ant Design](https://ant.design/) (v6) 提供优雅的组件支持。
- **样式**: 使用 Tailwind CSS v4 进行原子化样式开发。
- **数据持久化**:
  - Todo 数据自动持久化至 `localStorage`，刷新不丢失。
  - 用户登录状态持久化至 `sessionStorage`。
- **功能模块**:
  - **用户认证**: 简单的登录/注销流程与路由守卫 (`AuthGuard`)。
  - **待办管理**: 待办事项的添加、列表展示、状态切换与删除。
  - **关于页面**: 简单的关于信息展示。

## 🛠️ 目录结构

```
.
├── app/
│   ├── about/          # 关于页面
│   ├── components/     # 全局共享组件 (如 Footer, AuthGuard)
│   ├── context/        # React Context (如 AppContext)
│   ├── home/           # 主应用区域 (需登录访问)
│   │   ├── add/        # 添加待办事项页面
│   │   ├── components/ # 首页特定组件 (如 TodoItem)
│   │   └── page.tsx    # 待办列表主页
│   ├── hooks/          # 自定义 Hooks
│   ├── login/          # 登录页面
│   ├── store/          # Zustand Store 定义 (useAuthStore, useTodoStore)
│   ├── globals.css     # 全局样式 (Tailwind imports)
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 落地页
├── public/             # 静态资源
├── package.json
└── tsconfig.json
```

## 🚀 快速开始

### 1. 安装依赖

本项目推荐使用 `pnpm` 作为包管理器。

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看结果。

### 3. 构建生产版本

```bash
pnpm build
pnpm start
```

## 📦 状态管理 (Zustand)

### Todo Store (`useTodoStore`)
负责管理待办事项数据。
- **State**: `todos` (列表)
- **Actions**: `addTodo`, `removeTodo`, `toggleTodo`, `fetchTodos`
- **Persistence**: 使用 `localStorage` 进行持久化存储。

### Auth Store (`useAuthStore`)
负责管理用户登录状态。
- **State**: `isLoggedIn`, `username`
- **Actions**: `login`, `logout`
- **Persistence**: 使用 `sessionStorage`，关闭浏览器窗口后会话失效。

## 🎨 样式方案

本项目混合使用了 **Ant Design** 组件与 **Tailwind CSS** 工具类。
- **Ant Design**: 用于快速构建复杂的交互组件（如表单 Input, Button, List）。
- **Tailwind CSS**: 用于灵活的布局排版、间距调整和自定义样式覆盖。

## 🐳 Docker 部署

本项目提供了标准的 `Dockerfile`，支持多阶段构建以优化镜像体积。

### 1. 构建镜像

在项目根目录下运行以下命令构建 Docker 镜像：

```bash
docker build -t next-todo-list .
```

### 2. 运行容器

构建完成后，启动容器并将容器内部的 3000 端口映射到主机的 3000 端口：

```bash
docker run -p 3000:3000 next-todo-list
```

### 3. 访问应用

容器启动后，在浏览器中访问：

[http://localhost:3000](http://localhost:3000)

---

*Generated for Next.js Todo List Project*
