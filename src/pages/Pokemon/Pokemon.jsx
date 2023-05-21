import { useState, useContext } from 'react';
import { Context } from '@store/context';
import { getPokemonByName } from '@store/fetchPokemon';
import { Container, FormSearch } from './pokemon.styles';
import PokemonCard from '@components/pokemonCard/PokemonCard';

const Pokemon = () => {
  const { dispatch } = useContext(Context);
  const { state } = useContext(Context);

  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pokemonName) return;
    try {
      const pokedata = await getPokemonByName(pokemonName);
      dispatch({ type: 'GET_POKEMON', payload: pokedata });
    } catch (error) {
      console.log(error);
    } finally {
      setPokemonName('');
    }
  };

  const handleInput = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <Container>
      <h3>Search your pokemon!</h3>
      <FormSearch onClick={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search a pokemon"
          onChange={(e) => handleInput(e)}
        />
        <button>Search</button>
      </FormSearch>
      {state.pokemonInfo &&
        (state.pokemonInfo !== null ? <PokemonCard /> : <p>not found</p>)}
    </Container>
  );
};

export default Pokemon;
