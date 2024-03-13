import React from "react";
import "./styles/App.css";

// components
import Layout from "./components/layout/Layout";
import Homepage from "./components/home/Homepage";

const App = () => {
  return (
    <Layout>
      <Homepage />
    </Layout>
  );
};

export default App;
