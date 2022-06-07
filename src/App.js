import React, { useState } from 'react'
import Header from "./components/header";
import { Tasks } from "./components/Task";
import { AddTask } from './components/AddTask';
function App() {
  const[tasks,setTasks]=useState([{
    id:1,
    text:"Hello first element",
    day:"Monday",
    reminder: true,

}, 
{
    id:2,
    text:"Hello Second element",
    day:"Sunday",
    reminder: true,
},
{
    id:3,
    text:"Hello Third element",
    day:"Saturday",
    reminder: true,
},])
const addTask=(task)=>{
  console.log(task)
}
const[showAddtask,setShowedTask]=useState(false)

const deleteTask=(id)=>{
  console.log(id)
  setTasks(tasks.filter(task=>task.id !==id))//task.id=1,also id=1 then we can say that the this (task.id !==id) is not satisfied hence we can remove it.
}
 const toggleReminder=(id)=>{
   setTasks(tasks.map((task)=>task.id===id ?{...task,reminder:!task.reminder}: task))
 }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={()=>
        setShowedTask(!showAddtask)} showAdd={showAddtask}/>
      {showAddtask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : ('No tasks to show')}
    </div>
  );
}

export default App;
