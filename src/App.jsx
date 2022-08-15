import { useEffect } from 'react'
import './App.css'
import { connect } from 'react-redux'

import getPokemons from './Api/getPokemons'
import { setPokemons as setPokemonsActions } from './Actions'
import PokemonList from './Components/PokemonList'
import Searcher from './Components/Searcher'
import DarkButton from './Components/DarkButton'

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const FetchPokemons = async () => {
      const pokemonsList = await getPokemons()
      setPokemons(pokemonsList)
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (values) => dispatch(setPokemonsActions(values)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
