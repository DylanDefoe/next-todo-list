import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface TodoData {
  id: string;
  content: string;
  completed: boolean;
}

interface TodoState {
  todos: TodoData[];
  fetchTodos: () => Promise<void>;
  addTodo: (content: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      fetchTodos: async () => {
        try {
          if (get().todos?.length > 0) {
            return;
          }
          const response = await fetch("/api/todos");
          if (response.ok) {
            const data = await response.json();
            set({ todos: data });
          }
        } catch (error) {
          console.error("Error fetching todos:", error);
        }
      },
      addTodo: (content: string) =>
        set((state) => ({
          todos: [
            {
              id: Date.now().toString(),
              content,
              completed: false,
            },
            ...state.todos,
          ],
        })),
      removeTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      toggleTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),
    }),
    {
      name: "todo-list-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
