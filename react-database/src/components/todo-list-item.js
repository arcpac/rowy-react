function TodoListItem(props) {
    const todo = props.todo

    return (
        <li key={todo.id}>
            <h3>{todo.name}</h3>
        </li>
    )
}

export default TodoListItem