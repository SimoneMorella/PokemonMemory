import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import GameOver from "./GameOver";


// try to handle the error... later we say

export default function GamePage({pokemonArray, shuffleCards}) {
    const [ignoreClick, setIgnoreClick] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState("");
    const roundToPlay = pokemonArray.length;

    function clickLogic(pokemon) {
        if (pokemon.clicked) return "Lose";
        if (score === roundToPlay - 1) return "win";
        return "";
    }

    function handleClick(pokemon) {
        if (ignoreClick) return;
        setScore(score + 1);
        let outcome = clickLogic(pokemon);
        if (outcome !== "") {
            setResult(outcome);
            setIgnoreClick(true);
            return;
        }
        pokemon.clicked = true;
        shuffleCards();
        
    }

    //later change the structure and the gap removed maybe
    return (
        <div className="flex flex-col w-full h-svh px-4 py-6 gap-24 items-center">
            <Header 
                score={score}/>
            <div className="self-center flex flex-wrap justify-center gap-3">
              {pokemonArray.map(pokemon => {
                  return (
                      <Card 
                      key={pokemon.id}
                      pokemon={pokemon}
                      handleClick={handleClick} />
                  )
              })}
            </div>
            <div className="text-[#D1CCE3] font-fredoka bg-black px-5 py-2 rounded-xl font-semibold text-lg -mt-16">
                <span>{score} </span>/ <span>{roundToPlay}</span>
            </div>
            {result !== "" && 
                <GameOver
                    result={result}/>}
        </div>
    )
}