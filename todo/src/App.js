import React, { useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from './TodoList';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default)`, {
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }.then(response => response.json())
    .then((result) => {
      setTodoList(result.records);
      setIsLoading(false);
    })
  )}, );
  
  useEffect(() => {
    if (!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));

    }
  }, [todoList]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
 function removeTodo(id) {
   const filteredTodos = todoList.filter((todo) => todo.id !== id);
   setTodoList(filteredTodos);
 }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/>
        {isLoading ? <p>Loading</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
      </div>
      </Route>
      <Route path="/new">
        <h1>New Todo List</h1>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
