import React, { lazy, Suspense } from "react";
import Loading from "../../common/Loading";

const ProjectList = lazy(() => import("./list/ProjectList"));

const ProjectGroup: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <ProjectList />
  </Suspense>
);

export default ProjectGroup;
