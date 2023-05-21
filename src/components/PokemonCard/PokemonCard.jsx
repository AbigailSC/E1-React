import { useContext } from 'react';
import { Context } from '@store/context';
import { StyledPokemonCard, List } from './pokemonCard.styles';
import { getPokemonType } from '@helpers/getPokemonType';

const PokemonCard = () => {
  const { state } = useContext(Context);
  const pokemonData = state.pokemonInfo;
  return (
    <StyledPokemonCard>
      <h2>{pokemonData?.name}</h2>
      <img src={pokemonData?.sprites.other.home.front_default} />
      <List>{getPokemonType(pokemonData?.types)}</List>
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