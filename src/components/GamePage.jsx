import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import GameOver from "./GameOver";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";


// try to handle the error... later we say

export default function GamePage({pokemonArray, shuffleCards}) {
    const [ignoreClick, setIgnoreClick] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState("");
    const [firstAnimComplete, setFirstAnimComplete] = useState(false);
    const [secondAnimComplete, setSecondAnimComplete] = useState(false);
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
        <AnimatePresence>
            <div className="flex flex-col w-full h-svh px-4 py-6 gap-24 items-center">
                <motion.div 
                    className="w-full"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: [0, 1, 1.05, 1.02, 1]}}
                    transition={{duration: 0.7}}
                    exit={{opacity: 0, scale: 0, transition: {duration: 0.3}}}
                    onAnimationComplete={() => setFirstAnimComplete(true)}>
                <Header 
                    score={score}/>
                </motion.div>
                <motion.div 
                className="self-center flex flex-wrap justify-center gap-3"
                    initial={{opacity: 0, scale: 0}}
                    animate={firstAnimComplete && {opacity: 1, scale: [0, 1, 1.05, 1.02, 1]}}
                    transition={{duration: 0.7}}
                    exit={{opacity: 0, scale: 0, transition: {duration: 0.3}}}
                    onAnimationComplete={() => setSecondAnimComplete(true)}>
                {pokemonArray.map(pokemon => {
                    return (
                        <Card 
                        key={pokemon.id}
                        pokemon={pokemon}
                        handleClick={handleClick} />
                    )
                })}
                </motion.div>
                <motion.div 
                className="-mt-16 flex gap-2"
                initial={{opacity: 0, scale: 0}}
                animate={secondAnimComplete && {opacity: 1, scale: [0, 1, 1.05, 1.02, 1]}}
                transition={{duration: 0.7}}
                exit={{opacity: 0, scale: 0, transition: {duration: 0.3}}}>
                    <div className="text-[#D1CCE3] ml-10 font-fredoka bg-black bg-opacity-80 px-5 py-2 rounded-xl font-semibold text-lg ">
                        <span>{score} </span>/ <span>{roundToPlay}</span>
                    </div>
                    <div 
                        className="text-[#D1CCE3] font-fredoka bg-black bg-opacity-80 flex justify-center items-center px-4 rounded-full font-semibold text-lg "
                        data-tooltip-id="help"
                        data-tooltip-content="Don't click on the same card twice!"
                        data-tooltip-place="bottom">
                        ?
                        <Tooltip 
                            id="help"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.9)",
                                color: "#D1CCE3"

                            
                            }}/>
                    </div>
                    

                </motion.div>
                {result !== "" && 
                    <GameOver
                        result={result}/>}
            </div>
        </AnimatePresence>

    )
}