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
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc :"https://www.pokebip.com/images/2016/20.png"
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
       <nav>
          {pokemonList.map((pokemon) =>(
          <button key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
          ))}
       </nav>

       <PokemonCard pokemon={pokemon} />

    </div>
  );
}

export default App;

