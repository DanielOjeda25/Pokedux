import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { pokemonsReducer } from './Reducers/pokemons'
import { logger } from './middlewares'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux'
import './index.css'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancer = composeAlt(applyMiddleware(thunk, logger))

const store = createStore(pokemonsReducer, composedEnhancer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
