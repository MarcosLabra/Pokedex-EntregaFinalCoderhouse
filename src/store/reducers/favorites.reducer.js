import { ADD_FAVORITE, REMOVE_FAVORITE, GET_FAVORITES } from "../actions/favorites.action"

const initialState = {
  favPokemons: []
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const newList = [...state.favPokemons, action.pokemon]
      return {
        ...state,
        favPokemons: newList
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favPokemons: favPokemons.filter(pokemon => pokemon.id !== action.pokemonId)
      }
    case GET_FAVORITES:
      return {
        ...state,
        favPokemons: action.payload
      }
    default:
      return state
  }
}



export default favoriteReducer