import { ToastAndroid } from 'react-native'
import { addFavoritePokemon, deleteFavoritePokemon, fetchFavorites, getFavPokemonList } from '../../utils/favPokemons'


export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITES = 'GET_FAVORITES'
export const GET_FAVORITE_LOADING = 'GET_FAVORITE_LOADING'


export const favorite = (payload, user) => {
  return async dispatch => {
    try {
      dispatch({
        type: GET_FAVORITE_LOADING
      })
      const favorites = await fetchFavorites(user)
      const exists = Object.values(favorites).find(favorite => favorite.pokemon.name === payload.name);
      if (exists) {
        const key = Object.keys(favorites).find(key => favorites[key].pokemon.name === payload.name);
        deleteFavoritePokemon(user, key)

        dispatch({
          type: REMOVE_FAVORITE,
        });

        ToastAndroid.show('Pokemon removed from favorites', ToastAndroid.SHORT); // Agrega el toast aquí
      } else {
        addFavoritePokemon(user, payload)
        dispatch({
          type: ADD_FAVORITE,
          pokemon: payload,
        })

        ToastAndroid.show('Pokemon added to favorites', ToastAndroid.SHORT); // Agrega el toast aquí
      }
    } catch (error) {
      console.log(error.message)
    }
  }
}


export const getFavorites = (user) => {
  return async dispatch => {
    try {
      const favPokemons = await getFavPokemonList(user)
      dispatch({
        type: GET_FAVORITES,
        payload: favPokemons
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

