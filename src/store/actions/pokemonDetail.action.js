import axios from 'axios';

export const GET_POKEMON_LOADING = "GET_POKEMON_LOADING"
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS"
export const GET_POKEMON_FAILURE = "GET_POKEMON_FAILURE"


export const getPokemonDetail = (url) => {
    return async dispatch => {
        try {
            dispatch({ type: GET_POKEMON_LOADING });
            const response = await axios.get(url);
            const data = response.data;
            const pokemonData = {
              height: data.height * 10,
              weight: data.weight,
              image: data.sprites.other['official-artwork'].front_default,
              types: data.types.map(type => type.type.name)
            };
            dispatch({
                type: GET_POKEMON_SUCCESS,
                payload: pokemonData,
            });
        } catch (error) {
            dispatch({
                type: GET_POKEMON_FAILURE,
                payload: error.message,
            });
        }
    }
}

