import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--background-focus);
`;

export const Nav = styled.nav`
  max-width: 1920px;
  width: 100%;
  padding: 2em 4em;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 2em;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  .span {
    display: block;
    width: 20px;
    height: 4px;
    background-color: var(--text-color);
    position: relative;
    &::after{
      content: '';
      display: block;
      width: 4px;
      height: 20px;
      background-color: var(--text-color);
      position: absolute;
      top: -8px;
      left: 8px;
    }
  }
  &:hover {
    .span {
      background-color: var(--text-color-hover);
      &::after{
        background-color: var(--text-color-hover);
      }
    }
  }
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: center;
  gap: 2em;
  a, a:visited, a:active {
    font-style: inherit;
    color: inherit;
    background-color: transparent;
    font-size: inherit;
    text-decoration: none;
    font-variant: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
    cursor: pointer;
  }
  a:hover {
    color: var(--text-color-hover);
  }
`;