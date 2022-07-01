import { createGlobalStyle } from 'styled-components';
//import useWindowDimensions from '../utils/useWindowDimensions';

//let imgBackground = require('../images/bg-desktop-'+ `${props => props.theme.title}`+'.jpg');

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
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
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 15px;
  }

  i {
    color: ${props => props.theme.colors.text};
    cursor: pointer;
  }

  .App {
    max-width: 540px;
    display: flex;
    flex-direction: column;
    @media (max-width: 540px) {
      max-width: 90%;
    }

    .task-list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 540px;
      margin-top: 25px;
      border-radius: 5px;
      min-height: 300px;
    }

    footer {
      position: fixed;
      padding: 10px;
      text-align: center;
      font-size: 12px;
      width: 100%;
      bottom: 0;
      display: flex;
      justify-content: center;
      box-shadow: 0px -5px 5px rgba(68, 68, 68, 0.1);
    }
    a {
      color: hsl(220, 98%, 61%);
    }
  }
`;
