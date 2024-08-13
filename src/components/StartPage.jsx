import logo from "../assets/pokelogo.png";
import logo2 from "../assets/logo2.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StartPage({handleGen, generation, handleDifficulty, difficulty, setIsLoading}) {
  const [isExiting, setIsExiting] = useState(false);
  const [firstAnimComplete, setFirstAnimComplete] = useState(false);

  const handleStartGame = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsLoading(true);
    }, 500)
  }

  return (
    <AnimatePresence>
      {!isExiting && (
      <div>
        <div className="flex flex-col gap-20 -mt-20">
          <motion.div 
            className="relative"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: [0, 1, 1.05, 1.02, 1]}}
            transition={{duration: 0.7}}
            exit={{opacity: 0, scale: 0, transition: {duration: 0.3}}}
            onAnimationComplete={() => setFirstAnimComplete(true)}>
            <img src={logo} alt="pokemon logo" className="max-w-[350px] " />
            <img src={logo2} alt="pokemon logo" className="max-w-[200px] absolute right-0 -bottom-7 rotate-[4deg]" />
          </motion.div>
          <motion.div 
            id="startMenu" 
            className="text-[#D1CCE3] font-fredoka rounded-xl bg-black bg-opacity-80"
            initial={{opacity: 0, scale: 0}}
            animate={firstAnimComplete && {opacity: 1, scale: [0, 1, 1.05, 1.02, 1]}}
            transition={{duration: 0.7}}
            exit={{opacity: 0, scale: 0, transition: {duration: 0.3}}}>
              <div id="startMenuContent" className="px-6 py-5 flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                      <h3 className="font-bold text-xl text-center">Choose Pokemon Region:</h3>
                      <div className="grid grid-cols-3 gap-2">
                          <button value="1" onClick={handleGen} className={`btn ${generation === "1" ? 'bg-[#D1CCE3]' : ''}`}>Kanto</button>
                          <button value="2" onClick={handleGen} className={`btn ${generation === "2" ? 'bg-[#D1CCE3]' : ''}`}>Johto</button>
                          <button value="3" onClick={handleGen} className={`btn ${generation === "3" ? 'bg-[#D1CCE3]' : ''}`}>Hoenn</button>
                          <button value="4" onClick={handleGen} className={`btn ${generation === "4" ? 'bg-[#D1CCE3]' : ''}`}>Sinnoh</button>
                          <button value="5" onClick={handleGen} className={`btn ${generation === "5" ? 'bg-[#D1CCE3]' : ''}`}>Unova</button>
                          <button value="6" onClick={handleGen} className={`btn ${generation === "6" ? 'bg-[#D1CCE3]' : ''}`}>Kalos</button>
                      </div>
                  </div>
                  <div className="flex flex-col gap-3">
                      <h3 className="font-bold text-xl text-center">Choose Game Difficulty:</h3>
                      <div className="grid grid-cols-3 gap-2">
                          <button value="Easy" onClick={handleDifficulty} className={`btn ${difficulty === 'Easy' ? 'bg-[#D1CCE3]' : ''}`}>Easy</button>
                          <button value="Medium" onClick={handleDifficulty} className={`btn ${difficulty === 'Medium' ? 'bg-[#D1CCE3]' : ''}`}>Medium</button>
                          <button value="Hard" onClick={handleDifficulty} className={`btn ${difficulty === 'Hard' ? 'bg-[#D1CCE3]' : ''}`}>Hard</button>
                      </div>
                  </div>
                  <div className="w-full mt-5">
                      <button className="btn startBtn w-full bg-[#EF5262]" onClick={handleStartGame}>Start Game</button>
                  </div>
              </div>
          </motion.div>
        </div>
      </div>)}    
    </AnimatePresence>
    
  );
}
