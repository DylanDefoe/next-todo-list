import { TODOS } from "./data";

export function GET() {
  return Response.json(TODOS)
}
