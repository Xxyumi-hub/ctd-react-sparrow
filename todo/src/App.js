import React, { useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from './TodoList';
import './App.css';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

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
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      </div>
    </>
  );
}

export default App;
