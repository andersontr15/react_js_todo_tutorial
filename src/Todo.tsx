import React from 'react'
import { ITodo } from './interfaces'
import { TodoForm } from './TodoForm'

interface Props {
  todo: ITodo;
  onUpdate(todo: ITodo): any
}

export const Todo: React.FC<Props> = (props: Props) => {
  console.log(props.todo)

  const onSubmit = (todo: any) => props.onUpdate(todo)

  return (
    <div>
      {props.todo.isEditing ? <TodoForm onSubmit={onSubmit} todo={props.todo} /> : <div>
        <section>
          Id: {props.todo.id} -
          Name: {props.todo.name} -
          IsCompleted: {props.todo.isCompleted ? 'True' : 'False'}
        </section>
      </div>}
    </div>
  )
}


