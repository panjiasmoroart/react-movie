import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./parts/Header";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import NotFound from "./pages/NotFound/";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movieId" component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
