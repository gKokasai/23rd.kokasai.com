import React from "react";
import Card from "./Card";
import * as projectList from "../../../static/json/projectList.json";

// TODO: 企画一覧ページの作成
const Project: React.FC = () => (
  <div className="pt-10 pl-3">
    {Object.keys(projectList).map((key) => (
      <Card
        thumbnailImagePath="https://placehold.jp/150x150.png"
        name={projectList[key].name}
        description={projectList[key].description}
        gradeAndClass={key}
        place={projectList[key].place}
      />
    ))}
  </div>
);

export default Project;
