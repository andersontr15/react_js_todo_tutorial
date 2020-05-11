import React from 'react';

export const TodoForm: React.FC = () => {
  return (
   <form>
     <input type="text" placeholder="What do you need done?" />
     <input type="checkbox" />
   </form>
  )
}