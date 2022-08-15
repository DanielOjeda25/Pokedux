import React from 'react'
import PokeCard from './PokeCard'
import { PokemonList as Pl } from '../styles'

const PokemonList = ({ pokemons }) => {
  return (
    <div className={`${Pl.div}`}>
      {pokemons.map((i) => {
        return <PokeCard name={i.name} key={i.name} />
      })}
    </div>
  )
}

export default PokemonList

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}
