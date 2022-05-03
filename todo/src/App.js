import React, { useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({data: {
          todoList: []
        }
      });
        
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  }, [])
  
  useEffect(() => {
    if (isLoading === false) {
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
    <>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/>
        {isLoading ? <p>Loading</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
      </div>
    </>
  );
}

export default App;
