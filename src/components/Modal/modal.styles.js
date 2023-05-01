import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: 500;
  }
  .icon{
    width: 1.25em;
    height: 1.25em;
    color: var(--text-color);
    &:hover{
      color: var(--text-color-hover);
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
    background-color: ${(props) => props.isEmpty ? 'var(--blocked)' : 'var(--primary-color)'};
    cursor: ${(props) => props.isEmpty ? 'not-allowed' : 'pointer'};
    color: var(--text-color-light);
    padding: 0.5em 1.5em;
    border-radius: 0.5em;
    transition: all 0.2s ease-in-out;
    &:hover{
      background-color: ${(props) => props.isEmpty ? 'var(--blocked-hover)' : 'var(--primary-color-hover)'};
    }
    &:focus{
      background-color: var(--primary-color-focus);
    }
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  position: relative;
  padding-bottom: 1.5em;
  label {
    font-weight: 500;
  }
  &:nth-child(3){
    flex: 1;
  }
`;

export const ContainerDateField = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2em;
  div {
    width: 25%;
  }
`;

export const SelectField = styled.select`
  background-color: var(--input-bg);
  padding: 0.5em;
  border-radius: 0.5em;
  box-shadow: ${props => props.isError ? 'inset 0px 0px 0px 2px var(--error-color)' : 'none'};
`;

export const Input = styled.input`
  background-color: var(--input-bg);
  padding: 0.5em 1em;
  border-radius: 0.5em;
  box-shadow: ${props => props.isError ? 'inset 0px 0px 0px 2px var(--error-color)' : 'none'};
`;

export const TextArea = styled.textarea`
  background-color: var(--input-bg);
  padding: 0.5em 1em;
  border-radius: 0.5em;
  resize: none;
  height: 80%;
  font-size: 1rem;
  box-shadow: ${props => props.isError ? 'inset 0px 0px 0px 2px var(--error-color)' : 'none'};
`;

export const ErrorLabel = styled.span`
  color: var(--error-color);
  position: absolute;
  bottom: 0;
`;