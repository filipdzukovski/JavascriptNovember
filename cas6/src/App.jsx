import React, { useEffect,useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ChildComponent } from './components/ChildComponent';
import { NotFound } from './components/NotFound';
import { Users } from './components/Users';

export function App() {

  const [users,setUsers] = useState([]);


  useEffect(() => {
    setTimeout(()=>{getUsers()},1000)
  }, []) //[] -> componentDidMount

  function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(json => setUsers(json))
      .catch(err => alert(err))
  }

  return (
    <div id='app'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='us' element={<ChildComponent />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<Users usersList={users} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}


{/* <Switch>
  <Route exact path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
</Switch> */}