import React from "react";
import Card from "./Card";
import { getProjectList, ProjectList } from "../../../../repository/Project";
import { GroupType } from "../../../../types/GroupType";

export type ProjectListProps = {
  filter?: GroupType;
};

let projectList: ProjectList = null;

const ProjectList: React.FC<ProjectListProps> = () => {
  if (projectList !== null) {
    return (
      <ul className="flex flex-wrap">
        {Object.keys(projectList)
          .filter((project) => project !== "default")
          .map((key) => (
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
  }
  // eslint-disable-next-line no-async-promise-executor
  throw new Promise(async (resolve) => {
    await getProjectList().then((response) => {
      projectList = response.data;
    });
    resolve(null);
  });
};

export default ProjectList;
