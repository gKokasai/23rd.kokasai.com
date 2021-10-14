import React from "react";
import Card from "./Card";
import { ProjectList } from "../../../../repository/Project";

export type ProjectListProps = {
  projectList: ProjectList;
};

const ProjectList: React.FC<ProjectListProps> = (props) => {
  const { projectList } = props;
  return (
    <ul className="flex flex-wrap">
      {Object.keys(projectList).map((key) => (
        <li className="w-1/3 pl-10 pt-5 pb-5" key={key}>
          <Card
            thumbnailImagePath="https://placehold.jp/150x150.png"
            name={projectList[key].name}
            groupName={projectList[key].groupName}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
