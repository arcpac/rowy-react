import { useState } from "react";
import EditModal from "./edit-modal";

function TodoListItem(props) {
  const todo = props.todo;
  const submit = () => {
    props.deleteTodo(todo.id);
  };

  const edit = todo => {
    props.edit(todo)
  }
  return (
      <li key={todo.id}>
        <h3>{todo.name}</h3>
        <button onClick={submit}>delete task</button>
        {/* <button onClick={edit(todo)}>Edit task</button>z */}
      </li>
  );
}

export default TodoListItem;
