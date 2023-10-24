import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Pokemon from '../pokemon/pokemon'
const PokemonList = () => {
  const [pokemonList, setpokemonList] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  async function downloadpokedex() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const pokemonResults = response.data.results;
    console.log(pokemonResults)
    const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
    const pokemonData = await axios.all(pokemonResultPromise)
    console.log(pokemonData)
    const res = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id:pokemon.id,
        name: pokemon.name,
        image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world. front_default : pokemon.sprites.front_shiny,


        type: pokemon.type
      }
    })
    console.log(res)
    setpokemonList(res)
    setIsLoding(false)
  }

  useEffect(() => {
    downloadpokedex();
  }, []);
  return (
    <div className='PokemanList-wraper'>
      <div> pokemon list</div>
      {(isLoding) ? 'loding............' : 
      pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key=[p.id] />)}

    </div>
  )
}

export default PokemonList
