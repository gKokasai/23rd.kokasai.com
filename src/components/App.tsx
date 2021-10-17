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
const ProjectDetail = lazy(() => import("./project/detail/ProjectDetail"));

const App: React.FC = () => (
  <div className="bg-cream h-full w-full relative">
    <BrowserRouter>
      <div className="container h-full w-full font-serif bg-cream">
        <div className="h-full w-full">
          <div className="flex h-full pc:w-full">
            <div className="hidden pc:inline-block pc:h-screen pc:w-1/4">
              <Left />
            </div>
            <div className="h-full w-full pc:w-3/4 pc:overflow-y-scroll">
              <Suspense fallback={Loading}>
                <Switch>
                  <Route exact path={Pages.top.path} component={Top} />
                  <Route exact path={Pages.project.path} component={Project} />
                  <Route
                    exact
                    path={Pages.projectGroup.path}
                    component={ProjectGroup}
                  />
                  <Route
                    exact
                    path={Pages.projectMap.path}
                    component={ProjectMap}
                  />
                  <Route
                    exact
                    path={Pages.projectDetail.path(":groupName")}
                    component={ProjectDetail}
                  />
                </Switch>
              </Suspense>
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
