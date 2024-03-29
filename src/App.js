import React,{useState,useEffect} from 'react'
import "./App.css";
import axios from 'axios'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
function App() {
  const [todos,setTodos]=  useState([])
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
          //console.log(res)
          setTodos(res.data)})
      .catch(err => {
          console.log(err)
      })
  },[])

  return (
  <div className="App">
    
 <TodoForm  todos={todos} Sorted={()=>{
        setTodos(todos.slice(0,15).sort((a,b)=>{
         return Number(a.completed) - Number(b.completed)
        }))
      }}/>
      <TodoList
      todos={todos}
      onChange={(newTodo)=>{
      setTodos  (todos.map((todo)=>{
        
          if(todo.id===newTodo.id){
            return newTodo
          }
          return todo
        }))
      }}
      />
     
    </div>
  )
}
export default App;