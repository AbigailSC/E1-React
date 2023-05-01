import styled from "styled-components";

export const ContainerSidebar = styled.aside`
  width: 15%;
  height: 100%;
  padding: 2em 4em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2em;
  header {
    font-size: 1.25em;
    font-weight: 700;
  }
`;

export const ContainerList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
  padding: 0;
`;

export const ListElement = styled.li`
    font-weight: 500;
    font-size: 1.25em;
    display: flex;
    align-items: center;
    input[name="categories"] {
      background-color: var(--background-hover);
      margin-right: 0.5em;
      position: relative;
      width: 1.25em;
      height: 1.25em;
      border-radius: 50%;
      border: 2px solid ${(props) => props.color};
      cursor: pointer;
      appearance: none;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.75em;
        height: 0.75em;
        border-radius: 50%;
        background-color: ${(props) => props.color};
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }
      &:checked:before {
        opacity: 1;
      }
    }
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--text-color-light);
  border-radius: 0.5em;
  padding: 0.5em 1em;
`;

export const Form = styled.form`
  display: flex;
  gap: 0.25em;
  align-items: center;
  label {
    font-weight: 600;
    cursor: pointer;
  }
  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
    border: 2px solid var(--text-color-hover);
    border-radius: 2px;
    background: transparent;
    line-height: 0;
    outline: 0;
    padding: 0 !important;
    height: 20px;
    width: 20px;
    appearance: none;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    &:checked {
      background-color: var(--input-bg);
      opacity: 1;
    }
    &:before {
      content: "";
      cursor: pointer;
      color: var(--input-bg);
      position: absolute;
      right: 50%;
      top: 50%;
      width: 4px;
      height: 10px;
      border: solid ${(props) => props.color};
      border-width: 0 2px 2px 0;
      margin: -1px -1px 0 -1px;
      transform: rotate(45deg) translate(-50%, -50%);
    }
    &:checked:before {
      content: "";
      cursor: pointer;
      color: var(--text-color-hover);
    }
  }
`;