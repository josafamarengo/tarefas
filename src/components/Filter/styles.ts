import styled from 'styled-components';

export const Container = styled.div`

    background-color: ${props => props.theme.colors.primary};
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;

    .filter {
        width: 33%;
        display: flex;
        align-items: center;
        justify-content: space-between; 
    }

    button {
        background: none;
        border: none;
        color: ${props => props.theme.colors.text};
        font-size: 14px;
        font-family: 'Josefin Sans', sans-serif;
    }

    p {
        font-size: 14px;
        letter-spacing: 0.4;
    }
`;