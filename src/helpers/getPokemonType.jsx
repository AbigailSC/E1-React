import { typesPokemon } from './typesPokemon';

export const getPokemonType = (types) => {
  const data = types.map((type, index) => {
    const dataType = typesPokemon.find((item) => item.type === type.type.name);
    return (
      <li key={index} bgColor={dataType.color}>
        {type.type.name}
      </li>
    );
  });
  return data;
};
