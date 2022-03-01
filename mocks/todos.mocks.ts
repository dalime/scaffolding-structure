import { Todo, TodoStatus } from '../types'

export const todos: Todo[] = [
  {
    _id: '1',
    title: 'Buy dog food',
    description: 'Go to the store and buy Fido brand dog food',
    status: TodoStatus.notStarted,
  },
  {
    _id: '2',
    title: 'Develop React Components',
    description: 'Develop needed React Components for frontend',
    status: TodoStatus.inProgress,
  },
  {
    _id: '3',
    title: 'Deploy app',
    description: 'Deploy the current ieration of the app',
    status: TodoStatus.inProgress,
  }
];

export const getTodos = (): Todo[] => {
  return todos
}