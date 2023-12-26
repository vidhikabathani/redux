import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetask, toggletask } from '../redux/Action';

function ToDo() {

    let data = useSelector((Store) => Store.todo)
    let dispatch = useDispatch((store) => store)
    console.log(data);

    return (
        <div>
            {data.map((todo) => {
                return (
                    <div>
                        <h1>Task : {todo.task}</h1>
                        {todo.isCompleted ? <span onClick={() => dispatch(toggletask(todo.id))}>Completed</span> : <span onClick={() => dispatch(toggletask(todo.id))}>Pending</span>}
                        <button  onClick={() => dispatch(removetask(todo.id))}>Remove Task</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ToDo