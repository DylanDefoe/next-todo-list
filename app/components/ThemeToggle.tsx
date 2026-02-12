"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Select } from "antd";
import { SunOutlined, MoonOutlined, DesktopOutlined } from "@ant-design/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // 渲染占位符以防止布局跳动，或者返回 null
    return <div style={{ width: 130, height: 32 }} />;
  }

  return (
    <Select
      value={theme}
      onChange={(value) => setTheme(value)}
      options={[
        { value: 'light', label: <span className="flex items-center gap-2"><SunOutlined /> 亮色</span> },
        { value: 'dark', label: <span className="flex items-center gap-2"><MoonOutlined /> 暗色</span> },
        { value: 'system', label: <span className="flex items-center gap-2"><DesktopOutlined /> 系统</span> },
      ]}
      style={{ width: 130 }}
      aria-label="切换主题"
    />
  );
}
