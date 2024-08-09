import { useEffect } from "react"


export default function LoadingPage({isLoading, setGameLoad}) {

    useEffect(() => {
        if (isLoading) {
          setTimeout(() => {
            setGameLoad();
          }, 5000);
    
        }
      }, [isLoading, setGameLoad]);


    return (
        <div className="text-white">
            sto loadingando fratm!
        </div>
    )
}