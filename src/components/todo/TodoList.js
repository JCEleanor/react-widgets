import React, { useState } from 'react'
import './todo.css'
import Todo from './Todo'
import Todoform from './Todoform'

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Walk the dog',
    },
    {
      id: 2,
      text: 'build a todo app',
      isComplete: true,
    },
    {
      id: 3,
      text: 'water my plants',
    },
    {
      id: 4,
      text: 'reply emails',
    },
  ])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  const removeTodo = (id) => {
    const rnewTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(rnewTodos)
  }

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodo)
  }
  return (
    <div className="todo-wrapper">
      <h1>What's the plan...</h1>
      <Todoform onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
