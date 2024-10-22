import './App.css'
import pokeImg from './assets/pokeball.png'
import Home from './pages/Home'
import { Routes, Link, Route } from 'react-router-dom'
import PokePage from './pages/PokePage'

function App() {

  return (
    <>
      <header>
        <Link to={'/'}>
          <div className='icon'>P<img src={pokeImg} alt="" />keCards</div>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokecards' element={<PokePage />} />
        </Routes>
      </main>
    </>    
  )
}

export default App
