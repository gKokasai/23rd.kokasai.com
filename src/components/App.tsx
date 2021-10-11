import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "./top/Top";
import Footer from "./common/Footer";
import Pages from "./Pages";
import Project from "./project/Project";
import Left from "./common/Left";

const App: React.FC = () => (
  <BrowserRouter>
    <div className="container h-full w-full font-serif bg-cream">
      <div className="flex flex-row h-full w-full">
        <div className="hidden pc:inline-block pc:h-full pc:w-1/4 ">
          <Left />
        </div>
        <div className="h-full w-3/4">
          <Switch>
            <Route exact path={Pages.top.path} component={Top} />
            <Route exact path={Pages.project.path} component={Project} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
