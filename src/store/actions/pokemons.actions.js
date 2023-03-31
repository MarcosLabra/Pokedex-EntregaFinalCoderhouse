export const GET_POKEMONS = 'GET_POKEMONS'

export const getPokemons = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon')
            const results = response?.results
            dispatch({
                type: GET_POKEMONS,
                pokemons: results
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}