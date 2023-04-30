import styled, { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  
  :root{
    margin:0 auto;
    
    /* Breackpoints */

    --breakpoints-mobile: 400px;
    --breakpoints-tablet: 768px;
    --breakpoints-computer: 992px;
    --breakpoints-desktop: 1200px;
    --breakpoints-widescreen: 1920px;

    /* Colors */

    --background: #e9ecef;
    --background-hover:#d2d7db;
    --background-focus:#adb5bd;
    --text-color: #68655B;
    --text-color-hover:#212528;
    --text-color-light: #f9fcff;
    --input-bg: #f2f7f6;
    --primary-color: #2AC380;
    --primary-color-hover: #1add85;
    --primary-color-focus: #1cef8d;
    --secondary-color:#C3ACCE;
    --error-color: #ef4444;
    --blocked: #94a3b8;
    --blocked-hover: #64748b;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
    background-color: var(--background);
    color: var(--text-color);
  }
  *{
    margin: 0;
    font-weight: var(--font-weight-sm);
    list-style: none;
    outline: none;
    border: none;
    font-size: 1em;
    box-sizing: border-box;
    /* border: 1px solid red; */
  }
  button {
    cursor: pointer;
    background-color: transparent;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
`;

export const Divider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #ccc;
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  z-index: 5;
  opacity: 1;
`;

export default Globals;