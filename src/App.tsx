import React, { useState } from 'react';
import './App.css';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { ITodo } from './interfaces';


function App() {

  const [todos, setTodos ] =  useState<ITodo[] | undefined>([])

  const onRemoveTodo = (id: number) => setTodos(todos?.filter(t => t.id !== id))

  console.log('here hit')

  const renderTodos = () => todos?.map((todo, idx) => <div>
    <Todo key={idx} todo={todo} />
    <div onClick={() => onRemoveTodo(todo.id)}>X</div>
  </div>)

  const onSubmit = (todo: ITodo) => {
    setTodos(todos?.concat({ ...todo, created_at: new Date( ), id: todos.length ? todos.length + 1 : 1}))
  }

  return (
    <div className="App">
      Todo app
      {renderTodos()}
      <TodoForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
