import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import PokemonTable from './components/PokemonTable';
import {Pokemon} from './models/Pokemon';


function App() {
  const [pokemons, setPokemons] = useState([]);

  const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
  
  async function fetchPokemons() {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      //Data map function is not working properly but I don't know why
      let pokemonData = data.map((pokemon) => {
        return new Pokemon(pokemon.name, pokemon.abilities, pokemon.rarity);
      });

      setPokemons(pokemonData);
  }


  return (
    <div className = 'text-center mt-5 mx-5'>
      <button className = 'btn btn-primary' onClick={fetchPokemons}> Fetch Pokemons </button>
      <PokemonTable pokemons={pokemons}> </PokemonTable>
    </div>
  );
}

export default App;
