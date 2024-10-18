import './App.css'
import pokeImg from './assets/pokeball.png'
import Home from './pages/Home'
import { useGetContext } from './context/myContext'
import { Routes, Link, Route } from 'react-router-dom'
import PokeCardsPage from './pages/PokeCards'

function App() {

  return (
    <>
      <header>
        <Link to={'/'}>
          <h1  className='icon'>P<img src={pokeImg} alt="" />keCards</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokecards' element={<PokeCardsPage />} />
        </Routes>
      </main>
    </>    
  )
}

export default App
