import React from 'react'
import './style.css'
const TodoItem = ({title, complited})=>{
    return(
        <div className='todo'>
            <input className='todo_inp' type='checkbox' checked={complited}/>
            <div className='todo_title'>{title}</div>
            <button className="todo_btn" type='button'>delete</button>
        </div>
    )
}


export default TodoItem;