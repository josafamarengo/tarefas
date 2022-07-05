import styled from 'styled-components';

export const Container = styled.div`

    background-color: ${props => props.theme.colors.primary};
    padding: 10px;
    height: 50px;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
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

    p {
        font-size: 14px;
        letter-spacing: 0.4;
    }
`;
