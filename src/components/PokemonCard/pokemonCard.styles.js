import styled from "styled-components";

export const StyledPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-hover);
  border-radius: 2em;
  padding: 1em;
  gap: 1em;
  width: 300px;
  h2 {
    font-size: 1.5em;
    color: var(--text-color);
    text-transform: capitalize;
    text-align: center;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.bgColor};
  }
  `;