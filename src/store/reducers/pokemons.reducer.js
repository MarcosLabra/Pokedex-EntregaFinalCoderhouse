import POKEMONS from "../../data/pokemons"

const initialState = {
  pokemons: POKEMONS,
  selected: null,
}

const pokemonReducer = (state = initialState, action) => state

export default pokemonReducer