import Pokemon from "../components/Pokemon";
import { useGetPokemons } from "../gql/get-pokemons";


export default function PokemonContainer(){
    const { data, loading, error } = useGetPokemons();

    return (
        <div className="container">
            { data ? data.pokemons.map(pokemon=>{
                return (<Pokemon key={pokemon.id} pokemon={pokemon} />)
            }): (<h1>Loading...</h1>) }
        </div>
    );
}