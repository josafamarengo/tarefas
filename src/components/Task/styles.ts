import styled from 'styled-components';

export const Container = styled.div`
position: relative;
flex-grow: 0;
flex-shrink: 0;
flex-basis: 100%;
background: ${props => props.theme.colors.primary};
border-radius: 5px 5px 0 0;
border-bottom: 1px solid ${props => props.theme.colors.text};
display: flex;
padding: 10px;
align-items: center;

input {
  all: unset;
  position:relative;
  display: inline-block;
  border: 1px solid #eee;
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
  margin-left: 10px;
  cursor: pointer;
  }
button {
  position: absolute;
  right: 20px;
  background: transparent;
  border: 0;
  cursor: pointer;
  opacity: 0.5;
  line-height: 1;
  &:hover {
    opacity: 0.7;
  }
}
`;
