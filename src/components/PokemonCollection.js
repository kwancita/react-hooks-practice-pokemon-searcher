import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const allPoke = pokemon.map((poke)=>(<PokemonCard key={poke.id} poke={poke}/>))
  return (
    <Card.Group itemsPerRow={6}>
      {allPoke}
    </Card.Group>
  );
}

export default PokemonCollection;
