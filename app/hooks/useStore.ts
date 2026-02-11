import { useState, useEffect } from 'react';

// 这是一个泛型 Hook，用来安全地获取 Zustand Store 的数据，避免 Hydration Mismatch
const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;
