import React from 'react';

export const Domashna = ({ korisnik1, korisnik2, korisnik3, korisnik4 }) => {

    return (
        <div id='domashna'>
            <h1>User1: </h1>
            {korisnik1.godini && korisnik1.adresa === 'Skopje' > 18 ?
                <div>
                    <p>Ime: {korisnik1.ime}</p>
                    <p>Prezime: {korisnik1.prezime}</p>
                    <p>Adresa: {korisnik1.adresa}</p>
                    <p>Godini: {korisnik1.godini}</p>
                </div>
                : <h2>Less then 18 or not from Skopje</h2>
            }
            <h1>User2: </h1>

            {korisnik2.godini > 18 && korisnik2.adresa === 'Skopje' ?
                <div>
                    <p>Ime: {korisnik2.ime}</p>
                    <p>Prezime: {korisnik2.prezime}</p>
                    <p>Adresa: {korisnik2.adresa}</p>
                    <p>Godini:{korisnik2.godini}</p>
                </div>

                : <h2>Less then 18 or not from Skopje</h2>}
            <h1>User3: </h1>

            {korisnik3.godini > 18 && korisnik3.adresa === 'Skopje' ?
                <div>
                    <p>Ime: {korisnik3.ime}</p>
                    <p>Prezime: {korisnik3.prezime}</p>
                    <p>Adresa: {korisnik3.adresa}</p>
                    <p>Godini:{korisnik3.godini}</p>
                </div>
                : <h2>Less then 18 or not from Skopje</h2>
            }
            <h1>User4: </h1>

            {korisnik4.godini > 18 && korisnik4.adresa === 'Skopje' ?
                <div>
                    <p>Ime: {korisnik4.ime}</p>
                    <p>Prezime: {korisnik4.prezime}</p>
                    <p>Adresa: {korisnik4.adresa}</p>
                    <p>Godini:{korisnik4.godini}</p>
                </div>
                : <h2>Less then 18 or not from Skopje</h2>
            }
        </div>
    )
}