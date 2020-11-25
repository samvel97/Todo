import React, {Component} from 'react'
import Todo from './Components/Todo'
import './todo.css'




class App extends Component{
	state={
		todos: [
			{id:1, complited:true, title:'car'},
			{id:2, complited:false, title:'bike'},
			{id:3, complited:false, title:'moto'},
			{id:3, complited:false, title:'plane'},
			{id:3, complited:false, title:'sheep'}
		]
		
	}
  render(){
    return(
    	<div className='class'>
    		<Todo todos={this.state.todos}/>
    	</div>
    )
  }
}



export default App;
