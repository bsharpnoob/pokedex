import React,{useState} from 'react';
import './App.css';


function App() {

  const [pokemonName,setPokemonName] = useState("");

  const search = () => {
    alert("Search button has been clicked!")
  }



  return (
    <div>
      <h1>Pokemon Search</h1>

      <div>
        <input placeholder='Pokemon Name...'></input>
        <button onClick={search}>Search</button>
      </div>

      <p>You have entered {pokemonName}</p>
    </div>
  );
}

export default App;
