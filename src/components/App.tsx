import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "./top/Top";
import Footer from "./common/Footer";
import Pages from "./Pages";
import Project from "./project/Project";
import Left from "./common/Left";

const App: React.FC = () => (
  <div className="bg-cream h-full w-full relative">
    <BrowserRouter>
      <div className="container h-full w-full font-serif bg-cream">
        <div className="h-full w-full">
          <div className="flex h-full pc:w-full">
            <div className="hidden pc:inline-block pc:h-screen pc:w-1/4">
              <Left />
            </div>
            <div className="h-full pc:w-3/4 pc:overflow-y-scroll">
              <Switch>
                <Route exact path={Pages.top.path} component={Top} />
                <Route exact path={Pages.project.path} component={Project} />
              </Switch>
              <div className="w-full">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
