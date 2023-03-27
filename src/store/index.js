import { createStore, combineReducers } from 'redux'

import favoriteReducer from './reducers/favorites.reducer'
import pokemonReducer from './reducers/pokemons.reducer'
import typeReducer from './reducers/types.reducer'

const RootReducer = combineReducers({
  pokemons: pokemonReducer,
  types: typeReducer,
  favorites: favoriteReducer
})

export default createStore(RootReducer)