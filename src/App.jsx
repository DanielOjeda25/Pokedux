import { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getPokemons } from './Api/getPokemons'
import { getPokemonsWithDetails, setLoading } from './Actions'
import PokemonList from './Components/PokemonList'
import Searcher from './Components/Searcher'
import DarkButton from './Components/DarkButton'
import Spinner from './Components/Spinner'

function App() {
  const pokemons = useSelector((state) =>
    state.getIn(['data', 'pokemons'], shallowEqual)
  ).toJS()
  const loading = useSelector((state) => state.getIn(['ui', 'loading']))
  const dispatch = useDispatch()

  useEffect(() => {
    const FetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsList = await getPokemons()
      dispatch(getPokemonsWithDetails(pokemonsList))
      dispatch(setLoading(false))
    }
    FetchPokemons()
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
