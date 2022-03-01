import { TodoStatus } from './enums'

export interface Todo {
  _id: string
  title: string
  description: string
  status: TodoStatus
}