import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Project from "./Project/Project"

const App: FC = (): JSX.Element => {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/project" component={Project}/>
      </Router>
    </div>
  );
};

export default App;
