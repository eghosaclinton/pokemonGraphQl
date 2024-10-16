import Pokemon from "../components/Pokemon";
import pokeLoader from '../assets/pokemon_121114.svg'
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

function FallBack(){
    return (
        <div className='loader-parent'>
            <div className='loader' >
                <img src={pokeLoader} alt="Pokeball image loader" />
            </div>
            <h3>Loading...</h3>            
        </div>
    )
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