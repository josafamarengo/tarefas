import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/global'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import Header from '../components/Header'
import Cover from '../components/Cover'
import usePersistedState from '../utils/usePersitedState'

const App = () => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
    };
  return(
    <ThemeProvider theme={theme}>
      <div className="App">
        <Cover />
        <Header toggleTheme={toggleTheme} />
        <footer>
          <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://josafa.com.br" target="_blank">Josafá Marengo</a>.</p>
        </footer>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App