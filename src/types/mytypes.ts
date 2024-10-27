export type FetchData =  {
    pokeNum: number,
    pokeName: string
}

export type ContextType={
    fetchData: FetchData,
    setFetchData: (param: FetchData)=>void
}
