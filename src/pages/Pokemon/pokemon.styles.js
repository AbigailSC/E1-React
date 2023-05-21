import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 4em;
  gap: 2em;
`;

export const FormSearch = styled.form`
  display: flex;
  gap: 1em;
  input {
    border-radius: 0.5em;
    padding: 0.5em;
  }
  button {
    border-radius: 0.5em;
    padding: 0.5em 1.5em;
    background-color: var(--primary-color);
    color: var(--text-color-light);
  }
`;