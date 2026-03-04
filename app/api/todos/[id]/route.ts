import { Todo, TODOS } from '../data'

export async function GET(
  request: Request,
  ctx: RouteContext<'/api/todos/[id]'>,
) {
  const { id } = await ctx.params
  const user = TODOS.find((u: Todo) => u.id === parseInt(id))
  if (!user) {
    return Response.json({ error: id + ' User not found' }, { status: 404 })
  }
  return Response.json(user)
}
