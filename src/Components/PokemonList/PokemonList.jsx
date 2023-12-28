import axios from 'axios'
import React, { useEffect } from 'react'

const PokemonList = () => {
  async function downloadpokemons () {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')

    console.log(response.data)
  }

  useEffect(() => {
   downloadpokemons();
  }, [])

  return (
   <div className='flex items-center justify-center mt-2'>PokemonList</div>

  )
}

export default PokemonList
