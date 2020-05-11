import React, { useState } from 'react';

interface Props {
  onSubmit(): any
}

export const TodoForm: React.FC<Props> = (props: Props) => {

  const [todoText, setTodoText] = useState('')
  const [todoStatus, setTodoStatus] = useState(false)

  console.log(todoStatus, todoText)


  return (
   <form onSubmit={props.onSubmit}>
     <input onChange={evt => setTodoText(evt.target.value)} type="text" placeholder="What do you need done?" />
     <input onChange={evt => setTodoStatus(evt.target.checked)} type="checkbox" />
   </form>
  )
}