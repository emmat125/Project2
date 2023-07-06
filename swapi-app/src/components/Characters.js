import React, { useEffect, useState } from 'react';
import '../App.css';

function Characters() {
    const [characters, setCharacters] = useState([]);
    const url = 'http://localhost:4000/api'

    useEffect(async () => {
        await fetch(`${url}/characters`)
            .then((response) => response.json())
            .then((data) => setCharacters(data))
            .catch((error) => console.log('Error fetching characters: ', error))
    }, []);

    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {characters.map((character) => (
                    <li key={character.id} className={'li-style'}> {character.name} </li>
                ))}
            </ul>
        </div>
    );
}

export default Characters;
