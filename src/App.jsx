import { useState } from 'react'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-3 flex items-center justify-center mt-5'>
        <h1 className='text-[40px] '>pokedex</h1>
      </div>
      <Pokedex />
    </>
  )
}

export default App
