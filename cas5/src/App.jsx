import React, { useState, useEffect } from 'react';
import { Todos } from './components/Todos';

export function App() {

  const [car, setCar] = useState({ model: 'BMW', year: 2012 });
  const [days, setDays] = useState(['Monday', 'Tuesday', 'Wednesday']);
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  const [newTodo, setNewTodo] = useState('');

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: 'Eat Dinner', done: false },
    { id: 3, text: 'Go to Sleep', done: false }
  ]);


  useEffect(() => {
    console.log(todos)
  }, [todos])

  function newCar() {
    setCar({
      ...car,
      // model: '',
      year: 2026
    });
  }

  function addDays() {
    setDays(['Sunday', ...days, 'Thursday'])
  }

  function addNewTodo() {
    if (newTodo.trim() !== '') {


      let newObject = {
        id: todos.length + 1,
        text: newTodo,
        done: false
      }

      setTodos([...todos, newObject])
      setNewTodo('');
    } else {
      alert("No Value Entered\nPlease enter a value then submit the new Todo")
    }
  }

  function markTodoAsDone(todo) {
    setTodos([
      ...todos.map(item => (item.id === todo.id) ? //uslovot ni e najdi go kliknatiot element 
        { id: item.id, text: item.text, done: !item.done } : //koga ke gonajdeme kliknatiot element go menuvame samo propertite oza done vo sprotivno koristejki negacija
        item // za site ostanati elementi item.id!=todo.id ne gi cepkame odnosno go vrakjame originalniot element
      )
    ])
  }

  return (
    <div id='app'>
      <input
        type='text'
        placeholder='Enter TODO'
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value) }}
      />
      <button onClick={addNewTodo}>Add Todo</button>


      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} />
      <h2>Car:</h2>
      <p>Model: {car.model}</p>
      <p>Year: {car.year} </p>
      <button onClick={newCar}>Buy New Car</button>
      <hr />
      <ul>
        {days.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>
      <button onClick={addDays}>Add Days</button>
      <hr />
      <input
        type='text'
        placeholder='Enter First Name'
        value={person.firstName}
        onChange={(e) => { setPerson({ ...person, firstName: e.target.value }) }}
      />
      <br />
      <br />
      <input
        type='text'
        placeholder='Enter Last Name'
        value={person.lastName}
        onChange={(e) => { setPerson({ ...person, lastName: e.target.value }) }}
      />
    </div>
  )
}