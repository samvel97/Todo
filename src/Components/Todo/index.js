import React from 'react'
import TodoItem from '../TodoItems'


const Todo=({todos})=>{
    return(
        <div>
            {todos.map((elem)=><TodoItem title={elem.title} complited={elem.complited}/>)}
        </div>
    )
}

export default Todo;