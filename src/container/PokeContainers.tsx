import Pokemon from "../components/Pokemon";
import pikaConfused from "../assets/pika-confuse.png"
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

function ErrorComponent(){
    return (
    <div className="errorFetch">
        <img src={pikaConfused} alt="an image of a confused Pikachu" />
        <h4>Oops! there seems to be an issue getting your PokeCards</h4>
    </div>
    );
}


export function PokeCards({ fetchData, isDisplayed }){
    const { data, loading, error } = useGetPokemons(fetchData);
    // console.log(error);

    const style={
        display: isDisplayed ? "block":"none"
    }

    return (
        <div className="pokee" style={style}>
        {error ? (<ErrorComponent />):(
        <div className="mainContainer">
            <h2>you wanted {fetchData} PokeCard{fetchData <= 1 ? "": "s"}</h2>
            <div className="container">
                { !loading ? data.pokemons.map((pokemon: PokeType)=>{
                    return (<Pokemon key={pokemon.id} pokemon={pokemon} />)
                }): (<FallBack />) }
            </div>
        </div>
        )}
        </div>
    );
}

export function PokeCard({ fetchData, isDisplayed }){
    const { data, loading, error } = useGetPokeCard(fetchData);
    console.log(data)

    const style={
        display: isDisplayed ? "block":"none"
    }
    return (
        <div className="pokee" style={style}>
        {error ? (<ErrorComponent />):(
        <div className="mainContainer">
            <h2>Your Fav PokeCard is
                 {/* {!loading && data.pokemon?"":"..."}{fetchData}{!loading && data.pokemon?"":"?"}!! */}
            </h2>
            <div className="container">

                { !loading ? (data.pokemon?(<Pokemon pokemon={data.pokemon} />):<h3>no such thing lad</h3>)
                : (<FallBack />) }
            </div>
        </div>)}
        </div>
    );
}