"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ConfigProvider, theme as antTheme } from "antd";
import { useEffect, useState, ReactNode } from "react";

// 内部组件：负责连接 next-themes 的状态到 Ant Design 的 ConfigProvider
const AntdConfigBridge = ({ children }: { children: ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 在客户端挂载之前，渲染默认状态，防止 Hydration Mismatch
  // 或者可以返回一个 null，或者默认的 ConfigProvider
  if (!mounted) {
    return <>{children}</>;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export function ThemeSwitcherProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <AntdConfigBridge>{children}</AntdConfigBridge>
    </NextThemesProvider>
  );
}
