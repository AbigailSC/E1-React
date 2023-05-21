import axios from 'axios';

export const getPokemonByName = async (name) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}