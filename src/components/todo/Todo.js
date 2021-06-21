import React, { useState } from 'react'
import Checkbox from 'react-custom-checkbox'

import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import * as Icon from 'react-icons/fi'
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
      <Checkbox
        icon={<Icon.FiCheck color="#fff" size={14} />}
        name="my-input"
        checked={todo.isComplete}
        borderColor="#fff"
        style={{ cursor: 'pointer', marginRight: '15px' }}
        onChange={() => completeTodo(todo.id)}
        label={todo.text}
      />

      <div className="icons">
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
