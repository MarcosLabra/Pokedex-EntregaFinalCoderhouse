import { URL_API } from '../../constants/DataBase'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITES = 'GET_FAVORITES'

export const addFavorite = (payload) => {
  return async dispatch => {
    try {
      const response = await fetch(URL_API + 'favPokemons.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: Date.now(),
          pokemon: payload,
        })
      })

      const result = await response.json();
      console.log(result)

      dispatch({
        type: ADD_FAVORITE,
        pokemon,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const removeFavorite = (pokemonId) => {
  return async dispatch => {
    try {
      await fetch(URL_API + 'favPokemons.json', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      dispatch({ type: REMOVE_FAVORITE, pokemonId })
    } catch (error) {
      console.log(error.message)
    }
  }

}

export const getFavorites = () => {
  return async dispatch => {
    try {
      const response = await fetch(URL_API + 'favPokemons.json', {
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