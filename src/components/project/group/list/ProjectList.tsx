import React from "react";
import Card from "./Card";
import { ProjectList } from "../../../../repository/Project";

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
      {filteredProjectList.map((key) => (
        <li key={key.name} className="w-1/3">
          <button
            type="button"
            onClick={() => onClickProject(key)}
            className="w-full pl-10 pt-5 pb-5"
          >
            <Card name={key.name} groupName={key.groupName} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
