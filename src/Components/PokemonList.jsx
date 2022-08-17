import React from 'react'
import PokeCard from './PokeCard'

const PokemonList = ({ pokemons }) => {
  return (
    <div className='h-full grid gap-3 grid-cols-1 sm:grid-cols-4 xsm:mt-10 xsm:mb-0 '>
      {pokemons.map((i) => {
        return <PokeCard name={i.name} key={i.name} image={i.sprites.front_default} types={i.types} id={i.id} favorite={i.favorite}/>
      })}
    </div>
  )
}

export default PokemonList

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}
