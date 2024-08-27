import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = prompt("Ingrese una nueva tarea");
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const modifyTask = (index) => {
    const modifiedTask = prompt("Modifique la tarea", tasks[index]);
    if (modifiedTask) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = modifiedTask;
      setTasks(updatedTasks);
    }
  };

  const renderedTasks = tasks.map((task, index) => (
    <div key={index}>
      <TodoItem task={task} />
      <button onClick={() => deleteTask(index)}>Eliminar</button>
      <button onClick={() => modifyTask(index)}>Modificar</button>
    </div>
  ));

  return (
    <div>
      <button onClick={addTask}>Agregar Tarea</button>
      <ul>{renderedTasks}</ul>
    </div>
  );
};

export default TodoList;
