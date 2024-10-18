import './Home.css'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetContext } from '../context/myContext'

export default function Home(){

    const navigate = useNavigate();

    const { setFetchData } = useGetContext();

    const [formData, setFormData] = useState({
        numOfPokemons: 1,
        nameOfPokemon: ''
    })

    function handleChange(target: HTMLInputElement){
        const {value, name} = target
        setFormData(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e: FormEvent): void{
        e.preventDefault();
        setFetchData(formData);
        navigate('/pokecards');
    }

    return (
        <div className='homeContainer'>
            <form className="" onSubmit={handleSubmit}>
                <div className="numPokemon">
                    <label htmlFor="numPoke">
                        Just how may PokeCards do you want?
                        <span className="note"> (the first <i>n</i> pokemons called from the GrapQL api)</span>
                    </label>
                    <input value={formData.numOfPokemons} onChange={(e)=>handleChange(e.target)} name='numOfPokemons' type="number" placeholder="Number of PokeCards" id="numPoke" min={1} />
                </div>
                <h2 className='or'>----OR----</h2>
                <div className="onePokemon">
                    <label htmlFor="onePoke">
                        Pick your fav PokeCard:
                    </label>
                    <input onChange={(e)=>handleChange(e.target)} value={formData.nameOfPokemon} name='nameOfPokemon' type="text" placeholder="Enter Pokemon's name" id="onePoke" />
                </div>

                <button>I choose you!</button>
            </form>
        </div>
    )
}