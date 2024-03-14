import React from "react";
import "./styles/App.css";
import { Route , Routes } from "react-router-dom";

// components
import Layout from "./components/layout/Layout";
import Homepage from "./components/home/Homepage";
import AuthorPage from "./components/authors/AuthorPage";
import ArticlePage from "./components/articles/ArticlePage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/articles/:slug' element={<ArticlePage />}/>
        <Route path='/authors/:slug' element={<AuthorPage />}/>
      </Routes>
    </Layout>
  );
};

export default App;
