import React, { useState } from 'react';
import { ITodo } from './interfaces';

interface Props {
  todo?: ITodo;
  onSubmit(todo: Omit<ITodo, 'isEditing'>): any
}

export const TodoForm: React.FC<Props> = (props: Props) => {

  const [todoText, setTodoText] = useState(props?.todo?.name || '')
  const [todoStatus, setTodoStatus] = useState(props?.todo?.isCompleted || false)

  console.log(todoText)

  const clearFormData = () => {
    setTodoText('')
    setTodoStatus(false)
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault()
    evt.stopPropagation()
    if(props.todo && props.todo.isEditing) {
      props.onSubmit({ name: todoText, isCompleted: todoStatus, id: props.todo.id, })
    }
    else {
      props.onSubmit({ name: todoText, isCompleted: todoStatus, id: props?.todo?.id || 0})
    }
    clearFormData()
  }


  return (
   <form action="" onSubmit={onSubmit}>
     <input value={todoText} onChange={evt => setTodoText(evt.target.value)} type="text" placeholder="What do you need done?" />
     <input checked={todoStatus} onChange={evt => setTodoStatus(evt.target.checked)} type="checkbox" />
  <button type="submit">{props?.todo?.isEditing ? 'Update' : 'Create'}</button>
   </form>
  )
}