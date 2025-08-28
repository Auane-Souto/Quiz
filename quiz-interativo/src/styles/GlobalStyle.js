import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Orbitron', sans-serif;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    color: #f1f1f1;
    min-height: 100vh;
  }

  h1, h2 {
    text-shadow: 0 0 10px #00f0ff;
  }

  button {
    font-family: 'Orbitron', sans-serif;
    background-color: #00f0ff;
    color: #000;
    border: none;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    transition: 0.3s;
  }

  button:hover {
    background-color: #00c0d0;
    transform: scale(1.05);
  }
`;

export default GlobalStyle;

