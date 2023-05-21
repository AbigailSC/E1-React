import styled from "styled-components";

export const StyledPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-hover);
  border-radius: 2em;
  padding: 1em;
  gap: 0.5em;
  width: 300px;
  h2 {
    font-size: 1.5em;
    color: var(--text-color);
    text-transform: capitalize;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  color: var(--text-color);
  text-align: start;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 1em;
  flex-wrap: wrap;
  `;

export const ContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    color: var(--text-color);
    text-transform: capitalize;
  }
`;