import pokeLoader from '../assets/pokemon_121114.svg'
import { useState } from 'react';

export default function FallBack(){
    const [count, setCount] = useState(0);
    const arr = ['.', '..', '...', '....', '.....']
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
            <h3>Loading{setInterval(()=>{return 'n'}, 1500)}</h3>            
        </div>
    )
}