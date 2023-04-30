import styled from 'styled-components';

export const ContainerMain = styled.article`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const Article = styled.section`
  max-width: 1920px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCards = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em 4em;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: 4em 1em;
`;