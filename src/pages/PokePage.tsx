import { useState, useEffect } from "react";
import './PokePage.css'
import {PokeCard, PokeCards} from "../container/PokeContainers";
import { useGetContext } from "../context/myContext";
import { useSearchParams } from "react-router-dom";

export default function PokeCardsPage(){
    const { fetchData, setFetchData } = useGetContext();

    const [searchParams, setSearchParams] = useSearchParams()

    const [displayPokeCards, setDisplayPokecards]=useState(true)
    const [displayFavPokeCard, setDisplayFavPokecard]=useState(false)

    useEffect(() => {
        if (fetchData.pokeName !== 'Pikachu') {
          setSearchParams(fetchData);
        }
    }, [fetchData, setSearchParams]);

      
      useEffect(() => {
        const stateFromParams = {
            pokeNum: searchParams.get('pokeNum'),
            pokeName: searchParams.get('pokeName')
        }        

    
        if (fetchData.pokeName == 'Pikachu'){
            setFetchData(stateFromParams);
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