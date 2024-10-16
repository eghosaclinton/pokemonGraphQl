import './App.css'
import pokeImg from './assets/pokeball.png'
// import RootPage from './pages/RootPage'
// import { Routes, Link, Route, BrowserRouter } from 'react-router-dom'
import PokemonContainer from './container/PokemonContainer'

function App() {

  return (
   
    <>
      <header>
        <h1 className='icon'>P<img src={pokeImg} alt="" />keCards</h1>
      </header>
      <main>
        <PokemonContainer />
      </main>
    </>
    //  <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<RootPage />} />
    //       <Route path='/pokemons' element={<PokemonContainer />}/>
    //       <Route />
    //       <Route />
    //     </Routes>
      
    // </BrowserRouter>
  )
}

export default App
