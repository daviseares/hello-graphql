import React from 'react';

import { ApolloProvider } from '@apollo/client';
import client from './services/api';
import GlobalStyle from './styles/global';

import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
    <GlobalStyle />
  </>
);

export default App;
