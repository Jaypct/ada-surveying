import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Layout from "./Layout/Layout";
import MoreServices from "./Components/MoreServices";
import ScrollToTopButton, { ScrollToTop } from "./Layout/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path="/more-services"
          element={
            <>
              <ScrollToTop />
              <MoreServices />
            </>
          }
        />
      </Routes>
      <ScrollToTopButton />
    </>
  );
};

export default App;
