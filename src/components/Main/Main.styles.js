import styled from 'styled-components';

export const ContainerMain = styled.article`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
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
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1em 1.5em;
  .label{
    position: absolute;
    font-size: 1.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--background-focus);
  }
`;