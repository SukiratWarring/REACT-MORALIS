import React, { useState } from 'react'
import { Task_2 } from './Task_2'
export const Tasks = ({tasks,onDelete,onToggle}) => {  
  return (
    <>
      {tasks.map((task)=>(
      <Task_2 key={task.id} task={task}
      onDelete={onDelete}
      onToggle={onToggle}/>
      ))}  
    </>
  )
}
