import React from "react";
import Card from "./Card";
import { getProjectList } from "../../../../repository/Project";

let projectList = null;

const ProjectList: React.FC = () => {
  if (projectList !== null) {
    return (
      <ul>
        {Object.keys(projectList)
          .filter((project) => project !== "default")
          .map((key) => (
            <li className="" key={key}>
              <Card
                thumbnailImagePath="https://placehold.jp/150x150.png"
                name={projectList[key].name}
                description={projectList[key].description}
                gradeAndClass={key}
                place={projectList[key].place}
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
