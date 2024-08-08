import { useEffect, useState } from "react";
import Card from "./Card";

export default function GamePage({pokemonList}) {
    const [pokemonArray, setPokemonArray] = useState([]);
    const maxLength = 3;

    useEffect(() => {
        if (pokemonList.length === 0) return;
    
        const fetchPokemonData = async () => {
          let numArray = new Set();
          let pokemonTmp = []; 
    

          while (numArray.size < maxLength) {
            const randNum = Math.floor(Math.random() * pokemonList.length);
            numArray.add(randNum);
          }

          for (let num of numArray) {
            try {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonList[num]}`);
              const data = await response.json();
              pokemonTmp.push({
                id: data.id,
                name: data.name,
                images: data.sprites,
                clicked: false
              });
            } catch (error) {
              console.error("Failed to fetch Pokémon data:", error);
            }
          }
    
          setPokemonArray(pokemonTmp);
        };
    
        fetchPokemonData();
      }, [pokemonList]);
    
    console.log(pokemonArray)
    return (
        <div>
            {pokemonArray.map(pokemon => {
                return (
                    <Card 
                    key={pokemon.id}
                    pokemon={pokemon} />
                )
            })}
        </div>
    )
}