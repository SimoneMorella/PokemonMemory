import { useEffect, useState } from "react"
import pokegif from "../assets/pokeball.gif"
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingPage({isLoading, setGameLoad, pokemonList, setPokemonArray, difficulty}) {
  const [dots, setDots] = useState(1);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isExiting, setIsExiting] = useState(false)
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

        if (!isLoading) return;
        if (pokemonList.length === 0) return;
    
        const fetchPokemonData = async () => {
          let numArray = new Set();
          let pokemonTmp = []; 
          const maxLength = difficulty === "Easy" ? 6 : difficulty === "Medium" ? 8 : 9;

          while (numArray.size < maxLength) {
            const randNum = Math.floor(Math.random() * pokemonList.length);
            numArray.add(randNum);
          }

          for (let num of numArray) {
            try {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonList[num]}`);
              const data = await response.json();
              pokemonTmp.push({
                id: data.id,
                name: data.name,
                images: data.sprites,
                types: data.types,
                clicked: false
              });
            } catch (error) {
              console.error("Failed to fetch Pokémon data:", error);
            }
          }
    
          setPokemonArray(pokemonTmp);
          setIsDataFetched(true);
        };
    
        fetchPokemonData();
      }, [isLoading, pokemonList, setPokemonArray, difficulty]);

      useEffect(() => {
        if (isDataFetched) {
          setTimeout(() => {
            setIsExiting(true)
          }, 2000)
          const transitionDelay = 2500;
          const timer = setTimeout(() => {
            setGameLoad(true);
          }, transitionDelay);
          return () => clearTimeout(timer);
        }
      }, [isDataFetched, setGameLoad])


    return (
      <AnimatePresence>
        {!isExiting && (
          <div>
        <motion.div 
          className="text-[#D1CCE3] relative pb-5 font-fredoka rounded-xl bg-black bg-opacity-60 flex flex-col gap-3 items-center max-w-[200px] h-[200px]"
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: [0, 1, 1.05, 1.02, 1]}}
          transition={{duration: 0.7}}
          exit={{opacity: 0, scale: 0, transition: {duration: 0.3}}}>
          <img src={pokegif} alt="" className="" />
          <h4 className="text-xl font-semibold absolute bottom-3 w-24">Loading {dotString}</h4>
        </motion.div>
          </div>)}
      </AnimatePresence>

    )
}