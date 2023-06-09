function TodoListItem(props) {
  const todo = props.todo;
  const submit = () => {
    props.deleteTodo(todo.id);
  };

  return (
      <li key={todo.id}>
        <h3>{todo.name}</h3>
        <button onClick={submit}>delete task</button>
        {/* <button onClick={edit(todo)}>Edit task</button>z */}
      </li>
  );
}

export default TodoListItem;
