import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtask } from '../redux/Action';

function AddTask() {
    let[task,setTask]=useState("")
    let dispatch=useDispatch((store)=>store)

    let handleSubmit=(e)=>{
        e.preventDefault();

        let todos={
            id:Date.now(),
            task:task,
            isCompleted:false
        }
        dispatch(addtask(todos))
        setTask("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Task' key={task} onChange={(e)=>setTask(e.target.value)}/>
                <input type="button" value="Add Task" />
            </form>
        </div>
    )
}

export default AddTask