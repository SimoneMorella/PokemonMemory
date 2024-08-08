import { useEffect, useState } from "react"


export default function Card({pokemon}) {
   
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <div><img src={pokemon.images.other.showdown.front_default} alt="" width={100} /></div>
        </div>
    )
}