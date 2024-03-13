import React from "react";
import styles from "./styles/App.module.css"

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
