import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import Todoform from './Todoform'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })
  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }
  if (edit.id) {
    return <Todoform edit={edit} onSubmit={submitUpdate} />
  }

  const renderTodo = todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icon">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ))

  return (
    <>{renderTodo.length > 0 ? renderTodo : 'Congrats! All caught up today!'}</>
  )
}

export default Todo
