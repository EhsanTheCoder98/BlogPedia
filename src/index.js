import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// MUI
import { ThemeProvider } from "@emotion/react";
import theme from "./MUI/theme";

const client = new ApolloClient({
  uri: process.env.REACT_APP_HYPERGRAPH_URI ,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
