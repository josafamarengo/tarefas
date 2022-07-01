import React, { useContext } from 'react';

/* useWindowDimensions é um hook que retorna a largura da tela do usuário */
import useWindowDimensions from '../../utils/useWindowDimensions';

import { Container } from './styles';
import { ThemeContext } from 'styled-components';

import BgDesktopDark from '../../images/bg-desktop-dark.jpg';
import BgDesktopLight from '../../images/bg-desktop-light.jpg';
import BgMobileDark from '../../images/bg-mobile-dark.jpg';
import BgMobileLight from '../../images/bg-mobile-light.jpg';

const Cover: React.FC = () => {
    const { title } = useContext(ThemeContext);

    const { width } = useWindowDimensions();
    
    return (
        <Container>
            <div>
                {width > 768 ? (<img src={title === 'light' ? BgDesktopLight : BgDesktopDark} alt="Background" /> ) : (<img src={title === 'light' ? BgMobileLight : BgMobileDark} alt="Background" /> )}
            </div>
        </Container>
    );
}

export default Cover;