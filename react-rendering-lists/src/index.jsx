import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function RenderArray(props) {
  const array = (
    <ul>
      {props.pokedex.map(pokemon =>
        <li key={pokemon.number}>
          {pokemon.name}
        </li>
      )}
    </ul>
  );
  return array;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(< RenderArray pokedex={pokedex}/>);
