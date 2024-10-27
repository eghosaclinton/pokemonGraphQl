import { useState, useEffect } from "react";
import './PokePage.css'
import {PokeCard, PokeCards} from "../container/PokeContainers";
import { useGetContext } from "../context/contextUtils";
import { useSearchParams } from "react-router-dom";

export default function PokeCardsPage(){
    const [displayPokeCards, setDisplayPokecards]=useState(true)
    const [displayFavPokeCard, setDisplayFavPokecard]=useState(false)

    const [searchParams, setSearchParams] = useSearchParams()

    const { fetchData, setFetchData } = useGetContext()

    useEffect(() => {

        if (fetchData.pokeName !== 'Pikachu') {
            // @ts-expect-error => type FetchData works as well so... 
          setSearchParams(fetchData);
        }

    }, [fetchData, setSearchParams]);

      
    useEffect(() => {
        
        const stateFromParams = {
            pokeNum: String(searchParams.get('pokeNum')),
            pokeName: String(searchParams.get('pokeName'))
        }        
    
        if (fetchData.pokeName == 'Pikachu'){
            setFetchData({
                ...stateFromParams,
                pokeNum: parseInt(stateFromParams.pokeNum),
            });
        }

    }, [searchParams, setFetchData, fetchData]);

    return (
        <div className="result--page"> 
            <div className="navBtns">
                <button style={{
                    pointerEvents: displayPokeCards?"none":"auto",
                    color: displayPokeCards ? '#ee1515': '#f0f0f0',
                    background: displayPokeCards ? '#f0f0f0' : '#ee1515'
                }} onClick={()=>{
                    setDisplayPokecards(true)
                    setDisplayFavPokecard(false)
                }}>PokeCards</button>
                <button style={{
                    pointerEvents: displayFavPokeCard ? "none":"auto",
                    color: displayFavPokeCard ? '#ee1515': '#f0f0f0',
                    background: displayFavPokeCard ? '#f0f0f0' : '#ee1515'
                }} onClick={()=>{
                    setDisplayPokecards(false)
                    setDisplayFavPokecard(true)
                }}>fav PokeCard</button>
            </div>
            <PokeCards fetchData={fetchData.pokeNum} isDisplayed={displayPokeCards}/>
            <PokeCard fetchData={fetchData.pokeName} isDisplayed={displayFavPokeCard}/>
        </div>
    );
}