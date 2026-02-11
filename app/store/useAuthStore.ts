import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const isLoggedIn =
  typeof window !== "undefined" && sessionStorage.getItem("auth-storage")
    ? JSON.parse(sessionStorage.getItem("auth-storage")!).isLoggedIn
    : false;

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn,
      username: null,
      login: (username: string) => set({ isLoggedIn: true, username }),
      logout: () => set({ isLoggedIn: false, username: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
