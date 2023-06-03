import {
  StyledPokemonCard,
  List,
  Title,
  ContainerUl
} from './pokemonCard.styles';
import { getPokemonType } from '@helpers/getPokemonType';
import { useSelector } from 'react-redux';

const PokemonCard = () => {
  const state = useSelector((state) => state.tasks);
  const pokemonData = state.pokemonInfo;
  return (
    <StyledPokemonCard>
      <h2>{pokemonData?.name}</h2>
      <img src={pokemonData?.sprites.other.home.front_default} />
      <List>{getPokemonType(pokemonData?.types)}</List>
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      <Title>Habilities</Title>
      <ContainerUl>
        {pokemonData.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ContainerUl>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
