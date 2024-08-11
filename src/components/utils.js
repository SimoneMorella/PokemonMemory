import Bug from "../assets/types/Type_Bug.png";
import Dark from "../assets/types/Type_Dark.png";
import Dragon from "../assets/types/Type_Dragon.png";
import Electric from "../assets/types/Type_Electric.png";
import Fairy from "../assets/types/Type_Fairy.png";
import Fighting from "../assets/types/Type_Fighting.png";
import Fire from "../assets/types/Type_Fire.png";
import Flying from "../assets/types/Type_Flying.png";
import Ghost from "../assets/types/Type_Ghost.png";
import Grass from "../assets/types/Type_Grass.png";
import Ground from "../assets/types/Type_Ground.png";
import Ice from "../assets/types/Type_Ice.png";
import Normal from "../assets/types/Type_Normal.png";
import Poison from "../assets/types/Type_Poison.png";
import Psychic from "../assets/types/Type_Psychic.png";
import Rock from "../assets/types/Type_Rock.png";
import Steel from "../assets/types/Type_Steel.png";
import Water from "../assets/types/Type_Water.png";


export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const pokemonTypes = {
    bug: Bug,
    dark: Dark,
    dragon: Dragon,
    electric: Electric,
    fairy: Fairy,
    fighting: Fighting,
    fire: Fire,
    flying: Flying,
    ghost: Ghost,
    grass: Grass,
    ground: Ground,
    ice: Ice,
    normal: Normal,
    poison: Poison,
    psychic: Psychic,
    rock: Rock,
    steel: Steel,
    water: Water
}

