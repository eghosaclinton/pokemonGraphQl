import './Home.css'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { type FetchData } from '../types/mytypes'
import { useGetContext } from '../context/contextUtils'
import warningImg from '../assets/warning-circle-svgrepo-com.svg'

export default function Home(){
    const [formData, setFormData] = useState({
        pokeNum: '',
        pokeName: ''
    })
    const [isFormValid, setIsFormValid] = useState(true)
    const [isBtnValid, setIsBtnValid] = useState(false)

    const { setFetchData } = useGetContext();
    const navigatePageTo = useNavigate();

    function changeEventHandler(target: HTMLInputElement){
        const { value, name } = target;
        const isNotNumber = (name == 'pokeNum' && Number.isNaN(parseInt(value)) && value !== '')
        
        if (isNotNumber) return;
        
        setFormData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })

    }

    function submitEventHandler(e: FormEvent): void{
        e.preventDefault();
        const newData: FetchData = {
            ...formData,
            pokeNum: parseInt(formData.pokeNum)
        }
        setFetchData(newData);
        navigatePageTo('/pokecards');
    }

    function pokeNumValidation(target: HTMLInputElement){
        target.onkeyup = function(){
            const value = parseInt(target.value)
             
            if (value > 151 || value < 1 || Number.isNaN(value)){
                setIsFormValid(false)
                setIsBtnValid(false)
            }else{
                 setIsFormValid(true)
                 setIsBtnValid(true)
            }             
        }
    }

    function allowKeyBoardSubmit(keyEvent: React.KeyboardEvent<HTMLFormElement>){
        if (!isBtnValid && keyEvent.key === 'Enter'){
            keyEvent.preventDefault()
        }
    }

    return (
        <div className='homeContainer'>
            <form className="" onSubmit={submitEventHandler} onKeyDown={(e)=>allowKeyBoardSubmit(e)}>
                <div className="numPokemon">
                    <label htmlFor="numPoke">
                        Just how may PokeCards do you want?
                        <span className="note"> (the first <i>n</i> pokemons called from the GrapQL api)</span>
                    </label>
                    <input value={formData.pokeNum}  onFocus={(e)=>pokeNumValidation(e.target)} onChange={(e)=>changeEventHandler(e.target)} name='pokeNum' type='tel' placeholder="Number of PokeCards" id="numPoke" />
                    <p className='warning' style={{display: isFormValid ?"none" : "flex"}}>
                        <img src={warningImg} alt='a warning icon' />
                        Number of Pokemons can only be 1 to 151 
                    </p>
                </div>
                <h2 className='or'>---OR---</h2>
                <div className="onePokemon">
                    <label htmlFor="onePoke">
                        Pick your fav PokeCard:
                    </label>
                    <input onChange={(e)=>changeEventHandler(e.target)} value={formData.pokeName} name='pokeName' type="text" placeholder="Enter Pokemon's name" id="onePoke" />
                </div>

                <button style={{opacity: (isBtnValid) ? '1' : '.5', pointerEvents: isBtnValid ? 'auto' : 'none'}}>I choose you!</button>
            </form>
        </div>
    )
}