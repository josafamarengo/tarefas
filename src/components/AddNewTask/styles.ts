import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};
    padding: 10px;
    margin: 20px 0;
    border-radius: 5px;
    display: flex;
    align-items: center;

    button {
      background: transparent;
      width: 20px;
      margin-right: 10px;
      border: 0;
      cursor: pointer;
      line-height: 1;
      opacity: 0.7;
      &:hover {
        opacity: 0.5;
      }
    }

    input {
        height: 100%;
        width: 100%;
        margin-left: 10px;
        border: 0;
        background: none;
        font-size: 14px;
        font-weight: bold;
        font:400 18px Josefin Sans, sans-serif;

        &::placeholder {
            color: ${props => props.theme.colors.text};
        }
        &::-webkit-input-placeholder {
            color: ${props => props.theme.colors.text};
        }
        &::-moz-placeholder {
            color: ${props => props.theme.colors.text};
        }
        &::-ms-input-placeholder {
            color: ${props => props.theme.colors.text};
        }

        &:focus {
            outline: none;
            color: ${props => props.theme.colors.secondary};
        }
    }

`;
