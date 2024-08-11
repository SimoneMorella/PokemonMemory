import Card from "./Card";
import Header from "./Header";


// try to handle the error... later we say

export default function GamePage({pokemonArray}) {
    //later change the structure and the gap removed maybe
    console.log(pokemonArray)
    return (
        <div className="flex flex-col w-full h-svh px-4 py-6 gap-24">
            <Header />
            <div className="self-center flex flex-wrap justify-center gap-3">
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