import { gql, useQuery } from "@apollo/client";

export function useGetPokemons(num: number){
  
    const GET_POKEMONS = gql`
    query Query{
      pokemons(first: ${num}){
        id
        name
        image
        maxHP
        maxCP
        attacks {
          special {
            name
            damage
          }
        }
      }
    }
    `
    const { error, loading, data } = useQuery(GET_POKEMONS)
    return {
        error,
        data,
        loading
    }
}

export function useGetPokeCard(name: string ){
  
  const GET_POKEMON = gql`
  query Query{
    pokemon(name: "${name}"){
		  id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
  `
  const { error, loading, data } = useQuery(GET_POKEMON)

  return {
      error,
      data,
      loading
  }
}

//graphql returns null if the data variable is not available
//  in db, and returns error if it fails to connect to api(internet issue)