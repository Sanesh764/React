
import { useState } from "react"
import {v4 as uuidv4} from 'uuid';
export default function TodoList(){
    let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addNewTask = () => {
        setTodos((prevTodos)=>{
            return [...todos,{task:newTodo,id:uuidv4(),isDone:false}];
        });
        setNewTodo("");
    }

    let updateTotoValue =(event)=>{
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id)=>{
        setTodos((prevTodos)=> todos.filter((prevTodos)=> prevTodos.id !=id));
    }

    let markAllDone=()=>{
        setTodos((prevtodos)=>(
            prevtodos.map((todo)=>{
                return{
                    ...todo,
                    isDone:true,
                }
            })
        ))
    }

    let MarkAsdone =(id)=>{
        setTodos((prevtodos)=>(
            prevtodos.map((todo)=>{
                if(todo.id===id){
                    return{
                    ...todo,
                    isDone:true,
                };
            } else{
                return todo;
            }    
            })
        ))
    }
    return (
        <div>
            <input placeholder="add a task" value={newTodo}  onChange={updateTotoValue} />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <br /><br />
            <br /><br />

            <hr />
           <h4> Task Tudo</h4>
           <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone ?{textDecorationLine:"line-through"}:{} }>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        <button onClick={()=> MarkAsdone(todo.id)}>Mark as Done</button>
                        </li>
                ))}
           </ul>
           <br /><br />
           <button onClick={markAllDone}>markAllDone All</button>
           
        </div>
    )
}