import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};
    padding: 20px;
    margin: 20px 0;
    display: flex;
    border-radius: 5px;
    align-items: center;

    img {
        width: 20px;
        margin-right: 10px;
    }

    input {
        height: 100%;
        width: 100%;
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
        }
    }

`;