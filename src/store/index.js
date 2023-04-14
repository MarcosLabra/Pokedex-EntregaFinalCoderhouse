import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'

import favoriteReducer from './reducers/favorites.reducer'
import pokemonReducer from './reducers/pokemons.reducer'
import typeReducer from './reducers/types.reducer'
import authReducer from './reducers/auth.reducer'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  types: typeReducer,
  favorites: favoriteReducer,
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const storePersisted = persistStore(store)