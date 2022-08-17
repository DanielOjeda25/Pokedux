import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemons, getPokemonsDetail } from '../Api/getPokemons'
import { setLoading } from './uiSlice'
const initialState = {
  pokemons: [],
  //estado inicial para buscar los pokemons
  pokemonsFiltered: [],
}
export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    const pokemonsList = await getPokemons()
    const pokemonsDetails = await Promise.all(
      pokemonsList.map((pokemon) => getPokemonsDetail(pokemon))
    )
    dispatch(setPokemons(pokemonsDetails))
    dispatch(setLoading(false))
  }
)
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
      state.pokemonsFiltered = action.payload
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId
      })

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite

        state.pokemons[currentPokemonIndex].favorite = !isFavorite
      }
    },
    setFilter: (state, action) => {
      const pokemonsFiltered = state.pokemons.filter((pokemon) =>
        pokemon.name.includes(action.payload)
      )
      state.pokemonsFiltered = pokemonsFiltered
    },
  },
})

export const { setPokemons, setFavorite, setFilter } = dataSlice.actions

export default dataSlice.reducer
