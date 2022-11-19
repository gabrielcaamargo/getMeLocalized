import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.background};
    color: #0F0F0F;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
