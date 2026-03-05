# Copilot Instructions

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # ESLint
pnpm format       # Prettier (app/**/*.{ts,tsx})
```

No test suite is configured.

## Architecture

Next.js 16 App Router project. Routes:

| Path | Description |
|------|-------------|
| `/` | Redirects to `/home` |
| `/home` | Todo list (protected) |
| `/home/add` | Add todo (nested route) |
| `/login` | Login page |
| `/about` | About page |
| `/system-setting` | Settings page |
| `/api/todos` | GET – all todos |
| `/api/todos/[id]` | GET – single todo |

Protected routes are wrapped in `AuthGuard` via `app/home/layout.tsx`. The guard checks Zustand auth state and redirects to `/login` if unauthenticated.

**State management** uses two Zustand stores with persistence middleware:
- `useTodoStore` → LocalStorage (`todo-list-storage`). Core model: `{ id: string, content: string, completed: boolean }`. Seeded from `/api/todos` on first load (mock data, no real DB).
- `useAuthStore` → SessionStorage (`auth-storage`). Simple client-side auth only.

**Theme system** is layered: `next-themes` manages `light | dark | system` state → `AntdConfigBridge` subscribes and switches Ant Design's `darkAlgorithm` / `defaultAlgorithm` inside `ConfigProvider`. Tailwind uses `dark:` prefix variants alongside Ant Design components.

## Conventions

- **`'use client'`** is required on any component that uses hooks, Zustand stores, or browser APIs.
- **Hydration safety**: Never read from `localStorage`/`sessionStorage` or Zustand stores directly during SSR. Use the `useStore<T, F>()` hook from `app/hooks/` (defers reads to after mount) or check a `mounted` state flag before rendering theme-dependent UI.
- **Zustand selectors**: Always pass a selector to `useStore` — do not subscribe to the entire store object to avoid unnecessary re-renders.
- **Feature components** live in `app/<route>/components/`. Shared/global components live in `app/components/`.
- **Styling**: Tailwind utility classes for layout/spacing; Ant Design components for interactive UI elements. Avoid mixing inline `style` props with Tailwind.
- **Formatting**: Prettier runs with `prettier-plugin-tailwindcss`, so class order is enforced automatically — run `pnpm format` rather than sorting manually.
- **Package manager**: Use `pnpm` only. Do not use `npm` or `yarn`.
