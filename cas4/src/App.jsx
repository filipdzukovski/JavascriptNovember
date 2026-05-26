import React from 'react';
import { Login } from './components/Login';
import "./css/App.css";
// import {Movies} from './components/Movies';
// import { SignUpForm } from './components/SignUpForm';
// import { SignUpFormClass } from './components/SignUpFormClass';
// da se prikaze vo dopolnitelen fajl lista od filmovi (minimum 5 po vash izbor)
// izdefinirana vo app so atributi {name,date,genre plot,imdbLink,imgUrl}
// listata na atributi prikaz i slika za filmot (slikata ne mora da bide od imdb),
// imdb.com e stranata za filmovite

// const filmovi = [
//   {name:"The Dark Knight",date:2008,genre:"Crime,Action,Thriller",plot:"When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",imdbLink:"https://www.imdb.com/title/tt0468569/?ref_=fn_t_1",imgUrl:"https://gcp-na-images.contentstack.com/v3/assets/bltea6093859af6183b/bltafc19be88c973d30/6987ecaa55a8599146a89bd3/360_dark_knight_0708.jpg?branch=production&width=3840&quality=75&auto=webp&crop=3:2"},
//   {name:"Pulp Fiction",date:1994,genre:"Gangster,Crime,Drama",plot:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",imdbLink:"https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_pulp%20f",imgUrl:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/05/16/16/pulp-fiction.jpg"},
//   {name:"Reservoir Dogs",date:1992,genre:"Crime,Thriller,Heist",plot:"When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",imdbLink:"https://www.imdb.com/title/tt0105236/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_reservoi",imgUrl:"https://cdn.kpbs.org/img/photos/2019/07/26/Reservoir_Dogs.jpg"}
// ]

export function App() {
  return (
    <div id='app'>
      {/* <SignUpFormClass/> */}
      {/* <Movies listaNaFilmovi={filmovi}/> */}
      <Login />
    </div>
  )
}