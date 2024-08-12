import logo from "../assets/pokelogo.png";
import logo2 from "../assets/logo2.png";

export default function Header({score}) {

    return (
        <div className="flex w-full justify-between">
            <div className="relative">
                <img src={logo} alt="pokemon logo" className="max-w-[150px] " />
                <img src={logo2} alt="pokemon logo" className="max-w-[100px] absolute right-0 -bottom-3 rotate-[4deg]" />
            </div>
            <div className="text-[#D1CCE3] font-fredoka rounded-xl bg-black bg-opacity-90 flex justify-center items-center px-6 py-2">
                <h4 className="font-semibold flex gap-2"><span>Score:</span> <span className="">{score}</span></h4>
            </div>
        </div>

    )
}