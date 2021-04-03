import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./parts/Header";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Home />
      </BrowserRouter>
    </>
  );
};
export default App;
