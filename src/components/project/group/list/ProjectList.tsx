import React from "react";
import Card from "./Card";
import { ProjectList } from "../../../../repository/Project";

export type ProjectListProps = {
  projectList: ProjectList;
  selectedGroup: string[];
};

const ProjectList: React.FC<ProjectListProps> = (props) => {
  const { projectList, selectedGroup } = props;
  const filteredProjectList = projectList.filter(
    (project) => !!selectedGroup.find((group) => group === project.type)
  );
  return (
    <ul className="flex flex-wrap">
      {filteredProjectList.map((key) => (
        <li className="w-1/3 pl-10 pt-5 pb-5" key={key.name}>
          <Card
            thumbnailImagePath={`/img/thumbnail/${key.groupName}.webp`}
            name={key.name}
            groupName={key.groupName}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
