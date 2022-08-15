import React from 'react'
import PokeCard from './PokeCard'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='grid gap-2 grid-cols-2 sm:grid-cols-4 xsm:my-20'>
      {pokemons.map((i) => {
        return <PokeCard name={i.name} key={i.name} image={i.sprites.front_default}/>
      })}
    </div>
  )
}

export default PokemonList

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}
