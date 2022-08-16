import { combineReducers } from 'redux-immutable'
import { pokemonsReducer } from './pokemons'
import { uiReducer } from './uiReducer'

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
})

export default rootReducer
