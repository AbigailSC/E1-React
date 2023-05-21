import { useContext } from 'react';
import { Context } from '@store/context';
import { StyledPokemonCard } from './pokemonCard.styles';

const PokemonCard = () => {
  const { state } = useContext(Context);
  const pokemonData = state.pokemonInfo;

  return (
    <StyledPokemonCard>
      <h2>{pokemonData?.name}</h2>
      <img src={pokemonData?.sprites.other.home.front_default} />
      <ul>
        {pokemonData.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      <ul>
        {pokemonData.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
