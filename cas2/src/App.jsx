import React from 'react';
import { Welcome } from './components/Welcome';
import { Student } from './components/Student';
import {StudentFunction} from './components/StudentFunction';
import {Comments} from './components/Comments';
import {FruitList} from './components/FruitList';

export function App() {

  var ime = 'Aleksandra';
  var lastName = 'Andonovska';
  var age = 22;
  var student = {
    name: "Ivan",
    address: "Skopje",
    college: "UKIM",
    index:  141088
  }
var hasComments = true;
var longComment =true;

var listaNaOvosje = ['apple','banana','orange'];

  return (
    <div id='app'>
      <FruitList listaNaOvosje={listaNaOvosje}/>
      <Comments longComment={longComment} hasComments={hasComments}/>
      <hr/>
      <Welcome name={ime} lastName={lastName} age={age} />
      <h1>App</h1>
      <Welcome name={"Kiko"}  age ={17}/>
      <hr/>
      <Student student={student}/>
      <StudentFunction ucenik={student}/>
    </div>
  )
}