import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Pokedex from "./Pages/Pokedex/Pokedex"
import PokemonCard from "./Pages/PokemonCard/PokemonCard"



function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Pokedex/>} />
      <Route path='/pokemoncard/:id' element={<PokemonCard/>} />
      <main className=''>

      </main>
      </Routes>
    </BrowserRouter>
  )
}

export default App
