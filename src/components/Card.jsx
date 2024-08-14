import { capitalize, pokemonTypes } from "./utils"
import Tilt from 'react-parallax-tilt'

export default function Card({pokemon, handleClick}) {
    const types = pokemon.types.map(type => type.type.name);
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#D1CCE3"
            glarePosition="all"
            glareBorderRadius="12px">
            <div
                onClick={() => handleClick(pokemon)}
                className="text-[#D1CCE3] h-[180px] flex flex-col gap-2 font-fredoka rounded-xl bg-black bg-opacity-90 px-3 py-4 border border-[#51467c] ">
                    <div id="innerCard" className="rounded-xl">
                    <div className="flex justify-center items-center">
                    <img src={pokemon.images.other['official-artwork'].front_default} alt={pokemon.name} className="h-[90px] bg-black" />
                </div>
                <div className="flex flex-col items-center gap-1 justify-between">
                    <h5 className="font-semibold text-[17px]">{capitalize(pokemon.name)}</h5>
                    <div id="types" className="flex gap-1">
                        {types.map(type => {
                            return (
                                <img key={type} src={pokemonTypes[type]} alt={type} className="w-[22px]" />
                            )
                        }
                        )}
                    </div>
                </div>
                    </div>
            </div>
        </Tilt>

    )
}