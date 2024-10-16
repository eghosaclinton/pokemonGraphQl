import Pokemon from "../components/Pokemon";
import FallBack from "../components/Fallback";
import { useGetPokemons } from "../gql/get-pokemons";



export default function PokemonContainer(){
    const { data, loading, error } = useGetPokemons();
    console.log(error)

    return (
        <div className="container">
            { !loading ? data.pokemons.map(pokemon=>{
                return (<Pokemon key={pokemon.id} pokemon={pokemon} />)
            }): (<FallBack />) }
        </div>
    );
}