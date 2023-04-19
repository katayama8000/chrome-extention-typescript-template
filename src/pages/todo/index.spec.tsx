/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import TodoApp from './index'

describe('TodoApp', () => {
  test('renders the app', () => {
    const { getByText } = render(<TodoApp />)
    expect(getByText('Todo List')).toBeInTheDocument()
  })

  test('adds and deletes a todo item', () => {
    render(<TodoApp />)
    const addButton = screen.getByRole('button', { name: 'Add Todo' })

    const input = screen.getByPlaceholderText('testInput') as HTMLInputElement

    const inputValue = 'Buy milk'
    fireEvent.change(input, { target: { value: inputValue } })

    expect(input.value).toBe(inputValue)
    fireEvent.click(addButton)
    expect(screen.getByText(inputValue)).toBeInTheDocument()

    const deleteButton = screen.getByRole('button', { name: '削除' })
    fireEvent.click(deleteButton)
    expect(screen.queryByText(inputValue)).not.toBeInTheDocument()
  })

  test('toggles todo item completion', () => {
    render(<TodoApp />)

    const input = screen.getByPlaceholderText('testInput') as HTMLInputElement
    const addButton = screen.getByRole('button', { name: 'Add Todo' })

    const inputValue = 'Buy milk'
    fireEvent.change(input, { target: { value: inputValue } })
    fireEvent.click(addButton)
    const todoItem = screen.getByText(inputValue)
    const toggleCompletionButton = screen.getByRole('button', { name: '完了' })
    expect(todoItem).not.toHaveStyle('text-decoration: line-through')
    fireEvent.click(toggleCompletionButton)
    expect(todoItem).toHaveStyle('text-decoration: line-through')
    fireEvent.click(toggleCompletionButton)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through')
  })
})
