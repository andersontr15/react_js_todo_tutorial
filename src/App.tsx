import React, { useState } from 'react';
import './App.css';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

function App() {

  const [todos, setTodos ] = useState([])

  console.log(setTodos)

  const renderTodos = () => todos.map(todo => <Todo todo={todo} />)

  const onSubmit = () => {

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
