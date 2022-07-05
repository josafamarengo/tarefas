import React, { useContext } from 'react';
import {Container} from './styles';
import {ThemeContext} from 'styled-components';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } =useContext(ThemeContext);

  const LightIcon = require('../../images/icon-sun.svg');
  const DarkIcon = require('../../images/icon-moon.svg');

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
