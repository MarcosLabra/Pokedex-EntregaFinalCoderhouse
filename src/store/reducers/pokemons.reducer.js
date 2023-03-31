import GET_POKEMONS from "../actions/pokemons.actions"

import POKEMONS from "../../data/pokemons"

const initialState = {
  pokemons: POKEMONS,
}

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemonsList
      }
    default:
      return state
  }
}

export default pokemonReducer