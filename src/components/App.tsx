import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "./top/Top";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Pages from "./Pages";
import Project from "./project/Project";

const App: React.FC = () => (
  <BrowserRouter>
    <div className="container h-full w-full font-serif">
      <div className="flex flex-col h-full w-full">
        <div className="visible pc:hidden">
          <Header />
        </div>
        <div className="flex-grow min-h-screen h-full w-full">
          <Switch>
            <Route exact path={Pages.top.path} component={Top} />
            <Route exact path={Pages.project.path} component={Project} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
