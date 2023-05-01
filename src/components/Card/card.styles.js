import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-height: 140px;
  height: 100%;
  max-height: 240px;
  background-color: ${(props) => props.color};
  color: var(--background);
  border-radius: 1em;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5em;
  .element:nth-child(1) {
    height: 10%;
  }
  .element:nth-child(2) {
    height: 10%;
  }
  .element:nth-child(3) {
    height: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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

export const Title = styled.h3`
    text-decoration: ${(props) => (props.decoration ? "line-through 2px" : "none")};
    font-size: 1.5em;
    font-weight: 600;
    text-transform: capitalize;
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
  bottom: -70px;
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

export const Form = styled.form`
  display: flex;
  gap: 0.25em;
  align-items: center;
  label {
    font-weight: 600;
  }
  input[type=checkbox] {
    position: relative;
    cursor: pointer;
	  border: 2px solid var(--input-bg);
	  border-radius: 2px;
	  background: transparent;
	  line-height: 0;
	  outline: 0;
	  padding: 0 !important;
	  height: 20px;
	  width: 20px;
	  appearance: none;
    opacity: .5;
    &:hover {
      opacity: 1;
    }
    &:checked {
      background-color: var(--input-bg);
      opacity: 1;
    }
    &:before{
      content: '';
      cursor: pointer;
      position: absolute;
      right: 50%;
      top: 50%;
      width: 4px;
      height: 10px;
      border: solid ${(props) => props.color};
      border-width: 0 2px 2px 0;
      margin: -1px -1px 0 -1px;
      transform: rotate(45deg) translate(-50%, -50%);
      z-index: 2;
    }
  }
`;

export const Text = styled.p`
  text-decoration: ${(props) => (props.decoration ? "line-through 2px" : "none")};
`;