import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";


// try to handle the error... later we say

export default function GamePage({pokemonList}) {
    const [pokemonArray, setPokemonArray] = useState([]);
    const maxLength = 6;

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
                types: data.types,
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
    //later change the structure and the gap removed maybe
    console.log(pokemonArray)
    return (
        <div className="flex flex-col w-full h-svh px-4 py-6 gap-32">
            <Header />
            <div className="self-center grid grid-cols-3 gap-3">
              {pokemonArray.map(pokemon => {
                  return (
                      <Card 
                      key={pokemon.id}
                      pokemon={pokemon} />
                  )
              })}
            </div>
 
        </div>
    )
}