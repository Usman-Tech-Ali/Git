import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const initialTodoItems = [];

  // const handleNewItem = (itemName, itemDueDate) => {
  //   const newTodoItems = [
  //     ...todoItems,
  //     { name: itemName, dueDate: itemDueDate },
  //   ];

  //   setTodoItems(newTodoItems);
  // };

  //Using above as "functional updates"

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((prevTodoItems) => [
      ...prevTodoItems,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleDeleteItem = (todoItemName) => {
    const newTodoitems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoitems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
