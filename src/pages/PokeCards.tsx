// import { useEffect } from "react";
import {PokeCard, PokeCards} from "../container/PokemonContainers";
import { useGetContext } from "../context/myContext";
// import { useSearchParams } from "react-router-dom";

export default function PokeCardsPage(){
    const { fetchData } = useGetContext()
    // const [searchParams, setSearchParams] = useSearchParams('boy');
    // useEffect(()=>{
    //     setSearchParams(fetchData)
    // }, [fetchData])
    return (
        <div className="result--page">
            <PokeCards fetchData={fetchData.pokeNum}/>
            {/* <PokeCard fetchData={fetchData.pokeName}/> */}
        </div>
    );
}