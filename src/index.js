import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// MUI
import { ThemeProvider } from "@emotion/react";
import theme from "./MUI/theme";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cltenla3j4d9d07uswiikc352/master",
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
