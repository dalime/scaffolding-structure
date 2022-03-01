import { TodoStatus } from './enums'

export interface Todo {
  title: string
  description: string
  status: TodoStatus
}