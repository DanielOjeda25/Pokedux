import { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import PokemonList from './Components/PokemonList'
import Searcher from './Components/Searcher'
import DarkButton from './Components/DarkButton'
import Spinner from './Components/Spinner'
import { fetchPokemonsWithDetails } from './features/dataSlices'

function App() {
  const pokemons = useSelector(
    (state) => state.data.pokemonsFiltered,
    shallowEqual
  )

  const loading = useSelector((state) => state.ui.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [])

  return (
    <div className='dark:bg-gray-800 font-Acme font-normal tracking-widest'>
      <DarkButton />
      <Searcher />
      {loading ? <Spinner /> : <PokemonList pokemons={pokemons} />}
    </div>
  )
}

export default App
