import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: ${props => props.theme.colors.primary};
  display: flex;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  align-items: center;
  box-shadow: ${props => props.theme.colors.shadow};

  input {
    all: unset;
    position:relative;
    display: inline-block;
    border-color: #fff;
    width:24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 10px;
    background: transparent;
    cursor:pointer;

    &:after {
      content: '';
    }

    
    &:checked {
      background: ${props => props.theme.colors.checked};
      &:after {
        content: '';
        position:absolute;
        width:12px;
        height:12px;
        left: calc(50% - 6px);
        top: calc(50% - 6px);
        border-radius:50%;
      }
    }
  }
  label {
    color: ${props => props.theme.colors.secondary};
    }
`;