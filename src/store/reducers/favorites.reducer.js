import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favorites.action"

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
      const filteredPokemons = state.favPokemons.filter(pokemon => pokemon.id !== action.pokemonId);
      return {
        ...state,
        favPokemons: filteredPokemons
      }
    default:
      return state
  }
}



export default favoriteReducer