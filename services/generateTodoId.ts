import { Todo } from '../types'

/**
 * Generates a string ID for a new todo list item
 * @param todos Todo[]
 * @returns string
 */
export const generateTodoId = (todos: Todo[]): string => {
  return (todos.length + 1).toString();
}