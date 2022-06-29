import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import BgDesktopDark from '../../images/bg-desktop-dark.jpg';
import BgDesktopLight from '../../images/bg-desktop-light.jpg';
import BgMobileDark from '../../images/bg-mobile-dark.jpg';
import BgMobileLight from '../../images/bg-mobile-light.jpg';

const Cover: React.FC = () => {
    const { title } = useContext(ThemeContext);
    
    return (
        <Container>
            <img src={title === 'light' ? BgDesktopLight : BgDesktopDark} alt="Background" />
        </Container>
    );
}

export default Cover;