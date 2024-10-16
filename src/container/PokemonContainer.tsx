import Pokemon from "../components/Pokemon";
import FallBack from "../components/Fallback.tsx";
import { useGetPokemons } from "../gql/get-pokemons";

type PokeType = {    
    id: string,
    name: string
    image: string,
    maxHP: number,
    maxCP: number,
    attacks: {
      special: {
        name: string,
        damage: number
      }[]
    }
}


export default function PokemonContainer(){
    const { data, loading, error } = useGetPokemons();
    console.log(error)

    return (
        <div className="container">
            { !loading ? data.pokemons.map((pokemon: PokeType)=>{
                return (<Pokemon key={pokemon.id} pokemon={pokemon} />)
            }): (<FallBack />) }
        </div>
    );
}