import React from "react";

import TodoList from "./todoComponents/TodoList";

function App() {
  const todos = [
    {id: 1, completed: false, title: 'купить хлеб'},
    {id: 2, completed: false, title: 'купить масло'},
    {id: 3, completed: false, title: 'купить молоко'}
  ]
  return (
    <div className="wrapper">
      <h1>Header</h1>

      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
