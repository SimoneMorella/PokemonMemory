import { capitalize, pokemonTypes } from "./utils"
import Tilt from 'react-parallax-tilt'

export default function Card({pokemon, handleClick, isFlipped}) {
    const types = pokemon.types.map(type => type.type.name);
    let element = document.querySelector("#cardFace");
    if (element) {
        console.log('Offset Parent:', element.offsetParent);
        console.log('Offset Top:', element.offsetTop);
        console.log('Offset Left:', element.offsetLeft);
    }

    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#D1CCE3"
            glarePosition="all"
            glareBorderRadius="12px">
            <div
                onClick={() => handleClick(pokemon)}
                className={`${isFlipped ? 'card flipped' : 'card' } text-[#D1CCE3] h-[150px] w-[90px] min-[412px]:h-[180px] min-[412px]:w-[120px] sm:h-[220px] sm:w-[160px] font-fredoka rounded-xl   border border-[#51467c]`} >
                    <div className="cardFace flex h-full flex-col gap-2 px-3 py-4 bg-black bg-opacity-90 rounded-xl">
                        <div className="flex justify-center items-center">
                            <img src={pokemon.images.other['official-artwork'].front_default} alt={pokemon.name} className="min-[412px]:h-[90px] sm:h-[120px] " />
                        </div>
                        <div className="flex flex-col items-center gap-1 justify-between">
                            <h5 className="font-semibold text-[15px] min-[412px]:text-[17px] sm:text-xl">{capitalize(pokemon.name)}</h5>
                            <div id="types" className="flex gap-1">
                                {types.map(type => {
                                    return (
                                        <img key={type} src={pokemonTypes[type]} alt={type} className="w-[20px] min-[412px]:w-[22px] sm:w-[28px]" />
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </div>
                    <div  className="cardBack bg-pokeCardBg h-full rounded-xl bg-cover bg-center"></div>
            </div>
        </Tilt>

    )
}