import { ADD_FAVORITE, REMOVE_FAVORITE, GET_FAVORITES, GET_FAVORITE_LOADING,ADD_FAVORITE_LOADING  } from "../actions/favorites.action"

const initialState = {
  favPokemons: [],
  isLoading: false,
  addIsLoading: false,
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case ADD_FAVORITE_LOADING:
      return {
        ...state,
        addIsLoading: true
      }
    case ADD_FAVORITE:
      const newList = [...state.favPokemons, action.pokemon]
      return {
        ...state,
        favPokemons: newList,
        addIsLoading:false
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favPokemons: favPokemons.filter(pokemon => pokemon.id !== action.pokemonId),
        addIsLoading:false
      }
    case GET_FAVORITES:
      return {
        ...state,
        favPokemons: action.payload,
        isLoading:false
      }
    case "RESET_FAVORITES":
      return initialState
    default:
      return state
  }
}

export default favoriteReducer