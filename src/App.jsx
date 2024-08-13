import { useState, useEffect } from 'react'
import GamePage from './components/GamePage'
import StartPage from './components/StartPage'
import LoadingPage from './components/LoeadingPage';
import Footer from './components/Footer';
// is better if I use the api with pokedex maybe idk instead of generation I'll se later
//put a default value for region and difficulty or start bug everything!

function App() {
  const [pokemonNameList, setPokemonNameList] = useState([]);
  const [generation, setGeneration] = useState("1");
  const [difficulty, setDifficulty] = useState("Easy");
  const [gameLoad, setGameLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonArray, setPokemonArray] = useState([]);


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

  function handleGameLoad() {
    setGameLoad(true);
  }

  function shuffleCards() {
    let randArr = [];
    while (randArr.length < pokemonArray.length) {
      let randNum = Math.floor(Math.random() * pokemonArray.length);
      if (!randArr.includes(pokemonArray[randNum])) randArr.push(pokemonArray[randNum]);
    }
    setPokemonArray(randArr);
  }

  return (
    <>
    {!isLoading 
    ? <StartPage 
        handleGen={handleGen} 
        generation={generation} 
        handleDifficulty={handleDifficulty}
        difficulty={difficulty}
        setIsLoading={setIsLoading} />
    : (
      !gameLoad 
      ? <LoadingPage 
          isLoading={isLoading} 
          setGameLoad={handleGameLoad}
          setPokemonArray={setPokemonArray}
          pokemonList={pokemonNameList}
          difficulty={difficulty}/> 
      : <GamePage 
          pokemonArray={pokemonArray}
          shuffleCards={shuffleCards}/>
    )
   }
   <Footer />
    </>
  )
}

export default App
