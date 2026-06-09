import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Todos } from './components/Todos';
import { Nav } from './components/Nav';
import { Gallery } from './components/Gallery';
import axios from 'axios';
import './css/App.css'
import { GalleryContext } from './utils/GalleryContext';


export function App() {

  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState('');
  // const [showCompleted, setShowCompleted] = useState(true);
  // const [editTodo, setEditTodo] = useState(null); //{id,text,done}

  // function addTodo() {
  //   if (newTodo.trim() !== '') {
  //     let newObj = {
  //       id: Math.ceil(Math.random() * 100000),
  //       text: newTodo,
  //       done: false
  //     }
  //     setTodos([...todos, newObj]);
  //     setNewTodo('');

  //   } else {
  //     alert("No text added")
  //   }

  // }

  // function markDone(todo) {
  //   setTodos([...todos.map(item => item.id === todo.id ?
  //     { id: item.id, text: item.text, done: !item.done }
  //     :
  //     item
  //   )])
  // }
  // function deleteTodo(id) {
  //   setTodos([...todos.filter(item => item.id !== id)])
  // }

  // function handleEdit(id, text) {
  //   setEditTodo({ id, text })
  // }

  // function handleSave() {
  //   if (editTodo) {
  //     setTodos([...todos.map(item => item.id === editTodo.id ? { ...item, text: editTodo.text } : item)])
  //   }
  //   setEditTodo(null)
  // }

  // const completedItems = todos.filter(todo => todo.done).length;
  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(result => setPhotos(result.data))
      .catch(err => alert(err.message))
  }, [])

  function openPhoto(photo) {
    setSelectedImage(photo)
  }
  function closePhoto() {
    setSelectedImage(null)
  }
  return (
    <div id='app'>
      <Nav />

      {/* <input
        type='text'
        placeholder='Enter Todo'
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value) }}
      />
      <button onClick={addTodo}>Add Todo</button>


      <h3>Number of Completed items: {showCompleted ? completedItems : 0}</h3>
      <button onClick={() => { setShowCompleted(!showCompleted) }}>{showCompleted ? 'Hide Completed Items' : 'Show Completed Items'}</button> */}
      <GalleryContext.Provider value={{selectedImage,setSelectedImage}}>
        <Routes>
          <Route path='/gallery'
            element={
              <Gallery
                listOfPhotos={photos}
                // setImage={openPhoto}
                // selektiranaSlika={selectedImage}
                // closeImage={closePhoto}
              />} />
          {/* <Route path='/todos' element={
          <Todos
            listOfTodos={
              showCompleted ? todos : todos.filter(todo => !todo.done)
            }
            markDone={markDone}
            deleteTodo={deleteTodo}
            handleEdit={handleEdit}
            editTodo={editTodo}
            handleCancel={() => { setEditTodo(null) }}
            handleSave={handleSave}
          />} /> */}
        </Routes>
      </GalleryContext.Provider>
    </div>
  )
}