import React from 'react'
import { Task_2 } from './Task_2'
export const Tasks= ({tasks,onDelete,onToggle}) => {  
  return (
    <>
      {tasks.map((task,index)=>(
      <Task_2 key={index} 
      task={task}
      onDelete={onDelete}
      onToggle={onToggle}/>
      ))}  
    </>
  )
}
