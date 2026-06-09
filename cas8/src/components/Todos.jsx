import React from 'react';

export const Todos = ({
    listOfTodos,
    markDone,
    deleteTodo,
    handleEdit,
    editTodo,
    handleCancel,
    handleSave }) => {

    return (
        <div id='todos'>
            {listOfTodos.length > 0 ?
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Text</th>
                            <th>Done</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOfTodos.map(todo => {
                            return (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>
                                        {editTodo && editTodo.id === todo.id ?
                                            <input
                                                type='text'
                                                value={editTodo.text}
                                                onChange={(e) => { handleEdit(todo.id, e.target.value) }}
                                            />
                                            : todo.text
                                        }
                                    </td>
                                    <td>
                                        <input
                                            type='checkbox'
                                            value={todo.done}
                                            checked={todo.done}
                                            onChange={() => { markDone(todo) }}
                                        />
                                    </td>
                                    <td>
                                        {editTodo && editTodo.id === todo.id ? <>
                                            <button onClick={handleSave}>Save</button>
                                            <button onClick={handleCancel}>Cancel</button>
                                        </>
                                            :
                                            <>
                                                <button onClick={() => { handleEdit(todo.id, todo.text) }}>Edit</button>
                                                <button onClick={() => { deleteTodo(todo.id) }}>Delete</button>
                                            </>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> : <h3>No Items added in Array !!!</h3>
            }
        </div>
    )
}