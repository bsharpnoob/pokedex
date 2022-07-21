import React,{useState} from 'react';
import './App.css';


function App() {

  const [pokemonName,setPokemonName] = useState("");

  return (
    <div>
      <h1>Pokemon Search</h1>

      <div>
        <input placeholder='Pokemon Name...'></input>
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
