import pokeLoader from '../assets/pokemon_121114.svg'

export default function FallBack(){
    // setInterval(()=>{
    //     setCount(prev=>{
    //         return prev >= arr.length ? 0 : (prev+1);      
    //     })   
    // }, 1000)

    return (
        <div className='loader-parent'>
            <div className='loader' >
                <img src={pokeLoader} alt="Pokeball image loader" />
            </div>
            <h3>Loading...</h3>            
        </div>
    )
}