import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import {BrowserRouter, Routes, Route }from "react-router-dom";
import styles from "./App.module.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`, 
    {method: 'GET', 
    headers:{ Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
  }
})
    .then((response) => response.json())
    .then((result) => 
    {
      result.records.sort((objectA, objectB) =>
						objectB.fields.Title.localeCompare(objectA.fields.Title)
					);
      const airTabletodoList = [];

        for (const record of result.records) {
          //convert records to todo list
          const todoListItem = {
            title: record.fields.Title,
            id: record.id
          }
          airTabletodoList.push(todoListItem);
        }
        setTodoList(airTabletodoList)
        setIsLoading(false);
        })
      .catch((error) => {
          setIsLoading(false)
          console.log(error);
        }
      );
  }, []);


  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);


  const removeTodo = (id) => {
		const filteredList = todoList.filter((todoListItem) => todoListItem.id !== id);
		setTodoList(filteredList);
	}

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

    return (
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={
          <div className={styles.background}>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            {isLoading ? ( <p>Loading...</p> ):(
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            )}
          </div>
        }
        ></Route>
        <Route path="/new" element={<h1>NEW TODO LIST</h1>}></Route>
      </Routes>
      </BrowserRouter>
    );
  }

  export default App;