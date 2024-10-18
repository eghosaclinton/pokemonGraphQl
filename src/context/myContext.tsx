import { createContext, useContext, useState } from "react";

type ContextType={
    fetchData: {
        pokeNum: number,
        pokeName: string
    }
}

const MyPokeContext= createContext<ContextType|undefined>(undefined)

export function PokeContext({ children }){
    const [fetchData, setFetchData] = useState({
        pokeNum: 1,
        pokeName:'Pikachu'
    })

    const value = {fetchData, setFetchData}

    return (
        <MyPokeContext.Provider value={value}>
            {children}
        </MyPokeContext.Provider>
    )
}

export function useGetContext(){
    const { fetchData, setFetchData } = useContext(MyPokeContext)

    return { fetchData, setFetchData }
}