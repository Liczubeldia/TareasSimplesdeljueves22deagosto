const TodoItem = ({ task, onDelete }) => {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
};

export default TodoItem;
