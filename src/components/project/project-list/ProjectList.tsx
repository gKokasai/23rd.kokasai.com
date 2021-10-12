import React from "react";
import * as projectList from "../../../json/projectList.json";
import Card from "./Card";

const ProjectList: React.FC = () => (
  <div>
    {Object.keys(projectList)
      .filter((project) => project !== "default")
      .map((key) => (
        <li key={key}>
          <Card
            thumbnailImagePath="https://placehold.jp/150x150.png"
            name={projectList[key].name}
            description={projectList[key].description}
            gradeAndClass={key}
            place={projectList[key].place}
          />
        </li>
      ))}
  </div>
);

export default ProjectList;
