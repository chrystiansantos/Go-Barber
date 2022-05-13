import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import Routes from './routes';

// import SignIn from './pages/signin';
// import SignUp from './pages/signUp';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;