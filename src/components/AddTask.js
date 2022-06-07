import {useState} from 'react'
export const AddTask = (onAdd) => {
    const[Text,setText]=useState('')
    const[day,setDay]=useState('')
    const[reminder,setReminder]=useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!Text){
            alert('Please Add Task')
            return
        }
        onAdd({Text,day,reminder})
        setDay('')
        setReminder('')
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={Text} onChange={(e)=>{setText(e.target.value)}}/>
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder='Add Day and Time' value={day} onChange={(e)=>{setDay(e.target.value)}}/>
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} placeholder='ADD Task' value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
        </div>
        <input type ='submit' value='Save Task' className="btn btn-block"/>
    </form>
  )
}
