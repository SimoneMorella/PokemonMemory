export default function GameOver({result}) {
    return (
        <div className="text-[#D1CCE3]">
            <div>
                {result === "win" 
                    ? "You won congrats!"
                    : "You lost, want to try again?"
                }
            </div>
            <div>
                <button>Go to Start Page</button>
            </div>
        </div>
    )
}