import React, { useState } from "react";
import logo from './logo.svg';
import RestClient from "./RestClient.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main.js";
import LoadLink from "./LoadLink.js";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/:id" component={LoadLink} />
      </div>
    </Router>
  );
}

export default App;
