import axios from 'axios';

export const getPokemonByName = async (name) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  console.log("🚀 ~ file: fetchPokemon.js:6 ~ getPokemonByName ~ data:", data)
  return data;
}