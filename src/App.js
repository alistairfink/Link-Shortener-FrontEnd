import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main.js";
import LoadLink from "./LoadLink.js";

function App() {
  return (
    <Router basename={"/link"}>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/:id" component={LoadLink} />
      </div>
    </Router>
  );
}

export default App;
