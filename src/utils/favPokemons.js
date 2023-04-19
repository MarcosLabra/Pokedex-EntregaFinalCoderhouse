import axios from "axios";
import { URL_API } from "../constants/DataBase";

export const fetchFavorites = async (user) => {
  const response = await fetch(`${URL_API}/${user}/favPokemons.json`);
  const data = await response.json();
  const favorites = data || [];
  return favorites
}

export const deleteFavoritePokemon = async (user, key) => {
  try {
    const response = await axios.delete(`${URL_API}/${user}/favPokemons/${key}.json`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete favorite Pokemon.');
  }
};

export const addFavoritePokemon = async (user, payload) => {
  try {
    const response = await axios.post(`${URL_API}/${user}/favPokemons.json`, {
      date: Date.now(),
      pokemon: payload,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add favorite Pokemon.');
  }
};