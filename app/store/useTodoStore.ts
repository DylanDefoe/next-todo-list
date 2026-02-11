import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface TodoData {
  id: string;
  content: string;
  completed: boolean;
}

interface TodoState {
  todos: TodoData[];
  addTodo: (content: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
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
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
    }),
    {
      name: 'todo-list-storage',
      storage: createJSONStorage(() => localStorage), 
      // 可以在这里处理 hydration 相关的逻辑，但最简单的方式是在组件层处理显示
    }
  )
);
