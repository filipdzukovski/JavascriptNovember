import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {api} from './../config/properties';

export const Todos = () => {

    const [todos, setTodos] = useState([]);

    function getTodos() {
        axios.get(`${api}/todos`)
            .then(res => setTodos(res.data))
            .catch(err => alert(err.message))
    }

    useEffect(() => {
        getTodos()
    }, [])

    function markAsDone(id) {
        setTodos([...todos.map(item => item.id === id ? { ...item, completed: !item.completed } : item)])
    }

    return (
        <div id='todos'>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <p>{todo.title}
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                value={todo.completed}
                                onChange={() => { markAsDone(todo.id) }}
                            />
                        </p>
                    </div>
                )
            })}
        </div>
    )
}