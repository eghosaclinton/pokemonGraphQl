import { type ContextType } from "../types/mytypes";
import { MyPokeContext } from "./myContext";
import { useContext } from "react";

export function useGetContext(){
    // @ts-expect-error => bro i do not know why the destructured variables
    // are type any, so for now, i'll just ignore it...
    const { fetchData, setFetchData }  = useContext(MyPokeContext);

    const stateContext: ContextType = { 
        fetchData, 
        setFetchData 
    }

    return stateContext
}