import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './utils/ThemeContext';
import { GlobalStyle } from './utils/globalStyle';
import ViewportWidthProvider from './utils/getViewport';

import Home from './pages/home/home';

function App() {

  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <ViewportWidthProvider>
          <Home />
        </ViewportWidthProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
