import React, { useState } from 'react';
import './App.css';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { ITodo } from './interfaces';


function App() {

  const [todos, setTodos ] =  useState<ITodo[] | undefined>([])

  const onRemoveTodo = (id: number) => setTodos(todos?.filter(t => t.id !== id))

  const onCancelEditTodo = (id: number) => setTodos(todos?.map(todo => todo.id === id ? { ...todo, isEditing: false } : todo))


  const onEditTodo = (id: number) => setTodos(todos?.map(todo => todo.id === id ? { ...todo, isEditing: true } : todo))

  const onUpdate = (todo: ITodo) => {
    setTodos(todos?.map(t => t.id === todo.id ? { ...todo, isEditing: false } : t))
  }

  const renderTodos = () => todos?.map((todo, idx) => <div>
    <Todo key={idx} onUpdate={onUpdate} todo={todo} />
    <div onClick={() => onRemoveTodo(todo.id)}>X</div>
    {todo.isEditing ? <div onClick={() => onCancelEditTodo(todo.id)}>Done</div> : <div onClick={() => onEditTodo(todo.id)}>Edit</div>}
    <hr />
  </div>)

  const onSubmit = (todo: ITodo) => {
    setTodos(todos?.concat({ ...todo, created_at: new Date( ), id: todos.length ? todos.length + 1 : 1}))
  }

  console.log(todos);

  return (
    <div className="App">
      Todo app
      {renderTodos()}
      <TodoForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
