import { motion} from "framer-motion";
export default function GameOver({result, restartGame, goMainMenu}) {
    return (
        <>
                <motion.div
                    className={`${result === "win" ? 'bg-winGengar' : 'bg-loseGengar'} bg-cover z-[1] h-[200px] min-[390px]:w-[290px] sm:h-[240px] sm:w-[340px] 2xl:h-[300px] 2xl:w-[400px] rounded-xl text-[#D1CCE3] absolute top-1/3 bg-black px-4 py-6 flex flex-col justify-between items-center shadow-2xl`}
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: [0, 1, 1.05, 1.02, 1]}}
                    transition={{duration: 0.7}}
                    exit={{opacity: 0, scale: 0, transition: {duration: 0.3}}}>
                    
                    <div className="bg-black px-4 py-2 bg-opacity-70 rounded-xl font-bold text-xl">
                        {result === "win" 
                            ? "You won!"
                            : "You loose!"
                        }
                    </div>
                    <div className="w-full grid grid-cols-2 gap-3">
                        <button className="btn" onClick={restartGame}>Restart</button>
                        <button className="btn startBtn bg-[#EF5262]" onClick={goMainMenu}>Main Menu</button>
                    </div>
                </motion.div>
                <motion.div 
                    className="w-full h-full absolute top-0 bg-black bg-opacity-60 "
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3}}
                    exit={{opacity: 0, transition: {duration: 0.3}}}>
                </motion.div>
        </>
 
    )
}