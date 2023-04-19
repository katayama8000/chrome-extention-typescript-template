/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

type Todo = {
  text: string
  completed: boolean
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }])
      setInputValue('')
    }
  }

  const handleTodoClick = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleTodoDelete = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input placeholder='testInput' type='text' value={inputValue} onChange={handleInputChange} />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <>
            <button type='button' onClick={() => handleTodoClick(index)}>
              完了
            </button>
            <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </li>
            <button type='button' onClick={() => handleTodoDelete(index)}>
              削除
            </button>
          </>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
