import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // 初始状态使用传入的 initialValue (通常为空数组或默认值)
  // 这样保证服务端渲染和客户端首次渲染一致，避免 Hydration Mismatch
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // 在组件挂载后（客户端仅执行一次），读取 localStorage 更新状态
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // 封装更新函数，同时更新状态和 localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
