import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Project from "./Project/Project";
import Access from "./Access/Access";
import BusInfo from "./BusInfo/BusInfo";
import Header from "./Header";

const App: FC = (): JSX.Element => {
  return (
    <div className="app">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/access" component={Access} />
            <Route path="/busInfo" component={BusInfo} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
