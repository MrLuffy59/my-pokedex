import './App.css';
import PokemonCard from './components/PokemonCard';
import {useState} from "react"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc: "https://www.pokebip.com/images/2016/20.png"
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur")

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName)

  if (pokemon == null) {
    throw new Error("Invalid pokemon name")
  }

  return (
    <div>
    <button onClick={() => setPokemonName("bulbasaur")}>Bulbasaur</button>
    <button onClick={() => setPokemonName("mew")}>Mew</button>
    {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;

