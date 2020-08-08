import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    padding: 0;
  }

  body {
    background: #181b1e;
    color:#FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, div {
    font-family: 'Recursive', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
  }


  h1, h2, h3, h4, h5, h6, strong{
    font-weight: bold;
  }

  button{
    cursor: pointer;
  }
`;
