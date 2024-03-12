import React from "react";
import styles from "./styles/App.module.css"

// components
import Header from "./components/layout/Header";
import Homepage from "./components/home/Homepage";

const App = () => {
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
};

export default App;
