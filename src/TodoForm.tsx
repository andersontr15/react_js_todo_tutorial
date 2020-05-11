import React, { useState } from 'react';
import { ITodo } from './interfaces';

interface Props {
  onSubmit(todo: Omit<ITodo, 'id'>): any
}

export const TodoForm: React.FC<Props> = (props: Props) => {

  const [todoText, setTodoText] = useState('')
  const [todoStatus, setTodoStatus] = useState(false)

  const clearFormData = () => {
    setTodoText('')
    setTodoStatus(false)
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault()
    evt.stopPropagation()
    props.onSubmit({ name: todoText, isCompleted: todoStatus })
    clearFormData()
  }


  return (
   <form action="" onSubmit={onSubmit}>
     <input value={todoText} onChange={evt => setTodoText(evt.target.value)} type="text" placeholder="What do you need done?" />
     <input checked={todoStatus} onChange={evt => setTodoStatus(evt.target.checked)} type="checkbox" />
     <button type="submit">Create</button>
   </form>
  )
}