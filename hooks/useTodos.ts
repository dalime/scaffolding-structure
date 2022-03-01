import React, { useState, useEffect } from 'react'
import { Todo } from '../types'
import { useQuery } from 'react-query'
import { getTodos } from '../mocks/todos.mocks'

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const query = useQuery('todos', getTodos)

  useEffect(() => {
    setTodos(query.data || [])
  }, [todos, setTodos, query])
}