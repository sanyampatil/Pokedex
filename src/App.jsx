import { useState } from 'react'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import PokemonList from './Components/PokemonList/PokemonList'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-3 flex items-center justify-center mt-5'>
        <h1 className='text-[40px] font-black '>pokedex</h1>
      </div>
      <Pokedex />
      <PokemonList/>
    </>
  )
}

export default App
