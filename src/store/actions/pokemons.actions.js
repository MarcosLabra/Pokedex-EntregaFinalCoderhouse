import axios from 'axios';

export const GET_POKEMONS_LOADING = "GET_POKEMONS_LOADING"
export const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS"
export const GET_POKEMONS_FAILURE = "GET_POKEMONS_FAILURE"


export const getPokemons = () => {
  return async dispatch => {
    try {
      dispatch({ type: GET_POKEMONS_LOADING });
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      const pokemonList = response.data.results;
      const pokemonData = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const result = await axios.get(pokemon.url);
          return {
            id: result.data.id,
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase(),
            url: pokemon.url,
            sprite: result.data.sprites.front_default,
          };
        })
      );
      dispatch({
        type: GET_POKEMONS_SUCCESS,
        payload: pokemonData,
      });
    } catch (error) {
      dispatch({
        type: GET_POKEMONS_FAILURE,
        payload: error.message,
      });
    }
  }
}

