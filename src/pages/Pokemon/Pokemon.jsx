import { useState } from 'react';
import { Container, FormSearch } from './pokemon.styles';
import PokemonCard from '@components/pokemonCard/PokemonCard';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonData } from '@store/slices/tasks';

const Pokemon = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tasks);
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pokemonName) return;
    dispatch(getPokemonData(pokemonName));
    setPokemonName('');
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
