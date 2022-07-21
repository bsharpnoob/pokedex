import React,{useState} from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [pokemonName,setPokemonName] = useState("");
  const [pokemonInfo,setPokemonInfo] = useState<undefined | any>(undefined);
  const API_BASE_URL = "https://pokeapi.co/api/v2";

  const search = () => {
    axios.get(`${API_BASE_URL}/pokemon/${pokemonName}`)
    .then((res) => {
      setPokemonInfo(res.data);
    })
  }



  return (
    <div>
      <h1>Pokemon Search</h1>
      
      <div>
        <input onChange={(e) => setPokemonName(e.target.value)} placeholder='Pokemon Name...'></input>
        <button onClick={search}>Search</button>
      </div>

      <p>You have entered {pokemonName}</p>

      {pokemonInfo === undefined ? <p>Pokemon not found</p> : (
        <div>
          <img src={pokemonInfo.sprites.other.dream_world.front_default}></img>

        </div>


      )}

    </div>
  );
}

export default App;
