import { useEffect, useState } from "react"


export default function Card({pokemonList}) {
    const [pokemonArray, setPokemonArray] = useState([]);
    const maxLength = 3;

    useEffect(() => {
        if (pokemonList.length === 0) return;
    
        const fetchPokemonData = async () => {
          let numArray = new Set(); // Using Set to ensure unique random numbers
          let pokemonTmp = []; // Array to store fetched Pokémon data
    
          // Generate unique random numbers
          while (numArray.size < maxLength) {
            const randNum = Math.floor(Math.random() * pokemonList.length);
            numArray.add(randNum);
          }
    
          // Fetch Pokémon data for each unique random number
          for (let num of numArray) {
            try {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonList[num]}`);
              const data = await response.json();
              pokemonTmp.push(data); // Push the fetched data into pokemonTmp array
            } catch (error) {
              console.error("Failed to fetch Pokémon data:", error);
            }
          }
    
          // Update state after all fetches are done
          setPokemonArray(pokemonTmp);
        };
    
        fetchPokemonData();
      }, [pokemonList]);
    
    console.log(pokemonArray)
    return (
        <div>
            {pokemonArray.map(pokemon => {
                return (
                    <div key={pokemon.id}>
                        <h1>{pokemon.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}