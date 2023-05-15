import { useState, useContext } from 'react';
import { Context } from '@store/context';
import { getPokemonByName } from '@store/fetchPokemon';

const Pokemon = () => {
  const { dispatch } = useContext(Context);
  const [pokemonName, setPokemonName] = useState('');

  const handlePokemon = () => {
    if (!pokemonName) return;
    dispatch(getPokemonByName(pokemonName));
  };

  const handleInput = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search a pokemon"
        onChange={() => handleInput()}
      />
      <button onClick={() => handlePokemon()}>Search</button>
    </div>
  );
};

export default Pokemon;
