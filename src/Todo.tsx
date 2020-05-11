import React from 'react'

interface Props {
  todo: {
    isCompleted: boolean;
    name: string;
    created_at: Date;
    updated_at?: Date | null
  }
}

export const Todo: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {JSON.stringify(props, null, 2)}
    </div>
  )
}


