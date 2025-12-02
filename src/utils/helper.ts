import { uuidv4 } from "zod";

export function generateTodoId() {
  return `${uuidv4()}-${Date.now()}`;
}
