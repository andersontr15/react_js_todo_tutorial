import React from 'react'
import { ITodo } from './interfaces'

interface Props {
  todo: ITodo
}

export const Todo: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {JSON.stringify(props, null, 2)}
    </div>
  )
}


