export const GET_POKEMONS = 'GET_POKEMONS'

export const getPokemons = () => {
    return async dispatch => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then(response => response.json())
            .then(data => {
                const pokemons = data.results;
                const pokemonPromises = pokemons.map(pokemon => {
                    return fetch(pokemon.url)
                        .then(response => response.json())
                        .then(pokemonData => {
                            return {
                                id:pokemonData.id,
                                name: pokemonData.name,
                                sprite: pokemonData.sprites.front_default
                            };
                        });
                });
                return Promise.all(pokemonPromises);
            })
            .then(pokemonsWithSprites => {
                console.log("consoleLog de la request:")
                console.log(pokemonsWithSprites);
                dispatch({
                    type: GET_POKEMONS,
                    pokemons: pokemonsWithSprites
                })
            })
            .catch(error => console.error(error));
    }
}
