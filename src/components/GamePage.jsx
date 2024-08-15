import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import GameOver from "./GameOver";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";


export default function GamePage({pokemonArray, shuffleCards, setGameLoad, setIsLoading}) {
    const [ignoreClick, setIgnoreClick] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState("");
    const [firstAnimComplete, setFirstAnimComplete] = useState(false);
    const [secondAnimComplete, setSecondAnimComplete] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const roundToPlay = pokemonArray.length;

    function clickLogic(pokemon) {
        if (pokemon.clicked) return "Lose";
        if (score === roundToPlay - 1) return "win";
        return "";
    }

    function handleClick(pokemon) {
        setIgnoreClick(true);
        if (ignoreClick) return;
        if (!pokemon.clicked) setScore(score + 1);
        let outcome = clickLogic(pokemon);
        if (outcome !== "") {
            setResult(outcome);
            setIgnoreClick(true);
            return;
        }
        pokemon.clicked = true;
        
        setIsFlipped(true);
        setTimeout(() => {
            shuffleCards();
        }, 1000)
        setTimeout(() => {
            setIsFlipped(false);
            setIgnoreClick(false);
        },1500)    
    }

    function restartGame() {
        setIsExiting(true);
        setTimeout(() => {
            setScore(0);
            setFirstAnimComplete(false);
            setSecondAnimComplete(false);
            setGameLoad(false);
            setIsLoading(true);
            setIsExiting(false);
        }, 800)

    }

    function goMainMenu() {
        setIsExiting(true);
        setTimeout(() => {
            setScore(0);
            setResult("");
            setFirstAnimComplete(false);
            setSecondAnimComplete(false);
            setGameLoad(false);
            setIsLoading(false);
            setIsExiting(false);
        }, 500)
    }

    return (
        <AnimatePresence>
            {!isExiting && 
            (<div className="flex flex-col w-full h-svh px-4 sm:px-10 lg:px-20 xl:px-28 2xl:px-44 py-2 min-[412px]:py-6 gap-7 min-[390px]:gap-24 sm:gap-14 2xl:gap-7 items-center">
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
                className="self-center flex sm:grid sm:grid-cols-3 flex-wrap justify-center gap-2 sm:gap-4"
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
                        handleClick={handleClick}
                        isFlipped={isFlipped} />
                    )
                })}
                </motion.div>
                <motion.div 
                className="-mt-3 min-[390px]:-mt-16 sm:-mt-5 2xl:-mt-3 flex gap-2"
                initial={{opacity: 0, scale: 0}}
                animate={secondAnimComplete && {opacity: 1, scale: [0, 1, 1.05, 1.02, 1]}}
                transition={{duration: 0.7}}
                exit={{opacity: 0, scale: 0, transition: {duration: 0.3}}}>
                    <div className="text-[#D1CCE3] ml-10 font-fredoka bg-black bg-opacity-80 px-5 sm:px-7 py-2 sm:py-3 rounded-xl font-semibold min-[390px]:text-lg sm:text-xl ">
                        <span>{score} </span>/ <span>{roundToPlay}</span>
                    </div>
                    <div 
                        className="text-[#D1CCE3] cursor-pointer font-fredoka bg-black bg-opacity-80 flex justify-center items-center px-4 sm:px-5 rounded-full font-semibold min-[390px]:text-lg sm:text-xl"
                        data-tooltip-id="help"
                        data-tooltip-content="Don't click on the same card twice!"
                        data-tooltip-place="top">
                        ?
                        <Tooltip 
                            id="help"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.9)",
                                color: "#D1CCE3",
                                zIndex: 1   
                            }}/>
                    </div>
                    

                </motion.div>
                {result !== "" && 
                    <GameOver
                        result={result}
                        restartGame={restartGame}
                        goMainMenu={goMainMenu}
                        />}
            </div>)}
        </AnimatePresence>

    )
}