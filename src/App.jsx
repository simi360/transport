import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './utils/ThemeContext';
import { GlobalStyle } from './utils/globalStyle';
import ViewportWidthProvider from './utils/getViewport';
import { Routes, Route } from 'react-router-dom';

import Nav from './Components/nav/nav';
import Home from './pages/home/home';
import ContactUs from './pages/contact-us/contact-us';
import About from './pages/About/about';
import Services from './pages/Services/services';

function App() {

  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <ViewportWidthProvider>
          <Routes>
            <Route path='/' element={<Nav/>}>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<ContactUs />} />
            </Route>
          </Routes>
        </ViewportWidthProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default App;

// <Routes>
// <Route path='/' element={<Navigation />}>
//   <Route index element={<Home />} />
//   <Route path='shop/*' element={<Shop />} />
//   <Route path='auth' element={<Authentication />} />
//   <Route path='checkout' element={<Checkout />} />
// </Route>
// </Routes>