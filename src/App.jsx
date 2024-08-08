import { useState, useEffect } from 'react'
import Card from './components/Card'


function App() {
  const [pokemonNameList, setPokemonNameList] = useState([])
  const [generation, setGeneration] = useState("")
  const [cardLoaded, setCardLoaded] = useState(false);


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
          setCardLoaded(true);
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

  return (
    <div className='flex flex-col gap-3'>
      <h1>ciao bro this is a pokemon memory game</h1>
      <div>
        <button value="1" onClick={handleGen}>Gen 1</button>
        <button value="2" onClick={handleGen}>Gen 2</button>
        <button value="3" onClick={handleGen}>Gen 3</button>
        <button value="4" onClick={handleGen}>Gen 4</button>
        <button value="5" onClick={handleGen}>Gen 5</button>
        <button value="6" onClick={handleGen}>Gen 6</button>
      </div>
      {cardLoaded && <Card pokemonList={pokemonNameList}/>}
    </div>
  )
}

export default App
