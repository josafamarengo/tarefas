import styled from 'styled-components';

export const Container = styled.div`

    background-color: ${props => props.theme.colors.primary};
    padding: 20px;
    margin: 20px 0;
    display: flex;
    border-radius: 5px;
`;