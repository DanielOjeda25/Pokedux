import { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

import {getPokemons, getPokemonsDetail} from './Api/getPokemons'
import { setPokemons } from './Actions'
import PokemonList from './Components/PokemonList'
import Searcher from './Components/Searcher'
import DarkButton from './Components/DarkButton'
function App() {
  const pokemons = useSelector((state) => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const FetchPokemons = async () => {
      const pokemonsList = await getPokemons()
      const pokemonsDetails = await Promise.all(pokemonsList.map(pokemon => 
        getPokemonsDetail(pokemon)))
        dispatch(setPokemons(pokemonsDetails))
    }
    FetchPokemons()
  })

  return (
    <div className='dark:bg-gray-800 font-Acme font-normal tracking-widest'>
      <DarkButton />
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
