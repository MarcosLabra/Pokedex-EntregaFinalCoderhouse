import { URL_API } from '../../constants/DataBase'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITES = 'GET_FAVORITES'


export const addFavorite = (payload, user) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/${user}/favPokemons.json`);
      const data = await response.json();
      const favorites = data || [];
      const exists = Object.values(favorites).some(favorite => favorite.pokemon.name === payload.name);
      if (exists) {
        alert(`${payload.name} ya está en tu lista de favoritos`);
        return;
      }

      const responseAdd = await fetch(`${URL_API}/${user}/favPokemons.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: Date.now(),
          pokemon: payload,
        })
      })

      alert(`${payload.name} was added to your favorite pokemons`);

      dispatch({
        type: ADD_FAVORITE,
        pokemon: payload
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const removeFavorite = (pokemonId, user) => {
  console.log(pokemonId)
  return async dispatch => {
    try {
      await fetch(`${URL_API}/${user}/favPokemons/${pokemonId}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })

      alert(`${payload.name} was removed to your favorite pokemons`);

      dispatch({ type: REMOVE_FAVORITE, pokemonId })
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