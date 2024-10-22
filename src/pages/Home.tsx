import './Home.css'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetContext } from '../context/myContext'
import warningImg from '../assets/warning-circle-svgrepo-com.svg'

export default function Home(){

    const navigate = useNavigate();

    const { setFetchData } = useGetContext();

    const [formData, setFormData] = useState({
        pokeNum: '',
        pokeName: ''
    })
    const [formValid, setFormValid] = useState(true)
    const [btnValid, setBtnValid] = useState(false)

    function handleChange(target: HTMLInputElement){
        const { value, name } = target

        if (name == 'pokeNum' && Number.isNaN(parseInt(value)) && value !== '') return;
        
        setFormData((prev)=>{
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

    function inputValidation(target: HTMLInputElement){
        target.onkeyup = function(){
            const value: number = parseInt(target.value)
            console.log(value)
             
            if (value > 151 || value < 1){
                setFormValid(false)
                setBtnValid(false)
            }else{
                 setFormValid(true)
                 setBtnValid(true)
            }             
        }
    }
    return (
        <div className='homeContainer'>
            <form className="" onSubmit={handleSubmit}>
                <div className="numPokemon">
                    <label htmlFor="numPoke">
                        Just how may PokeCards do you want?
                        <span className="note"> (the first <i>n</i> pokemons called from the GrapQL api)</span>
                    </label>
                    <input value={formData.pokeNum}  onFocus={(e)=>inputValidation(e.target)} onChange={(e)=>handleChange(e.target)} name='pokeNum' type='tel' placeholder="Number of PokeCards" id="numPoke" />
                    <p className='warning' style={{display: formValid ?"none" : "flex"}}>
                        <img src={warningImg} alt='a warning icon' />
                        Number of Pokemons can only be 1 to 151 
                    </p>
                </div>
                <h2 className='or'>---OR---</h2>
                <div className="onePokemon">
                    <label htmlFor="onePoke">
                        Pick your fav PokeCard:
                    </label>
                    <input onChange={(e)=>handleChange(e.target)} value={formData.pokeName} name='pokeName' type="text" placeholder="Enter Pokemon's name" id="onePoke" />
                </div>

                <button style={{opacity: (btnValid) ? '1' : '.5', pointerEvents: btnValid ? 'auto' : 'none'}}>I choose you!</button>
            </form>
        </div>
    )
}