// Ke kreirate 4 useri so atributi {ime,prezime,adresa,godini} vo App.jsx fajlot definirani kako varijabli
// koristejki props vo 2 posebni fajla ke gi prefrlite userite vo edniot fajl (Age.jsx) 
// ke gi prikazete userite koi se postari od 18 god za ostanatite ke prikazete paragraf "Less then 18", vo drugiot fajl  (Address.jsx) 
// ke gi prikazete userite koi imaat adresa Skopje.
// **Atributite na userite gi zadavate vie

// import { Domashna } from './components/Domashna';
import React, { useState, useEffect } from 'react';
import { Comments } from './components/Comments';
import { Cars } from './components/Cars';
import { StateClassExample } from './components/StateClassExample';

export function App() {

  const [promenliva, setPromenliva] = useState('Vrednost 1');
  const [brojac,setBrojac] = useState(0);

  
  const user1 = { ime: "Ivan", prezime: "Ivanov", adresa: "Skopje", godini: 15 };
  const user2 = { ime: "Petar", prezime: "Perovski", adresa: "Debar", godini: 22 };
  const user3 = { ime: "Ivana", prezime: "Ivanovska", adresa: "Skopje", godini: 33 };
  const user4 = { ime: "Sime", prezime: "Simeonov", adresa: "Gostivar", godini: 12 };


  let comments = [
    { id: 0, author: 'Filip', content: 'Comment 1' },
    { id: 1, author: 'Simona', content: 'Comment 2' },
    { id: 2, author: 'Marko', content: 'Comment 3' }
  ];

  let registracija = [
    { grad: { naselba: 'N1', ulica: 'Ul.1' }, oznaka: 'SK-0000-AB' },
    { grad: { naselba: 'N2', ulica: 'Ul.2' }, oznaka: 'GV-0000-AB' },
    { grad: { naselba: 'N3', ulica: 'Ul.3' }, oznaka: 'TE-0000-AB' }
  ]

  let cars = [
    { brand: 'Ford', model: 'Fiesta', year: 2008, plates: registracija[0] },
    { brand: 'Opel', model: 'Astra', year: 2015, plates: registracija[1] },
    { brand: 'VW', model: "Polo", year: 2020, plates: registracija[2] }
  ];

  function smeniVrednost() {
    setPromenliva('Nova Vrednost')
  }

  useEffect(() => {
    console.log('This is Component Did Mount')
  }, [])

  return (
    <div id='app'>
      {/* <Cars vozila={cars} /> */}
      {/* <Domashna
        korisnik1={user1}
        korisnik2={user2}
        korisnik3={user3}
        korisnik4={user4}
      /> */}
      {/* <Comments comments={comments} /> */}
      {/* <StateClassExample/> */}
      <p>Vrednost na Promenliva: {promenliva}</p>
      <button onClick={smeniVrednost}>Click Me !!</button>
      <br />
      <img
        src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        alt='slika'
        width={300}
        height={300} 
        onClick={()=>{setBrojac(brojac + 1)}}
        />
      <h2>Counter:{brojac}</h2>
    </div>
  )
}