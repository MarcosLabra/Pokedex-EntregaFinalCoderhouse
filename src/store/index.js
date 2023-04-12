import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import favoriteReducer from './reducers/favorites.reducer'
import pokemonReducer from './reducers/pokemons.reducer'
import typeReducer from './reducers/types.reducer'
import authReducer from './reducers/auth.reducer'

const RootReducer = combineReducers({
  pokemons: pokemonReducer,
  types: typeReducer,
  favorites: favoriteReducer,
  auth: authReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))