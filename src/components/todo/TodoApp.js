import React, { useState } from 'react'

const TodoApp = () => {
  const [todoInput, setTodoInput] = useState('')
  //todos = {id: number, text: string, completed: false}

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn useEffect',
      completed: false,
    },
    {
      id: 2,
      text: 'build a todo app',
      completed: true,
    },
    {
      id: 3,
      text: 'clean my room',
      completed: false,
    },
  ])

  const handleChange = (id) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex((item) => item.id === id)
    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed
    }
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  const addTodo = () => {
    if (todoInput !== '') {
      const newTodoItem = {
        id: +new Date(),
        text: todoInput,
        completed: false,
      }
      setTodos([newTodoItem, ...todos])
      setTodoInput('')
    }
  }

  const todoList = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        onDoubleClick={() => {
          console.log('double click')
        }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            handleChange(todo.id)
          }}
        />
        {todo.completed ? <del>{todo.text}</del> : <span>{todo.text}</span>}
        <button
          onClick={() => {
            handleDelete(todo.id)
          }}
        >
          Delete
        </button>
      </li>
    )
  })

  const renderTodoList = todoList.length === 0 ? 'all caught up now' : todoList

  return (
    <div>
      <h1>To do list</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value)
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            addTodo(event)
          }
        }}
      />
      <button
        onClick={() => {
          addTodo()
        }}
      >
        Add todo
      </button>
      <ul>{renderTodoList}</ul>
    </div>
  )
}

export default TodoApp
