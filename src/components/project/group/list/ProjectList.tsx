import React, { useEffect, useState } from "react";
import Card from "./Card";
import ProjectService from "../../../../service/Project";
import { ProjectList } from "../../../../repository/Project";

const ProjectList: React.FC = () => {
  const projectService = new ProjectService();
  const [projectList, setProjectList] = useState<ProjectList | undefined>(
    undefined
  );
  useEffect(() => {
    projectService.getProjectList().then((result) => {
      setProjectList(result);
    });
  });
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
};

export default ProjectList;
