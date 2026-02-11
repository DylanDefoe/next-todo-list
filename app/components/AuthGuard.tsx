"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import { useAuthStore } from "../store/useAuthStore";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    // 只有当明确知道 isLoggedIn 为 false 时才跳转
    // undefined 表示正在加载/hydrating
    if (isLoggedIn === false) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  // 加载中显示 loading
  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center h-full min-h-[50vh]">
        <Spin size="large" />
      </div>
    );
  }

  return <>{children}</>;
}
