"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import { useAuthStore } from "../store/useAuthStore";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
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
