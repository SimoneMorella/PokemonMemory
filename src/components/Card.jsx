import { capitalize, pokemonTypes } from "./utils"



// pokemon.images.other['official-artwork'].front_default
export default function Card({pokemon}) {
   
    const types = pokemon.types.map(type => type.type.name);
    console.log(types)

    return (
        <div className="text-[#D1CCE3] h-[180px] flex flex-col gap-2 font-fredoka rounded-xl bg-black bg-opacity-90 px-3 py-4 border border-[#51467c] ">
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
                {/* <div><img src={pokemon.images.other.showdown.front_default} alt={pokemon.name} width={35}/></div> */}
            </div>
        </div>
    )
}