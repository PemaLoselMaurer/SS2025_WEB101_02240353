// src/components/TodoItem.jsx
import React from 'react'
import useTodoStore from '../store/todoStore'

export default function TodoItem({ todo }) {
    const toggleTodo = useTodoStore(state => state.toggleTodo)
    const removeTodo = useTodoStore(state => state.removeTodo)

return (
    <li className={`todo-list-item ${todo.completed ? 'completed' : ''}`}>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
        />
        <label style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
        {todo.text}
        </label>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
    )
}