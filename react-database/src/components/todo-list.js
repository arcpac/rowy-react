import { useState, useEffect } from 'react'
import { findAll } from '../services/todo.mjs'
import TodoListItem from './todo-list-item.js'

function TodoList() {
    const [loading, setLoading] = useState(false)
    const [todos, setTodos] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()

        setTodos([...res])
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <header>
                <h2>TODO</h2>
            </header>

            { loading && 
                <p>loading...</p>
            }

            <ul>
            {todos.length > 0 && todos.map(todo => (
                <TodoListItem todo={todo}/>
            ))}
            </ul>
        </section>
    )
}

export default TodoList