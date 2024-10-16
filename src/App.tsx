import './App.css'
import PokemonContainer from './container/PokemonContainer'

export type PokemonType = {
  pokemon: {
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
}

function App() {

  return (
    <main>
      <PokemonContainer />
    </main>
  )
}

export default App
