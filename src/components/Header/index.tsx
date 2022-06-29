import React, { useContext } from 'react';
import {Container} from './styles';
import {ThemeContext} from 'styled-components';
import LightIcon from '../../images/icon-sun.svg';
import DarkIcon from '../../images/icon-moon.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } =useContext(ThemeContext);

  return (
    <Container>
      <h1>TODO</h1>
      <i onClick={toggleTheme}>
        {title === 'light' ? <DarkIcon /> : <LightIcon />}
      </i>
    </Container>
  );
};

export default Header;
