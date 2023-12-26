import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtask } from '../redux/Action';

function AddTask() {
    let[task,setTask]=useState("")
    let dispatch=useDispatch((store)=>store)

    let handleSubmit=(e)=>{
        e.preventDefault();

        let todo={
            id:Date.now(),
            task:task,
            isCompleted:false
        }
        dispatch(addtask(todo))
        setTask("")
    }
    return (
        <div>
            <form>
                <input type="text" placeholder='Enter Your Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
                <input type="button" value="Add Task" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default AddTask