import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import "./App.css"; // Importa el archivo de estilos CSS
const App = () => {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
};
export default App;
