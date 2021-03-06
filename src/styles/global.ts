import { createGlobalStyle } from 'styled-components';

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
    background-image: ${img => `url(${img})`};
    background-size: cover;
    color: ${props => props.theme.colors.text};
    font: 400 18px Josefin Sans, sans-serif;
    display: flex;
    flex-direction: column;
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
    cursor: pointer;
  }

  .App {
    width: 100vw;
    max-width: 540px;
    @media (max-width: 540px) {
      max-width: 90vw;
    }
    .listArea {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background: ${props => props.theme.colors.primary};
      box-shadow: ${props => props.theme.colors.shadow};
    }

    .task-list {
      margin-top: 25px;
      width: 100%;
      min-height: 250px;
    }
    .filter-list {
      width: 100%;
      height: 50px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
    }
    .filter-list button {
      background: none;
      border: none;
      color: ${props => props.theme.colors.text};
      font-size: 14px;
      font-family: 'Josefin Sans', sans-serif;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .frase {
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
  }
  footer {
    background-color: ${props => props.theme.colors.background};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    box-shadow: 0px -5px 5px rgba(68, 68, 68, 0.1);
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
  a:hover {
    color: hsl(220, 98%, 61%);
  }
`;
