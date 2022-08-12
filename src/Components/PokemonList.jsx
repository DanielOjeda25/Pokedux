import React from 'react'
import PokeCard from './PokeCard'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='grid gap-1 grid-cols-2 sm:grid-cols-4 mx-1'>
      {pokemons.map((i) => {
        return <PokeCard />
      })}
    </div>
  )
}

export default PokemonList

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}
