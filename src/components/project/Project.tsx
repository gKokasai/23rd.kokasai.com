import React from "react";
import ProjectList from "./project-list/ProjectList";

// TODO: 企画一覧ページの作成
const Project: React.FC = () => (
  <ul>
    <div className="pt-2 pl-10">
      <ProjectList />
    </div>
  </ul>
);

export default Project;
