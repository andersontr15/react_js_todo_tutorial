import React, { useState, useEffect } from 'react';
import './App.css';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { ITodo } from './interfaces';
import cailou from './caillou.png'

const saveArrayToLocalStorage = (key: string, arr: any[] | undefined) => {
  if(!arr?.length) return;
  window.localStorage.setItem(key, JSON.stringify(arr))
}

const retrieveFromLocalStorage = (key: string) => window.localStorage.getItem(key)

const clearArrayFromLocalStorage = (key: string) => window.localStorage.setItem(key, JSON.stringify([]))


function App() {

  const [todos, setTodos ] =  useState<ITodo[] | undefined>([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(!todos?.length) {
      clearArrayFromLocalStorage('todos')
    }
    else {
      saveArrayToLocalStorage('todos', todos || [])
    }
  }, [todos])

  useEffect(() => {
    if(!isLoading) {
      const retrievedTodos = retrieveFromLocalStorage('todos')
      if(retrievedTodos !== null) {
        setTodos(JSON.parse(retrievedTodos))
      }
      setIsLoading(true)
    }
  }, [isLoading, todos])

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

  return (
    <div className="App">
      <h2>
      Caillou's first todo application (Agile &#8482;)
      </h2>
      <img style={{ width: '300px'}} src={cailou} />
      {renderTodos()}
      <TodoForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
