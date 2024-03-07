import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ApolloClient , ApolloProvider , InMemoryCache } from '@apollo/client';

const client = new ApolloClient ({
  uri:'https://api-us-west-2.hygraph.com/v2/cltenla3j4d9d07uswiikc352/master',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

