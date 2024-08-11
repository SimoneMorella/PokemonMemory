import { useEffect, useState } from "react"
import pokegif from "../assets/pokeball.gif"
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingPage({isLoading, setGameLoad}) {
  const [dots, setDots] = useState(1);
  const dotString = ".".repeat(dots);


    useEffect(() => {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots % 3) + 1);
      }, 800);
      return (() => {
        clearInterval(interval);
      })
    }, [])

    useEffect(() => {
        if (isLoading) {
          setTimeout(() => {
            setGameLoad();
          }, 4000);
    
        }
      }, [isLoading, setGameLoad]);


    return (
      <AnimatePresence>
        {isLoading && (<motion.div 
        className="text-[#D1CCE3] relative pb-5 font-fredoka rounded-xl bg-black bg-opacity-60 flex flex-col gap-3 items-center max-w-[250px]"
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: [0, 1, 1.05, 1.02, 1]}}
        transition={{duration: 0.8}}
        exit={{opacity: 0, scale: 0}}>
          <img src={pokegif} alt="" className="" />
          <h4 className="text-xl font-semibold absolute bottom-3 w-24">Loading {dotString}</h4>
        </motion.div>)}
      </AnimatePresence>

    )
}