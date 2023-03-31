import GET_POKEMONS from "../actions/pokemons.actions"
// import POKEMONS from "../../data/pokemons"

const initialState = {
  pokemons: [],
}

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemons
      }
    default:
      return state
  }
}

export default pokemonReducer