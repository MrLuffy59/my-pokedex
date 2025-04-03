import React from 'react';

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;


