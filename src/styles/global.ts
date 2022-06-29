import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 18px Josefin Sans, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  i {
    color: ${props => props.theme.colors.text};
    cursor: pointer;
  }

  .App {
    width: 540px;
    margin-top: 70px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  footer {
    position: absolute;
    bottom: 0;
  }

  ul {
    list-style: none;
  }

`;
