import { URL_API } from '../../constants/DataBase'
import { PokemonListItem } from '../../models/pokemons.model'
import { addFavoritePokemon, deleteFavoritePokemon, fetchFavorites } from '../../utils/favPokemons'


export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const GET_FAVORITES = 'GET_FAVORITES'


export const favorite = (payload, user) => {
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

export const getFavorites = (user) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/${user}/favPokemons.json`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const result = await response.json();
      const favPokemons = Object.keys(result).map(key => {
        const pokemon = result[key].pokemon;
        const pokemonListItem = new PokemonListItem(
          pokemon.id,
          pokemon.name,
          pokemon.url,
          pokemon.sprite
        );
        return pokemonListItem;
      });
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