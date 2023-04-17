import axios from 'axios'
import { PokemonDetail, PokemonListItem } from '../models/pokemons.model';

export const getPokemonData = async (name) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = response.data;
    const height = data.height * 10;
    const weight = data.weight;
    const image = data.sprites.other['official-artwork'].front_default;
    const types = data.types.map(type => type.type.name);
    return new PokemonDetail(height, weight, image, types);
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonList = async (offset) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
    const pokemonList = response.data.results;
    const pokemonData = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const result = await axios.get(pokemon.url);
        const id = result.data.id;
        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase();
        const url = pokemon.url;
        const sprite = result.data.sprites.front_default;
        return new PokemonListItem(id, name, url, sprite);
      })
    );
    return pokemonData;
  } catch (error) {
    console.error(error);
  }
};