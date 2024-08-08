import logo from "../assets/pokelogo.png";
import logo2 from "../assets/logo2.png";

export default function StartPage({handleGen}) {


  return (
    <div>
      <div className="flex flex-col gap-20 -mt-20">
        <div className="relative">
          <img src={logo} alt="pokemon logo" className="max-w-[350px] " />
          <img src={logo2} alt="pokemon logo" className="max-w-[200px] absolute right-0 -bottom-7 rotate-[4deg]" />
        </div>
        <div id="startMenu" className="text-[#716A8A] font-fredoka rounded-xl bg-black bg-opacity-80">
            <div id="startMenuContent" className="px-6 py-5 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-lg text-center">Choose Pokemon Region:</h3>
                    <div className="grid grid-cols-3 gap-2">
                        <button value="1" onClick={handleGen} className="btn">Kanto</button>
                        <button value="2" onClick={handleGen} className="btn">Johto</button>
                        <button value="3" onClick={handleGen} className="btn">Hoenn</button>
                        <button value="4" onClick={handleGen} className="btn">Sinnoh</button>
                        <button value="5" onClick={handleGen} className="btn">Unova</button>
                        <button value="6" onClick={handleGen} className="btn">Kalos</button>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-lg text-center">Choose Game Difficulty:</h3>
                    <div className="grid grid-cols-3 gap-2">
                        <button className="btn">Easy</button>
                        <button className="btn">Medium</button>
                        <button className="btn">Hard</button>
                    </div>
                </div>
                <div></div>
            </div>
            
        </div>
      </div>
    </div>
  );
}
