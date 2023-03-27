export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const addFavorite = (pokemon) => {
  return {
    type: ADD_FAVORITE,
    pokemon,
  }
}

export const removeFavorite = (pokemonId) => {
  return {
    type: REMOVE_FAVORITE,
    pokemonId,
  }
}