import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Pages } from "./Pages";
import Left from "./common/Left";
import Footer from "./common/Footer";
import Loading from "./common/Loading";

const Top = lazy(() => import("./top/Top"));
const Project = lazy(() => import("./project/Project"));
const ProjectMap = lazy(() => import("./project/map/ProjectMap"));
const ProjectGroup = lazy(() => import("./project/group/ProjectGroup"));

const App: React.FC = () => (
  <div className="bg-cream h-full w-full relative">
    <BrowserRouter>
      <Switch>
        <div className="container h-full w-full font-serif bg-cream">
          <div className="h-full w-full">
            <div className="flex h-full pc:w-full">
              <div className="hidden pc:inline-block pc:h-screen pc:w-1/4">
                <Left />
              </div>
              <div className="h-full pc:w-3/4 pc:overflow-y-scroll">
                <Suspense fallback={<Loading />}>
                  <Route exact path={Pages.top.path} component={Top} />
                </Suspense>
                <Suspense fallback={<Loading />}>
                  <Route exact path={Pages.project.path} component={Project} />
                </Suspense>
                <Suspense fallback={<Loading />}>
                  <Route
                    exact
                    path={Pages.projectGroup.path}
                    component={ProjectGroup}
                  />
                </Suspense>
                <Suspense fallback={<Loading />}>
                  <Route
                    exact
                    path={Pages.projectMap.path}
                    component={ProjectMap}
                  />
                </Suspense>
                <div className="w-full">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
