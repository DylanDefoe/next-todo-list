export interface Todo {
  id: number
  content: string
  completed: boolean
}

export const TODOS: Todo[] = [
  { id: 1, content: '学习 Elysia', completed: false },
  { id: 2, content: '用 Bun 写 API', completed: true },
  { id: 3, content: '写文档', completed: false },
]
