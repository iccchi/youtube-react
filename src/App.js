import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Search } from "./pages/Search";
import { Top } from "./pages/Top";
import { Watch } from "./pages/Watch";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/search" component={Search} />
        <Route path="/watch" component={Watch} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
