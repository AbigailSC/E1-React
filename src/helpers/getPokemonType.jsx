import { typesPokemon } from './typesPokemon';
import styled from 'styled-components';

const Type = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.color};
  color: var(--background);
  border-radius: 0.5em;
  text-align: center;
  text-transform: capitalize;
  font-weight: 600;
  padding: 0.25em;
`;

export const getPokemonType = (types) => {
  const data = types.map((type, index) => {
    const dataType = typesPokemon.find((item) => item.type === type.type.name);
    return (
      <Type key={index} color={dataType.color}>
        {type.type.name}
      </Type>
    );
  });
  return data;
};
