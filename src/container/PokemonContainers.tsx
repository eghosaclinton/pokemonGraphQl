import Pokemon from "../components/Pokemon";
import pokeLoader from '../assets/pokemon_121114.svg'
import { useGetPokemons, useGetPokeCard } from "../hooks/get-pokemons";

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


export function PokeCards({ fetchData }){
    const { data, loading, error } = useGetPokemons(fetchData);
    console.log(error);

    return (
        <div className="container">
            { !loading ? data.pokemons.map((pokemon: PokeType)=>{
                return (<Pokemon key={pokemon.id} pokemon={pokemon} />)
            }): (<FallBack />) }
        </div>
    );
}

// export function PokeCard({ fetchData }: {fetchData: string }){
//     const { data, loading, error } = useGetPokeCard(fetchData);

//     return (
//         <div className="container">
//             { !loading ? (<Pokemon key={data.pokemon.id} pokemon={data.pokemon} />)
//             : (<FallBack />) }
//         </div>
//     );
// }