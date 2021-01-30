import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Default from "./Default";

const App: FC = (): JSX.Element => {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Default}/>
      </Router>
    </div>
  );
};

export default App;
