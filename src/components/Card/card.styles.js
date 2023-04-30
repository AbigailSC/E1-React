import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-height: 140px;
  max-height: 100%;
  background-color: ${(props) => props.color};
  color: var(--background);
  border-radius: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  h3 {
    font-size: 1.5em;
    font-weight: 600;
    text-transform: capitalize;
  }
  button {
    .icon {
      color: var(--background-hover);
      font-size: 1.5em;
      &:hover {
        color: var(--background);
      }
    }
  }
`;

export const HStack = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25em;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.25em;
`;

export const ModalContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  background-color: var(--background);
  position: absolute;
  bottom: -60px;
  right: 0;
  border-radius: 0.5em;
  flex-direction: column;
  button {
    background-color: transparent;
    width: 120px;
    padding: 0.5em 1em;
    color: var(--text-color);
    text-align: start;
    &:nth-child(1){
      border-bottom: 1px solid var(--background-hover);
      border-radius: 0.5em 0.5em 0 0;
    }
    &:nth-child(2){
      border-radius: 0 0 0.5em 0.5em;
    }
    &:hover {
      background-color: var(--background-hover);
    }
  }
`;