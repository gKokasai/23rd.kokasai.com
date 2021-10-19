import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import { Project, ProjectList } from "../../repository/Project";
import { Pages } from "../Pages";
import compareGroupName from "../../utill/compareGroupName";

export type ProjectListProps = {
  projectList: ProjectList;
  selectedGroup: string[];
};

const ProjectList: React.FC<ProjectListProps> = (props) => {
  const { projectList, selectedGroup } = props;
  const history = useHistory();
  const filteredProjectList = projectList.filter(
    (project) => !!selectedGroup.find((group) => group === project.type)
  );
  const onClickProject = (key: Project) => {
    history.push(
      Pages.projectDetail.path(key.groupName),
      projectList.filter((project) => project.name === key.name)
    );
    window.scroll({ top: 0, behavior: "auto" });
  };
  return (
    <ul className="flex flex-wrap w-full">
      {filteredProjectList.sort(compareGroupName).map((key) => (
        <li
          key={key.name}
          className="flex flex-col justify-around w-1/2 pc:w-1/3 pl-10 pt-5 pb-5"
        >
          <button
            type="button"
            onClick={() => onClickProject(key)}
            className="w-full"
          >
            <Card name={key.name} groupName={key.groupName} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
