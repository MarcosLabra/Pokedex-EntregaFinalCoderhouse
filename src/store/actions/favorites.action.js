import { URL_API } from '../../constants/DataBase'
import { addFavoritePokemon, deleteFavoritePokemon } from '../../utils/favPokemons'
import { fetchFavorites } from '../../utils/getPokemons'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITES = 'GET_FAVORITES'


export const addFavorite = (payload, user) => {
  return async dispatch => {
    try {
      const favorites = await fetchFavorites(user)
      const exists = Object.values(favorites).find(favorite => favorite.pokemon.name === payload.name);
      if (exists) {
        const key = Object.keys(favorites).find(key => favorites[key].pokemon.name === payload.name);
        deleteFavoritePokemon(user, key)
        dispatch({
          type: REMOVE_FAVORITE,
        });
      } else {
        addFavoritePokemon(user, payload)
        dispatch({
          type: ADD_FAVORITE,
          pokemon: payload,
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }
}


export const removeFavorite = (pokemonId, user) => {
  return async () => {
    try {
      await fetch(`${URL_API}/${user}/favPokemons/${pokemonId}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getFavorites = (user) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/${user}/favPokemons.json`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const result = await response.json();
      const favPokemons = Object.keys(result).map(key => ({
        ...result[key].pokemon,
        id: key
      }))
      dispatch({
        type: GET_FAVORITES,
        payload: favPokemons
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const reset = () => {
  return async dispatch => {
    dispatch({
      type: 'RESET_FAVORITES'
    })
  }
}