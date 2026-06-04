import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from './../config/properties';
import { Link } from 'react-router-dom';

export const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`${api}/comments`)
            .then(res => setComments(res.data))
            .catch(err => alert(err.message))
    }, []) //[] -> ComponentDidMount; [comments] -> ComponentDidUpdate; LOOP

    async function deleteItem(id) {
        console.log("DELETE", id);
        const deletedItem = await axios.delete(`${api}/comments/${id}`);
        alert("DELETE STATUS: " + deletedItem.status);
        setComments([...comments.filter(comment => comment.id != id)])
        //real case scenario axios.get
    }

    return (
        <div id='comments'>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comm => {
                        return (
                            <tr key={comm.id}>
                                <td>{comm.id}</td>
                                <td>{comm.name}</td>
                                <td>{comm.email}</td>
                                <td>{comm.body.substring(0, 50)}...<Link to={'/comment/' + comm.id}>More</Link></td>
                                <td><button onClick={() => { deleteItem(comm.id) }}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}