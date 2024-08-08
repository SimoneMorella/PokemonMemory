import { useState, useEffect } from 'react'
import GamePage from './components/GamePage'
import StartPage from './components/StartPage'
// is better if I use the api with pokedex maybe idk instead of generation I'll se later
//put a default value for region and difficulty or start bug everything!

function App() {
  const [pokemonNameList, setPokemonNameList] = useState([]);
  const [generation, setGeneration] = useState("1");
  const [difficulty, setDifficulty] = useState("Easy");
  const [gameLoad, setGameLoad] = useState(false);

  // don't know if I have to do gameLoad and LoadingLoad to start a loading.... I'll think about that.

  useEffect(() => {
    let ignore = true;
    if (generation !== "") ignore = false;
    if (!ignore) {
      let fetchData = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/generation/${generation}`);
          const data = await response.json();
          const extractedNames = data.pokemon_species.map(pokemon => pokemon.name);
          setPokemonNameList(extractedNames);
          setGameLoad(true);
        } catch(error) {
          console.log(error)
        }

        
      }
      fetchData();
    }
    
  },[generation])

  function handleGen(e) {
    console.log(e.target.value)
    setGeneration(e.target.value)
  }

  function handleDifficulty(e) {
    setDifficulty(e.target.value);
  }

  return (
    <StartPage 
      handleGen={handleGen} 
      generation={generation} 
      handleDifficulty={handleDifficulty}
      difficulty={difficulty} />
    // <div className='flex flex-col gap-3'>

    //   <h1>ciao bro this is a pokemon memory game</h1>
    //   <div>
    //     <button value="1" onClick={handleGen}>Gen 1</button>
    //     <button value="2" onClick={handleGen}>Gen 2</button>
    //     <button value="3" onClick={handleGen}>Gen 3</button>
    //     <button value="4" onClick={handleGen}>Gen 4</button>
    //     <button value="5" onClick={handleGen}>Gen 5</button>
    //     <button value="6" onClick={handleGen}>Gen 6</button>
    //   </div>
    //   {gameLoad && <GamePage pokemonList={pokemonNameList}/>}
    // </div>
  )
}

export default App
