import { gql, useQuery } from "@apollo/client";

const GET_POKEMONS = gql`
    query Query{
        pokemons(first: 9){
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

export function useGetPokemons(){
    const { error, loading, data } = useQuery(GET_POKEMONS)
    return {
        error,
        data,
        loading
    }
}