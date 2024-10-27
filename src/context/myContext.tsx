import { createContext, useState } from "react";
import { ContextType } from "../types/mytypes";


export const MyPokeContext= createContext<ContextType | undefined>(undefined)

export function PokeContext({ children }: {children: React.ReactNode}){
    const [fetchData, setFetchData] = useState({
        pokeNum: 1,
        pokeName:'Pikachu'
    })

    const value: ContextType = {fetchData, setFetchData}

    return (
        <MyPokeContext.Provider value={value}>
            {children}
        </MyPokeContext.Provider>
    )
}