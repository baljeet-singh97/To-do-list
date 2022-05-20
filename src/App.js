
import './App.css';
import Header from './MyComponents/Header';
import {Todos}  from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer'; //used curley braces we have used const not default
import React, {useState, useEffect} from 'react';
import {AddTodo} from './MyComponents/AddTodo';

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null )
  {
    initTodo = [];
  }
  else
  {
     initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  

  const onDelete = (todo) => {
    console.log("i am delte", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("i am adding this, ", title, desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
    sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
